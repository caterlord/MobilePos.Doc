---
sidebar_position: 2
title: 存取與導覽
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
所有登入 POS 終端機的店舖人員。
:::

## 開始前

- 終端機已完成初始化並可連線
- 您有可用的登入 PIN

## 登入畫面基礎

您會看到：

- 目前店舖名稱
- 首頁圖示（可切換店舖）
- 若經理已啟用，可能會看到快速切換語言按鈕（`EN` / `繁` / `简`）
- PIN 數字鍵盤
- `SIGN IN` 登入按鈕

## 步驟

<Tabs>
  <TabItem value="quick-language-switch" label="快速切換語言（如有顯示）">
1. 在登入畫面點選圓形語言按鈕（`EN` / `繁` / `简`）。
2. 確認畫面文字切換到下一個可用語言。
3. 繼續正常登入。
  </TabItem>
  <TabItem value="sign-in" label="登入">
1. 輸入 PIN（或在已設定時掃描卡片）。
2. 點選 `SIGN IN`。
3. 等待 `Ordering` 畫面載入。
  </TabItem>
  <TabItem value="clock-in" label="打卡上班／下班（如已啟用）">
1. 在登入畫面點選出勤按鈕。
2. 在班次開始時點選 `Clock In`，或在班次結束時點選 `Clock Out`。
3. 然後照常登入。
  </TabItem>
  <TabItem value="sign-out" label="登出">
1. 前往桌台／訂單畫面。
2. 點選右上角紅色登出按鈕。
3. 確認返回登入畫面。
  </TabItem>
</Tabs>

## 你應該看到什麼

![登入 PIN 畫面](/img/manual/en/getting-started/gs-06-login-passcode-screen.png)
![登入出勤彈出面板](/img/manual/en/getting-started/gs-07-login-roster-flyout.png)

:::note[截圖待補]
所需文件：`getting-started/gs-10-login-quick-language-switch.png`
:::

## 如果出現問題

:::warning[`SIGN IN` 無法使用]
重新輸入 PIN，並再試一次。
:::

:::note[登入被服務警告阻擋]
如果出現訂閱／離線警告，請先恢復連線後再登入。
:::

## 何時要請經理／管理員協助

- 多次重試後 PIN 仍然失敗
- 訂閱／離線阻擋無法解除
- 您無法進入正確的店舖／角色
