---
title: 庫存
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
經理與授權員工，用來管理售罄與限量品項。
:::

## 開始前

- 您已登入
- 您可以從左側選單開啟 `Inventory`
- 店舖政策允許在 POS 上覆寫庫存

## 此畫面用途

使用 `Inventory` 來管理營業中的暫時可售狀態。

## 主要畫面

<Tabs>
  <TabItem value="sold-out" label="售罄">
管理完全不可用的品項。
  </TabItem>
  <TabItem value="limited-item" label="限量品項">
管理有配額／剩餘數量控制的品項。
  </TabItem>
</Tabs>

## 步驟

1. 點選 `Inventory`。
2. 選擇 `Sold Out` 或 `Limited Item`。
3. 用分類或搜尋找到目標品項。
4. 套用需要的動作（`Cancel`、`Edit`、`Reset` 或批次操作）。
5. 確認清單中的品項狀態已更新。

## 你應該看到什麼

- 品項清單欄位，例如 `Name`、`Quota` 與 `Remain`
- 當可使用批次操作時，會出現 `Cancel All` / `Reset All`

:::note[截圖待補]
需要檔案：`client/cl-30-inventory-sold-out-tab.png`、`client/cl-31-inventory-limited-item-tab.png`
:::

## 如發生問題

:::warning[品項狀態看起來沒有改變]
重新整理清單，並確認您修改的是正確的品項或分類。
:::

## 何時要找經理／管理員

- 品項可售狀態與廚房或庫存記錄不一致
- 批次重設或取消會影響很多進行中的訂單
