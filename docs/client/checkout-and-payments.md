---
sidebar_position: 4
title: Checkout and Payments
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Cashiers collecting payment, plus managers handling special payment cases.
:::

## Before you start

- Order is ready for payment
- Customer confirms how they want to pay
- You are on checkout screen

## Choose the right payment mode

<Tabs>
  <TabItem value="amount" label="Amount (single/normal)">
1. Stay on `Amount`.
2. Select payment method.
3. Enter amount, then tap `Pay`.
4. Confirm payment line updates correctly.
  </TabItem>
  <TabItem value="split-amount" label="Split By Amount">
1. Tap `Split By Amount`.
2. Add first partial payment and method.
3. Add remaining payment(s) until `Unpaid` becomes zero.
4. Tap `Pay`.
  </TabItem>
  <TabItem value="deposit" label="Deposit">
1. Tap `Deposit`.
2. Select method and amount.
3. Fill `Deposit Remark` if required.
4. Tap `Pay`.
  </TabItem>
  <TabItem value="split-item" label="Split By Item">
1. Tap `Split By Item`.
2. Move items with `>` or `All`.
3. Tap `Next`.
4. Complete payment for each split order.
  </TabItem>
</Tabs>

:::tip Split By Item with unsent items
You can start `Split By Item` checkout even when some order lines are not yet sent.
:::

## What you should see

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split By Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)
![Checkout Deposit tab](/img/manual/en/client/cl-15-checkout-deposit-tab.png)
![Checkout Split By Item](/img/manual/en/client/cl-16-checkout-split-by-item.png)

## If something goes wrong

:::warning Payment seems stuck
Do not force-close the app while payment is processing.
:::

:::tip Payment failed
Retry once only if status is clearly failed/cancelled. If still failing, switch method by store policy.
:::

## When to ask manager/admin

- Payment result is unclear (possible duplicate charge risk)
- Third-party linked payment cannot be modified
- Required payment method is blocked by configuration
