# Agent Writing Playbook (POS X1 Manual)

This is the canonical writing guide for all agents editing this repository.

## 1) Objective

Write for end users of POS X1:

- front-line cashiers
- shift managers
- restaurant owners

The manual is operational training, not developer documentation.

## 2) Voice and Tone

- Use plain, direct language.
- Write action-first steps.
- Use "you" statements.
- Explain what to do and what to expect.

Do:

- "Tap `Checkout`."
- "You should see `Amount` and `Unpaid`."

Do not:

- Explain internals users cannot act on.
- Use engineering terms without plain explanation.

## 3) Manual Structure Principle

Every topic should support at least one of these user paths:

1. Shift flow (`Start Here` / `Run a Shift`)
2. Screen context (`Screen Guides`)
3. Single action lookup (`Function Guides`)

Do not create isolated function pages without linking them from the screen where users find that action.

## 4) Page Templates

### A) Workflow page (example: start shift, checkout flow)

Use this section order:

1. `Who this is for`
2. `Before you start`
3. `Steps`
4. `What you should see`
5. `If something goes wrong`
6. `When to ask manager/admin`

### B) Screen guide page (example: Online Orders, Inventory)

Use this section order:

1. `Who this is for`
2. `Before you start`
3. `What this screen is for`
4. `Main views` or `Main sections`
5. `Steps`
6. `What you should see`
7. `If something goes wrong`
8. `When to ask manager/admin`

### C) Function guide page (example: Change Table)

Use this section order:

1. `Who this is for`
2. `Before you start`
3. `Steps`
4. `What you should see`
5. `If something goes wrong`
6. `When to ask manager/admin`

Always include where the function is accessed (for example function menu, checkout tab, completed-order panel).

## 5) Step Writing Rules

- One user action per numbered step.
- Start with verbs: `Tap`, `Select`, `Enter`, `Confirm`, `Open`.
- Keep real UI order.
- Use exact on-screen labels in backticks.
- After critical steps, state expected result.

## 6) Docusaurus Components Rules

Use `Admonitions` for meaning:

- `:::info` context or role
- `:::note` clarification
- `:::tip` best practice
- `:::warning` recoverable risk
- `:::danger` irreversible/high-risk action

Use `Tabs` only when there are truly different valid paths, such as:

- Dine-In vs Takeaway
- Day-end current day vs selected day
- With roster vs without roster

Do not use tabs for decorative formatting.

## 7) UI Label and Fact Accuracy

- Verify labels from source code and/or screenshots.
- Do not invent behavior.
- If uncertain, add `Screenshot pending` or `TODO` note with explicit gap.

## 8) Screenshot Policy

- Prefer one screenshot per critical step/state.
- If missing, add explicit `Screenshot pending: <filename>.png`.
- Keep pending items synchronized in `SCREENSHOT_PREP_LIST_EN.md`.
- Remove fulfilled screenshot requests from the pending list.
- Mandatory: when you add/change/remove a screenshot need in docs, update `SCREENSHOT_PREP_LIST_EN.md` in the same change.

## 9) Role and Escalation Language

- Mark restricted operations with `Manager only` when applicable.
- Provide cashier-safe fallback.
- Add escalation boundaries:
  - when user can retry
  - when to stop retrying
  - when to escalate

## 10) Linkage Rules

- Workflow pages must link to detailed function guides where relevant.
- Function pages must be grouped by screen context in sidebar.
- Function/index pages must contain clickable links, not plain code IDs.

## 11) Quality Gate (Definition of Done)

A page is considered done only if:

- A new cashier can execute it without verbal coaching.
- The page uses exact UI labels.
- Escalation boundaries are explicit.
- Related guides are linked.
- Screenshot state is explicit (embedded or pending filename).

## 12) Final Validation Before Handover

1. Run `npm run build`.
2. Check sidebar visibility for new pages.
3. Verify links are clickable.
4. Update `SCREENSHOT_PREP_LIST_EN.md` pending-only list.
