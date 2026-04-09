---
sidebar_position: 4
---

# Modifier Groups

![Modifier Groups](/img/hq/menu-catalog/modifiers_page.png)

The **Modifier Groups** module manages how add-ons, customizations, and cooking instructions are presented to cashiers when they ring up an item. 

Instead of attaching single modifiers individually to items (e.g., adding `No Ice` directly to a `Coke`), you create a **Modifier Group** (e.g., `Ice Level`), populate it with choices, and then attach the entire Group to the item.

## Creating a Group

When creating a new Modifier Group, you define the rules of engagement:

| Field | Description |
| --- | --- |
| **Name & Code** | Internal and display name for the group (e.g., `Steak Meat Temp`). |
| **Max Selection** | The maximum number of options the cashier can select. If set to `1`, the POS behaves like standard radio-buttons (picking one deselects the other). If `0` or greater than 1, it allows multiple checkboxes. |
| **Min Selection** | If set to `1` or higher, the POS terminal considers this group **Mandatory**. When a cashier rings up the parent item, the POS will instantly hard-lock and force-open a popup screen demanding the cashier select a modifier before they can proceed. |
| **Channels** | Toggle if this group should appear on the standard POS register, the Online Ordering platform, or both. |

## Populating a Group

Once the Group is created, click the expansion arrow (chevron) next to the group's ID in the table to open the Detail Panel.

Here, you link the actual **Modifier Items** (which must be created beforehand in the Menu Items master list) to this group. You can specify a display sequence, and you can add an override price. 
> [!NOTE] 
> If a Modifier Item normally costs $1.00, but you want it to be free when selected within a specific combo's Modifier Group, you can override the price to $0.00 inside the Group's Detail Panel.

## Copy from Existing

Modifier logic can get repetitive (e.g., attaching the exact same `Ice Level` and `Sugar Level` to 50 different drinks). Use the **Copy from Existing** button at the top to duplicate an entire group, including its items and selection rules, giving it a new name.
