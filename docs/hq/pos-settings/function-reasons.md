---
sidebar_position: 5
---

# Function Reasons

![Function Reasons](/img/hq/pos-settings/function_reasons_page.png)

The **Function Reasons** feature configures the standard, pre-defined explanations that a cashier can select when executing a high-risk operational action on the POS terminal.

Instead of cashiers typing free-text explanations for voids or cash drawer openings (which destroys reporting analytic capability), HQ requires them to select a strict category "Reason" from a drop-down. 

## Reason Types (Groups)

When configuring a new reason, you must route it into a specific behavior group. 

1. **Transaction Disable (`TX_DISABLE`)**: 
   - Applied during order voids, item cancellations, or discounts requiring manager overrides.
   - Example reasons: `Customer Changed Mind`, `Spilled/Dropped`, `System Error`, `Complaint`.

2. **Pay In (`PAYIN`)**: 
   - Applied when dropping cash into the drawer without making a sale.
   - Example reasons: `Opening Float Add`, `Change Exchange`.

3. **Pay Out (`PAYOUT`)**:
   - Applied when the manager physically withdraws cash from the drawer to pay a vendor on the spot.
   - Example reasons: `Supplier COD Payment`, `Daily Safe Drop`, `Petty Cash Grocery`.

4. **ISO (`ISO`)**:
   - Technical exception flags for specialized auditing.

## POS Terminal Behavior

If a specific function (like a `Void`) is configured to require a reason, the POS terminal will present a full-screen block when the cashier hits the Void button. The block will display all active reasons under the `TX_DISABLE` group as large, tap-friendly buttons. Custom typing is disabled, ensuring clean backend analytics for "Top 10 Cancellation Reasons".
