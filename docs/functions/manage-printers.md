---
title: Manage Printers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Manager or authorized staff managing printer setup and maintenance in `Devices` -> `Printer`.
:::

## Before you start

- You are signed in with device-setting permission
- Target printer is powered on and connected to the same network
- `POS Code` is set

## Quick flow

1. Open `Devices`.
2. Open `Printer` tab.
3. Select the printer row (or tap `Add Printer`).
4. Run the required action (`Info`, `Test Print`, edit, remove, or spooler).
5. Verify status before returning to operations.

## Tasks

<Tabs>
  <TabItem value="add-printer" label="Add Printer">
1. Tap `Add Printer`.
2. Fill `Name`, `Printer Type`, `Connection`, `IP Address`, and `Port`.
3. Tap `Save`.
4. Tap `Test Print`.

What to verify:

- Printer appears in list
- Status is connected/ready
- Test print success message appears

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
  </TabItem>
  <TabItem value="info-status" label="Printer Info and Status">
1. Tap `Info` on target printer row.
2. Review `Connection Details` and `Status Details`.
3. Tap `Close`.

What to verify:

- `Type`, `Address`, `Status`, and `Last checked` are correct

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="Test Print">
1. Tap `Test Print` on target printer row.
2. Wait for result message.
3. Confirm physical test slip output.

What to verify:

- Success message: `Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="Edit or Remove Printer">
1. Tap edit icon to update `Name`, `Printer Type`, `Connection`, `IP Address`, and `Port`.
2. Tap `Save`.
3. To remove, tap delete icon.
4. Confirm removal prompt.

What to verify:

- Updated settings are shown in printer row
- Removed printer disappears from list

> Screenshot pending: `functions/fn-printer-remove-confirm-dialog.png`
  </TabItem>
  <TabItem value="spooler" label="Manage Printer Spooler">
1. Tap `Manage Spooler` on target printer row.
2. Review tabs: `Printing`, `History`, `Error`.
3. Use required actions:
   - `Refresh`
   - `Clear Selection`
   - `Remove Selected`
   - `Remove All`
4. In `Error` tab, use retry actions:
   - `Select All`
   - `Retry Selected`
   - `Retry All`

What to verify:

- Queue decreases after retry/remove actions
- New print jobs are processed normally

> Screenshot pending: `functions/fn-printer-spooler-manager-dialog.png`
> Screenshot pending: `functions/fn-printer-spooler-error-retry-actions.png`
  </TabItem>
</Tabs>

## If something goes wrong

:::warning[Test print fails]
Check IP/port, paper, printer cover, and network, then retry once.
:::

:::warning[Status remains disconnected]
Verify power/network on printer first, then run `Test Print`.
:::

:::note[Spooler retries do not clear error jobs]
Remove failed jobs, validate connectivity, then resend order/print request.
:::

:::warning[Failed to remove printer]
If removal partially fails, refresh printer list and confirm whether spooler files still exist.
:::

## When to ask manager/admin

- `POS Code` is required but you cannot edit settings
- Printer settings save succeeds but printer remains unavailable
- Spooler error queue keeps growing after retry/remove
