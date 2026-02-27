---
sidebar_position: 1
title: Function and Feature Map
---

This page is the full index of POS X1 Client functions and where each function is documented.

## Why This Page Exists

Use-case guides are best for training and operations. This page is best for:

- Audits
- UAT checklist planning
- “Where is this function?” lookup
- Gap analysis for upcoming releases

For one-function-per-page reading, use [Function Guides Overview](../functions/overview).

## Module Map

| Module | Core functions | Main references |
| --- | --- | --- |
| Initialization | Language selection, HQ login, brand/shop binding, product type, mode, activation, settings download, first sync | [First-Time Initialization](../getting-started/first-time-initialization) |
| Login | PIN login, roster clock in/out, sign out | [Access and Navigation](../getting-started/access-and-navigation), [Function: Sign In](../functions/sign-in) |
| Ordering | Dine-In/Takeaway navigation, table selection, item add/remove, qty adjustment | [Sales Flow](../client/sales-flow), [Screen Guide: Client Overview](../client/overview) |
| Online Orders | Server/pickup order monitoring and action handling | [Screen Guide: Online Orders](../client/online-orders) |
| Orders Overview | Open/closed/deposit/search transaction lookup | [Screen Guide: Orders Overview](../client/orders-overview) |
| Inventory | Sold-out and limited-item controls | [Screen Guide: Inventory](../client/inventory) |
| Order Functions | Apply/cancel discount, apply/cancel service charge, change table, split/merge txn, void txn, pay in/out, member login | [Sales Flow](../client/sales-flow), [Refunds and Voids](../client/refunds-and-voids) |
| Checkout | Amount, split by amount, deposit, split by item, remarks, payment method selection | [Checkout and Payments](../client/checkout-and-payments), [Function: Take Payment](../functions/take-payment) |
| Payment Recovery | Retry logic, cancellation guardrails, escalation data | [Payment Errors and Retry](../client/payment-errors-and-retry), [Troubleshooting](./troubleshooting) |
| Completed Transaction | Void, return, reopen, modify payment, reprint receipt | [Refunds and Voids](../client/refunds-and-voids), [Function: Void vs Return](../functions/void-vs-return) |
| Devices | Printer add/edit/delete, info/status, test print, spooler, payment/input/X1 device configuration | [Screen Guide: Devices](../client/devices), [Function: Manage Printers](../functions/manage-printers), [Function: Configure Payment Devices](../functions/configure-payment-devices), [Function: Configure Input Devices](../functions/configure-input-devices), [Function: Configure X1 Products](../functions/configure-x1-products), [Troubleshooting](./troubleshooting) |
| Reports | Report selection, date filters, print output | [Screen Guide: Reports](../client/reports) |
| Settings | Language, POS code, cash register code, operation toggles | [Screen Guide: Settings](../client/settings), [Troubleshooting](./troubleshooting) |
| Info | Version, debug mode, offline reactivation, log export/upload/remove | [Screen Guide: Info](../client/info), [Data Retention and Storage](./data-retention-and-storage) |
| More Tools | Open drawer, day-end, pay in/out, queue controller | [Screen Guide: More Tools](../client/more-tools), [Function: Day-end](../functions/day-end), [Function: Pay In / Pay Out](../functions/pay-in-pay-out) |

## Function Scope by Role

| Function area | Cashier | Manager |
| --- | --- | --- |
| Start shift, normal ordering, normal checkout | Yes | Yes |
| Change terminal settings (`POS Code`, system-level config) | No | Yes |
| Void/return approval-sensitive actions | Usually limited | Yes |
| Day-end execution | No | Yes |
| Incident escalation and final decision | No | Yes |

Practical boundaries: [Roles and Permissions](../getting-started/roles-and-permissions)

## Known Gaps (Current Draft)

- Missing screenshots for some warning/error states
- HQ admin function map is still work in progress

See current pending screenshot list in `SCREENSHOT_PREP_LIST_EN.md` (project root).
