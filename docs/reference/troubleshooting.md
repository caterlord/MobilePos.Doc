---
sidebar_position: 2
title: Troubleshooting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info How to use this page
Pick the symptom tab, follow the steps in order, then check the escalation line.
:::

<Tabs>
  <TabItem value="login" label="Login problem">
If `SIGN IN` does not work:

1. Re-enter PIN carefully and retry once.
2. Confirm the correct staff account is selected/assigned.
3. Verify internet connectivity.

Escalate to manager/admin when:
1. Staff cannot login after two attempts.
2. Subscription/offline warning blocks login.
  </TabItem>
  <TabItem value="printer" label="Printer/device problem">
If printer is unavailable:

1. Open `Devices` -> `Printer`.
2. Check status dot and open `Info`.
3. Run `Test Print`.
4. Verify printer paper/cover/network.
5. Use `Manage Spooler` for stuck queue.

Escalate to manager/admin when:
1. Test print repeatedly fails.
2. Printer remains offline after local checks.
  </TabItem>
  <TabItem value="pos-code" label="POS code required">
If you see `POS Code is required`:

1. Open `Settings` -> `General`.
2. Fill `POS Code`.
3. Tap `Save`.
4. Return to `Devices` and test again.

![Settings General with POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

Escalate to manager/admin when:
1. Cashier cannot edit settings.
2. POS code is unknown/rejected.
  </TabItem>
  <TabItem value="payment" label="Payment problem">
If payment cannot proceed or fails:

1. Confirm selected method is valid for this order.
2. If required by discount rules, use the required method (for example Octopus-linked cases).
3. Retry once only if status is clearly failed/cancelled.
4. If still failing, switch method per store policy.

Escalate to manager/admin when:
1. Payment outcome is unclear (duplicate risk).
2. Payment processing appears stuck.
  </TabItem>
  <TabItem value="order-action" label="Void/split/merge blocked">
If split/merge/void is blocked:

1. Send unsent items.
2. Clear pending edits.
3. Retry the action.

Escalate to manager/admin when:
1. Action stays blocked after clean retry.
2. Operation needs manager approval.
  </TabItem>
  <TabItem value="day-end" label="Day-end problem">
If day-end cannot proceed:

1. Re-check business date/time.
2. Confirm no active/pending transactions remain.
3. Retry with manager account.

Escalate to admin when:
1. Business date appears incorrect.
2. Day-end validation blocks closure repeatedly.
  </TabItem>
  <TabItem value="modify-payment" label="Modify payment blocked">
If `Modify Payment` is blocked:

1. Check whether payment is third-party linked.
2. Follow store policy for correction (often `Return` flow).
3. Document transaction details before manager handoff.

Escalate to manager/admin when:
1. Financial impact requires approval.
2. Both modify and return paths are blocked.
  </TabItem>
</Tabs>

## Escalation Data Template

Always provide:

- Terminal POS code
- User name
- Transaction/receipt number (if applicable)
- Exact screen/action
- Error message text
- Timestamp
