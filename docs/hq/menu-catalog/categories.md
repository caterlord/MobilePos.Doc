---
sidebar_position: 2
---

# Menu Categories

![Menu Categories List](/img/hq/menu-catalog/menu_categories_list.png)

The **Menu Categories** module organizes your POS items into a hierarchical grid, controlling how cashiers navigate the tablet interface to find products.

Categories do not affect financial reporting (that is the job of Departments). Categories are strictly for UI organization.

## Hierarchy & Sub-Categories

Categories operate on an infinite-depth tree structure.

1. **Root Categories**: Appear as the primary tabs on the left side of the POS tablet (e.g., `FOOD`, `BEVERAGE`).
2. **Sub-Categories**: When a cashier clicks a Root Category, they are presented with a secondary grid of Sub-Categories (e.g., clicking `BEVERAGE` opens folders for `Beers`, `Cocktails`, `Sodas`). 
3. **Terminal Level**: At the lowest level of the folder structure, you attach the actual Menu Items.

> [!TIP]
> Keep your folder structure to a maximum of 2 levels deep (Root -> Sub-Category -> Items). Forcing cashiers to click 3 or 4 folders deep drastically slows down transaction speed during rush hour.

## Configuration Details

When creating a category, you assign specific behaviors:

| Field | Description |
| --- | --- |
| **Category Type** | Aligns with Item Types. `Sellable` is standard. `Modifier` categories contain add-on instructions. `Combo` categories hold Set Meals. |
| **Name & Alt Name** | The text displayed on the folder button in the POS. |
| **Style** | Assigns a color block from your Button Styles library to visually differentiate folders. |
| **Display visibility** | `Public Display` toggles visibility on the primary POS. `Self Ordering Display` and `Online Store Display` dictate if this category folder syncs to Kiosks or Mobile Apps. |
| **Printer Mapping** | (Advanced) Assigns a specific kitchen printer IP mapping to an entire folder, rather than mapping each item individually. |

## Reordering

Because Categories dictate the UI, their sequence is critical.
Use the `Reorder` action button (arrows icon) to manually drag-and-drop the display order of the folders without having to manually input numeric `Display Index` values.
