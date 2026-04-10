---
sidebar_position: 1
title: 首次初始化
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
店舖經理或設定人員，負責為終端機完成首次啟用。
:::

## 開始前

- 穩定的網路連線
- HQ 登入資料（`Email address or UserName` 與 `Password`）
- HQ 中已正確指派品牌與店舖
- 已為選定的產品類型啟用訂閱
- 在選擇其他語言前，系統預設為 `English`

## 步驟

1. 在 `Select language` 選擇 `English`、`繁體中文` 或 `简体中文`，然後點選 `Next`。
2. 在 `Login with HQ` 輸入登入資料，然後點選 `Next`。
3. 在 `Select Brand and Shop` 選擇品牌與店舖，然後點選 `Next`。
4. 在 `Select Product Type` 選擇終端機產品類型，然後點選 `Next`。
5. 在 `Select Mode` 選擇終端機模式，然後點選 `Next`。
6. 在 `Review your Settings` 檢查資料後，點選 `Activate`。
7. 在 `Downloading your settings` 等待所有設定項目完成。

:::note[精靈中的步驟清單]
`Select language` -> `Login with HQ` -> `Select Brand and Shop` -> `Select Product Type` -> `Select Mode` -> `Review your Settings` -> `Downloading your settings`
:::

:::tip[設定期間的語言行為]
您在初始化時選擇的語言會立即套用到精靈畫面，包括步驟標題與按鈕文字。
:::

## 你應該看到什麼

![Step 1 - 選擇 語言](/img/manual/en/getting-started/miss_0_select_language.png)
![Step 2 - 登入 配合 HQ](/img/manual/en/getting-started/initialize-step1-hq-login.png)
![Step 3 - 選擇 Brand 及 Shop](/img/manual/en/getting-started/gs-02-initialize-step2-brand-shop.png)
![Step 4 - 選擇 產品 Type](/img/manual/en/getting-started/gs-03-initialize-step3-product-type.png)
![Step 5 - 選擇 Mode](/img/manual/en/getting-started/gs-step5-select-mode.png)
![Step 6 - 檢查您的設定](/img/manual/en/getting-started/gs-04-initialize-step5-review-settings.png)
![Step 7 - 下載您的設定](/img/manual/en/getting-started/gs-05-initialize-step6-downloading.png)

## 後續設定

<Tabs>
  <TabItem value="no-sync" label="未出現同步提示">
1. 終端機會回到一般登入流程。
2. 工作人員可以登入並開始班次。
  </TabItem>
  <TabItem value="sync-required" label="出現同步提示">
1. 選擇同步天數（`1`、`3`、`5` 或 `7`）。
2. 點選 `Sync`。
3. 完成後，點選綠色完成按鈕繼續。

![訂單 資料 同步 提示](/img/manual/en/getting-started/miss_2_sales_data_sync.png)
![訂單 資料 同步 完成](/img/manual/en/getting-started/miss_1_sales_data_sync_complete.png)
  </TabItem>
</Tabs>

## 如發生問題

:::warning[`No Available Subscription`]
停止設定。請先請經理／管理員在 HQ 確認店舖訂閱可用，再繼續。回報問題時，請提供這個畫面，讓對方看見正確的設定狀態。
:::

![`No Available Subscription` during first-time initialization](/img/manual/en/getting-started/gs-10-initialize-no-available-subscription.png)

*此畫面表示所選店舖目前沒有可供 POS 設定使用的有效訂閱。*

:::warning[Cannot continue from `Login with HQ`]
檢查 HQ 登入資料與網路連線，然後重試。
:::

:::note[設定語言顯示不正確]
返回 `Select language`，重新選擇語言後再繼續。
:::

:::note[下載步驟卡住]
只有在某個設定項目失敗時才使用 `Retry`。只有在需要完整重新開始時才使用 `Reset`。
:::

## 何時要找經理／管理員

- HQ 帳號或店舖指派不正確
- 您看到 `No Available Subscription`
- 清楚重試後仍無法完成設定
