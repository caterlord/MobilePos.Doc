---
title: Payment Vendors
---

:::info[Who this is for]
Admins who connect on-premise payment gateway vendors to the POS and maintain vendor setup by shop.
:::

## Before you start

- Confirm the correct brand.
- Confirm the vendor is already available through `Marketplace`.
- Gather any shop-specific credentials or connection details you need before editing.

## Open this page

Open `POS Settings` -> `Payment Vendors`.

## What this page controls

`Payment Vendors` manages installed payment gateway vendors used by the POS.

Use this page to:

- review which vendors are installed
- add a new vendor
- remove a vendor
- open per-shop vendor configuration

## Main sections

### Installed vendors list

The main list shows which payment vendors are currently subscribed for the selected brand.

Key actions:

- `Add Payment Vendor`
- `Configure`
- `Remove`

### Per-shop configuration

Some vendors need separate setup for each shop.

When you open a vendor configuration page, HQ can show:

- which shops are configured
- whether the vendor is already in use
- `Edit`
- `Save`

Some vendors do not require per-shop configuration. In that case, HQ tells you that subscribing through `Marketplace` is enough to enable the vendor's payment gateways.

## Steps

1. Open `POS Settings` -> `Payment Vendors`.
2. Review the installed vendor list.
3. Select `Add Payment Vendor` if the vendor is not installed yet.
4. Select `Configure` for the vendor you want to set up.
5. Open the target shop row and enter the required vendor details.
6. Select `Save`.

## What changes after you save

Saving vendor configuration makes the vendor available for follow-up POS payment setup, but it does not replace [Payment Methods](./payment-methods.md).

## How to check your change

1. Return to `Payment Vendors` and confirm the vendor is still listed.
2. Check the target shop configuration status.
3. Review [Payment Methods](./payment-methods.md) to make sure the POS tender is linked correctly.

## If something goes wrong

- Confirm the vendor is subscribed in `Marketplace`.
- Confirm you entered the shop-level details for the correct shop.
- Check whether the vendor requires no per-shop configuration before you keep retrying.

## When to ask owner/admin

- You do not have the vendor credentials.
- You are unsure whether removing a vendor will affect live checkout.
- The vendor is installed but its payment gateways still do not appear where expected.
