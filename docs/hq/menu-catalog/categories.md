---
sidebar_position: 2
title: Categories
---

:::info[Who this is for]
Admins who organize how cashiers browse products on the POS.
:::

## Before you start

- Confirm the correct brand.
- Decide whether you need a new root category or a sub-category.
- Make sure the button structure will stay simple enough for fast cashier use.

## Open this page

Open `Menu Management` -> `Categories`.

## What this page controls

`Categories` controls how items are grouped in the POS browsing structure.

Use this page to define:

- root categories
- sub-categories
- category display order
- category display behavior

Categories mainly control browsing and display. They do not replace [Departments](../pos-settings/departments.md), which control financial reporting structure.

![Menu Categories List](/img/hq/menu-catalog/menu_categories_list.png)

## Main sections

### Category hierarchy

Categories can be nested. In practice, keep the structure shallow enough for staff to use quickly.

- root categories appear as the main top-level choices
- sub-categories sit inside a parent category
- items are attached at the usable category level

:::tip[Keep the structure simple]
Try to keep the path short enough that staff can reach sellable items quickly during service.
:::

### Key fields

| Field | What it controls | When to change it |
| --- | --- | --- |
| `Category Type` | What kind of content the category is intended to hold | When the category is for sellable items, modifiers, or combo-related use |
| `Name` and `Alt Name` | What users see on the category button | When the display text changes or needs another language |
| `Style` | Visual style for the category button | When you want consistent button appearance |
| display visibility fields | Whether the category appears in supported displays or channels | When rollout differs by surface |
| `Printer Mapping` | Advanced print routing for the category | When output routing should be controlled at category level |

### Reordering

Use the reorder action when the current category order no longer matches how staff should browse the menu.

## Steps

1. Open `Menu Management` -> `Categories`.
2. Create a new category or open an existing one.
3. Select the correct `Category Type`.
4. Enter the `Name` and `Alt Name` if needed.
5. Apply a `Style` if required.
6. Set the visibility options for the intended display or channel.
7. Save the category.
8. Reorder categories if the browsing order also needs to change.

## What changes after you save

These changes affect the menu structure used for browsing. They can change what staff see on the POS and can also affect related rollout in other displays depending on the visibility settings.

## How to check your change

1. Reopen the category list and confirm the saved values.
2. Check the category hierarchy and display order.
3. Verify the expected menu path appears where staff should use it.

## If something goes wrong

- Confirm the category is in the correct level of the hierarchy.
- Check whether the issue is in category order, visibility, or item assignment.
- If the category exists but does not appear where expected, review the relevant display or channel visibility fields.

## When to ask owner/admin

- The change affects multiple shops or customer-facing channels and you cannot verify all of them.
- You are unsure whether the structure should be a standard category or a [Smart Category](./smart-categories.md).
