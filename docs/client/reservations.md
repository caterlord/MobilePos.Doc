---
title: Reservations
---

:::info[Who this is for]
Managers and authorized front-of-house staff checking same-day table bookings on the POS.
:::

## Before you start

- You are signed in with permission to open manager tools.
- The terminal is using the correct shop.
- Native booking has been enabled for the shop in HQ.
- The booking was created in HQ or from the public booking page.

## What this screen is for

`Reservations` shows same-day table bookings for the current shop.

Use it to:

- see how many bookings are due today
- check each booking's guest name, party size, table, and state
- mark a guest as `Arrived`
- move a guest to `Seated`
- mark a booking as `No-show`

Screenshot pending: `static/img/manual/en/client/cl-53-reservations-board.png`

## Main views

The top counters show:

- `Total`
- `Pending`
- `Arrived`
- `Seated`

The reservation list shows:

- `Time`
- `Guest`
- `Party`
- `Table`
- `State`
- `Actions`

## Steps

1. Tap `More Tools`.
2. Tap `Reservations`.
3. Check the counters at the top of the screen.
4. Find the guest by `Time` or `Guest`.
5. Tap `Arrived` when the guest reaches the shop.
6. Tap `Seat` when the guest is seated.
7. Tap `No-show` only when the manager confirms the guest should be marked as missed.

## What you should see

The booking state changes after you tap an action. The same state should be visible in HQ `Store Settings` -> `Reservations`.

## If something goes wrong

:::warning[`Reservations` is missing]
The feature may not be enabled for this shop or your POS user group may not have access. Ask a manager/admin to review HQ setup.
:::

:::warning[The booking is missing]
Refresh the screen and confirm the booking belongs to the same shop and date. If it was created from the public booking page, it may still be waiting for HQ approval.
:::

:::warning[The action fails]
Check the network connection first. If the booking was already changed in HQ, refresh the board before trying again.
:::

## When to ask manager/admin

- You need to mark a booking as `No-show`.
- The guest says the booking details are wrong.
- The booking should be moved to another date, time, table, or shop.
- A booking appears on HQ but not on the POS after refresh.

## Related guides

- [More Tools](./more-tools)
- [HQ Reservations](../hq/store-settings/reservations)
