---
sidebar_position: 2
title: 開班
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收銀員及班次經理，在開始第一筆訂單前準備收銀機。
:::

## 開始前

- 收銀機已開機並連線
- 您知道自己的登入 PIN
- 至少有一台印表機可用

## 步驟

1. 輸入您的 PIN，然後點選 `登入`。
2. 從左側選單開啟 `裝置`。
3. 前往 `Printer` 分頁。
4. 在啟用中的印表機上點選 `Test Print`。
5. 確認沒有出現 `需要收銀機代碼` 警告。
6. 返回 `Ordering`。

<Tabs>
  <TabItem value="with-roster" label="有出勤">
1. 在登入畫面點選 `出勤`。
2. 點選 `上班打卡`。
3. 接著完成一般登入。
  </TabItem>
  <TabItem value="without-roster" label="沒有出勤">
1. 如果沒有顯示 `出勤`，直接完成一般登入。
2. 不需要額外操作。
  </TabItem>
</Tabs>

## 你應該看到什麼

- `裝置` 頁面會開啟，且印表機狀態正常
- 會顯示 `Test print sent ... successfully` 訊息
- `Ordering` 畫面會正常載入桌台／訂單畫面

![裝置 印表機 tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Add 印表機 dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

## 如發生問題

:::warning[`需要收銀機代碼`]
前往 `Settings` -> `General`，填入 `收銀機代碼`，然後點選 `儲存`。
:::

:::note[印表機尚未就緒]
先檢查紙張、上蓋與網路，然後再執行一次 `Test Print`。
:::

## 何時要找經理／管理員

- 您無法編輯設定，例如 `收銀機代碼` 或系統欄位
- 印表機在基本檢查後仍然失敗
- 登入或訂閱警告阻止您開班
