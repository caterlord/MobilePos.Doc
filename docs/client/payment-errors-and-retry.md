---
sidebar_position: 5
title: Payment Errors and Retry
---

## Objective

Resolve payment failures safely and avoid duplicate charges.

> Screenshot placeholders `cl-17-payment-failed-dialog.png` and
> `cl-18-payment-retry-state.png` are still pending.

## Built-In Rules to Know

- If an Octopus-linked discount exists, payment must use Octopus.
- Checkout locks while payment is processing.
- Some third-party payments become locked after successful authorization.
- If `Round For Cash Only` is enabled, checkout rounding applies only when cash is used in the current payment.
- For EFTPOS terminal payments (for example Linkly), follow terminal prompts and wait for POS result before retrying.

## Retry Workflow

1. Confirm whether payment was actually accepted.
2. Check current payment line status in checkout list.
3. Retry once with the same method only if status is failed/cancelled.
4. If retry fails again, switch to another method.
5. Complete transaction and verify receipt generation.

## If You Need to Back Out

When cancelling checkout, the app can cancel/remove paid lines depending on lock and gateway state.
When leaving checkout via back button or navigation, the table should return to unlocked state.
Do not force-close the app during gateway processing.

## Escalation Data

Provide these details when escalating:

- Transaction number / receipt number
- Payment method
- Terminal ID / POS code
- Table code
- Timestamp
- On-screen failure message
- Whether retry was attempted
