---
sidebar_position: 7
title: 日結
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger[僅限經理]
日結是不可逆的動作，必須由經理角色執行。
:::

:::info[適用對象]
負責關閉營業日的班次經理，以及監督日結控制的店主。
:::

## 開始前

- 所有進行中的訂單／結帳都已處理完畢
- 待處理付款已完成
- 需要的代收／代支記錄已完成
- 營業日期與時間正確
- `Settings` -> `Report` 中已設定店舖想列印的日結區塊

## 步驟

1. 開啟 `More Tools`。
2. 點選 `Day-end`。

<Tabs>
  <TabItem value="current-day" label="目前日結">
1. 點選 `Day-end current`。
2. 閱讀警告後點選 `OK`。
3. 等待完成。
  </TabItem>
  <TabItem value="selected-day" label="指定日期日結">
1. 選擇目標日期。
2. 點選 `Day-end selected day`。
3. 閱讀警告後點選 `OK`。
4. 等待完成。
  </TabItem>
</Tabs>

:::tip[指定日期的行為]
`Day-end selected day` 會使用您選擇的日期來完成關閉與營收寫入。
如果該日期已經處理過，POS 會阻止再次執行相同日期的日結。
:::

:::note[列印報表內容]
列印出的日結報表會依照 `Settings` -> `Report` -> `Daily Report Sections`。
如果某個區塊沒有出現在列印單上，請先檢查該設定，再在下一個營業日重新執行日結。
:::

## 你應該看到什麼

![More Tools page](/img/manual/en/client/cl-23-manager-tools-page.png)

![Day-end dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![Day-end irreversible warning](/img/manual/en/client/cl-25-day-end-warning.png)

## 如發生問題

:::warning[沒有待處理的營業日或驗證被阻止]
重新檢查營業日期與未完成交易，然後再重試一次。
:::

:::warning[`Day-end has already been processed for the selected day`]
這個日期已經關閉。請改選其他日期，或直接檢查現有報表。
:::

:::note[出現警告提示]
這是預期行為。日結本來就是高風險且不可逆的操作。
:::

:::warning[列印報表缺少區塊]
開啟 `Settings` -> `Report`，檢查 `Daily Report Sections` 與任何 `Advanced Sections` 切換，然後在下一個營業日使用更新後的設定。
:::

## 執行與不要

:::tip[要做]
先確認訂單與付款都已關閉，再執行日結，並由一位經理負責整個流程。
:::

:::danger[不要做]
在任何付款結果仍然不明確時，不要執行日結。
:::

## 何時要找管理員

- 營業日期看起來不正確
- 經理重試後，日結仍然被阻止
- 指定日期的日結結果與報表不一致
