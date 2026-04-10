---
sidebar_position: 8
title: 套用服務費
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
需要在結賬前新增或移除服務費的收銀員。
:::

## 開始前

- 您已登入並位於 `Ordering`。
- 您已開啟正確的訂單。
- 已確認門店的服務費規則。

## 步驟

<Tabs>
  <TabItem value="apply-service-charge" label="套用服務費">
1. 在 `Ordering` 開啟目標訂單。
2. 按功能按鈕。
3. 在 `Select Function` 中按 `Apply Service Charge`。
4. 如果 `Apply Service Charge` 在其他頁，按 `Previous` 或 `Next`。
5. 選擇服務費選項。
6. 確認套用服務費。
  </TabItem>
  <TabItem value="cancel-service-charge" label="取消服務費">
1. 在 `Ordering` 開啟目標訂單。
2. 按功能按鈕。
3. 在 `Select Function` 中按 `Cancel Service Charge`。
4. 如果 `Cancel Service Charge` 在其他頁，按 `Previous` 或 `Next`。
5. 選擇要移除的服務費。
6. 確認取消。
  </TabItem>
</Tabs>

## 您會看到

- 套用 `Apply Service Charge` 後，訂單會出現服務費行，總額會提高。
- 取消 `Cancel Service Charge` 後，服務費行會移除，總額會回復。

![Apply Service Charge dialog: choose a service charge for this order](/img/manual/en/client/cl-10-apply-service-charge-dialog.png)

## 如果出現問題

- `Apply Service Charge` 或 `Cancel Service Charge` 不見了：請檢查此帳號的角色權限。
- 服務費清單是空白的：請檢查門店設定，然後重新開啟訂單。
- 確認後總額沒有更新：先關閉再重新開啟訂單，然後再查看一次。

## 何時需要找經理／管理員

- `Manager only`：如果出現經理授權提示而您無法繼續。
- 服務費選項與門店政策不一致。
- 已套用服務費，但結賬驗證仍然阻擋付款。
