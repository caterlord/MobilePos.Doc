---
sidebar_position: 7
title: Meal Set
---

:::info Who this is for
Admins who build combo or set-meal selection flows.
:::

## Before you start

- Confirm the correct brand.
- Make sure the component items already exist in [Menu Items](./menu-items.md).
- Decide how many selection groups the combo needs before you start.

## Open this page

Open `Menu Management` -> `Meal Set`.

## What this page controls

`Meal Set` creates grouped item choices for combo-style selling flows.

Use it when one parent item should force or allow the customer to choose from item groups such as:

- one main
- one side
- one drink

![Meal Sets](/img/hq/menu-catalog/meal_sets_page.png)

## Main sections

### Meal set groups

Create one group for each required choice in the combo.

Typical settings include:

- group name
- minimum selection
- maximum selection

### Group contents

After creating the group, add the actual menu items that belong to that choice group.

### Parent item linkage

The meal set groups do not work by themselves. They must be linked back to a parent set item in [Menu Items](./menu-items.md).

## Steps

1. Open `Menu Management` -> `Meal Set`.
2. Create the required choice groups.
3. Set the minimum and maximum selection rules for each group.
4. Save the groups.
5. Add the relevant menu items to each group.
6. Set override prices where an item should add an upcharge.
7. Open the parent set item in [Menu Items](./menu-items.md).
8. Attach the meal set groups to the parent item.
9. Save the parent item.

## What changes after you save

These changes affect how the combo item prompts for choices during ordering.

## How to check your change

1. Reopen the meal set groups and confirm the correct items are attached.
2. Reopen the parent set item and confirm the meal set groups are linked.
3. Test the combo ordering flow to confirm the expected selection wizard appears.

## If something goes wrong

- Confirm the component items were added to the correct groups.
- Check whether the parent set item was linked to the groups.
- Review selection limits if the flow is too strict or too open.

## When to ask owner/admin

- The combo affects live pricing or high-volume selling flows.
- You are unsure whether the structure should use meal sets, modifiers, or both.
