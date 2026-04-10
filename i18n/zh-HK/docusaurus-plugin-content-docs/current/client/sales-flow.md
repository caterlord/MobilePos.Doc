---
sidebar_position: 3
title: 銷售流程
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
在付款前接單的收銀員。
:::

## 開始前

- 您已成功登入
- 您已位於 `Ordering` 頁面
- 菜單資料已載入

## 步驟

<Tabs>
  <TabItem value="dine-in" label="堂食訂單">
1. 按 `Dine-In`。
2. 按目標桌台圖示。
3. 加入品項和需要的 modifiers。
4. 確認品項已出現在訂單清單。
5. 按 `Send` 或按 `Checkout`。
  </TabItem>
  <TabItem value="takeaway" label="外賣訂單">
1. 按 `Takeaway`。
2. 開啟目標外賣訂單。
3. 加入品項和需要的 modifiers。
4. 確認品項已出現在訂單清單。
5. 按 `Send` 或按 `Checkout`。
  </TabItem>
</Tabs>

:::note[外賣聯絡資料]
如果您需要在外賣列印單上顯示顧客姓名或電話，請在功能選單使用 `Order Contact`。詳見 [Function 指南](../functions/order-contact)。
:::

## 您會看到

![訂單 頁面 品項 selector](/img/manual/en/client/cl-06-order-page-item-selector.png)
![訂單 list 配合 品項](/img/manual/en/client/cl-07-order-list-with-items.png)
- 每次選擇品項後，數量和行總額都會更新
- `Send` 和 `Checkout` 操作可用
- 品項名稱會依照目前語言和 `Settings` 內的品項名稱對應（`Main` / `Alt`）顯示
- 外賣訂單的已儲存聯絡資料會顯示在訂單標題下方

:::note[Screenshot pending]
Needed file: `client/cl-41-order-item-name-language-mapping.png`
:::

## 桌台畫面切換

當 `Settings` 已啟用 `Floor Plan Mode` 時，堂食桌台畫面右下角會出現圓形切換按鈕：

- 方格圖示：切換到 `Table List`
- 地圖圖示：切換到 `Floor Plan`

這樣可以讓員工不用離開點餐流程，也能快速切換版面。

:::note[Screenshot pending]
Needed file: `client/cl-37-ordering-table-view-toggle-floorplan-tablelist.png`
:::

## 功能選單（需要時）

按三點功能按鈕開啟 `Select Function`。

如果您設定了很多功能，`Select Function` 可能會顯示 `Previous` 和 `Next` 方塊，方便您翻頁。

按三點功能按鈕可使用：

- `Apply Discount`
- `Cancel Discount`
- `Apply Service Charge`
- `Cancel Service Charge`
- `Change Table`
- `Order Contact`
- `Order Remark`
- `To Dine-In` / `To Takeaway`
- `Split / Merge Txn`
- `Void Txn`
- `Pay In / Pay Out`
- `Member Login`

相關詳細指南：

- `Apply Discount`：[Function 指南](../functions/apply-discount)
- `Apply Service Charge`：[Function 指南](../functions/apply-service-charge)
- `Change Table`：[Function 指南](../functions/change-table)
- `Order Contact`：[Function 指南](../functions/order-contact)
- `To Dine-In` / `To Takeaway`：[Function 指南](../functions/to-dine-in-to-takeaway)
- `Split / Merge Txn`：[Function 指南](../functions/split-merge-transaction)
- `Member Login`：[Function 指南](../functions/member-login)
- `Pay In / Pay Out`：[Function 指南](../functions/pay-in-pay-out)

![訂單 function 菜單](/img/manual/en/client/cl-08-order-function-menu.png)
![套用 Discount dialog](/img/manual/en/client/cl-09-apply-discount-dialog.png)
![套用 Service Charge dialog](/img/manual/en/client/cl-10-apply-service-charge-dialog.png)
![訂單 action 按鈕: 傳送 / 連結 ODO / Checkout](/img/manual/en/client/cl-11-order-send-close-checkout.png)

## 加入訂單備註

1. 按三點功能按鈕。
2. 在 `Select Function` 中按 `Order Remark`。
3. 如果 `Order Remark` 在其他頁，按 `Previous` 或 `Next`。
4. 輸入備註，然後確認。
5. 確認備註已顯示在訂單標題下方。
6. 如果您需要再次編輯，按備註旁邊的鉛筆圖示。

:::note[Screenshot pending]
Needed file: `client/cl-42-select-function-dialog-pagination.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-43-order-remark-display-edit.png`
:::

## 如果出現問題

:::warning[無法分拆 / 合併或作廢]
先送出尚未處理的品項，再重試。
:::

:::note[選錯桌台]
結賬前可先在功能選單使用 `Change Table`。
:::

## 何時需要找經理／管理員

- 作廢 / 退回需要經理政策批准
- 折扣 / 服務費選項不見了，但應該可用
- 訂單行為與門店規則不一致
