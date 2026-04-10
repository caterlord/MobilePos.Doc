---
title: 管理印表機
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
在 `Devices` -> `Printer` 管理印表機設定和維護的經理或授權員工。
:::

## 開始前

- 您已登入並具備裝置設定權限
- 目標印表機已開機並連接至同一網絡
- 已設定 `POS Code`

## 快速流程

1. 開啟 `Devices`。
2. 開啟 `Printer` 分頁。
3. 選取印表機列（或按 `Add Printer`）。
4. 執行所需操作（`Info`、`Test Print`、編輯、移除或 spooler）。
5. 返回日常操作前先確認狀態。

## 任務

<Tabs>
  <TabItem value="add-printer" label="新增印表機">
1. 按 `Add Printer`。
2. 填寫 `Name`、`Printer Type`、`Connection`、`IP Address` 和 `Port`。
3. 按 `Save`。
4. 按 `Test Print`。

要確認：

- 印表機已出現在清單中
- 狀態為已連線 / 已準備好
- 出現測試列印成功訊息

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
  </TabItem>
  <TabItem value="info-status" label="印表機資訊和狀態">
1. 在目標印表機列上按 `Info`。
2. 查看 `Connection Details` 和 `Status Details`。
3. 按 `Close`。

要確認：

- `Type`、`Address`、`Status` 和 `Last checked` 都正確

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="測試列印">
1. 在目標印表機列上按 `Test Print`。
2. 等待結果訊息。
3. 確認實體測試單有印出。

要確認：

- 成功訊息：`Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="編輯或移除印表機">
1. 按編輯圖示，更新 `Name`、`Printer Type`、`Connection`、`IP Address` 和 `Port`。
2. 按 `Save`。
3. 如需移除，按刪除圖示。
4. 確認移除提示。

要確認：

- 更新後的設定已顯示在印表機列
- 已移除的印表機不再出現在清單中

> Screenshot pending: `functions/fn-printer-remove-confirm-dialog.png`
  </TabItem>
  <TabItem value="spooler" label="管理印表機 spooler">
1. 在目標印表機列上按 `Manage Spooler`。
2. 查看 `Printing`、`History`、`Error` 分頁。
3. 使用所需操作：
   - `Refresh`
   - `Clear Selection`
   - `Remove Selected`
   - `Remove All`
4. 在 `Error` 分頁中使用重試操作：
   - `Select All`
   - `Retry Selected`
   - `Retry All`

要確認：

- 重新整理 / 移除後，佇列數量會減少
- 新列印工作可正常處理

> Screenshot pending: `functions/fn-printer-spooler-manager-dialog.png`
> Screenshot pending: `functions/fn-printer-spooler-error-retry-actions.png`
  </TabItem>
</Tabs>

## 如果出現問題

:::warning[測試列印失敗]
請先檢查 IP / port、紙張、印表機上蓋和網絡，再重試一次。
:::

:::warning[狀態仍然顯示 disconnected]
先確認印表機電源和網絡，再執行 `Test Print`。
:::

:::note[Spooler 重試仍無法清除錯誤工作]
請先移除失敗工作、確認連線正常，然後重新送出訂單 / 列印請求。
:::

:::warning[移除印表機失敗]
如果移除只完成一部分，請重新整理印表機清單，並確認 spooler 檔案是否仍然存在。
:::

## 何時需要找經理／管理員

- 已必須的 `POS Code` 無法編輯
- 印表機設定儲存成功，但印表機仍不可用
- spooler 錯誤佇列在重試 / 移除後仍持續增加
