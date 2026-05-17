---
sidebar_position: 5
title: Reservations
---

:::info[Who this is for]
Owners, admins, and managers who control table booking rules and review guest reservations for one shop.
:::

## Before you start

- Confirm the correct brand and shop.
- Confirm the shop already has its dine-in tables and floorplan set up.
- Decide whether customers can book online immediately or each booking must be approved by staff first.
- Avoid changing booking rules during a busy service period unless the manager on duty knows about the change.

## Open this page

Open `Store Settings` -> `Reservations`.

## What this page controls

`Reservations` controls the shop's native table booking board and public booking rules.

Use it to:

- review reservations for a selected date
- create a reservation for a guest who calls or walks in
- confirm a pending booking
- mark a guest as arrived
- assign or review the linked table
- enable or disable public booking for the shop
- set booking limits such as party size, lead time, and advance booking window

Screenshot pending: `static/img/hq/store-settings/reservations_board.png`

## Main tabs

### Booking board

`Booking board` shows the reservations for the selected shop and date.

The board includes:

- `Time`
- `Guest`
- `Party`
- `Table`
- `State`
- `Actions`

Use this tab during service to review upcoming bookings, confirm pending bookings, and mark guests as arrived.

### Settings

`Settings` controls whether customers can make public bookings for this shop.

Key fields include:

- `Enable public booking`
- `Require manual approval`
- `Public booking slug`
- `Maximum party size`
- `Booking duration (minutes)`
- `Buffer after booking (minutes)`
- `Minimum lead time (minutes)`
- `Maximum advance window (days)`
- `Booking policy text`

Screenshot pending: `static/img/hq/store-settings/reservations_settings.png`

## Steps

1. Open `Store Settings` -> `Reservations`.
2. Select the correct `Shop`.
3. Open `Settings`.
4. Turn on `Enable public booking` if customers should be able to request bookings from the public booking page.
5. Turn on `Require manual approval` if staff must confirm each customer request before it becomes confirmed.
6. Enter a short `Public booking slug`.
7. Set `Maximum party size`.
8. Set `Booking duration (minutes)` and `Buffer after booking (minutes)`.
9. Set `Minimum lead time (minutes)` and `Maximum advance window (days)`.
10. Enter clear `Booking policy text` for guests.
11. Select `Save settings`.
12. Open `Booking board`.
13. Select the service `Date`.
14. Review the list and use `Confirm` or `Mark arrived` when the reservation reaches that stage.

## Create a staff-entered reservation

Use `New booking` when a guest contacts the shop directly.

1. Select the correct `Shop`.
2. Select `New booking`.
3. Enter the reservation `Time`.
4. Enter the guest name and `Phone`.
5. Enter the `Party` size.
6. Select a `Table` if the table is already known.
7. Add `Guest note` or `Staff note` if needed.
8. Select `Create reservation`.
9. Check that the new reservation appears on `Booking board`.

## What changes after you save

Booking settings affect the selected shop only.

If `Enable public booking` is on, guests can use the public booking page for that shop. If `Require manual approval` is on, new customer requests stay `Pending` until staff confirm them.

Reservation board actions are operational records. They change what HQ, POS, and connected assistant tools show for that booking.

## How to check your change

1. Reopen `Store Settings` -> `Reservations`.
2. Confirm the selected `Shop` still shows the expected booking status.
3. Open `Settings` and review the saved limits.
4. Open `Booking board` for today's date.
5. Create a test booking if the shop is not live.
6. Check that the POS `Reservations` board shows the same booking for the same shop.

## If something goes wrong

- If a guest cannot book online, confirm `Enable public booking` is on and the `Public booking slug` is correct.
- If a valid booking time is blocked, check `Minimum lead time (minutes)`, `Maximum advance window (days)`, and the shop schedule.
- If a booking appears under the wrong shop, stop and check the selected brand and shop before editing more reservations.
- If POS does not show the booking, refresh the POS `Reservations` board and confirm the terminal is using the same shop.

## When to ask owner/admin

- You are not sure whether online bookings should be public for this shop.
- You need to change approval policy for a live service period.
- A customer dispute depends on reservation status history.
- The public booking page should use a different URL or policy text for brand reasons.
