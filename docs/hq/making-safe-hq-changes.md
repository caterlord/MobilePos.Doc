---
sidebar_position: 5
title: Making Safe HQ Changes
---

:::info[Who this is for]
Anyone making live configuration changes in HQ, especially during trading hours.
:::

## Why this matters

HQ changes can affect stores, staff workflows, checkout behavior, online ordering, and reporting. A small edit in the wrong place can create confusion across multiple shops.

## Core idea

Treat every HQ change as a controlled change:

- identify the correct scope
- change one thing at a time
- verify the result
- keep enough detail to undo or explain the change if needed

## Safe change checklist

1. Confirm the correct brand and shop before you edit.
2. Capture the current state with a screenshot or note.
3. Confirm whether the change is for one shop, all shops, or a specific channel.
4. Make one related change at a time.
5. Save and verify before moving to the next setting.
6. Test in the real destination when practical: POS, online ordering, reports, or the target shop.
7. Record what changed if the setting affects operations, finance, or customer experience.

## High-risk changes

Treat these as higher-risk and avoid changing them casually during busy service:

- payment methods
- tax and surcharge rules
- workday schedule
- system parameters
- menu pricing
- promotions and discounts
- online ordering channel setup
- device settings tied to live terminals

## How this affects your work

After you save a change, verify the outcome in the place that uses it.

Examples:

- If you change a payment setup, verify it in the target shop and checkout flow.
- If you change menu structure, verify the correct menu or category appears where staff or customers expect it.
- If you change a report setup, verify the target report still groups data correctly.

## Related tasks

- [Brand, Shop, and Channel Scope](./brand-shop-and-channel-scope.md)
- [Store Settings Overview](./store-settings/overview.md)
- [POS Settings Overview](./pos-settings/overview.md)
- [Menu & Catalog Overview](./menu-catalog/overview.md)

## When to ask owner/admin

- The change affects multiple shops and you cannot test all of them.
- The change touches finance, compliance, or billing.
- You do not have a rollback path.
- You are editing `System Parameters` and do not fully understand the field.
