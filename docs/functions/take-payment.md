---
sidebar_position: 4
title: Take Payment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Cashiers handling checkout.
:::

## Before you start

- Order is ready for payment
- Customer confirms payment method

## Steps

<Tabs>
  <TabItem value="amount" label="Amount">
1. Tap `Checkout`.
2. Stay on `Amount`.
3. Select payment method.
4. Enter amount and tap `Pay`.
  </TabItem>
  <TabItem value="split-by-amount" label="Split By Amount">
1. Tap `Split By Amount`.
2. Add first partial payment.
3. Add remaining amount.
4. Tap `Pay`.
  </TabItem>
</Tabs>

## What you should see

- `Unpaid` amount decreases correctly
- Paid lines are recorded by method

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split By Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)

## If something goes wrong

:::warning Payment failure
Retry once only if status is clearly failed/cancelled.
:::

## When to ask manager/admin

- Payment outcome is unclear
- Payment stays stuck or locked
