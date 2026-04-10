---
sidebar_position: 4
title: 角色與權限
---

## Terminal 角色 於 POS X1

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

## 實際權限矩陣

| 操作範圍 | 收銀員 | 經理 |
| --- | --- | --- |
| PIN 登入與出勤打卡 | 是 | 是 |
| 開啟桌台／訂單並加入品項 | 是 | 是 |
| 一般結帳與收款 | 是 | 是 |
| 重試失敗付款（基本流程） | 是 | 是 |
| 變更 `POS Code`／終端機設定 | 否 | 是 |
| 日結執行 | 否 | 是 |
| 作廢／退回例外的最終決定 | 受限 | 是 |
| 付款／裝置問題的事件結案 | 否 | 是 |

## 功能顯示說明

部分操作只有在設定啟用後才會顯示：

- 出勤 `Clock In`／`Clock Out`
- `Split Table`
- 自動開單動作
- `More Tools` cards (`Queue Controller`, etc.)
- 第三方付款修改選項

## 何時要立即交由經理處理

- 重試後付款結果仍然不明確
- 作廢／退回被阻擋或受政策限制
- 必須變更 `POS Code` 或裝置設定
- 日結無法正常進行
