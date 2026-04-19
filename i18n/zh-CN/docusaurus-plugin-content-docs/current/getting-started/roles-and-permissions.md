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

POS 操作权限在 HQ 的 `POS Settings` -> `POS Users` -> `User Groups` 管理。

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

## 执行时权限提示

受保护操作被阻止时，POS 可能会显示：

- `权限不足`：当前登录的员工账号没有所需用户群组权限。
- `输入员工编号`：POS 需要员工代码，才可检查权限。
- `输入授权员工编号`：需要第二位已授权员工批准操作。
- `需要第二位员工授权`：同一位员工不能批准自己的受保护操作。

如果服务期间出现这些提示，请停止并找经理或已授权员工，不要随意重试其他员工代码。

## 功能显示说明

有些操作只有在配置启用后才会出现：

- 更表 `Clock In` / `Clock Out`
- `Split Table`
- 自动开单相关操作
- `More Tools` 卡片（`Queue Controller` 等）
- 第三方付款修改选项
- HQ `POS Users` 设置的用户群组权限

## 需要立即交由经理处理的情况

- 重试后付款结果仍然不明确
- 作废/退货被阻止或受政策限制
- 必须修改 `POS Code` 或设备设置
- 日结无法正常进行
