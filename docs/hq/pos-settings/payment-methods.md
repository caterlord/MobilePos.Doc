---
sidebar_position: 1
---

# Payment Methods

![Payment Methods Page](/img/hq/pos-settings/pos_payment_methods_page.png)

The **Payment Methods** page configures the specific tenders available for cashiers to select during checkout. The system supports native cash handling, direct API integrations with third-party payment gateways, and custom offline tenders mapping.

## Field Configuration

When creating or editing a payment method, you define exactly how the POS terminal should interact with the cash drawer or external hardware.

| Field | Description |
| --- | --- |
| **Code & Name** | The internal identifier and the public name displayed on the POS button and receipt (e.g., `VISA`, `Credit Card`). |
| **Display Index** | The order in which the button appears on the POS checkout screen. Lower numbers appear first. |
| **Linked Gateway** | Connects the button to a specific API integration. **See below.** |
| **Surcharge Rate** | Automatically applies a percentage fee (e.g., a 2% credit card surcharge) when this method is selected. |
| **Tx Charges Rate** | Used for backend reporting to track merchant fees charged by the bank. Does not affect the total paid by the customer. |
| **Fixed Amount** | If enabled, selecting this method immediately tenders a specific pre-configured dollar amount (useful for $50 fixed-value vouchers). |

## POS Terminal Behaviors (Switches)

You can toggle operational rules that trigger when cashiers click the payment method on the tablet.

- **Open Cash Drawer**: Fires the RJ11 port command to pop the mechanical cash drawer. Normally enabled only for `Cash`.
- **Allow Tips**: Prompts the cashier to input an overage amount as a tip.
- **Non-Sales Payment**: Excludes this tender from gross revenue calculations (useful for deposits or generic voucher top-ups).
- **Cash Payment**: Flags the method for End-of-Day cash variance tracking.
- **Over Payment**: Allows the cashier to enter an amount larger than the bill total, forcing the POS to calculate standard change.
- **FX Payment**: Allows foreign currency processing (requires Shop Settings FX rates to be populated).
- **Auto Remark**: Automatically triggers a text prompt forcing the cashier to type a reference number (e.g., a cheque number).

## Linked Gateways (Third-Party Integrations)

If you have subscribed to an API-based payment vendor (such as Stripe, Adyen, EFTPay, or specific terminal models like the PAX A920), you must link the method to the gateway driver.

When a cashier clicks a linked method, the POS will lock the screen, push the exact bill total into the external terminal/API, and wait for a "Success" webhook before completing the order. 

> [!WARNING]
> Selecting a **Linked Gateway** that your brand is not subscribed to will cause the POS terminal to freeze on checkout while it waits for a hardware handshake that will never arrive. 

## Shop Settings & FX Rates
After defining the basic method, you must explicitly enable it for target branches. Using the **Shop Settings** table at the bottom of the modal, toggle the `Enabled` switch for your desired locations. If the method requires Foreign Exchange (FX), input the conversion rate against the branch's native currency here.
