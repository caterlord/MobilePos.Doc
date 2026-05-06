---
title: My Subscriptions
---

:::info[Who this is for]
Admins who review X1 POS device seats or manage active marketplace subscriptions for the selected brand.
:::

## Before you start

- Confirm the correct workspace and brand in the top-left selector.
- Release a POS device seat only when the current tablet is damaged, lost, or permanently replaced.
- Make sure the replacement tablet is ready to register after you release the old device.
- Make sure you understand whether removing a marketplace subscription will affect live shops or integrations.
- If a POS shop profile was deleted from a terminal, check this page to confirm the related seat is available again.

## Open this page

Open `My Subscriptions`.

The page has two tabs:

- `X1 Product`: review X1 POS device seats and release a seat from an old tablet.
- `Marketplace`: review and manage marketplace product subscriptions.

## What this page controls

`My Subscriptions` controls two different subscription areas.

### X1 POS device seats

Use `X1 Product` to review the POS subscription seats for the selected brand.

The `X1 POS device seats` table shows:

| Field | What it means |
| --- | --- |
| `Shop` | The shop assigned to the seat. |
| `Status` | `Occupied` means a device is using the seat. `Available` means a replacement tablet can register into that seat. |
| `Device` | The POS device name when available. If the device name is not available, HQ shows a shortened device ID and `Device name unavailable`. |
| `Activated` | When the device took the seat. |
| `Last Online` | The last time that POS device checked its subscription. |
| `Subscription Period` | The seat period if a start or end date is set. |
| `Actions` | The `Release device` action for occupied seats. |

The summary above the table shows `Total Seats`, `Used Seats`, and `Available Seats`.

### Marketplace subscriptions

Use `Marketplace` to review marketplace products currently subscribed for the selected brand.

Depending on the product, the page can show actions such as:

- `Configure`
- `Unsubscribe`

`Configure` only appears for products that have a direct setup page. Marketplace-managed `3rd Party Platforms` usually continue through [General Settings](../online-ordering/general-settings.md) and [3rd Party Platforms](../online-ordering/third-party-platforms.md) instead.

## Steps

### Release a replaced POS tablet

1. Open `My Subscriptions`.
2. Select `X1 Product`.
3. Review `Total Seats`, `Used Seats`, and `Available Seats`.
4. Find the row for the affected shop and device.
5. Check `Device`, `Activated`, and `Last Online` to make sure this is the old tablet.
6. Select the `Release device` icon in `Actions`.
7. Read the warning message.
8. Confirm the release.

After confirmation, the row becomes available and the replacement tablet can register into the freed seat.

### Manage a marketplace subscription

1. Open `My Subscriptions`.
2. Select `Marketplace`.
3. Find the subscription you want to manage.
4. Select `Configure` if the product exposes a configuration page.
5. Select `Unsubscribe` if the product is no longer needed.
6. Confirm the unsubscribe action if prompted.

## What changes after you save

Releasing a POS device seat does not cancel the subscription. It clears the old device from that seat so another tablet can register. The old tablet loses access when it comes online and checks its subscription again.

Device names are recorded when a POS terminal activates or validates the subscription. Older occupied seats may show a shortened device ID with `Device name unavailable` until that tablet checks in with the current app.

When a shop profile is deleted from a POS terminal, the app releases that terminal's POS subscription seat before removing the local shop profile. If the POS shows `Unable to inactivate subscriptions`, do not continue deleting local setup until an admin or support confirms the seat state in HQ.

Removing a marketplace subscription can make related features or integrations unavailable immediately.

For marketplace-managed online-ordering platforms, unsubscribe can also remove the related channel availability and clear saved store-level platform settings. Treat `Unsubscribe` as a high-impact change.

## How to check your change

1. For a released POS tablet, confirm the seat changes from `Occupied` to `Available`.
2. Register the replacement tablet and confirm the seat changes back to `Occupied`.
3. Confirm the replacement tablet can pass its POS subscription check.
4. For marketplace subscriptions, confirm the product still appears if you kept it.
5. For marketplace subscriptions, confirm the product disappears from the active subscription list if you removed it.
6. If you removed a platform subscription, re-check [Channel Settings](../online-ordering/channel-mapping.md) or [3rd Party Platforms](../online-ordering/third-party-platforms.md) before trading.

## If something goes wrong

- If `Select a brand to view X1 POS subscription seats` appears, choose the correct brand first.
- If `No X1 POS subscription seats were found for this brand` appears, confirm that the brand has X1 POS seats assigned.
- If `X1 POS subscription database is unavailable` appears, ask support to check the production subscription database connection.
- If `Release device` is disabled, the seat is already available and no device is assigned.
- If you released the wrong device, register the correct tablet again or ask support before the old tablet is reused.
- If a deleted POS shop profile still leaves the seat as `Occupied`, ask support to check whether the terminal failed while releasing the seat.
- If you unsubscribed by mistake, return to [Marketplace](./catalog.md) and re-subscribe if available.

## When to ask owner/admin

- You are not sure which tablet should be released.
- The tablet may still be in use by a live shop.
- The subscription affects live payment, ordering, or finance workflows.
- You are unsure whether another team or shop still uses the marketplace product.
