---
sidebar_position: 7
title: 套用折扣
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
需要在結賬前調整訂單總額的收銀員。
:::

## 開始前

- 您已登入並位於 `Ordering`。
- 您已開啟正確的訂單。
- 訂單內至少有一個品項。

## 步驟

<Tabs>
  <TabItem value="apply-discount" label="套用折扣">
1. 在 `Ordering` 開啟目標訂單。
2. 按功能按鈕。
3. 在 `Select Function` 中按 `Apply Discount`。
4. 如果 `Apply Discount` 在其他頁，按 `Previous` 或 `Next`。
5. 從清單中選擇折扣。
6. 確認套用折扣。
  </TabItem>
  <TabItem value="cancel-discount" label="取消折扣">
1. 在 `Ordering` 開啟目標訂單。
2. 按功能按鈕。
3. 在 `Select Function` 中按 `Cancel Discount`。
4. 如果 `Cancel Discount` 在其他頁，按 `Previous` 或 `Next`。
5. 選擇要移除的折扣。
6. 確認取消。
  </TabItem>
</Tabs>

## 您會看到

- 套用 `Apply Discount` 後，訂單會出現折扣行，總額會降低。
- 取消 `Cancel Discount` 後，折扣行會移除，總額會回復。

![Apply Discount dialog: choose a discount for this order](/img/manual/en/client/cl-09-apply-discount-dialog.png)

## 如果出現問題

- `Apply Discount` 或 `Cancel Discount` 不見了：請檢查此帳號的角色權限。
- 折扣清單是空白的：請檢查門店折扣設定，然後重新開啟訂單。
- 確認後總額沒有更新：先關閉再重新開啟訂單，然後再查看一次。

## 何時需要找經理／管理員

- `Manager only`：如果出現經理授權提示而您無法繼續。
- 折扣選項與門店政策不一致。
- 已套用折扣，但結賬仍被付款規則提示阻擋。
