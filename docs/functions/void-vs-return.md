---
sidebar_position: 5
title: Void vs Return
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Rule
Use `Void` for in-progress transactions. Use `Return` for completed transactions.
:::

## Steps

<Tabs>
  <TabItem value="void" label="Void">
1. Open in-progress order.
2. Tap function menu.
3. Tap `Void Txn`.
4. Confirm prompt.
  </TabItem>
  <TabItem value="return" label="Return">
1. Open completed transaction.
2. Tap `Return`.
3. Confirm prompt.
4. Complete refund payment flow.
  </TabItem>
</Tabs>

## What you should see

![Completed order actions](/img/manual/en/client/cl-19-completed-order-actions.png)
![Void confirmation dialog](/img/manual/en/client/cl-20-void-confirm-dialog.png)
![Return confirmation dialog](/img/manual/en/client/cl-21-return-confirm-dialog.png)

## If something goes wrong

:::warning Action blocked
Clear pending edits and retry once.
:::

## When to ask manager/admin

- High-value refund/void
- Third-party linked payment restrictions
