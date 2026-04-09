---
sidebar_position: 2
---

# Device Config

![Device Settings](/img/hq/integrations/device_settings_page.png)

The **Device Settings** module is the central command for all physical hardware deployed in a physical store. 
Instead of logging into each Android POS individually, you register and configure them remotely from this screen.

## 1. Terminals
A "Terminal" represents a physical POS Android tablet or Android kiosk.
- **POS Code**: The 2-digit operational code printed on receipts (e.g., `01`, `02`).
- **IP Address**: Explicit static IP binding (optional, but highly recommended for stable local-area-network environments).
- **Server vs Cash Register**: Designate if a terminal actively processes payments (Cash Register) or acts merely as an ordering slate (Server). Every store must have at least one designated Cash Register terminal.
- **Model / Resolution**: Declare the exact physical dimensions of the screen so the UI grid can calibrate.

## 2. Printers & KDS
Registers all endpoint receipt printers, label printers, and Kitchen Display System screens.
- Link an IP/Bluetooth printer.
- **Dine-In vs Takeaway**: Designate explicitly if this printer should trigger for specific order types (e.g., a packing-station label printer should only fire if `Takeaway` is selected).

## 3. Cash Drawers
Registers the physical cash drawers, associating them to specific terminals via RJ11 pulse kick logic.
