---
title: Configure X1 Products
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Manager or authorized staff configuring X1 product devices.
:::

## Before you start

- You are signed in with device-setting permission
- `POS Code` is set

## Steps

1. Open `Devices`.
2. Open `X1 Products` tab.
3. Tap `Info` for status details when needed.
4. Tap edit icon on target product device.
5. Save configuration and verify connectivity status.

## What you should see

- X1 product list with status indicator
- `Info` and edit actions per row

> Screenshot pending: `client/cl-36-devices-x1-products-tab-list.png`

## Product-specific dialogs

<Tabs>
  <TabItem value="customer-display" label="Customer Display">
Opens host management dialog (`Customer Display Host`) with host enable/status, token, pairing link, QR, and `Regenerate token`.

> Screenshot pending: `functions/fn-x1-customer-display-host-dialog.png`
  </TabItem>
  <TabItem value="pickup-display" label="Pickup Display">
Opens pickup display configuration dialog with `Enable pickup display`, `Controller mode`, and pairing options (`Use link`, `Pair`, `Scan QR`, `Retry`, `Re-pair`).

> Screenshot pending: `functions/fn-x1-pickup-display-dialog.png`
  </TabItem>
  <TabItem value="express-checkout" label="Express Checkout Kiosk">
Opens kiosk pairing dialog (`Express Checkout Kiosks`) to pair/remove kiosks and review connected/disconnected status.

> Screenshot pending: `functions/fn-x1-express-checkout-kiosk-dialog.png`
  </TabItem>
</Tabs>

## If something goes wrong

:::warning Product device shows disconnected
Open `Info`, verify host/controller pairing values, then retry connection.
:::

## When to ask manager/admin

- Pairing data is unknown or invalid
- Product device remains disconnected after re-pair/retry
