---
sidebar_position: 2
title: Start Shift
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Cashiers and shift managers preparing a terminal before taking the first order.
:::

## Before you start

- Terminal is powered on and online
- You know your login PIN
- At least one printer is physically available

## Steps

1. Enter your PIN and tap `SIGN IN`.
2. Open `Devices` from the left menu.
3. Go to `Printer` tab.
4. Tap `Test Print` on the active printer.
5. Confirm there is no `POS Code is required` warning.
6. Return to `Ordering`.

<Tabs>
  <TabItem value="with-roster" label="With roster">
1. Tap the roster button on the login screen.
2. Tap `Clock In`.
3. Continue with normal sign in.
  </TabItem>
  <TabItem value="without-roster" label="Without roster">
1. If roster options are not shown, continue directly to normal sign in.
2. No extra action is needed.
  </TabItem>
</Tabs>

## What you should see

- `Devices` page opens and printer status is healthy
- `Test print sent ... successfully` message appears
- `Ordering` page loads table/order screen normally

![Devices Printer tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

## If something goes wrong

:::warning `POS Code is required`
Go to `Settings` -> `General`, fill `POS Code`, then tap `Save`.
:::

:::note Printer not ready
Check paper/cover/network first, then run `Test Print` again.
:::

## When to ask manager/admin

- You cannot edit settings (`POS Code`, system fields)
- Printer still fails after local checks
- Login/subscription warnings block start of shift
