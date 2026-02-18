# Tasks

The Tasks section in Enginy gives you a centralized view of every action item linked to your campaigns and contacts. Use it to review pending work, track completed activities, add notes, and mark tasks as done.

---

# Table of Contents

- [Core Concepts](#core-concepts)
- [Page Layout](#page-layout)
  - [Pending Tab](#pending-tab)
  - [Completed Tab](#completed-tab)
- [Task List](#task-list)
  - [Columns Reference](#columns-reference)
  - [Task Naming Convention](#task-naming-convention)
  - [Row-Level Actions](#row-level-actions)
- [Filter and Sort Tasks](#filter-and-sort-tasks)
  - [Filter by Campaign](#filter-by-campaign)
  - [Filter by Owner](#filter-by-owner)
  - [Sort Tasks](#sort-tasks)
- [Task Details Panel](#task-details-panel)
  - [Open the Task Details Panel](#open-the-task-details-panel)
  - [Fields Reference](#fields-reference)
  - [Add a Note](#add-a-note)
  - [Complete a Task](#complete-a-task)
- [FAQs](#faqs)
    - [Q1: How do I complete a task?](#q1-how-do-i-complete-a-task)
    - [Q2: What is the difference between the Pending and Completed tabs?](#q2-what-is-the-difference-between-the-pending-and-completed-tabs)
    - [Q3: Can I filter tasks by campaign or owner?](#q3-can-i-filter-tasks-by-campaign-or-owner)
    - [Q4: What do the task type prefixes (TODO, CALL, EMAIL) mean?](#q4-what-do-the-task-type-prefixes-todo-call-email-mean)
    - [Q5: How are timestamps displayed?](#q5-how-are-timestamps-displayed)

---

# Core Concepts

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Term</p></td><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Definition</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Task</b></p></td><td><p class="intercom-align-justify no-margin">An individual action item linked to a contact and a campaign, such as making a call, sending an email, or completing a to-do.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Type</b></p></td><td><p class="intercom-align-justify no-margin">The category of a task. Current types are <b>TODO</b>, <b>CALL</b>, and <b>EMAIL</b>.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Status</b></p></td><td><p class="intercom-align-justify no-margin">The current state of a task: <b>Pending</b> (not yet done) or <b>Completed</b> (finished).</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Owner</b></p></td><td><p class="intercom-align-justify no-margin">The team member responsible for completing the task.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Campaign</b></p></td><td><p class="intercom-align-justify no-margin">The campaign that generated or is associated with the task.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Source</b></p></td><td><p class="intercom-align-justify no-margin">The origin of the task as displayed in the task list, typically showing the campaign name.</p></td></tr></tbody></table>

---

# Page Layout

To open Tasks, navigate to Tasks in Enginy. The page title **Tasks** appears at the top, followed by two tabs: **Pending** and **Completed**.

## Pending Tab

The **Pending** tab displays all tasks that have not yet been completed. Every row in this view shows a **Pending** status badge in orange.

## Completed Tab

The **Completed** tab displays all tasks that have been finished. Every row in this view shows a **Completed** status badge in green. This tab includes an additional **Completed** column (not present in the Pending tab) that shows when each task was completed.

![](images/tasks-1.png)

![](images/tasks-2.png)

---

# Task List

Tasks are displayed in the inbox conversations but also in this Task Manager section in a table format to have an easier control. The visible columns differ slightly depending on which tab is active.

## Columns Reference

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Description</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Task</b></p></td><td><p class="intercom-align-justify no-margin">The full task label, composed of a type prefix and a title (see Task Naming Convention).</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Notes</b></p></td><td><p class="intercom-align-justify no-margin">A short note attached to the task. Displays <b>-</b> when no note has been added.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Contact</b></p></td><td><p class="intercom-align-justify no-margin">The contact associated with the task. Shown with a colored avatar icon and the contact's name.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Source</b></p></td><td><p class="intercom-align-justify no-margin">The campaign or source that generated the task. Long names may appear truncated.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Created</b></p></td><td><p class="intercom-align-justify no-margin">When the task was created, displayed in relative time format (e.g., "4 hours ago", "3 weeks ago").</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Completed</b></p></td><td><p class="intercom-align-justify no-margin">When the task was completed, displayed in relative time format (e.g., "4 hours ago", "1 week ago"). Only in the Completed tab.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Status</b></p></td><td><p class="intercom-align-justify no-margin">The current status of the task, shown as a colored badge: <b>Pending</b> (orange) or <b>Completed</b> (green).</p></td></tr></tbody></table>

## Task Naming Convention

Each task label in the **Task** column follows a consistent format:

**TYPE · Title**

Where:

-   **TYPE** is a prefix indicating the kind of action:
    
    -   **TODO** — A general to-do item (e.g., "TODO - Call Valentina (LinkedIn Not Accepted)").
        
    -   **CALL** — A phone-call task (e.g., "CALL · Cold Call").
        
    -   **EMAIL** — An email-related task (e.g., "EMAIL · Some title").
        
-   **Title** is the descriptive name of the task.
    

## Row-Level Actions

Each row in the task list provides the following interactive elements:

-   **Selection checkbox** — Located on the left side of each row, allowing you to select individual tasks.
    
-   **Clickable row** — Each row features a chevron (arrow indicator) on the right side. Clicking a row opens the Task Details Panel.
    

---

# Filter and Sort Tasks

A toolbar above the task list provides three controls: **Campaign**, **Owner**, and **Sort**. These controls are available on both the Pending and Completed tabs.

## Filter by Campaign

1.  Click the **Campaign** button in the toolbar.
    
2.  Select one or more campaigns from the scrollable list.
    

The task list updates to show only tasks associated with the selected campaign.

## Filter by Owner

1.  Click the **Owner** button in the toolbar.
    
2.  Use the **Search…** text field at the top of the dropdown to narrow the list by name or email.
    
3.  Select a team member from the scrollable list. Each entry displays a colored avatar, the member's name, and their email address.
    

The task list updates to show only tasks assigned to the selected owner.

## Sort Tasks

Click the **Sort** button in the toolbar and select one of the following options:

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Sort Option</p></td><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Behavior</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Newest first</b></p></td><td><p class="intercom-align-justify no-margin">Displays the most recently created tasks at the top.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Oldest first</b></p></td><td><p class="intercom-align-justify no-margin">Displays the earliest created tasks at the top.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Recently completed (Completed tab)</b></p></td><td><p class="intercom-align-justify no-margin">Displays the most recently completed tasks at the top.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>First completed (Completed tab)</b></p></td><td><p class="intercom-align-justify no-margin">Displays the earliest completed tasks at the top.</p></td></tr></tbody></table>

**Tip:** The **Recently completed** and **First completed** sort options are most useful when viewing the Completed tab.

---

# Task Details Panel

The task details panel is a side drawer that appears on the right side of the page, providing a full breakdown of a single task.

## Open the Task Details Panel

1.  Click any row in the task list.
    
2.  The details panel slides open on the right side of the page.
    

To close the panel, click the **X** button in the top-right corner.

## Fields Reference

The following fields are displayed in the task details panel. Some fields appear only under certain conditions.

<table role="presentation"><tbody><tr><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Field</p></td><td style="background-color: #d7efdc80;"><p class="intercom-align-justify no-margin">Description</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Status</b></p></td><td><p class="intercom-align-justify no-margin">The current status of the task, shown as a colored badge: <b>Pending</b> (orange) or <b>Completed</b> (green).</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Title</b></p></td><td><p class="intercom-align-justify no-margin">The descriptive name of the task (without the type prefix).</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Type</b></p></td><td><p class="intercom-align-justify no-margin">The task type (e.g., <b>TODO</b>, <b>CALL</b>, <b>EMAIL</b>).</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Contact</b></p></td><td><p class="intercom-align-justify no-margin">The contact associated with the task, displayed with a colored avatar and the contact's full name.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Campaign</b></p></td><td><p class="intercom-align-justify no-margin">The campaign that generated or is associated with the task.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Owner</b></p></td><td><p class="intercom-align-justify no-margin">The team member assigned to the task, displayed with a colored avatar and their name.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Created</b></p></td><td><p class="intercom-align-justify no-margin">When the task was created, in relative time format (e.g., "about 4 hours ago").</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Completed</b></p></td><td><p class="intercom-align-justify no-margin">When the task was completed, in relative time format (e.g., "about 4 hours ago").</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Description</b></p></td><td><p class="intercom-align-justify no-margin">A free-text description field for additional context about the task.</p></td></tr><tr><td><p class="intercom-align-justify no-margin"><b>Notes</b></p></td><td><p class="intercom-align-justify no-margin">A text input area for adding notes to the task.</p></td></tr></tbody></table>

## Add a Note

1.  Open the task details panel by clicking a task row.
    
2.  Scroll to the **Notes** field at the bottom of the panel.
    
3.  Click the field (it displays the placeholder text **Add a note…** when empty).
    
4.  Type your note.
    

## Complete a Task

1.  Click the task row in the **Pending** tab to open the task details panel.
    
2.  Click the **Complete** button at the bottom-right corner of the panel.
    

**Note:** The **Complete** button includes a small dropdown chevron beside it, which provide an additional option: Complete & Pause (campaign sequence for the lead).

Once completed, the task automatically moves from the **Pending** tab to the **Completed** tab and its status changes from **Pending** (orange) to **Completed** (green).

**Important:** The **Complete** button is only available for tasks with a **Pending** status. Tasks already marked as **Completed** do not display this button.

---

# FAQs

### Q1: How do I complete a task?

Click the task row to open the task details panel, then click the green **Complete** button at the bottom-right of the panel. The task will move from the Pending tab to the Completed tab.

### Q2: What is the difference between the Pending and Completed tabs?

The **Pending** tab shows all tasks that still need to be done. The **Completed** tab shows all finished tasks and includes an additional **Completed** column indicating when each task was marked as done.

### Q3: Can I filter tasks by campaign or owner?

Yes. Use the **Campaign** and **Owner** filter buttons in the toolbar above the task list. Both filters include a search field so you can quickly find a specific campaign or team member.

### Q4: What do the task type prefixes (TODO, CALL, EMAIL) mean?

Each task is labeled with a type that indicates the action required: **TODO** for general action items, **CALL** for phone calls, and **EMAIL** for email-related tasks.

### Q5: How are timestamps displayed?

All timestamps in the Tasks section use a relative format, such as "4 hours ago", "about 4 hours ago", "1 week ago", or "in 9 days" (for due dates in the future).
