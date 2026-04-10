---
title: Online Orders
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Staff handling marketplace/online channels and pickup order states.
:::

## Before you start

- You are signed in
- Online channel integration is enabled for your store

## What this screen is for

`Online Orders` helps you monitor online order status and process pickup workflow actions.

## Main views

<Tabs>
  <TabItem value="server" label="Server">
Shows server connection and order processing counters/status (`Pending`, `Processing`, `Completed`, `Error`, `Info`).
  </TabItem>
  <TabItem value="pickup" label="Pickup">
Shows pickup orders and action buttons such as `View`, `Reject`, `Accept`, `Prepare`, `Pick up`, and `Create`.
  </TabItem>
</Tabs>

## Steps

1. Tap `Online Orders` in the left menu.
2. Choose `Server` or `Pickup`.
3. Review current order statuses.
4. Open target order and apply required action (`Accept`, `Prepare`, `Pick up`, etc.).
5. Confirm list status updates after action.

## What you should see

- `Server` and `Pickup` tabs at top
- Status and list refresh behavior based on current tab

:::note[Screenshot pending]
Needed files: `client/cl-28-online-orders-server-tab.png`, `client/cl-29-online-orders-pickup-actions.png`
:::

## If something goes wrong

:::warning[Status does not update]
Refresh once, verify internet, then retry the action.
:::

## When to ask manager/admin

- Orders are stuck in one status after retry
- Channel/pickup actions are missing for expected orders
- Store policy decision is needed for reject/cancel handling
