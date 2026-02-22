---
sidebar_position: 6
title: Refunds and Voids
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Shift managers and authorized staff handling post-order corrections.
:::

## Before you start

- Confirm the target transaction number
- Confirm with customer/store policy
- Know whether transaction is in-progress or completed

## Choose the correct action

<Tabs>
  <TabItem value="void" label="Void in-progress txn">
1. Open the in-progress order.
2. Tap function menu (three dots).
3. Tap `Void Txn`.
4. Confirm `Confirm to void the Txn?`.
5. Complete required reason selection.
  </TabItem>
  <TabItem value="return" label="Return completed txn">
1. Open `Orders Overview` and select completed transaction.
2. Tap `Return`.
3. Confirm `Confirm to return the Txn?`.
4. Complete refund payment steps.
  </TabItem>
</Tabs>

## What you should see

![Completed order actions](/img/manual/en/client/cl-19-completed-order-actions.png)
![Void confirmation dialog](/img/manual/en/client/cl-20-void-confirm-dialog.png)
![Return confirmation dialog](/img/manual/en/client/cl-21-return-confirm-dialog.png)

## If something goes wrong

:::warning `Void` is blocked
Send/clear pending edits first, then retry.
:::

:::note `Modify Payment` restrictions
Some third-party linked payments cannot be fully modified.
Use `Return` flow when store policy requires a true reversal.
:::

> Screenshot pending: `cl-22-modify-payment-3rdparty-warning.png`

## Do and don't

:::tip Do
Use `Void` for in-progress transactions, and use `Return` for completed transactions.
:::

:::danger Don't
Do not use repeated blind retries when payment status is unclear.
:::

## When to ask manager/admin

- High-value or exception refunds
- Third-party payment modification restrictions
- Policy conflicts on void/return decisions

## Related guides

- [Function: Void vs Return](../functions/void-vs-return)
- [Function: Reopen Order](../functions/reopen-order)
- [Function: Reprint Receipt](../functions/reprint-receipt)
