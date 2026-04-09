---
sidebar_position: 1
---

# Third-Party Apps (Partners)

![Partner Settings](/img/hq/integrations/partner_settings_page.png)

The **Third-Party Apps** configuration screen allows X1 POS to bridge data dynamically to external SaaS ecosystems. 

## Supported Integrations

HQ currently supports direct mapping to the following categories of partners. Once a partner is installed via the Marketplace, its specific configuration fields will appear here.

### Accounting & ERP
- **Xero**: Direct ledger posting for day-end close.
- **Oracle ERP**: Enterprise-grade financial drops.
- **Infor**: Operational expense mappings.

### Loyalty & Membership
- **Storellet**, **Ocard**, **Mobile.cards**, **Edenred**, **Eber**, **Prizm**
- These integrations intercept transaction totals during the payment cycle and calculate point accruals dynamically.

### CRM & Customer Data
- **EW CRM**, **AigensCrm**, **Bistrochat**, **Chinetek Intel**
- Pushes marketing segmentation data during dine-in QR orders.

### Reservations & Table Management
- **SevenRooms**, **OptiTable**, **Inline**
- Synchronizes the POS Table Map with the host-stand iPad, firing seating/clearing statuses bi-directionally.

### Inventory & Supply Chain
- **Food Market Hub**, **StoreVue**
- Sends item-depletion ticks per receipt to deduct raw theoretical inventory ingredients.

## Configuring Parameters

Each integration requires specific API tokens (e.g., `Client ID`, `Secret Key`, `Webhook URL`).
Click the edit (pencil) icon next to an installed partner to input these exact values provided by your integration account representative.
