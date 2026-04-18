---
sidebar_position: 4
title: Departments
---

:::info[Who this is for]
Admins who organize items for reporting and financial roll-up in HQ.
:::

## Before you start

- Confirm the correct brand.
- Decide whether you need a top-level department, a sub-department, or a revenue center mapping.
- Check the current structure before adding new levels.

## Open this page

Open `POS Settings` -> `Departments`.

## What this page controls

`Departments` controls the reporting structure used to group sales and related data.

Use this page to manage:

- top-level departments
- sub-departments
- revenue-center-related grouping

This structure is important for reporting, accounting, and item roll-up.

![Departments](/img/hq/pos-settings/departments_page.png)

## Main sections

### Department hierarchy

The page works across related structure levels:

- `Departments`
- `Sub-Departments`
- `Revenue Centers`

Top-level departments are the main reporting buckets. Sub-departments provide more detailed roll-up inside those buckets.

### Key fields

- `Code`
- `Name`
- `Description`
- `Parent Department`
- `Revenue Center Code`

### Beast Mode

Use `Beast Mode` when you need to create several records at the same structure level with the same shared settings.

When `Beast Mode` is on, enter one row for each record with:

- `Code`
- `Name`
- `Description`

The shared settings below the row list apply to every record created in that save. For sub-departments, confirm the shared `Parent Department` before saving.

Use normal create mode when each department, sub-department, or revenue center needs different parent or reporting settings.

## Steps

1. Open `POS Settings` -> `Departments`.
2. Decide which level you need to create or edit.
3. Enter the `Code` and `Name`.
4. If creating a sub-department, select the correct `Parent Department`.
5. Set the `Revenue Center Code` only when reporting requires it.
6. Save the record.

## Create several records at once

1. Open `POS Settings` -> `Departments`.
2. Choose the correct tab: `Departments`, `Sub-Departments`, or `Revenue Centers`.
3. Select the new-record button for that tab.
4. Turn on `Beast Mode`.
5. Enter one row for each department, sub-department, or revenue center.
6. Complete the shared settings below the row list.
7. Select `Create`.
8. Review the list and confirm every record was created at the correct level.

## What changes after you save

These changes affect how data is grouped in HQ reporting and how items should be mapped elsewhere in setup.

## How to check your change

1. Reopen the department list and confirm the record is in the correct hierarchy level.
2. Verify that items meant to use the structure are mapped to the correct department level.
3. Confirm the reporting structure still matches the finance or operations expectation.

## If something goes wrong

- Confirm the record was created at the correct level.
- Check whether the item mapping issue is caused by a missing sub-department.
- Review whether the wrong revenue center code was applied.

## When to ask owner/admin

- The reporting hierarchy is shared across multiple shops and teams.
- Finance depends on the department structure and the correct roll-up is unclear.
