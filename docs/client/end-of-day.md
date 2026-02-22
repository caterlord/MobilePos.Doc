---
sidebar_position: 7
title: End of Day
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Manager only
Day-end is irreversible and must be run by manager role.
:::

## Who this is for

- Shift manager closing business day
- Store owner supervising end-of-day controls

## Before you start

- Resolve all active orders/checkouts
- Confirm pending payments are finalized
- Complete required pay in/out records
- Verify business date/time is correct

## Steps

1. Open `More Tools`.
2. Tap `Day-end`.

<Tabs>
  <TabItem value="current-day" label="Day-end current">
1. Tap `Day-end current`.
2. Read warning and tap `OK`.
3. Wait for completion.
  </TabItem>
  <TabItem value="selected-day" label="Day-end selected day">
1. Select target date.
2. Tap `Day-end selected day`.
3. Read warning and tap `OK`.
4. Wait for completion.
  </TabItem>
</Tabs>

## What you should see

![More Tools page](/img/manual/en/client/cl-23-manager-tools-page.png)

![Day-end dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![Day-end irreversible warning](/img/manual/en/client/cl-25-day-end-warning.png)

## If something goes wrong

:::warning No pending business day / validation blocked
Re-check business date and unresolved transactions, then retry once.
:::

:::note Warning prompt appears
This is expected behavior. Day-end is a high-risk irreversible action.
:::

## Do and don't

:::tip Do
Confirm order/payment closure before day-end and keep one manager owner for the process.
:::

:::danger Don't
Do not run day-end while any payment outcome is still unclear.
:::

## When to ask admin

- Business date appears incorrect
- Day-end remains blocked after manager retry
- Day-end result is inconsistent with reports
