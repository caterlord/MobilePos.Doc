---
sidebar_position: 4
title: Brand, Shop, and Channel Scope
---

:::info[Who this is for]
Anyone editing HQ settings who needs to understand where a change will apply before saving.
:::

## Why this matters

Many HQ mistakes happen because the user edits the right setting in the wrong scope.

Examples:

- changing a brand-level payment method when only one shop should use it
- updating a shop schedule and expecting it to change every location
- changing online ordering setup in one channel and expecting every channel to follow

## Core idea

In X1 HQ, settings usually belong to one of these scopes:

### Brand-level

Brand-level settings are shared setup records that can be reused across multiple shops.

Typical examples:

- menu items
- categories
- discounts
- promotions
- base payment method definitions

Brand-level does not always mean every shop uses the setting automatically. A later shop-level enable step may still be required.

### Shop-level

Shop-level settings apply to one physical location.

Typical examples:

- workday schedule
- store information
- device settings
- tables and sections
- shop-specific availability or rollout choices

### Channel-specific

Channel-specific settings affect a customer-facing or operational channel rather than every workflow.

Typical examples:

- online ordering display
- channel mapping
- call-to-action banners
- translation text for customer-facing flows

### User-specific

User-specific settings apply only to one HQ account or one POS user record.

Typical examples:

- profile settings
- account security settings
- HQ workspace member and business access
- POS user login methods

## How this affects your work

Before you save any change, answer these questions:

1. Am I editing a shared record or a single shop?
2. If the record is shared, does it still need shop-level enabling?
3. Do I need to verify the result in POS, HQ, online ordering, or all three?
4. Will this affect live service if I save it now?

## Related tasks

- [Making Safe HQ Changes](./making-safe-hq-changes.md)
- [Store Settings Overview](./store-settings/overview.md)
- [POS Settings Overview](./pos-settings/overview.md)
- [Menu & Catalog Overview](./menu-catalog/overview.md)
- [Online Ordering Overview](./online-ordering/overview.md)

## When to ask owner/admin

- You cannot tell whether the setting is shared or shop-specific.
- The same setup record is used by multiple shops.
- The change affects pricing, tax, payment, or customer-facing menus.
