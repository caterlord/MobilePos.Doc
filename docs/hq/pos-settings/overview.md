---
title: POS Settings Overview
---

:::info[Who this is for]
Admins configuring how the POS behaves for checkout, staff access, and core financial setup.
:::

## Before you start

- Confirm the correct brand.
- Confirm whether the setting is a shared definition or still needs shop-level enabling.
- Check whether the change affects live checkout.

## What this section is for

`POS Settings` controls the main business rules that the POS uses during service.

Use this section for:

- tenders and checkout methods
- tax and surcharge logic
- departments and reporting groupings
- reason lists for high-risk actions
- POS user access
- payment vendor connections for on-premise payment gateways

## How to use this section

- [Payment Methods](./payment-methods.md): define tenders staff can use at checkout.
- [Tax & Surcharge](./tax-and-surcharge.md): define automatic or manual financial additions.
- [Departments](./departments.md): group items for reporting and structure.
- [Reasons](./function-reasons.md): create standard reason choices for controlled actions.
- [POS Users](./pos-users.md): manage cashier and manager login records.
- [Payment Vendors](./payment-vendors.md): manage installed payment gateway vendors and per-shop vendor setup.

## Common tasks

- Add a new tender: start with [Payment Vendors](./payment-vendors.md) if the method depends on a vendor, then update [Payment Methods](./payment-methods.md).
- Review tax or service charge behavior: use [Tax & Surcharge](./tax-and-surcharge.md).
- Add or disable a cashier account: use [POS Users](./pos-users.md).
- Standardize void or pay-out reasons: use [Reasons](./function-reasons.md).

## What changes after you save

Many `POS Settings` records are shared setup records. Some still require shop-level enabling or follow-up configuration.

Always verify changes that affect payment flow, tax totals, service charge, or staff access.

## If something goes wrong

- Confirm whether the setting is brand-level, shop-level, or both.
- Check whether a linked vendor or shop setting is missing.
- Test the change in the target checkout flow before editing additional settings.

## When to ask owner/admin

- The change affects money handling or tax reporting.
- The tender depends on a gateway or vendor you cannot verify.
- You are unsure whether a user group or vendor should be changed for all shops.
