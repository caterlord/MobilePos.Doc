---
sidebar_position: 4
title: 角色与权限
---

## POS X1 中的终端角色

已配置的终端角色包括：

- `Staff`
- `Customer Display`
- `Pickup Display`
- `Pickup Controller`
- `Express Checkout`
- `Queue Terminal`
- `Queue Display`
- `Queue Controller`

本手册目前重点说明门店侧的 `Staff` 操作。

## 门店常见操作权限一览

| 操作 | 收银员 | 经理 |
| --- | --- | --- |
| PIN 登录与更表签到/签退 | 是 | 是 |
| 打开桌台/订单并添加品项 | 是 | 是 |
| 标准结账与收款 | 是 | 是 |
| 重试失败付款（基础流程） | 是 | 是 |
| 修改 `POS Code` / 终端设置 | 否 | 是 |
| 执行日结 | 否 | 是 |
| 对作废/退货例外作最终决定 | 受限 | 是 |
| 处理付款/设备问题并结案 | 否 | 是 |

## 功能显示说明

有些操作只有在配置启用后才会出现：

- 更表 `Clock In` / `Clock Out`
- `Split Table`
- 自动开单相关操作
- `More Tools` 卡片（`Queue Controller` 等）
- 第三方付款修改选项

## 需要立即向经理汇报的情况

- 重试后付款结果仍然不明确
- 作废/退货被阻止或受政策限制
- 必须修改 `POS Code` 或设备设置
- 日结无法正常进行
