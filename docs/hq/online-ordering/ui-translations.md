---
sidebar_position: 8
title: UI Translations
---

:::info[Who this is for]
Admins who need to override customer-facing online ordering wording without waiting for an app release.
:::

## Before you start

- Confirm the correct brand.
- Decide which language and storefront channel you need to edit.
- Confirm you want a wording override, not a base menu or item-name change.

## Open this page

Open `Online Ordering` -> `UI i18n`.

## What this page is for

`UI i18n` lets you override the customer-facing text used by the online ordering application.

Use this page to:

- choose a language to edit
- target a specific order channel
- search for the text key you need
- save a custom override value
- remove an override and return to the default wording

This page changes storefront interface wording such as buttons, labels, and prompts. It does not replace menu-item translations managed elsewhere.

![UI Translations](/img/hq/online-ordering/oo_translations_page.png)

## Main sections

### Language selector

Select the language you want to edit, such as `Traditional Chinese (HK)`.

### Order channel selector

Select the storefront or order channel that should receive the override, such as `WEB`.

### Key search

Use the search bar to find the wording key you want to change.

Search by a familiar visible term such as `Dine-In` if you do not already know the internal key name.

### Override value

Enter the replacement text in the override field, then save.

If you want to remove a custom override and return to the default system wording, clear the override field completely before saving.

## Steps

1. Open `Online Ordering` -> `UI i18n`.
2. Select the target language.
3. Select the target order channel.
4. Search for the text key you want to change.
5. Enter the new override value.
6. Select `Save`.

## What changes after you save

The target storefront will use the new wording for the selected language and order channel.

This type of change updates customer-facing interface text without requiring a storefront code deployment.

## How to check your change

1. Reopen the same key and confirm the override value is still present.
2. Open the target storefront in the same language and channel.
3. Confirm the visible wording changed in the correct place.

## If something goes wrong

- Confirm you edited the correct language and order channel.
- Confirm you changed the correct key instead of a similar label elsewhere.
- If you want to remove an override, clear the field completely before saving.
- If the storefront still shows the old wording, refresh the target flow and re-check the selected channel.

## When to ask owner/admin

- The wording affects a live customer journey during trading hours.
- You are unsure whether the text should be a local override or a permanent product-wide default.
- The wording change has legal, payments, or compliance implications.
