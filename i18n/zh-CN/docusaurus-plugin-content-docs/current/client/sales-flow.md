---
sidebar_position: 3
title: Sales Flow
---

## Objective

Process a standard customer sale from item entry to receipt completion.

## Procedure

1. Start a new transaction.
2. Add items by scanning barcode or searching catalog.
3. Confirm quantity, unit price, and line discounts.
4. Apply promotions or manual discounts if authorized.
5. Confirm subtotal and tax.
6. Select payment method.
7. Confirm payment approval.
8. Print or send receipt.

## Validation Checks

- Basket total matches customer confirmation.
- Payment state is successful.
- Receipt number is generated and visible.

## Exception Handling

- If barcode scan fails, use item search by name/SKU.
- If price mismatch occurs, request manager approval before override.
- If payment fails, follow `Payment Errors and Retry`.

## TODO for Maintainers

- Add exact payment states by method.
- Add screenshots for split payment if supported.
