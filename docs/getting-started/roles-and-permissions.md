---
sidebar_position: 4
title: Roles and Permissions
---

## Terminal Roles in POS X1

Configured terminal roles include:

- `Staff`
- `Customer Display`
- `Pickup Display`
- `Pickup Controller`
- `Express Checkout`
- `Queue Terminal`
- `Queue Display`
- `Queue Controller`

This manual currently focuses on store-side `Staff` operations.

## Who Can Do What in Store

| Task | Cashier | Manager |
| --- | --- | --- |
| PIN login and roster clock in/out | Yes | Yes |
| Open table/order and add items | Yes | Yes |
| Standard checkout and payment collection | Yes | Yes |
| Retry failed payment (basic flow) | Yes | Yes |
| Change `POS Code` / terminal settings | No | Yes |
| Day-end execution | No | Yes |
| Final decision for void/return exceptions | Limited | Yes |
| Close payment/device incidents | No | Yes |

## Feature Visibility Notes

Some actions appear only when enabled by configuration:

- Roster `Clock In` / `Clock Out`
- `Split Table`
- Auto-open order actions
- `More Tools` cards (`Queue Controller`, etc.)
- Third-party payment modification options

## Escalate to Manager Immediately When

- Payment outcome is unclear after retry
- Void/return is blocked or policy-restricted
- `POS Code` or device setup must be changed
- Day-end cannot proceed normally
