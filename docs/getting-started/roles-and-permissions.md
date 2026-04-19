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

POS action permissions are managed in HQ at `POS Settings` -> `POS Users` -> `User Groups`.

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

## Runtime Permission Prompts

When a protected action is blocked, POS can show:

- `Permission denied`: the signed-in staff account does not have the required user group permission.
- `Input staff code`: POS needs a staff code before it can check the permission.
- `Input authorizing staff code`: a second authorized staff member must approve the action.
- `A second staff member is required`: the same staff member cannot approve their own protected action.

If one of these prompts appears during service, stop and ask a manager or authorized staff member instead of retrying with random staff codes.

## Feature Visibility Notes

Some actions appear only when enabled by configuration:

- Roster `Clock In` / `Clock Out`
- `Split Table`
- Auto-open order actions
- `More Tools` cards (`Queue Controller`, etc.)
- Third-party payment modification options
- User group permissions configured in HQ `POS Users`

## Escalate to Manager Immediately When

- Payment outcome is unclear after retry
- Void/return is blocked or policy-restricted
- `POS Code` or device setup must be changed
- Day-end cannot proceed normally
