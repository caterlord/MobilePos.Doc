---
sidebar_position: 8
title: Apply Service Charge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Who this is for

- Cashiers who need to add or remove service charge before checkout.

## Before you start

- You are signed in and on `Ordering`.
- You have opened the correct order.
- Service charge rules for your store are confirmed.

## Steps

<Tabs>
  <TabItem value="apply-service-charge" label="Apply Service Charge">
1. Open the target order in `Ordering`.
2. Tap the function button.
3. Tap `Apply Service Charge`.
4. Select the service charge option.
5. Confirm the service charge.
  </TabItem>
  <TabItem value="cancel-service-charge" label="Cancel Service Charge">
1. Open the target order in `Ordering`.
2. Tap the function button.
3. Tap `Cancel Service Charge`.
4. Select the service charge you want to remove.
5. Confirm the cancellation.
  </TabItem>
</Tabs>

## What you should see

- After `Apply Service Charge`, the order shows a service charge line and a higher total.
- After `Cancel Service Charge`, the service charge line is removed and the total returns.

![Apply Service Charge dialog: choose a service charge for this order](/img/manual/en/client/cl-10-apply-service-charge-dialog.png)

## If something goes wrong

- `Apply Service Charge` or `Cancel Service Charge` is missing: check user role permissions for this account.
- The service charge list is empty: check store setup and reopen the order.
- The total does not update after confirm: close and reopen the order, then check again.

## When to ask manager/admin

- `Manager only`: a manager authorization prompt appears and you cannot continue.
- Service charge options do not match store policy.
- Service charge is applied but checkout validation still blocks payment.
