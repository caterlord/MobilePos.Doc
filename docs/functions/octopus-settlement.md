---
sidebar_position: 9
title: Octopus Settlement
---

:::danger[Manager only]
Run `Octopus Settlement` only when your store is ready to reconcile Octopus V3 totals.
:::

## Before you start

- You are signed in with permission to use manager-level order functions.
- Octopus V3 payment is enabled for this terminal.
- The Octopus V3 reader is powered, connected, and available.
- `Device ID`, `API ID`, and `API Token` are saved in `Devices` -> `Payments`.

## Steps

1. Open an order in `Ordering`.
2. Tap the three-dot function button.
3. In `Select Function`, tap `Octopus Settlement`.
4. Wait for POS to send the settlement request to the Octopus V3 reader.
5. Review the `Octopus Settle Success` message.
6. Confirm the settlement totals before continuing normal service.

## What you should see

- `Octopus Settlement` appears only when Octopus V3 payment is enabled and the reader is available.
- After a successful settlement, POS shows `Deduct Count`, `Deduct Total`, `Add Value Count`, `Add Value Total`, and the settlement file name.

> Screenshot pending: `functions/fn-octopus-settlement-function-menu.png`
> Screenshot pending: `functions/fn-octopus-settlement-success.png`

## If something goes wrong

:::warning[`Octopus Settlement` is missing]
Open `Devices` -> `Payments` and confirm the Octopus V3 reader is configured, connected, and available.
:::

:::warning[Settlement does not complete]
Do not repeat settlement many times. Check the reader connection, record the time and terminal, then ask a manager/admin to review the Octopus logs.
:::

## When to ask manager/admin

- You are not sure whether settlement already ran.
- Settlement totals do not match the expected Octopus activity.
- The reader does not respond or the result is unclear.
