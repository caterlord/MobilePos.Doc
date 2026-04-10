---
title: Configure Payment Devices
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Manager or authorized staff configuring payment terminals in `Devices` -> `Payments`.
:::

## Before you start

- You are signed in with device-setting permission
- `POS Code` is set
- Relevant payment method/gateway is enabled in store setup

## Steps

1. Open `Devices`.
2. Open `Payments` tab.
3. Select target device row.
4. Tap `Info` to check status, or tap edit icon to configure.
5. Save changes and re-check status.

## What you should see

- Payment device list with status indicator
- `Info` and edit actions per row
- Unavailable state marker (`!`) on devices not currently available

> Screenshot pending: `client/cl-34-devices-payments-tab-list.png`

## Common edit dialogs

<Tabs>
  <TabItem value="linkly-eftpos" label="Linkly EFTPOS Terminal">
Typical fields and actions:

- `Environment` (`Production` / `Sandbox`)
- `Username`
- `Password`
- `Pair Code`
- `Pair` / `Unpair`
- `POS Name`, `POS Version`, `POS ID`, `POS Vendor ID`

After successful pairing, save the settings and confirm the device remains available in the `Payments` tab.

> Screenshot pending: `functions/fn-payment-linkly-terminal-dialog.png`
  </TabItem>
  <TabItem value="octopus-v3" label="Octopus V3 Reader">
Typical fields include `IP Address`, `Port`, `API ID`, `API Token`, and Octopus toggles.

> Screenshot pending: `functions/fn-payment-octopus-v3-reader-dialog.png`
  </TabItem>
  <TabItem value="other-ecr" label="Other payment terminals">
Generic dialogs usually include connection settings such as `Connection`, `IP Address`, and `Port`.

> Screenshot pending: `functions/fn-payment-generic-device-dialog.png`
  </TabItem>
</Tabs>

## If something goes wrong

:::warning[Device not shown in Payments tab]
Payment-device visibility can depend on enabled linked gateways.
:::

## When to ask manager/admin

- Required payment terminal type is missing
- Settings save succeeds but device remains unavailable
