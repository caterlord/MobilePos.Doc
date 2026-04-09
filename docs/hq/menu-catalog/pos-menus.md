---
sidebar_position: 3
---

# POS Menus

![POS Menus List](/img/hq/menu-catalog/pos_menus_list.png)

The **POS Menus** module dictates exactly which Root Categories are visible on a POS tablet at any given time.

You can create multiple POS Menus for different operational scenarios. For example, you might create a `Breakfast Menu` that only contains the "Coffee" and "Pastries" categories, and a `Dinner Menu` that contains "Steaks" and "Wine". Cashiers can then manually switch between these menus on the tablet, or they can be scheduled automatically.

## Built-In vs Custom Menus

- **Built-In Menus**: The system provides standard non-deletable menus. The most common is the "Master Menu", which automatically includes *every* published root category. Click the `Sync Built-In Menu` button to force the system to regenerate these if they fall out of sync.
- **Custom Menus**: Tap `New Menu` to create a custom grouping.

## Configuring a Menu

When you click into a specific menu to edit it:

1. **Basic Info**: Update the `Menu Name`, `Alt Name`, and `Code`. 
2. **Published Status**: If `Published` is turned off, this menu completely disappears from all POS tablets globally, bypassing any schedule.
3. **Category Assignment**: The core logic is mapping Categories to this Menu. You will see a dual-list interface. Select categories from the `Available` pool and move them into the `Assigned` pool. The order in which they appear in the `Assigned` pool dictates the exact top-to-bottom tab order on the tablet.

> [!WARNING]
> Only **Root Level** Categories (categories that do not have a parent) can be mapped to a POS Menu. If you want to add a Sub-Category, you must map its parent Root Category instead.
