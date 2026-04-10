---
sidebar_position: 6
title: Day-end
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger[Manager only]
Day-end is irreversible and should be performed by manager role only.
:::

## Before you start

- All active orders are resolved
- No payment is left in uncertain state
- `Settings` -> `Report` is set to print the day-end sections your store needs

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

:::tip[Selected-day behavior]
The report now uses the selected business date correctly.  
If that date was already day-ended, the app blocks duplicate processing.
:::

:::note[Printed report content]
The printed day-end report follows `Settings` -> `Report` -> `Daily Report Sections`.
If a section is missing from the printout, review that setting before the next business day closes.
:::

## What you should see

![Day-end dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![Day-end irreversible warning](/img/manual/en/client/cl-25-day-end-warning.png)

## If something goes wrong

:::warning[Cannot proceed]
Re-check business date and unresolved transactions before retrying.
:::

:::warning[`Day-end has already been processed for the selected day`]
Choose another date or review the existing day-end report for that day.
:::

:::warning[Printed report is missing sections]
Review `Settings` -> `Report`, especially `Daily Report Sections` and `Show advanced sections`, then apply the corrected setup for the next day-end.
:::

## When to ask admin

- Business date appears incorrect
- Day-end validation remains blocked after manager check
- Day-end result for selected date is inconsistent with expected turnover
