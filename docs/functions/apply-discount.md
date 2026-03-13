---
sidebar_position: 7
title: Apply Discount
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Cashiers who need to adjust an order total before checkout.
:::

## Before you start

- You are signed in and on `Ordering`.
- You have opened the correct order.
- The order has at least one item.

## Steps

<Tabs>
  <TabItem value="apply-discount" label="Apply Discount">
1. Open the target order in `Ordering`.
2. Tap the function button.
3. In `Select Function`, tap `Apply Discount`.
4. If `Apply Discount` is on another page, tap `Previous` or `Next`.
5. Select the discount from the list.
6. Confirm the discount.
  </TabItem>
  <TabItem value="cancel-discount" label="Cancel Discount">
1. Open the target order in `Ordering`.
2. Tap the function button.
3. In `Select Function`, tap `Cancel Discount`.
4. If `Cancel Discount` is on another page, tap `Previous` or `Next`.
5. Select the discount you want to remove.
6. Confirm the cancellation.
  </TabItem>
</Tabs>

## What you should see

- After `Apply Discount`, the order shows a discount line and a lower total.
- After `Cancel Discount`, the discount line is removed and the total returns.

![Apply Discount dialog: choose a discount for this order](/img/manual/en/client/cl-09-apply-discount-dialog.png)

## If something goes wrong

- `Apply Discount` or `Cancel Discount` is missing: check user role permissions for this account.
- The discount list is empty: check store discount setup and reopen the order.
- The total does not update after confirm: close and reopen the order, then check again.

## When to ask manager/admin

- `Manager only`: a manager authorization prompt appears and you cannot continue.
- Discount options do not match store policy.
- Discount is applied but checkout blocks with a payment-rule warning.
