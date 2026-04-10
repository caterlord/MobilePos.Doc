---
sidebar_position: 2
title: 開班
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
在接第一張訂單前準備終端的收銀員和班次經理。
:::

## 開始前

- 終端已開機並連線
- 您已備妥登入 PIN 碼
- 至少有一部印表機可供使用

## 步驟

1. 輸入您的 PIN，然後按 `登入`。
2. 從左側選單開啟 `Devices`。
3. 前往 `Printer` 分頁。
4. 在已啟用的印表機上按 `Test Print`。
5. 確認沒有 `POS Code is required` 警告。
6. 返回 `Ordering`。

<Tabs>
  <TabItem value="with-roster" label="有出勤">
1. 在登入畫面按 `出勤`。
2. 按 `上班打卡`。
3. 繼續正常登入。
  </TabItem>
  <TabItem value="without-roster" label="沒有出勤">
1. 如果沒有顯示 `出勤`，請直接繼續正常登入。
2. 不需要額外操作。
  </TabItem>
</Tabs>

## 您會看到

- `Devices` 頁面會開啟，印表機狀態正常
- 會出現 `Test print sent ... successfully` 訊息
- `Ordering` 頁面會正常載入堂食 / 訂單畫面

![裝置 印表機 tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Add 印表機 dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![印表機 added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
![印表機 Info 狀態 dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test 列印 結果](/img/manual/en/client/cl-03-devices-test-print-result.png)
![設定 一般 配合 語言 及 POS 代碼](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

## 如果出現問題

:::warning[`POS Code is required`]
請前往 `Settings` -> `General`，填寫 `POS Code`，然後按 `Save`。
:::

:::note[印表機未準備好]
先檢查紙張 / 上蓋 / 網絡，再重試 `Test Print`。
:::

## 何時需要找經理／管理員

- 您無法編輯設定（`POS Code`、系統欄位）
- 印表機在本地檢查後仍然失敗
- 登入 / 訂閱警告阻止開班
