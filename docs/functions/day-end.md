---
sidebar_position: 6
title: Day-end
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Manager only
Day-end is irreversible and should be performed by manager role only.
:::

## Before you start

- All active orders are resolved
- No payment is left in uncertain state

## Steps

1. Open `More Tools`.
2. Tap `Day-end`.

<Tabs>
  <TabItem value="current-day" label="Day-end current">
1. Tap `Day-end current`.
2. Confirm warning prompt.
3. Wait for completion.
  </TabItem>
  <TabItem value="selected-day" label="Day-end selected day">
1. Select the target date.
2. Tap `Day-end selected day`.
3. Confirm warning prompt.
4. Wait for completion.
  </TabItem>
</Tabs>

## What you should see

![Day-end dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![Day-end irreversible warning](/img/manual/en/client/cl-25-day-end-warning.png)

## If something goes wrong

:::warning Cannot proceed
Re-check business date and unresolved transactions before retrying.
:::

## When to ask admin

- Business date appears incorrect
- Day-end validation remains blocked after manager check
