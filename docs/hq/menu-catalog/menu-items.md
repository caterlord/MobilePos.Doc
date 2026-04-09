---
sidebar_position: 1
---

# Menu Items

![Menu Items List](/img/hq/menu-catalog/menu_items_list.png)

The **Menu Items** module is the core catalog database for your POS. Every product sold, customized, or tracked must exist as an item here. 

## Item Types

Before creating an item, you must understand its functional behavior.

- **Sellable Item**: A standalone product (e.g., `Coca-Cola`, `Beef Burger`).
- **Modifier**: An add-on or instruction attached to a sellable item (e.g., `No Ice`, `Extra Cheese`, `Medium Rare`). Modifiers are generally not sold alone.
- **Set Item (Combo)**: A parent placeholder that requires the cashier to select children items to complete the order (e.g., `Lunch Set A`). 

## Basic Configuration

| Field | Description |
| --- | --- |
| **Item Code** | The alphanumeric SKU for backend tracking. Usually matched against your third-party inventory software. |
| **Item Name** | The primary HQ backend identifier. |
| **POS Display Name** | How the button actually reads on the POS tablet. Very long names will wrap on smaller iPad screens. |
| **Printed Name** | What gets printed on the kitchen chit or customer receipt. Often abbreviated (e.g., `C.Cola` instead of `Coca-Cola (Can)`). |
| **Category & Department** | Determines where the button lives on the POS grid (Category) and how financial sales are rolled up in accounting reports (Department). |

## Advanced Triggers (Switches)

You can assign complex operational logic to individual items during the checkout flow:

- **Is Manual Price**: When tapped, the POS prompts the cashier with a keypad to type in an open dollar amount. Usually paired with **Is Manual Name** for generic "Open Food" buttons.
- **Non-Discountable**: Strictly forbids applying manual or automatic discounts to this item (e.g., applying a 10% VIP discount to a cart will exclude this item from the math).
- **Non-Service Charge**: Useful for items like retail merchandise or delivery fees where standard restaurant service charges should not apply.
- **Non-Taxable**: Excludes the item from automatic GST/VAT additions.
- **Show Item/Price on Receipt**: Toggling these to `false` allows "silent" items to be ordered on the POS (sent to the kitchen) but completely hidden from the customer's final receipt bill.

## Multi-Shop Availability & Pricing

Instead of duplicating the same item for every branch, a single Menu Item is pushed to all branches globally.

In the item editor's **Pricing Tab**, you can set unique selling prices per branch.
In the **Availability Tab**, you can independently toggle `Enabled` (permanently remove from that branch's POS menu) or `Out of Stock` (temporarily grey out the button).
