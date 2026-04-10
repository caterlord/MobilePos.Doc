---
title: 庫存
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
控制售罄和限量品項可用性的經理和授權員工。
:::

## 開始前

- 您已登入
- 您可從左側選單進入 `Inventory`
- 門店政策允許在 POS 作庫存覆寫

## 此畫面用途

使用 `Inventory` 在服務期間管理暫時可用性。

## 主要畫面

<Tabs>
  <TabItem value="sold-out" label="Sold Out">
管理已完全不可用的品項。
  </TabItem>
  <TabItem value="limited-item" label="Limited Item">
管理有配額 / 剩餘數量控制的品項。
  </TabItem>
</Tabs>

## 步驟

1. 按 `Inventory`。
2. 選擇 `Sold Out` 或 `Limited Item`。
3. 使用分類 / 搜尋找出目標品項。
4. 套用所需操作（`Cancel`、`Edit`、`Reset` 或批量操作）。
5. 確認品項狀態已更新到清單中。

## 您會看到

- 品項清單會顯示 `Name`、`Quota` 和 `Remain` 等欄位
- 如有可用批量操作，會顯示 `Cancel All` / `Reset All`

:::note[Screenshot pending]
Needed files: `client/cl-30-inventory-sold-out-tab.png`, `client/cl-31-inventory-limited-item-tab.png`
:::

## 如果出現問題

:::warning[品項狀態看起來沒有變]
請先重新整理清單，再確認是否改到了正確的品項 / 分類。
:::

## 何時需要找經理／管理員

- 品項可用性與廚房 / 存貨紀錄衝突
- 批量重設 / 取消會影響很多現有訂單
