---
sidebar_position: 2
---

# Workday Schedule

![Workday Schedule Timeline](/img/hq/store-settings/workday_schedule_page.png)

The **Workday Schedule** tells the POS terminal when a financial "Business Day" begins and ends. It is distinct from physical opening hours—it exists purely to ensure that sales made during late night shifts are booked to the correct report date. 

It also handles the temporal slicing of the day into "Periods" (like Breakfast, Lunch) which can trigger automatic POS Menu shifts.

## Business Hours vs Calendar Days

> [!WARNING]
> A "Workday" often spans across midnight into the next calendar day. If your bar closes at 2:00 AM on a Friday night, those 2 AM sales belong to Friday's financial reporting, not Saturday morning. 

When establishing your business hours for a specific day:
1. **Open Time:** E.g., `06:00`.
2. **Close Time:** E.g., `02:00`.
3. **Day Delta (`+1d`):** By adding +1 day to the close time, you instruct the system that 2:00 AM belongs to the *current* shift's data ledger as an "overflow" period.

## Period Masters

Before plotting time blocks onto the 7-day calendar view, you configure **Period Masters**. 
A Period Master is a foundational definition of a shift, such as "Lunch Service" or "Happy Hour".

- **Creating a Master:** You assign a name and a unique code.
- **Cascade Rename:** If you rename a Master (e.g., from "Lunch" to "Lunchtime Setup"), you can check the **Cascade Rename** box to instantly update all active shifts across all days utilizing that period.

## The Interactive Timeline

The Workday Timeline gives you a visual view of how your day is cut up.

1. **Business Hours Block (Blue):** The master span of the day.
2. **Period Blocks (Colored):** Individual shifts placed within the business hours.
3. **Gap Indicators (Dashed Orange):** The system automatically detects and highlights gaps in your timeline where no Period is active. 
4. **Previous Day Overflow (Grey Hatched):** If Thursday's business hours bleed into Friday morning (e.g., stopping at 3:00 AM), Friday's timeline will show a grey hatched block from midnight to 3:00 AM representing Thursday's overflow.

### Timeline Validations
The editor performs strict safety checks before you save:
- **Period Overlaps:** Periods cannot overlap. If "Lunch" ends at 14:00, "Afternoon Tea" cannot start at 13:30.
- **Out of Bounds:** Periods cannot start before the overarching Business Hours Open Time, nor end after the Close Time.

## Copying Schedules

Setting up 7 days manually is tedious. The Portal offers a **Copy Schedule** bulk tool:
1. Complete Monday's setup perfectly.
2. Click the `Copy` icon next to Monday.
3. Select Tuesday through Friday on the target days list. 
4. **Cross-Shop Syncing:** You can also select other Shop IDs in this modal to blast the same schedule across completely different physical branches.
