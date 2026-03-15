---
sidebar_position: 4
title: Version Notes
---

This page tracks manual changes by release/update batch.

## 2026-03-15 (v1.7.5 Review)

### Reviewed

- Checked `v1.7.5` release notes and source diff for user-facing changes.
- Re-checked dialog-driven workflows that use popup titles, input prompts, selection lists, date/time pickers, loading dialogs, and the paged `Select Function` dialog.

### Outcome

- No operational instruction changes were required for this release.
- No UI labels, button names, or user steps changed from the `v1.7.4` baseline.
- Existing screenshots and pending screenshot requests remain valid for documentation purposes.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-13 (v1.7.4 Alignment)

### Updated

- `Sales Flow`: documented paged `Select Function` behavior, added `Order Remark`, and clarified where the saved order remark appears for editing.
- `Checkout and Payments`: documented paged `Payment Methods` selection from `More` and current `Payment Remark` / `Deposit Remark` entry points.
- Function-menu guides (`Apply Discount`, `Apply Service Charge`, `Member Login`, `Split or Merge Transaction`, `To Dine-In or To Takeaway`, `Void vs Return`, `Refunds and Voids`): updated entry steps to match the paged `Select Function` dialog.
- `Change Table`: documented the selector dialog toggle between `Table List` and `Floor Plan`, plus `Show Split` / `Hide Split` behavior.
- `Function and Feature Map`: updated ordering and checkout scope for selector pagination and remark flows.

### Screenshot updates

- Added pending captures for function selector pagination, order remark display/edit, checkout payment remark edit button, and change-table dialog view toggle.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-10 (v1.7.3 Alignment)

### Updated

- `Settings`: expanded to cover current section layout (`General`, `Operation`, `System`, `Printing`, `Third Party Platform`, `ODO`, `Report`), restore-from-backup flow, print language override in `Printing` -> `Template`, and mapped/enabled filtering behavior.
- `Function and Feature Map`: updated `Settings` scope to include restore action, print language override, enabled-only integrations list, and mapped-only ODO channel mapping list.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-06 (v1.7.2 Alignment)

### Updated

- `Settings`: added `System` -> `Number` guidance for `Rounding Method`, `Decimal Places`, and `Round For Cash Only`.
- `Checkout and Payments`: clarified cash-only rounding behavior and expected real-time refresh of `Rounding` totals during checkout changes.
- `Payment Errors and Retry`: clarified expected table unlock behavior when leaving checkout through back/navigation and added cash-only rounding rule context.

### Writing cleanup

- Re-checked operational pages for stale version-specific info boxes; no additional old version callouts required conversion in this release batch.

## 2026-03-05 (v1.7.1 Alignment)

### Updated

- `Settings`: documented redesigned language configuration layout and task flows.
- `Access and Navigation` + `Sign In`: added login quick language switch guidance.
- `Sales Flow`: clarified item names follow selected language and item mapping (`Main` / `Alt`).
- `Function and Feature Map` + `Terminology`: added language/item-mapping/quick-switch references.

### Writing cleanup

- Re-checked operational pages for stale version-specific notice boxes and kept release history only in this page.

## 2026-03-05 (v1.7.0 Alignment)

### Updated

- `Configure Payment Devices`: added `Linkly EFTPOS Terminal` setup flow (pairing and save checklist).
- `Devices`: clarified `Payments` tab includes Linkly EFTPOS terminal setup.
- `Checkout and Payments`: clarified `Split By Item` can proceed even with unsent lines.
- `Payment Errors and Retry`: added EFTPOS terminal handling note (wait for terminal/POS result before retrying).
- `Info`: clarified log export includes Octopus logs when available.

### Writing cleanup

- Removed older release-specific version labels from operational tips/headings (for example `v1.6.5+`, `v1.6.6+`) and merged behavior into normal baseline instructions.

## 2026-02-27 (Data Retention Guide Added)

### Added

- New reference page: `Data Retention and Storage` with end-user guidance on local logs, media cache, local database persistence, and support uploads.

### Updated

- `Info`, `Troubleshooting`, and `Function and Feature Map` now link to the retention guide for faster policy lookup.

## 2026-02-27 (v1.6.6 Alignment)

### Updated

- `Sales Flow`: added `Floor Plan`/`Table List` toggle behavior on table screen.
- `Info`: updated log workflow to match current app actions: `Export`, `Upload`, and `Remove` selected log files.
- `Info`: clarified support path expectations for local export vs cloud upload.

### Screenshot updates

- Added new pending captures for table view toggle and updated log picker/upload UI states.

## 2026-02-22 (v1.6.5 Alignment)

### Updated

- `First-Time Initialization`: clarified that selected language applies immediately during setup and setup text is localized.
- `Day-end` (`client` and `functions`): clarified selected-date processing behavior and duplicate day-end blocking for already-closed dates.
- `Troubleshooting`: added guidance for `Day-end has already been processed for the selected day`.

## 2026-02-21 (English Draft Refresh)

### Added

- New getting-started guide: `Quick Start (15 mins)`
- New SOP page: `Daily Operations`
- New full function index: `Function and Feature Map`
- New version tracking page
- Initialization flow updated to 7 steps with language selection
- Post-initialization order-data sync flow

### Enhanced

- Troubleshooting rewritten into decision-style guidance
- Refund/void and day-end pages now include `Do / Don't` guardrails
- Role/permission guidance rewritten as practical cashier vs manager boundaries
- Screenshot mapping aligned with latest provided captures

### Pending

- Remaining screenshots listed in `SCREENSHOT_PREP_LIST_EN.md`
- HQ documentation expansion after HQ workflow is finalized
