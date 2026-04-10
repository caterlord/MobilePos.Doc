---
title: 設定付款設備
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責在 `裝置` -> `Payments` 中設定付款終端機的經理或授權員工。
:::

## 開始前

- 您已登入，且具備裝置設定權限
- `收銀機代碼` 已設定
- 相關付款方式或閘道已在店舖設定中啟用

## 步驟

1. 開啟 `裝置`。
2. 開啟 `Payments` 分頁。
3. 選擇目標設備那一列。
4. 點選 `Info` 查看狀態，或點選編輯圖示進行設定。
5. 儲存變更後，再次檢查狀態。

## 你應該看到什麼

- 付款設備清單與狀態指示器
- 每一列都有 `Info` 與編輯動作
- 裝置不可用時會顯示 `!` 標記

> 截圖待補：`client/cl-34-devices-payments-tab-list.png`

## 常見編輯對話框

<Tabs>
  <TabItem value="linkly-eftpos" label="Linkly EFTPOS 終端機">
常見欄位與動作：

- `Environment`（`生產環境` / `沙盒環境`）
- `Username`
- `Password`
- `Pair Code`
- `Pair` / `Unpair`
- `POS Name`、`POS Version`、`POS ID`、`POS Vendor ID`

成功配對後，請儲存設定，並確認裝置在 `Payments` 分頁仍維持可用。

> 截圖待補：`functions/fn-payment-linkly-terminal-dialog.png`
  </TabItem>
  <TabItem value="octopus-v3" label="Octopus V3 讀卡機">
常見欄位包含 `IP Address`、`Port`、`API ID`、`API Token` 與 Octopus 切換設定。

> 截圖待補：`functions/fn-payment-octopus-v3-reader-dialog.png`
  </TabItem>
  <TabItem value="other-ecr" label="其他付款終端機">
一般對話框通常包含連線設定，例如 `Connection`、`IP Address` 與 `Port`。

> 截圖待補：`functions/fn-payment-generic-device-dialog.png`
  </TabItem>
</Tabs>

## 如發生問題

:::warning[付款設備沒有顯示在 `Payments` 分頁]
付款設備可見性可能取決於已啟用的連結閘道。
:::

## 何時要找經理／管理員

- 缺少需要的付款終端機類型
- 設定儲存成功，但裝置仍然不可用
