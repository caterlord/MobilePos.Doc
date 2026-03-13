---
sidebar_position: 3
title: Sales Flow
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Cashiers taking orders before payment.
:::

## Before you start

- You are signed in successfully
- You are on `Ordering` page
- Menu data is already loaded

## Steps

<Tabs>
  <TabItem value="dine-in" label="Dine-In order">
1. Tap `Dine-In`.
2. Tap the target table tile.
3. Add items and required modifiers.
4. Confirm items appear in the order list.
5. Tap `Send` or tap `Checkout`.
  </TabItem>
  <TabItem value="takeaway" label="Takeaway order">
1. Tap `Takeaway`.
2. Open the target takeaway order.
3. Add items and required modifiers.
4. Confirm items appear in the order list.
5. Tap `Send` or tap `Checkout`.
  </TabItem>
</Tabs>

## What you should see

![Order page item selector](/img/manual/en/client/cl-06-order-page-item-selector.png)
![Order list with items](/img/manual/en/client/cl-07-order-list-with-items.png)
- Quantity and line totals update after each item selection
- `Send` and `Checkout` actions are available
- Item names follow your current language and item-name mapping (`Main` / `Alt`) from `Settings`

:::note Screenshot pending
Needed file: `client/cl-41-order-item-name-language-mapping.png`
:::

## Table screen view toggle

When `Floor Plan Mode` is enabled in `Settings`, Dine-In table screen now has a round toggle button at the lower-right area:

- Grid icon: switch to `Table List`
- Map icon: switch to `Floor Plan`

This lets staff switch layout quickly without leaving the ordering flow.

:::note Screenshot pending
Needed file: `client/cl-37-ordering-table-view-toggle-floorplan-tablelist.png`
:::

## Function menu (when needed)

Tap the three-dot function button to open `Select Function`.

If you have many functions configured, `Select Function` may show `Previous` and `Next` tiles so you can move between pages.

Tap the three-dot function button to access:

- `Apply Discount`
- `Cancel Discount`
- `Apply Service Charge`
- `Cancel Service Charge`
- `Change Table`
- `Order Remark`
- `To Dine-In` / `To Takeaway`
- `Split / Merge Txn`
- `Void Txn`
- `Pay In / Pay Out`
- `Member Login`

Use these detailed guides:

- `Apply Discount`: [Function guide](../functions/apply-discount)
- `Apply Service Charge`: [Function guide](../functions/apply-service-charge)
- `Change Table`: [Function guide](../functions/change-table)
- `To Dine-In` / `To Takeaway`: [Function guide](../functions/to-dine-in-to-takeaway)
- `Split / Merge Txn`: [Function guide](../functions/split-merge-transaction)
- `Member Login`: [Function guide](../functions/member-login)
- `Pay In / Pay Out`: [Function guide](../functions/pay-in-pay-out)

![Order function menu](/img/manual/en/client/cl-08-order-function-menu.png)
![Apply Discount dialog](/img/manual/en/client/cl-09-apply-discount-dialog.png)
![Apply Service Charge dialog](/img/manual/en/client/cl-10-apply-service-charge-dialog.png)
![Order action buttons: Send / Link ODO / Checkout](/img/manual/en/client/cl-11-order-send-close-checkout.png)

## Add an order remark

1. Tap the three-dot function button.
2. In `Select Function`, tap `Order Remark`.
3. If `Order Remark` is on another page, tap `Previous` or `Next`.
4. Enter the remark, then confirm.
5. Check the remark appears under the order header.
6. Tap the pencil icon beside the remark if you need to edit it again.

:::note Screenshot pending
Needed file: `client/cl-42-select-function-dialog-pagination.png`
:::

:::note Screenshot pending
Needed file: `client/cl-43-order-remark-display-edit.png`
:::

## If something goes wrong

:::warning Cannot split/merge or void
Send pending items first, then retry.
:::

:::note Wrong table selected
Use `Change Table` from function menu before checkout.
:::

## When to ask manager/admin

- Void/return requires manager policy approval
- Discount/service-charge options are missing but should be available
- Order behavior does not match store rules
