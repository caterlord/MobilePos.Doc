---
sidebar_position: 3
---

# System Parameters

![System Parameters](/img/hq/store-settings/system_parameters_page.png)

System Parameters consist of deep configuration toggles that globally alter how the POS terminal processes data, prints receipts, or connects to external payment integrations. 

> [!CAUTION]
> Changing System Parameters without knowing what they do can instantly break POS hardware connectivity or alter your financial reporting data logic. Proceed with caution.

## The Lock State

By default, the System Parameters table is completely **Locked** in read-only mode to prevent accidental keystrokes. 

To edit a parameter:
1. Click the **Unlock Editing (Padlock)** icon in the toolbar.
2. The system will throw an **Unlock Warning** modal, advising you that changing parameters mid-shift can corrupt live order states on the POS.
3. You must explicitly type out your confirmation to unlock the table.

Once unlocked, the table fields switch to input boxes.

## Editing Parameters

Each parameter consists of four columns:
- **Code:** The programmatic key (e.g., `POS_AUTO_LOGOUT_SECS`). This cannot be edited once created.
- **Description:** A human-readable note of what the parameter does.
- **Value:** The active setting. Some values are simple integers (e.g., `300`), while others expect structural JSON arrays depending on the parameter.
- **Enabled:** A toggle to disable the parameter without deleting it entirely.

### Dirty Rows and Saving
When you change a value, a blue "Save (Floppy Disk)" and grey "Reset (Arrow)" icon appear next to that specific row. 
You must click **Save** on each row you modify. The system uses dirty-row detection, so an unmodified row cannot be saved. If you make a mistake before saving, you can click **Reset** to revert the input back to its original state.

## Bulk Migration via JSON

If you are opening a new branch and want to identically clone the parameters of an existing branch, use the JSON tool.

1. On the source shop, click **Export JSON**.
2. Switch your view to the target shop.
3. Unlock editing, then click **Import JSON** and select the file.
4. An **Import Diff Modal** will appear. The system analyzes the differences between the file and what currently exists on the shop, categorizing changes into `Insert`, `Update`, or `Remove` badges.
5. Select the checkboxes for the specific rows you want to apply, and click **Apply Changes**.
