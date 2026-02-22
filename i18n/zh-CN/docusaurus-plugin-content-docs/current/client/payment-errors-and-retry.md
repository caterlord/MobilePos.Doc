---
sidebar_position: 4
title: Payment Errors and Retry
---

## Objective

Handle payment failures safely without duplicate charges.

## Standard Retry Workflow

1. Confirm transaction is still in pending/unpaid state.
2. Read and note the payment error code.
3. Retry the same method once.
4. If still failed, switch to another payment method.
5. Complete sale and confirm receipt reference.

## Operator Rules

- Do not repeatedly retry more than once on same method.
- Do not start a new ticket until current ticket status is clear.
- Escalate gateway/provider errors with timestamp and terminal ID.

## Escalation Data

Capture before escalation:

- Branch/store
- Terminal ID
- Payment type
- Error code/message
- Attempt time

## TODO for Maintainers

- Add provider-specific error code table.
- Add exact on-screen status mapping.
