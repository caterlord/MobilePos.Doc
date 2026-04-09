---
sidebar_position: 2
---

# Tax & Surcharge

![Tax and Surcharge](/img/hq/pos-settings/tax_and_surcharge_page.png)

The **Tax & Surcharge** page configures universal cart additions, applied automatically to orders. 
Configurations are cleanly separated into two distinct ledgers: **Taxations** (state/federal requirements like GST or VAT) and **Surcharges** (operational fees like a 10% Service Charge or a holiday premium fee).

## Shared Configuration

Both Taxations and Surcharges use the identical configuration logic. The distinction is reporting-based.

| Field | Description |
| --- | --- |
| **Code & Name** | The internal logic code and the public label printed on the customer receipt. |
| **Priority** | Determines calculation order. If both a Tax and a Surcharge are applied, the system calculates the line items based on Priority. A lower Priority number calculates first. |
| **Fixed Amount vs Percentage** | Toggles the behavior of the fee. A percentage calculates dynamically based on the subtotal. A fixed amount applies a flat fee regardless of order size. |
| **Amount / Percentage Value** | The magnitude. If "Fixed" is selected, input `5.00` for $5. If "Percentage", input `10.00` for 10%. |

## Calculation Modifiers

- **Auto Calculate**: If enabled, the system automatically injects this tax/surcharge onto every order immediately when the cashier opens a new cart. If disabled, the cashier must manually press a specific "Apply Surcharge" function button to apply it.
- **Open Amount**: Transforms the fee into a variable-input prompt. When the fee triggers, the cashier is presented with a keypad to dynamically punch in the exact amount (e.g., variable corkage fees).

## Shop Level Activation

Like Payment Methods, Taxes and Surcharges exist on a global "Brand" level but must be opted-in per shop. 

Toggle the `Enabled` checkbox in the **Shop Settings** matrix to deploy the tax to specific POS terminals.
