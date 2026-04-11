---
title: 資訊
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
檢查應用健康狀況和支援資料的經理 / 管理員。
:::

## 開始前

- 您已登入
- 您了解門店對偵錯與日誌匯出的政策

## 此畫面用途

使用 `Info` 進行應用程式診斷與支援操作。

政策參考：[資料保留與儲存](../reference/data-retention-and-storage)

## 您可以做什麼

- 檢查應用程式版本與更新狀態
- 切換偵錯模式（`Enabled` / `Disabled`）
- 檢查離線模式狀態，並在可用時點選 `立即恢復線上`
- 開啟日誌檔案選擇器，準備支援資料
- 將選取的日誌 `Export` 到本機資料夾／下載資料夾（包含可用時的 Octopus 日誌）
- 將選取的日誌 `Upload` 到雲端支援路徑
- 從裝置中 `Remove` 選取的日誌

## 匯出或上傳日誌

<Tabs>
  <TabItem value="export" label="匯出日誌（本機檔案）">
1. 按 `Info` > `Export Logs`。
2. 在 `Select Log Files` 中選擇一個或多個日誌檔案。
3. 按 `Export`。
4. 在提示時選擇匯出資料夾（或允許使用預設下載路徑）。
5. 等待完成訊息：`Logs exported to ...`。
  </TabItem>
  <TabItem value="upload" label="上傳日誌（支援）">
1. 按 `Info` > `Export Logs`。
2. 選擇支援人員要求的檔案。
3. 按 `Upload`。
4. 等待完成訊息：`Logs uploaded to ...`。

如支援人員要求您直接將日誌傳到雲端，請使用這個路徑。
  </TabItem>
  <TabItem value="remove" label="移除舊日誌檔">
1. 按 `Info` > `Export Logs`。
2. 選擇舊的 / 不再需要的日誌檔案。
3. 按 `Remove`。
4. 確認移除。

只應移除支援人員已不再需要的檔案。
  </TabItem>
</Tabs>

## 步驟

1. 按 `Info`。
2. 選擇所需操作（版本 / 偵錯 / 離線 / 日誌操作）。
3. 在畫面上確認操作結果。

## 您會看到

:::note[截圖待補]
需要檔案：`client/cl-33-info-page-version-debug-offline-export.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-38-info-log-file-selection-export-upload-remove.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-39-info-log-upload-success-message.png`
:::

## 如果出現問題

:::warning[重新啟用 / 匯出失敗]
請先確認網絡和儲存權限，再重試一次。
:::

:::warning[上傳失敗]
請確認網絡穩定，再重試一次，並保留錯誤訊息交給支援人員。
:::

## 何時需要找經理／管理員

- 更新狀態看起來不正確
- 日誌匯出 / 上傳反覆失敗
- 離線模式無法重新啟用
