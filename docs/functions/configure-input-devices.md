---
title: Configure Input Devices
---

:::info[Who this is for]
Manager or authorized staff configuring scanner/input hardware.
:::

## Before you start

- You are signed in with device-setting permission
- `POS Code` is set

## Steps

1. Open `Devices`.
2. Open `Input Devices` tab.
3. Tap `Info` to check status if needed.
4. Tap edit icon on target device.
5. Update required fields and tap `Save`.

## What you should see

- Input device list with status indicator
- `Info` and edit actions on each row

> Screenshot pending: `client/cl-35-devices-input-devices-tab-list.png`

For barcode/QR scanner, edit dialog may include:

- `Scanner Input Sources`
- `Camera`
- `USB / Bluetooth`
- `Scanner Preview`
- `Camera` (camera-facing selection)
- `Test USB/Bluetooth scanner`
- `Enable camera fallback`

> Screenshot pending: `functions/fn-input-barcode-scanner-dialog.png`

When you use a USB or Bluetooth scanner, select `USB / Bluetooth` as the primary scan method. Scan into `Test USB/Bluetooth scanner` and check that the scanned value appears before you tap `Save`.

When you want the POS to open the camera first, select `Camera`. If USB/Bluetooth is primary but staff may need camera scanning as backup, turn on `Enable camera fallback`.

## If something goes wrong

:::warning[Scanner not reading]
Verify the selected scanner input source. For USB/Bluetooth scanners, confirm the scanner sends keyboard text and Enter. For camera scanning, confirm the camera permission and camera-facing option, then retry.
:::

## When to ask manager/admin

- Input device remains unavailable after save
- Required scanner option is missing
