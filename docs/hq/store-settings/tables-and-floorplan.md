---
sidebar_position: 4
---

# Tables & Floorplan

![Tables and Floorplan](/img/hq/store-settings/tables_and_floorplan_page.png)

The Floorplan module governs how tables are grouped, tracked, and visually represented on the POS terminal's Table Map. 

This configuration is split into an overarching Section Library, individual Table records, and a visual canvas designer.

## 1. Section Library (Table Sections)

Before you can create tables, you must define **Table Sections** in the Library. A section groups tables physically (e.g., "Main Dining Room", "Patio", "VIP Lounge"). 

Sections are created at the global Brand level because a chain might want standard names across all branches. 

- **Shop Linking**: After creating a Section in the library, you must "Link" it to a specific Shop ID. 
- **Canvas Sizing and Backgrounds**: When linking a section to a shop, you define the Canvas Width and Height (which scales the Grid on the POS) and you can optionally upload a blueprint Floorplan Image as the background.

## 2. Table Configurations

Once your Sections are linked, you can create individual **Tables**.

| Field | Description |
| --- | --- |
| **Table Code** | The alphanumeric identifier (e.g., `T1`, `V-05`) printed on order chits. Maximum 10 characters. **(Required)** |
| **Linked Section** | The physical area this table belongs to. |
| **Table Type** | Determines rounding rules or specific workflows (e.g., Standard vs VIP). |
| **Seat Number** | The default intended capacity for the table. |
| **Takeaway Flag** | Check `Is Takeaway` if this "table" is actually a virtual holding queue for pickup orders. |
| **Display Index** | How the table is ordered in list views (if the visual floorplan is not used). |

## 3. Floorplan Designer & Visual Syncing

The **Floorplan Tab** allows you to visually place tables instead of manually typing X/Y coordinates. 

- **Drag & Drop**: Moving a table visually automatically updates the underlying record's `X` and `Y` properties.
- **Resizing**: Adjusting the borders updates the `Width` and `Height`.
- **Visibility**: Toggle `Appear on Floorplan` to false if the table is purely for internal software tracking and should not clog up the visual tablet UI.

> [!TIP]
> Any changes made via the Floorplan Designer are synced to all active POS tablets in real-time. Cashiers switching tabs on their tablets will immediately see the updated positions.
