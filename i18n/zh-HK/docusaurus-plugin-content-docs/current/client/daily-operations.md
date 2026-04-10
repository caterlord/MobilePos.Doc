---
sidebar_position: 2
title: 每日營運 SOP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
執行每日門店營運的收銀員和更班經理。
:::

## 開始前

- 終端已連線
- 員工帳戶可用
- 印表機已準備好

## SOP 清單

<Tabs>
  <TabItem value="opening" label="開店">
1. 登入並 `Clock In`（如果已啟用）。
2. 開啟 `Devices` 並執行 `Test Print`。
3. 確認店舖名稱和營業日期 / 時間。
4. 開啟 `Ordering` 並確認桌台畫面有正常載入。
5. 先開啟一次結賬，確認付款方式可用。
  </TabItem>
  <TabItem value="during-shift" label="營運中">
1. 在確認品項後，盡快送出訂單。
2. 看到印表機 / 網絡警示後，重新檢查裝置狀態。
3. 只有在顧客要求時才使用分單付款模式。
4. 如政策要求稽核記錄，請加入備註。
5. 每個付款事件只指定一位負責人處理。
  </TabItem>
  <TabItem value="handover" label="交接">
1. 在交接終端停止建立新訂單。
2. 完成或明確交接進行中的結賬。
3. 確認待處理的作廢 / 退回項目已獲經理批准。
4. 連同交易 ID 一起交接未解決事件。
  </TabItem>
  <TabItem value="closing" label="關店">
1. 處理所有進行中訂單和待處理付款。
2. 確認沒有收銀員卡在結賬處理中。
3. 完成代收 / 代支紀錄。
4. 確認經理已準備好執行日結。
5. 執行日結並確認完成。
  </TabItem>
</Tabs>

## 什麼算是好的營運

- 班次開始時沒有被卡住的印表機 / 付款問題
- 每宗事件都有清楚負責人
- 日結前沒有未完成結賬

## 如果出現問題

:::warning[付款狀態不清楚]
停止重複重試，立即升級給經理。
:::

:::warning[裝置仍然不可用]
先做一次基本檢查，然後升級，不要重複嘗試。
:::

## 何時需要找經理／管理員

- 需要更改 `POS Code` 或其他關鍵設定
- 退款 / 作廢需要批准
- 日結警告 / 驗證阻止關店

參考：`client/end-of-day`、`reference/troubleshooting`
