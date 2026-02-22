---
title: Inventory
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Managers and authorized staff controlling sold-out and limited-item availability.
:::

## Before you start

- You are signed in
- You can access `Inventory` from left menu
- Store policy allows inventory overrides at POS

## What this screen is for

Use `Inventory` to manage temporary availability during service.

## Main views

<Tabs>
  <TabItem value="sold-out" label="Sold Out">
Manage items that are fully unavailable.
  </TabItem>
  <TabItem value="limited-item" label="Limited Item">
Manage items with quota/remain controls.
  </TabItem>
</Tabs>

## Steps

1. Tap `Inventory`.
2. Select `Sold Out` or `Limited Item`.
3. Find target item using category/search.
4. Apply required action (`Cancel`, `Edit`, `Reset` or bulk actions).
5. Confirm item status updates in the list.

## What you should see

- Item list columns such as `Name`, `Quota`, and `Remain`
- `Cancel All` / `Reset All` when bulk operation is available

:::note Screenshot pending
Needed files: `client/cl-30-inventory-sold-out-tab.png`, `client/cl-31-inventory-limited-item-tab.png`
:::

## If something goes wrong

:::warning Item status looks unchanged
Refresh the list and verify you changed the correct item/category.
:::

## When to ask manager/admin

- Item availability conflicts with kitchen/stock records
- Bulk reset/cancel impacts many active orders
