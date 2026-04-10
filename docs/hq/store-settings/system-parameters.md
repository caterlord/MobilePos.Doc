---
sidebar_position: 3
title: System Parameters
---

:::info[Who this is for]
Owner/admin users maintaining advanced shop behavior and technical operating parameters.
:::

## Before you start

- Confirm the correct brand and shop.
- Do not edit this page unless you understand the target parameter and expected value.
- Record the current value before you change anything.

## Open this page

Open `Store Settings` -> `System Parameters`.

## What this page controls

`System Parameters` stores advanced configuration values that can affect how the POS behaves, prints, or connects to other systems.

This page is high risk. Changes here can affect live operations immediately or on the next sync/use of the parameter.

![System Parameters](/img/hq/store-settings/system_parameters_page.png)

:::danger[High-risk page]
Changing system parameters without a confirmed reason can break device connectivity, printing behavior, or reporting logic. Use this page only when you have a known target value and a way to verify the result.
:::

## Main sections

### Locked table

The page opens in a locked read-only state.

To edit:

1. Select the padlock or unlock control.
2. Review the unlock warning.
3. Confirm the unlock action.

### Parameter rows

Each row includes:

- `Code`
- `Description`
- `Value`
- `Enabled`

`Code` identifies the parameter. `Value` is the active setting. `Enabled` turns the parameter on or off without deleting it.

### Dirty-row save behavior

The page uses row-level save controls. When you change a row, that row shows save and reset actions.

Use:

- row `Save` to keep that specific change
- row `Reset` to undo unsaved changes on that row

### JSON import and export

The JSON tools help copy parameters from one shop to another.

Use them only when you are confident the source and target shops should share the same advanced configuration.

## Steps

1. Open `Store Settings` -> `System Parameters`.
2. Confirm the selected shop.
3. Unlock editing.
4. Find the target parameter row.
5. Update only the field you intend to change.
6. Save that row.
7. Repeat only if you have another confirmed parameter to update.

## Copying parameters with JSON

1. Open the source shop and export the parameter JSON.
2. Switch to the target shop.
3. Unlock editing.
4. Import the JSON file.
5. Review the diff carefully.
6. Select only the rows you want to apply.
7. Apply the changes.

## What changes after you save

These changes affect the selected shop's advanced operating behavior. Depending on the parameter, the effect may appear in printing, device interaction, reporting, or POS workflow.

## How to check your change

1. Reopen the row and confirm the value saved correctly.
2. Verify the real behavior in the part of the system that uses that parameter.
3. If you used JSON import, review the affected rows after the import completes.

## If something goes wrong

- Revert the affected row to the previous confirmed value.
- Stop making additional parameter changes until the effect is understood.
- If the issue came from JSON import, identify the changed rows before retrying.

## When to ask owner/admin

- You do not know the correct target value.
- The parameter affects payments, printing, device communication, or reporting logic.
- The issue appears after an imported parameter set and you cannot isolate the changed row safely.
