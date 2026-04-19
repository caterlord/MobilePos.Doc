---
sidebar_position: 4
title: 角色與權限
---

## POS X1 的終端機角色

已設定的終端機角色包含：

- `Staff`
- `Customer Display`
- `Pickup Display`
- `Pickup Controller`
- `Express Checkout`
- `Queue Terminal`
- `Queue Display`
- `Queue Controller`

本手冊目前以店舖端 `Staff` 操作為主。

## 店內常見操作權限一覽

POS 操作權限在 HQ 的 `POS Settings` -> `POS Users` -> `User Groups` 管理。

| 操作 | 收銀員 | 經理 |
| --- | --- | --- |
| PIN 登入與出勤打卡 | 是 | 是 |
| 開啟桌台／訂單並加入品項 | 是 | 是 |
| 一般結帳與收款 | 是 | 是 |
| 重試失敗付款（基本流程） | 是 | 是 |
| 變更 `POS Code`／終端機設定 | 否 | 是 |
| 執行日結 | 否 | 是 |
| 作廢／退回例外的最終決定 | 受限 | 是 |
| 處理付款／裝置問題並結案 | 否 | 是 |

## 執行時權限提示

受保護操作被阻擋時，POS 可能會顯示：

- `權限不足`：目前登入的員工帳號沒有需要的使用者群組權限。
- `輸入員工編號`：POS 需要員工代碼，才可檢查權限。
- `輸入授權員工編號`：需要第二位已授權員工批准操作。
- `需要第二位員工授權`：同一位員工不能批准自己的受保護操作。

如果服務期間出現這些提示，請停止並找經理或已授權員工，不要隨意重試其他員工代碼。

## 功能顯示說明

部分操作只有在設定啟用後才會顯示：

- 出勤 `Clock In`／`Clock Out`
- `Split Table`
- 自動開單動作
- `More Tools` cards (`Queue Controller`, etc.)
- 第三方付款修改選項
- HQ `POS Users` 設定的使用者群組權限

## 何時要立即交由經理處理

- 重試後付款結果仍然不明確
- 作廢／退回被阻擋或受政策限制
- 必須變更 `POS Code` 或裝置設定
- 日結無法正常進行
