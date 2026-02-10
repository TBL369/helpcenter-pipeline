import OpenAI from 'openai';

// ─── Cliente LLM (OpenAI-compatible) ─────────────────────────

/** Opciones para crear el cliente LLM */
interface LLMClientOptions {
  apiKey: string;
  model: string;
  baseUrl?: string;
}

/** Opciones para una llamada al LLM */
interface LLMCallOptions {
  systemPrompt: string;
  userPrompt: string;
  /** Si true, intenta parsear la respuesta como JSON */
  expectJson?: boolean;
  /** Temperatura (0 = determinista, 1 = creativo). Default: 0.3 */
  temperature?: number;
  /** Máximo de tokens en la respuesta */
  maxTokens?: number;
}

export class LLMClient {
  private client: OpenAI;
  private model: string;

  constructor(options: LLMClientOptions) {
    this.client = new OpenAI({
      apiKey: options.apiKey,
      ...(options.baseUrl ? { baseURL: options.baseUrl } : {}),
    });
    this.model = options.model;
  }

  /**
   * Envía un prompt al LLM y retorna la respuesta como string.
   * Maneja reintentos básicos para errores transitorios.
   */
  async call(options: LLMCallOptions): Promise<string> {
    const maxRetries = 2;
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await this.client.chat.completions.create({
          model: this.model,
          messages: [
            { role: 'system', content: options.systemPrompt },
            { role: 'user', content: options.userPrompt },
          ],
          temperature: options.temperature ?? 0.3,
          ...(options.maxTokens ? { max_tokens: options.maxTokens } : {}),
          ...(options.expectJson ? { response_format: { type: 'json_object' } } : {}),
        });

        const content = response.choices[0]?.message?.content;
        if (!content) {
          throw new Error('Respuesta vacía del LLM');
        }

        return content;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));

        // No reintentar errores de autenticación o cuota
        if (isNonRetryableError(error)) {
          throw lastError;
        }

        if (attempt < maxRetries) {
          const waitMs = 1000 * (attempt + 1);
          console.warn(`[llm] Intento ${attempt + 1} falló, reintentando en ${waitMs}ms...`);
          await sleep(waitMs);
        }
      }
    }

    throw lastError ?? new Error('Error desconocido en LLM');
  }

  /**
   * Envía un prompt y parsea la respuesta como JSON.
   * Lanza error si el JSON es inválido.
   */
  async callJson<T>(options: LLMCallOptions): Promise<T> {
    const raw = await this.call({ ...options, expectJson: true });

    try {
      return JSON.parse(raw) as T;
    } catch {
      // Intentar extraer JSON de la respuesta (a veces viene con texto alrededor)
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]) as T;
      }
      throw new Error(`Respuesta del LLM no es JSON válido: ${raw.substring(0, 200)}`);
    }
  }
}

// ─── Helpers ─────────────────────────────────────────────────

function isNonRetryableError(error: unknown): boolean {
  if (error instanceof OpenAI.APIError) {
    // 401 Unauthorized, 403 Forbidden, 429 Rate limit
    return error.status === 401 || error.status === 403;
  }
  return false;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
