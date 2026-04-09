---
sidebar_position: 7
---

# UI Translations (i18n)

![UI Translations](/img/hq/online-ordering/oo_translations_page.png)

The **UI Translations** feature provides engineering-level control over the actual text strings displayed on the customer-facing web application. 

Instead of filing a support ticket to change the wording of a button, HQ Administrators can override the application dictionary directly from this page.

## How it works

The customer web-app is built using standardized `keys` (e.g., `checkout.button.confirm`). 
By default, the app pulls the English value ("Confirm Order") from the global database. 

This page allows you to inject an **Override Value** for specific languages or specific Order Channels.

### Step-by-Step Override

1. **Select Language**: Pick the locale you want to edit (e.g., `Traditional Chinese (HK)`).
2. **Select Order Channel**: Select which storefront gets the override (e.g., `WEB`).
3. **Search for Key**: Use the search bar to find the text you want to change (e.g., searching for "Dine-In").
4. **Input Override**: Type your new custom branding phrase into the text box (e.g., changing "Dine-In" to "Eat Here Today!").
5. Click **Save**.

The customer web-app will instantly reflect the new text structure without requiring a code deployment or app update.

> [!WARNING]
> Do not leave partial override boxes empty if you intend for them to be blank entirely. If you wish to delete an override and return it to the system default, clear the text box completely before saving.
