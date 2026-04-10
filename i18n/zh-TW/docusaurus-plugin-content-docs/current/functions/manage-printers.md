---
title: 管理印表機
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責在 `裝置` -> `Printer` 中管理印表機設定與維護的經理或授權員工。
:::

## 開始前

- 您已登入，且具備裝置設定權限
- 目標印表機已開機並連上同一個網路
- `收銀機代碼` 已設定

## 快速流程

1. 開啟 `裝置`。
2. 開啟 `Printer` 分頁。
3. 選擇印表機那一列，或點選 `Add Printer`。
4. 執行需要的動作，例如 `Info`、`Test Print`、編輯、移除或佇列管理。
5. 返回營運前，先確認狀態正常。

## 任務

<Tabs>
  <TabItem value="add-printer" label="新增印表機">
1. 點選 `Add Printer`。
2. 輸入 `Name`、`Printer Type`、`Connection`、`IP Address` 與 `Port`。
3. 點選 `Save`。
4. 點選 `Test Print`。

要確認的內容：

- 印表機已出現在清單中
- 狀態是已連線／已準備好
- 出現測試列印成功訊息

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
  </TabItem>
  <TabItem value="info-status" label="印表機資訊與狀態">
1. 點選目標印表機那一列的 `Info`。
2. 檢查 `Connection Details` 與 `Status Details`。
3. 點選 `Close`。

要確認的內容：

- `Type`、`Address`、`Status` 與 `Last checked` 都正確

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="測試列印">
1. 點選目標印表機那一列的 `Test Print`。
2. 等待結果訊息。
3. 確認實體測試單已列印。

要確認的內容：

- 成功訊息：`Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="編輯或移除印表機">
1. 點選編輯圖示，更新 `Name`、`Printer Type`、`Connection`、`IP Address` 與 `Port`。
2. 點選 `Save`。
3. 如果要移除，點選刪除圖示。
4. 確認移除提示。

要確認的內容：

- 更新後的設定有顯示在印表機列上
- 移除後，印表機會從清單中消失

> 截圖待補：`functions/fn-printer-remove-confirm-dialog.png`
  </TabItem>
  <TabItem value="spooler" label="管理印表機佇列">
1. 點選目標印表機那一列的 `Manage Spooler`。
2. 檢查分頁：`Printing`、`History`、`Error`。
3. 使用需要的動作：
   - `Refresh`
   - `Clear Selection`
   - `Remove Selected`
   - `Remove All`
4. 在 `Error` 分頁使用重試動作：
   - `Select All`
   - `Retry Selected`
   - `Retry All`

要確認的內容：

- 重試或移除後，佇列數量會減少
- 新的列印工作會正常處理

> 截圖待補：`functions/fn-printer-spooler-manager-dialog.png`
> 截圖待補：`functions/fn-printer-spooler-error-retry-actions.png`
  </TabItem>
</Tabs>

## 如發生問題

:::warning[測試列印失敗]
先檢查 IP／Port、紙張、印表機上蓋與網路，然後重試一次。
:::

:::warning[狀態仍然顯示離線]
先確認印表機的電源與網路，再執行 `Test Print`。
:::

:::note[佇列重試未清除錯誤工作]
先移除失敗工作，確認連線正常，然後重新送出訂單或列印請求。
:::

:::warning[移除印表機失敗]
如果移除只成功一部分，請重新整理印表機清單，並確認佇列檔案是否仍然存在。
:::

## 何時要找經理／管理員

- `收銀機代碼` 是必要項，但您無法編輯設定
- 印表機設定儲存成功，但印表機仍然不可用
- 佇列錯誤持續增加，即使已重試或移除
