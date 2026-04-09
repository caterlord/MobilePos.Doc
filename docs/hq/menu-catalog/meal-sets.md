---
sidebar_position: 7
---

# Meal Sets

![Meal Sets](/img/hq/menu-catalog/meal_sets_page.png)

The **Meal Sets** module is the structural engine behind Combo Meals (e.g., a "Lunch Set" where the customer chooses 1 Main Course, 1 Side, and 1 Drink).

Under the hood, Meal Sets function identically to Modifier Groups, but instead of containing cooking instructions (like "No Ice"), they contain actual Menu Items that the customer gets to choose from to build their combo.

## How to build a Combo Meal

Building a combo meal requires linking several components together. It is a multi-step process:

### Step 1: Create the Meal Set Groups
In this module, create a group for each "choice" category in your combo. 
*Example: Create a group named `Choose 1 Main` (Min Selection: 1, Max Selection: 1).*
*Example: Create a group named `Choose 1 Drink` (Min Selection: 1, Max Selection: 1).*

### Step 2: Populate the Groups
Expand the row using the chevron arrow. Add the actual Menu Items to the group.
*Example: Inside `Choose 1 Main`, add `Burger`, `Chicken Sandwich`.*

> [!TIP]
> **Price Overrides**: By default, a combo has a fixed baseline price (e.g., $10). Items placed inside a Meal Set Group will effectively cost $0.00. However, if you want an item to incur an upcharge (e.g., +$2.00 to upgrade the drink to a Milkshake), you map the Milkshake into the `Choose 1 Drink` group and set its override price to $2.00.

### Step 3: Link to the Parent Item (in Menu Items)
Go back to the **Menu Items** module. Create the parent wrapper item (e.g., an item called `Combo A` with a base price of $10.00). Ensure the `Item Type` is set to **Set**.

When you edit `Combo A`, you will see a tab for Meal Sets. Attach the `Choose 1 Main` and `Choose 1 Drink` groups you just created to this parent item.

Now, when a cashier rings up `Combo A`, the POS will automatically pop up a wizard walking them through the configured Meal Set groups.
