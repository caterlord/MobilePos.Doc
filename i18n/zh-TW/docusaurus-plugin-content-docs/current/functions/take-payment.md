---
sidebar_position: 4
title: 付款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責結帳的收銀員。
:::

## 開始前

- 訂單已準備好付款
- 客戶已確認付款方式

## 步驟

<Tabs>
  <TabItem value="amount" label="單一金額">
1. 點選 `Checkout`。
2. 保持在 `Amount`。
3. 選擇付款方式。
4. 輸入金額，然後點選 `Pay`。
  </TabItem>
  <TabItem value="split-by-amount" label="按金額分單">
1. 點選 `Split By Amount`。
2. 先加入第一筆部分付款。
3. 再加入剩餘金額。
4. 點選 `Pay`。
  </TabItem>
</Tabs>

## 你應該看到什麼

- `Unpaid` 金額會正確減少
- 已付行會依付款方式記錄

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split By Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)

## 如發生問題

:::warning[付款失敗]
只有在狀態明確顯示失敗／取消時，才重試一次。
:::

## 何時要找經理／管理員

- 付款結果不明確
- 付款卡住或被鎖住
