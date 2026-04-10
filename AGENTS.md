# AGENTS.md

## Project Goal
Build and maintain the online user manual for **POS X1** using Docusaurus.

## Product Scope
- Product behavior may be verified against companion application codebases when access is available.
- Do not commit local machine paths, private repository URLs, or environment-specific internal references.

## Documentation Structure
- `docs/getting-started/`: onboarding, login, roles, navigation
- `docs/client/`: cashier and store operations in POS app (current priority)
- `docs/hq/`: admin and back-office workflows (WIP)
- `docs/reference/`: glossary, troubleshooting, FAQ-style pages

## Languages
- `en` (default)
- `zh-HK`
- `zh-CN`

## Writing Rules
- Mandatory reference for all documentation work: `AGENT_WRITING_PLAYBOOK.md`
- All agents must follow `AGENT_WRITING_PLAYBOOK.md` before creating or updating any manual page.
- Audience: non-technical store operators and back-office admins.
- Use short imperative steps (`1.`, `2.`, `3.`) for procedures.
- Keep one task per page whenever possible.
- Add explicit prerequisites at the top of operational pages.
- Use real UI labels from product code (avoid paraphrased button names).
- Prefer screenshots/GIFs under `static/img/` with stable names.
- During release updates, treat the latest released app behavior as baseline documentation behavior.

### Version-Note Lifecycle Rule (Must Follow)
- Temporary version callouts in operational pages (for example `v1.6.6+`) are allowed only for newly introduced behavior.
- On later releases, if that behavior is now normal baseline, remove the version-specific label and merge the content into standard instructions.
- Keep release history in `docs/reference/version-notes.md`, not in long-lived operational callouts.
- Only keep version-scoped notes inside operational pages when multiple active app versions are intentionally supported at the same time.

### Baseline Merge Rule For New Releases (Must Follow)
- On every new app release, review operational pages for old version-specific info boxes/callouts.
- If the noted behavior is now standard in the latest release baseline, remove the version label and merge that guidance into the normal page steps/content.
- Do not keep outdated version labels in long-lived operational instructions.
- Keep release history and version timing details only in `docs/reference/version-notes.md`.

### Release Update Checklist (Must Follow)
1. Review release notes and source diff for user-visible changes only.
2. Update operational pages to latest baseline behavior.
3. Convert older version-tagged info boxes into normal instructions when no longer new.
4. Keep date/version history only in `docs/reference/version-notes.md`.
5. Search for stale version tags (`vX.Y.Z`, `vX.Y+`) and remove from operational docs unless explicitly needed for mixed-version operations.
6. If screenshots are newly required, update `SCREENSHOT_PREP_LIST_EN.md` in the same change.

## User-First Writing Standard (Must Follow)

### Primary Readers
- Front-line cashier/staff using POS during service hours.
- Shift manager handling exceptions and day-end.
- Restaurant owner reviewing operations and controls.

### Tone and Voice
- Write like an operations trainer, not an engineer.
- Use plain language and short sentences.
- Explain what to tap/click and what result to expect.
- Prefer "you" statements: "Tap `Checkout`", "You will see...".

### Avoid Developer-Centric Language
- Do not use implementation terms unless unavoidable (`API`, `payload`, `state`, `gateway callback`).
- If a technical term is required, add a plain explanation in the same sentence.
- Do not describe internals that users cannot act on.

### Page Format Template
Each operational page should follow this order:
1. `Who this is for`
2. `Before you start`
3. `Steps`
4. `What you should see`
5. `If something goes wrong`
6. `When to ask manager/admin`

### Step Quality Rules
- One action per step.
- Start every step with a verb (`Tap`, `Select`, `Enter`, `Confirm`).
- Use exact on-screen labels in backticks.
- Keep steps in real screen order.
- Include expected outcome after key actions.

### Screenshot Rules
- Every critical step should have at least one screenshot.
- Add a short caption: what screen this is and why it matters.
- If screenshot is missing, add `Screenshot pending` marker and continue writing.

### Role Clarity Rules
- Mark manager-only actions clearly with `Manager only`.
- Provide cashier-safe fallback if a step needs manager approval.

### Definition of Done (User Manual Quality Gate)
A page is done only when:
- A new cashier can execute the task without verbal explanation.
- No step requires developer knowledge.
- Error handling includes clear escalation boundary.
- UI labels in doc match screenshot labels exactly.

## Contribution Workflow
1. Start dev server: `npm start`
2. Edit docs/components/config
3. Validate: `npm run build`
4. Commit with clear scope in message (for example: `docs(client): add end-of-day flow`)

## Guardrails for Agents
- Do not invent product behavior that cannot be confirmed from source repos.
- If a flow is uncertain, create a `TODO` note and ask maintainers to confirm.
- Keep navigation labels and file naming consistent with existing sections.
- Avoid changing Docusaurus config unless needed for site behavior.
- For non-English locales, keep document IDs/paths aligned with English originals.
- Keep translated docs under `i18n/<locale>/docusaurus-plugin-content-docs/current/`.
- If you add or change any `Screenshot pending` note in docs, you must update `SCREENSHOT_PREP_LIST_EN.md` in the same commit/change.
