---
sidebar_position: 1
title: Online Ordering Overview
---

:::info[Who this is for]
Admins maintaining customer-facing digital ordering channels such as QR ordering, app ordering, or third-party menu routing.
:::

## Before you start

- Confirm the correct brand and target shop or channel.
- Confirm the base menu and item setup already exists.
- Decide whether you are changing category display, menu assignment, shop-level setup, channel availability, or customer-facing text.

## What this section is for

![Online Ordering Overview](/img/hq/online-ordering/oo_overview_page.png)

The **Online Ordering** module manages how your POS Menu catalog is projected to customer-facing channels such as BYOD (Bring Your Own Device) QR Code ordering, native Mobile Apps, and third-party API aggregators.

Rather than managing a separate database of items, Online Ordering syncs directly with your core Menu Catalog, allowing you to selectively publish items, apply different pricing tiers, and override translations specifically for the digital storefront.

## How to use this section

Use the child pages in this order when setting up or reviewing a channel:

1. [Categories and Items](./categories-and-items.md): decide what is visible online.
2. [Menus and Combinations](./menus-and-combinations.md): group online items into usable menus.
3. [General Settings](./general-settings.md): open the correct store and manage store-level online ordering setup.
4. [3rd Party Platforms](./third-party-platforms.md): subscribe and configure delivery or integration platforms for one store.
5. [Channel Settings](./channel-mapping.md): control which categories are available on each order channel.
6. [Call to Action](./call-to-action.md): manage upsell prompts.
7. [UI Translations](./ui-translations.md): adjust customer-facing wording.

## Common tasks

- Publish a new online category: start with [Categories and Items](./categories-and-items.md).
- Enable a delivery or integration platform for one store: use [3rd Party Platforms](./third-party-platforms.md).
- Route category availability to a specific ordering channel: use [Channel Settings](./channel-mapping.md).
- Change customer-facing wording: use [UI Translations](./ui-translations.md).
- Adjust operational settings such as ordering rules: use [General Settings](./general-settings.md).

## What changes after you save

Online ordering changes affect customer-facing channels, so verify them in the target channel after saving. A correct HQ change can still appear wrong if the wrong channel or menu is being checked.

## If something goes wrong

- Confirm the base menu data exists in the core catalog first.
- Confirm you changed the correct channel-specific page.
- Verify the result in the target customer-facing flow rather than only in HQ.

## When to ask owner/admin

- The change affects a live customer-facing menu during trading hours.
- You are unsure whether the issue is in the base menu or in online ordering setup.
