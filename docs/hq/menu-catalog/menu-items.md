---
sidebar_position: 1
title: Menu Items
---

:::info[Who this is for]
Admins who create or maintain the products sold, customized, or tracked in the POS.
:::

## Before you start

- Confirm the correct brand.
- Decide whether the record is a sellable item, modifier item, or set item.
- Confirm the target category and department before you save.
- If you are copying an item, prepare new `Item Code` values that are not already used by active items.

## Open this page

Open `Menu Management` -> `Menu Items`.

## What this page controls

`Menu Items` is the main item database for the POS catalog.

Use this page to create or maintain:

- sellable items
- modifier items
- set or combo parent items
- item pricing and availability
- special item behavior
- item copies based on an existing item setup

![Menu Items List](/img/hq/menu-catalog/menu_items_list.png)

## Main sections

### Item type

Choose the correct item type before you continue:

- sellable item
- modifier
- set item

The item type affects where the item belongs and how the POS uses it.

### Basic fields

| Field | What it controls | When to change it |
| --- | --- | --- |
| `Item Code` | Internal item identifier | When the SKU or integration code changes |
| `Item Name` | Main HQ name | When the core record name changes |
| `POS Display Name` | What staff see on the POS | When the selling name should differ from the HQ name |
| `Printed Name` | What prints on receipts or kitchen output | When you need shorter or more operational wording |
| category and department fields | Browsing structure and reporting structure | When the item belongs in a different menu location or roll-up |

If the required `Button Style` does not exist while you are creating or editing an item, use `Create button style` beside the selector, enter `Style Name`, choose `Color Palette`, check `Preview`, and select `Create Style`.

### Special behavior switches

Use the item switches carefully, because they can change how the POS behaves during checkout.

Examples include:

- manual price
- non-discountable
- non-service-charge
- non-taxable
- receipt visibility options

### Pricing and availability

Use the item's pricing and availability areas to control branch-specific selling price and whether the item is enabled or out of stock.

### Copy an existing item

Use the copy action when a new item should start from an existing item's setup.

1. Find the item you want to copy.
2. Select the copy action in the `Actions` column.
3. Enter the new `Item Code`, `Item Name`, `Item Name (Alt)`, `Item Kitchen Name`, and `Item Kitchen Name (Alt)`.
4. Confirm the destination `Category` and `Department`.
5. Save the copy.

The copy includes the related setup from the source item, such as shop details, pricing, modifiers, meal set groups, and other item relationships.

### Beast Mode copy

Use `Beast Mode` in the copy modal when you need to create several items from the same source item.

When `Beast Mode` is on, enter one target item per row:

- `Item Code`
- `Item Name`
- `Item Name (Alt)`
- `Item Kitchen Name`
- `Item Kitchen Name (Alt)`

The destination `Category` and `Department` are shared by all rows in the same save.

Before saving, check that every `Item Code` is unique in the row list and is not already used by an active item. If one target item cannot be saved, none of the target items are created.

## Steps

1. Open `Menu Management` -> `Menu Items`.
2. Create a new item or open an existing one.
3. Select the correct item type.
4. Enter the item identity fields.
5. Assign the item to the correct category and department.
6. Apply any required special behavior switches.
7. Review pricing and availability for the target shops.
8. Save the item.

## What changes after you save

These changes affect the shared item record and may also affect shop availability, POS browsing, reporting, and checkout behavior depending on what you changed.

## How to check your change

1. Reopen the item and confirm the saved values.
2. Verify the item sits in the correct category and department.
3. Check the target shop pricing or availability if those were changed.
4. Test the affected POS behavior if you changed special switches.
5. If you copied an item, reopen the copied item and confirm the related setup was copied as expected.

## If something goes wrong

- Confirm the wrong result is not caused by category, department, or availability settings.
- Check the item type first if the POS behavior is unexpected.
- If the item exists but is missing in one shop, review shop-level price or availability setup.
- If a copy fails, check for duplicate `Item Code` values in the copy list or among active items.

## When to ask owner/admin

- The change affects live pricing or customer-visible receipt behavior.
- You are unsure whether the item should be a sellable item, modifier, or set item.
