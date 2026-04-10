---
sidebar_position: 4
title: 結賬與付款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收款的收銀員，以及處理特殊付款情況的經理。
:::

## 開始前

- 訂單已準備好付款
- 顧客已確認付款方式
- 您位於結賬畫面
- 您知道 `Round For Cash Only` 是否已在 `Settings` -> `System` 啟用

## 選擇合適的付款模式

<Tabs>
  <TabItem value="amount" label="金額（單一 / 一般）">
1. 保持在 `Amount`。
2. 選擇付款方式。
3. 如果看不到該方式，按 `More`，然後在 `Payment Methods` 選擇。
4. 如果 `Payment Methods` 顯示很多選項，按 `Previous` 或 `Next` 翻頁。
5. 輸入金額，然後按 `Pay`。
6. 確認付款行有正確更新。
  </TabItem>
  <TabItem value="split-amount" label="按金額分單">
1. 按 `Split By Amount`。
2. 加入第一筆部分付款及付款方式。
3. 持續加入其餘付款，直到 `Unpaid` 變成 0。
4. 按 `Pay`。
  </TabItem>
  <TabItem value="deposit" label="訂金">
1. 按 `Deposit`。
2. 選擇付款方式及金額。
3. 如有需要，填寫 `Deposit Remark`。
4. 按 `Pay`。
  </TabItem>
  <TabItem value="split-item" label="按品項分單">
1. 按 `Split By Item`。
2. 使用 `>` 或 `All` 移動品項。
3. 按 `Next`。
4. 逐張分拆訂單完成付款。
  </TabItem>
</Tabs>

:::tip[按品項分單時可包含未送出品項]
即使部分訂單行尚未送出，您仍然可以開始 `Split By Item` 結賬。
:::

:::note[只限現金的四捨五入行為]
當 `Round For Cash Only` 啟用時，只有在目前結賬付款包含現金時，系統才會套用四捨五入。
:::

## 需要時加入備註

1. 選擇您要使用的付款方式。
2. 按 `Paid` 旁邊的編輯按鈕輸入 `Payment Remark`。
3. 輸入備註，並在完成付款前確認。
4. 對於 `Deposit`，請在按 `Pay` 前先按 `Deposit Remark`。
5. 確認備註已儲存後，再完成結賬。

:::note[Screenshot pending]
Needed file: `client/cl-44-checkout-payment-remark-edit-button.png`
:::

## 您會看到

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split 以 Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)
![Checkout Deposit tab](/img/manual/en/client/cl-15-checkout-deposit-tab.png)
![Checkout Split 以 品項](/img/manual/en/client/cl-16-checkout-split-by-item.png)
- 結賬期間修改加配料 / 折扣後，`Rounding` 和總額會更新
- `Paid` 摘要區會顯示 `Payment Remark` 的編輯按鈕

## 如果出現問題

:::warning[付款似乎卡住]
付款處理中，請勿強行關閉應用程式。
:::

:::tip[付款失敗]
只有在狀態明確顯示 failed / cancelled 時才重試一次。如果仍然失敗，請按門店政策更換付款方式。
:::

:::note[離開結賬後桌台仍被鎖定]
先離開結賬，再重新開啟訂單一次。如果桌台仍然鎖定，請提供桌台代碼和時間戳，交由經理／管理員處理。
:::

## 何時需要找經理／管理員

- 付款結果不清楚（可能有重複扣款風險）
- 無法修改第三方連結付款
- 必要付款方式被設定阻擋
