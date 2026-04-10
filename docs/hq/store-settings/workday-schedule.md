---
sidebar_position: 2
title: Workday Schedule
---

:::info[Who this is for]
Admins and managers who define the business day and service periods for a specific shop.
:::

## Before you start

- Confirm the correct brand and shop.
- Confirm the actual operating hours for the shop, including late-night closing that runs past midnight.
- Decide whether you are updating one day, all days, or copying a schedule to other shops.

## Open this page

Open `Store Settings` -> `Workday Schedule`.

## What this page controls

`Workday Schedule` tells the POS when a financial business day starts and ends. It is not just the public opening hours. It controls how sales are assigned to the correct business date.

This page also defines service periods such as breakfast, lunch, or happy hour that can be used for schedule-driven behavior.

This page is shop-level.

![Workday Schedule Timeline](/img/hq/store-settings/workday_schedule_page.png)

## Main sections

### Business hours

Business hours define the main workday window for each day.

Use these fields carefully:

- `Open Time`
- `Close Time`
- day overflow such as `+1d`

:::warning[Overnight shops]
If the shop closes after midnight, use the overflow setting so late-night sales stay on the correct business day instead of moving to the next calendar day.
:::

### Period masters

Period masters define reusable named periods such as `Lunch Service` or `Happy Hour`.

If you rename a period master, `Cascade Rename` can update existing uses of that period.

### Interactive timeline

The timeline helps you review:

- the full business-hours block
- period placement inside the day
- gaps between periods
- previous-day overflow into the next calendar day

### Validations

The page checks for:

- period overlaps
- periods outside the business-hours window

## Steps

1. Open `Store Settings` -> `Workday Schedule`.
2. Confirm the selected shop.
3. Set the `Open Time` and `Close Time` for the target day.
4. Add overflow such as `+1d` if the business day ends after midnight.
5. Create or review the required `Period Masters`.
6. Place the periods on the timeline in the correct order.
7. Check for gaps or overlaps before saving.
8. Save the schedule.

## Copying schedules

Use the copy tool when multiple days or shops should share the same pattern.

1. Finish one day correctly first.
2. Select the `Copy` action for that day.
3. Choose the target days.
4. If needed, choose additional target shops.
5. Apply the copy.

## What changes after you save

These changes affect the selected shop's business-day timing and period structure. That can affect reporting date boundaries and any workflow that depends on the configured schedule.

## How to check your change

1. Reopen the page and confirm the saved hours and periods are correct.
2. Check that no validation warnings remain.
3. For late-night shops, confirm the business-day cutoff matches the real trading expectation.

## If something goes wrong

- Confirm you edited the correct shop.
- Check whether the problem is in the close time, the overflow day, or the period blocks.
- If reports are landing on the wrong date, review the overnight configuration first.

## When to ask owner/admin

- You are changing the workday for a live shop and cannot safely verify the reporting impact.
- The schedule should be copied to multiple shops but you do not know whether they all share the same operating pattern.
