---
sidebar_position: 4
title: 收款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
處理結賬的收銀員。
:::

## 開始前

- 訂單已準備好付款
- 顧客已確認付款方式

## 步驟

<Tabs>
  <TabItem value="amount" label="單一金額">
1. 按 `Checkout`。
2. 保持在 `單一金額`。
3. 選擇付款方式。
4. 輸入金額，然後按 `Pay`。
  </TabItem>
  <TabItem value="split-by-amount" label="按金額分單">
1. 按 `按金額分單`。
2. 加入第一筆部分付款。
3. 加入剩餘金額。
4. 按 `Pay`。
  </TabItem>
</Tabs>

## 您會看到

- `Unpaid` 金額會正確減少
- 已付款行會按付款方式記錄

![結賬金額分頁](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![按金額分單的結賬畫面](/img/manual/en/client/cl-14-checkout-split-by-amount.png)

## 如果出現問題

:::warning[付款失敗]
只有在狀態明確顯示 failed / cancelled 時，才重試一次。
:::

## 何時需要找經理／管理員

- 付款結果不清楚
- 付款處於卡住或鎖定狀態
