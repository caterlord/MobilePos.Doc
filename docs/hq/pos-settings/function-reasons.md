---
sidebar_position: 5
title: Reasons
---

:::info[Who this is for]
Admins who maintain the standard reason lists used for controlled POS actions such as voids, pay-ins, and pay-outs.
:::

## Before you start

- Confirm the correct brand.
- Decide which operational action needs a reason list.
- Keep the list short and clear enough for staff to use quickly on the POS.

## Open this page

Open `POS Settings` -> `Reasons`.

## What this page controls

`Reasons` defines the standardized explanations staff select when performing controlled actions on the POS.

Use it to avoid free-text reasons and keep audit reporting consistent.

![Function Reasons](/img/hq/pos-settings/function_reasons_page.png)

## Main sections

### Reason groups

Common groups include:

1. `TX_DISABLE`
2. `PAYIN`
3. `PAYOUT`
4. `ISO`

Each group is intended for a different POS action type.

### POS behavior

When a POS action requires a reason, the terminal shows the available active reasons from the matching group for staff to select.

## Steps

1. Open `POS Settings` -> `Reasons`.
2. Choose the correct reason group.
3. Create or edit the reason text.
4. Save the reason.
5. Repeat only for the groups that need updates.

## What changes after you save

These changes affect the choices staff can select when the related POS action requires a reason.

## How to check your change

1. Reopen the list and confirm the reason is in the correct group.
2. Verify the text is short, clear, and suitable for quick staff selection.
3. Test the related POS action when practical to confirm the reason appears where expected.

## If something goes wrong

- Confirm the reason is assigned to the correct group.
- Check whether the POS action is configured to require a reason before assuming the list failed.
- If reporting looks inconsistent, review duplicate or unclear reason names.

## When to ask owner/admin

- The reason list affects compliance, loss prevention, or audit reporting.
- You are unsure which action group should own the reason.
