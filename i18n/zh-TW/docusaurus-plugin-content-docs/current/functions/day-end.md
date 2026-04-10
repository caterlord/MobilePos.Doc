---
sidebar_position: 6
title: 日結
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger[僅限經理]
日結是不可逆的，且只能由經理角色執行。
:::

## 開始前

- 所有進行中的訂單都已處理完畢
- 沒有付款停留在不確定狀態
- `Settings` -> `Report` 已設定成列印店舖需要的日結區塊

## 步驟

1. 開啟 `More Tools`。
2. 點選 `Day-end`。

<Tabs>
  <TabItem value="current-day" label="目前日結">
1. 點選 `Day-end current`。
2. 確認警告提示。
3. 等待完成。
  </TabItem>
  <TabItem value="selected-day" label="指定日期日結">
1. 選擇目標日期。
2. 點選 `Day-end selected day`。
3. 確認警告提示。
4. 等待完成。
  </TabItem>
</Tabs>

:::tip[指定日期行為]
報表現在會正確使用所選營業日期。
如果該日期已經日結過，應用程式會阻止重複處理。
:::

:::note[列印報表內容]
列印出的日結報表會依照 `Settings` -> `Report` -> `Daily Report Sections`。
如果列印單缺少某個區塊，請在下一個營業日結束前先檢查該設定。
:::

## 你應該看到什麼

![日結 dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![日結 irreversible 警告](/img/manual/en/client/cl-25-day-end-warning.png)

## 如發生問題

:::warning[無法繼續]
在重試前，先重新檢查營業日期與未完成交易。
:::

:::warning[`Day-end has already been processed for the selected day`]
請選擇其他日期，或檢查該日期的既有日結報表。
:::

:::warning[列印報表缺少區塊]
檢查 `Settings` -> `Report`，特別是 `Daily Report Sections` 與 `Show advanced sections`，然後在下一次日結使用修正後的設定。
:::

## 何時要找管理員

- 營業日期看起來不正確
- 經理檢查後仍然被阻止日結
- 指定日期的日結結果與預期營收不一致
