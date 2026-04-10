---
title: 設定付款裝置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
在 `Devices` -> `Payments` 設定付款終端機的經理或授權員工。
:::

## 開始前

- 您已登入並具備裝置設定權限
- 已設定 `POS Code`
- 相關付款方式 / gateway 已在門店設定中啟用

## 步驟

1. 開啟 `Devices`。
2. 開啟 `Payments` 分頁。
3. 選擇目標裝置列。
4. 按 `Info` 檢查狀態，或按編輯圖示進行設定。
5. 儲存變更並重新檢查狀態。

## 您會看到

- 付款裝置清單和狀態指示
- 每列都有 `Info` 和編輯操作
- 不可用裝置會顯示不可用標記 (`!`)

> Screenshot pending: `client/cl-34-devices-payments-tab-list.png`

## 常見編輯視窗

<Tabs>
  <TabItem value="linkly-eftpos" label="Linkly EFTPOS 終端機">
常見欄位和操作：

- `Environment` (`正式環境` / `沙盒環境`)
- `Username`
- `Password`
- `Pair Code`
- `Pair` / `Unpair`
- `POS Name`、`POS Version`、`POS ID`、`POS Vendor ID`

成功配對後，請儲存設定，並確認裝置仍然可在 `Payments` 分頁中使用。

> Screenshot pending: `functions/fn-payment-linkly-terminal-dialog.png`
  </TabItem>
  <TabItem value="octopus-v3" label="Octopus V3 讀卡器">
常見欄位包括 `IP Address`、`Port`、`API ID`、`API Token` 和 Octopus 開關。

> Screenshot pending: `functions/fn-payment-octopus-v3-reader-dialog.png`
  </TabItem>
  <TabItem value="other-ecr" label="其他付款終端機">
一般視窗通常包括 `Connection`、`IP Address` 和 `Port` 等連線設定。

> Screenshot pending: `functions/fn-payment-generic-device-dialog.png`
  </TabItem>
</Tabs>

## 如果出現問題

:::warning[付款裝置未在 Payments 分頁顯示]
付款裝置是否顯示，可能視已啟用的連結 gateway 而定。
:::

## 何時需要找經理／管理員

- 所需的付款終端機類型不存在
- 設定儲存成功，但裝置仍然不可用
