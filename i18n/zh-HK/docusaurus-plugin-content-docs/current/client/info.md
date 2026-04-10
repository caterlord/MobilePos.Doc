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
- 您了解門店對 debug / log 匯出的政策

## 此畫面用途

使用 `Info` 進行應用診斷和支援操作。

政策參考：[Data Retention and Storage](../reference/data-retention-and-storage)

## 您可以執行什麼

- 檢查應用版本和更新狀態
- 切換 debug 模式（`Enabled` / `Disabled`）
- 檢查離線模式狀態，並在可用時按 `Reactivate now`
- 開啟 log 檔案選擇器供支援使用
- `Export` 選取的 logs 到本機資料夾 / 下載位置（如有可用，亦包含 Octopus logs）
- `Upload` 選取的 logs 到雲端支援路徑
- `Remove` 裝置上的選取 logs

## 匯出或上傳 logs

<Tabs>
  <TabItem value="export" label="匯出 logs（本機檔案）">
1. 按 `Info` > `Export Logs`。
2. 在 `Select Log Files` 中選擇一個或多個 log 檔案。
3. 按 `Export`。
4. 在提示時選擇匯出資料夾（或允許使用預設下載路徑）。
5. 等待完成訊息：`Logs exported to ...`。
  </TabItem>
  <TabItem value="upload" label="上傳 logs（支援）">
1. 按 `Info` > `Export Logs`。
2. 選擇支援人員要求的檔案。
3. 按 `Upload`。
4. 等待完成訊息：`Logs uploaded to ...`。

如支援人員要求您直接將 logs 傳到雲端，請使用這個路徑。
  </TabItem>
  <TabItem value="remove" label="移除舊 log 檔">
1. 按 `Info` > `Export Logs`。
2. 選擇舊的 / 不再需要的 log 檔案。
3. 按 `Remove`。
4. 確認移除。

只應移除支援人員已不再需要的檔案。
  </TabItem>
</Tabs>

## 步驟

1. 按 `Info`。
2. 選擇所需操作（版本 / debug / 離線 / log 操作）。
3. 在畫面上確認操作結果。

## 您會看到

:::note[Screenshot pending]
Needed file: `client/cl-33-info-page-version-debug-offline-export.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-38-info-log-file-selection-export-upload-remove.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-39-info-log-upload-success-message.png`
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
- Log 匯出 / 上傳反覆失敗
- 離線模式無法重新啟用
