---
sidebar_position: 5
---

# Promotions

![Promotions List](/img/hq/menu-catalog/promotions_list.png)

The **Promotions** module handles complex, conditional marketing triggers. Unlike a standard Discount (which is manually applied by a cashier), a Promotion automatically scans the cart and applies itself if all conditional rules are met.

## Promotion Types

When creating a new promotion, you must select the fundamental math logic:

1. **Buy One Get One Free**: The classic BOGO. Evaluates pairs of items.
2. **Buy Multi Get One Free**: Requires the customer to buy X target items to trigger 1 free item.
3. **Buy Multi Get Multi**: The most flexible logic. Buy X to get Y.
4. **Combo Deal Fix Discount**: Buy a specific combination of items and reduce the total combo price by a flat dollar amount.
5. **Combo Deal Percent Discount**: Buy a specific combination of items and reduce the total combo price by a percentage.

## General Configuration

- **Save Amount**: Depending on the type selected, this field represents the fixed dollar discount or the percentage off.
- **Priority**: Since multiple promotions can theoretically apply to the same cart, priority dictates the evaluation order. Lower numbers evaluate first. 
- **Published**: Instantly enables or disables the promotion globally across all POS terminals.

## Rules Engine (Configuring the Logic)

The master table only configures the "Shell" of the promotion. To actually make it work, you must click the **Teal Settings/Gear icon** on the table row to open the Rules Engine for that specific promotion.

Inside the Rules Engine, you define the exact **Condition Items** (the trigger) and the **Action Items** (the reward).

- **Condition Array**: You map specific Menu Items or entire Categories that the customer must order.
- **Action Array**: You map the specific Menu Items or Categories that receive the discount.

> [!IMPORTANT]  
> If an item in the cart satisfies a promotion, it is usually "consumed" by that promotion and cannot be used to trigger a *second* promotion on the same receipt, preventing double-dipping.
