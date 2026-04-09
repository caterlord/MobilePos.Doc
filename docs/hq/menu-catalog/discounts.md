---
sidebar_position: 6
---

# Discounts

![Discounts List](/img/hq/menu-catalog/discounts_list.png)

The **Discounts** module configures the manual markdown options available to cashiers or managers on the POS tablet. 

Unlike Promotions (which evaluate the cart and apply automatically), Discounts must be explicitly clicked by a user holding the required security permissions.

## Value Types

When defining the financial impact of the discount, you can route it in two ways:
- **Fixed Amount**: Reduces the target by an exact dollar value.
- **Percentage**: Reduces the target by a multiplier (e.g., 20%).

## Rule Types (Application Scope)

The Rule Type dictates *what* exactly in the cart gets discounted.

1. **Check Discount**: Applies the markdown against the entire cart subtotal. It does not target specific items. 
2. **Item Discount**: Requires the cashier to tap a specific item in the cart, and then tap the discount button. The markdown only applies to the highlighted item.
3. **Open Discount**: A specialized subset where the amount is not predefined in HQ. When tapped, a keypad pops up on the POS tablet, forcing the manager to punch in a custom dollar or percentage amount on the fly.
4. **Item Upgrade**: A specialized fixed amount discount usually mapped to upselling behavior (e.g., upgrading a standard fry to a large fry) without changing the base item SKU.

## Rules Engine

Just like Promotions, the main table only defines the shell. You must click the **Teal Settings/Gear icon** to open the `DiscountRuleEditorModal`. 

Inside the rule editor, you map which exact items or categories are permitted to receive an Item Discount, or you map entire cart requirements for Check Discounts. If you do not map rules to an Item Discount, it will be globally applicable to any item a cashier taps.
