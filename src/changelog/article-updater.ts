import * as fs from 'fs';
import * as path from 'path';
import { LLMClient } from './llm';
import { ChangeBrief, ArticleUpdateResult } from './types';

// ─── Orquestador de reescritura de artículos ─────────────────

/**
 * Prompt de sistema basado en prompts/article-merge.md.
 * Adaptado para recibir un change brief en vez de un artículo NEW completo.
 */
const SYSTEM_PROMPT = `You are a senior SaaS Help Center Information Architect and Technical Writer.

## Goal
Update an existing Help Center article by incorporating the changes described in a "change brief".
The change brief is NOT a full article — it is a structured description of what changed in the product.

## Constraints
- Do NOT summarize or omit existing information. Preserve all unique details from the original article.
- Integrate the changes naturally into the existing article structure.
- If a change modifies an existing section, update that section in place.
- If a change adds new functionality, add it in the most logical location within the article.
- If a change removes functionality, remove the relevant sections but keep related context if still useful.
- Keep technical accuracy. Explain in clear, user-friendly English for non-technical users.
- Professional tone. No emojis.
- Output must be Markdown and entirely in English.
- Images will be added later: do not reference missing images.
- Maintain the existing Table of Contents structure, updating it to reflect any new/changed/removed sections.
- Preserve all existing callouts (> **Note:**, > **Tip:**, etc.) unless they contradict the changes.

## Source-of-truth rule
Changes from the brief OVERRIDE existing content where they conflict.
However, do NOT discard existing details that remain relevant and don't contradict the changes.

## Required Output
Output ONLY the complete updated article in Markdown. No preamble, no explanations, no code fences around the article.

## Quality Checklist (must pass)
- Every unique fact from the original article appears (unless contradicted by a change).
- All changes from the brief are integrated.
- Steps are complete and runnable by a non-technical user.
- TOC anchors match headings.
- Callouts are used where important notes/warnings/tips exist.`;

/**
 * Actualiza un artículo aplicando uno o varios change briefs.
 *
 * @param articleFile - Nombre del fichero .md (ej: "campaigns.md")
 * @param briefs - Change briefs a aplicar
 * @param articlesPath - Ruta absoluta al directorio articles/
 * @param llm - Cliente LLM
 * @param dryRun - Si true, no escribe el fichero
 * @returns Resultado de la actualización
 */
export async function updateArticle(
  articleFile: string,
  briefs: ChangeBrief[],
  articlesPath: string,
  llm: LLMClient,
  dryRun: boolean
): Promise<ArticleUpdateResult> {
  const filePath = path.join(articlesPath, articleFile);

  try {
    // Leer contenido actual
    if (!fs.existsSync(filePath)) {
      return {
        articleFile,
        updated: false,
        briefsApplied: 0,
        error: `Fichero no encontrado: ${filePath}`,
      };
    }

    const currentContent = fs.readFileSync(filePath, 'utf-8');

    if (!currentContent.trim()) {
      return {
        articleFile,
        updated: false,
        briefsApplied: 0,
        error: 'Artículo vacío',
      };
    }

    // Consolidar todos los briefs en un solo bloque de cambios
    const consolidatedBrief = briefs
      .map(b => b.changes)
      .join('\n\n---\n\n');

    const prReferences = briefs
      .map(b => b.prTitle)
      .join('\n');

    console.log(`[updater] Reescribiendo ${articleFile} con ${briefs.length} brief(s)...`);

    const userPrompt = `## Current article content

${currentContent}

## Change brief (changes to integrate)

${consolidatedBrief}

## PR references

${prReferences}`;

    const updatedContent = await llm.call({
      systemPrompt: SYSTEM_PROMPT,
      userPrompt,
      temperature: 0.2, // Bajo para mantener fidelidad al original
      maxTokens: 8000,
    });

    if (!updatedContent.trim()) {
      return {
        articleFile,
        updated: false,
        briefsApplied: briefs.length,
        error: 'LLM retornó contenido vacío',
      };
    }

    // Validación básica: el artículo actualizado debe tener al menos un heading
    if (!updatedContent.includes('# ')) {
      return {
        articleFile,
        updated: false,
        briefsApplied: briefs.length,
        error: 'Artículo actualizado no contiene headings — posible error del LLM',
      };
    }

    if (dryRun) {
      console.log(`  [dry-run] ${articleFile}: se actualizaría (${briefs.length} briefs)`);
      return {
        articleFile,
        updated: false, // No se escribió realmente
        briefsApplied: briefs.length,
      };
    }

    // Escribir el artículo actualizado
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`  [ok] ${articleFile} actualizado`);

    return {
      articleFile,
      updated: true,
      briefsApplied: briefs.length,
    };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error(`  [error] ${articleFile}: ${msg}`);
    return {
      articleFile,
      updated: false,
      briefsApplied: 0,
      error: msg,
    };
  }
}
