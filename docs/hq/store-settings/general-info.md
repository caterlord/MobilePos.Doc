---
sidebar_position: 1
---

# General Info

![General Info List](/img/hq/store-settings/store_info_list.png)

The General Info section (`Store Info Settings` in the HQ Portal) manages fundamental identity attributes of a specific branch. These configurations sync down to the POS terminal, dictate the layout of your printed receipts, and manage time-settings.

## Basic Information

These fields define the internal and external identity of the shop. Waitstaff will see these names when selecting their shop during POS login.

| Field | Description |
| --- | --- |
| **Shop Name** | The primary display name of the branch. **(Required)** |
| **Alt Name** | An alternate name, typically used for localized languages (e.g., Traditional Chinese) displayed to staff on translated POS terminals. |
| **Shop Code** | An alphanumeric code used for internal reporting filtering or integrations with accounting software (e.g., `SH-001`). |
| **Internal Calling Code** | Country dial code prefix for store-to-store internal calling features. |
| **Description & Alt Description** | Internal notes to describe the branch's primary operations. |

## Address Configuration

Addresses are partitioned into two sections. The primary **Address** section is used for backend reporting, but the **Alt Address** section directly influences the receipt printout on the POS.

### Primary Address
The standard operational address fields.
- **Address Lines 1 to 4**: Break down the street, building, and unit details.
- **District, City, Country**: Macro-level geolocation.

### Alt Address (Receipt Footer)
> [!IMPORTANT]
> The **Alt Address** fields are explicitly printed at the bottom or top of your customer receipts (depending on your receipt template). Use these lines to set tax ID numbers or custom "Thank You" messages.

- **Alt Address Lines 1 to 4**: Typically used for legal entities or "Thank you for dining with us!".

## Contact Information
These fields set out who is accountable for the physical branch.
- **Telephone / Fax**: The branch's public contact lines.
- **Contact 1 & Contact Title**: The primary branch manager (e.g., `John Doe`, `General Manager`).
- **Contact 2 & Contact Title**: The secondary shift leader or operations contact.

## Currency & Delivery

| Field | Description |
| --- | --- |
| **Currency Code** | The 3-letter ISO code for the currency operated at this branch (e.g., `USD`, `HKD`). **(Required)** |
| **Currency Symbol** | The symbol printed on receipts and the POS checkout screen (e.g., `$`, `¥`). **(Required)** |
| **Delivery Address** | Specific notes for supply-chain vendors dropping off stock. |

## Timezone & Status

> [!WARNING]
> Ensure the **Timezone** is perfectly aligned with the physical location of the POS terminal. If this is incorrect, your End-of-Day POS sales reports will cut off at the wrong hours.

- **Timezone**: Select from the IANA Timezone dropdown list. The portal automatically handles Daylight Saving Time (DST) toggling based on this selection.
- **Shop Enabled**: A global kill-switch. If disabled, POS terminals configured for this shop will immediately lock out with a "Shop Disabled" error and cashiers will not be able to log in.
