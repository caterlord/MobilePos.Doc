---
sidebar_position: 7
title: 日結
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger[僅限經理]
日結不可逆轉，必須由經理角色執行。
:::

:::info[適用對象]
負責關閉營業日的更班經理，以及監督日結控制的店舖店主。
:::

## 開始前

- 所有進行中訂單 / 結賬已處理完畢
- 待處理付款已完成
- 所需的代收 / 代支紀錄已完成
- 營業日期 / 時間正確
- `Settings` -> `Report` 已設定門店需要列印的日結區塊

## 步驟

1. 開啟 `More Tools`。
2. 按 `Day-end`。

<Tabs>
  <TabItem value="current-day" label="日結目前">
1. 按 `Day-end current`。
2. 閱讀警告，然後按 `OK`。
3. 等待完成。
  </TabItem>
  <TabItem value="selected-day" label="日結指定日">
1. 選擇目標日期。
2. 按 `Day-end selected day`。
3. 閱讀警告，然後按 `OK`。
4. 等待完成。
  </TabItem>
</Tabs>

:::tip[指定日行為]
`Day-end selected day` 現在會使用您選取的日期結束營業並寫入營業額。
如果該日期已經處理過，POS 會阻止同一天重複執行日結。
:::

:::note[列印報表內容]
列印的日結報表會跟隨 `Settings` -> `Report` -> `Daily Report Sections`。
如果列印內容缺少某個區塊，請在下一個營業日再執行前先檢查設定。
:::

## 您會看到

![More Tools page](/img/manual/en/client/cl-23-manager-tools-page.png)

![Day-end dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![Day-end irreversible warning](/img/manual/en/client/cl-25-day-end-warning.png)

## 如果出現問題

:::warning[沒有待處理營業日 / 驗證被阻止]
請重新檢查營業日期和未完成交易，然後重試一次。
:::

:::warning[`Day-end has already been processed for the selected day`]
這一天已經結束。請選擇其他日期，或查看該日的既有報表，不要重複執行日結。
:::

:::note[出現警告提示]
這是預期行為。日結屬於高風險且不可逆的操作。
:::

:::warning[列印報表缺少區塊]
請開啟 `Settings` -> `Report`，檢查 `Daily Report Sections` 和所有 `Advanced Sections` 切換，再用更新後的設定處理下一個營業日。
:::

## 建議與不建議

:::tip[建議]
在日結前先確認訂單 / 付款已關閉，並由一位經理負責整個流程。
:::

:::danger[不建議]
任何付款結果仍不清楚時，不要執行日結。
:::

## 何時需要找管理員

- 營業日期看起來不正確
- 經理重試後，日結驗證仍被阻止
- 日結結果與報表不一致
