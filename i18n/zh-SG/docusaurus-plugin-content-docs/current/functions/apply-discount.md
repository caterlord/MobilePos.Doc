---
sidebar_position: 7
title: 套用折扣
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
需要在结账前调整订单总额的收银员。
:::

## 开始前

- 你已经登录并在 `Ordering`
- 你已经打开正确订单
- 订单至少有一个品项

## 步骤

<Tabs>
  <TabItem value="apply-discount" label="Apply Discount">
1. 在 `Ordering` 打开目标订单。
2. 点按功能按钮。
3. 在 `Select Function` 点按 `Apply Discount`。
4. 如果 `Apply Discount` 在另一页，点按 `Previous` 或 `Next`。
5. 从列表中选择折扣。
6. 确认折扣。
  </TabItem>
  <TabItem value="cancel-discount" label="Cancel Discount">
1. 在 `Ordering` 打开目标订单。
2. 点按功能按钮。
3. 在 `Select Function` 点按 `Cancel Discount`。
4. 如果 `Cancel Discount` 在另一页，点按 `Previous` 或 `Next`。
5. 选择你要移除的折扣。
6. 确认取消。
  </TabItem>
</Tabs>

## 你应该会看到

- 在套用折扣后，订单会出现折扣行与较低总额
- 在取消折扣后，折扣行会移除，总额回到原来

![Apply Discount dialog: choose a discount for this order](/img/manual/en/client/cl-09-apply-discount-dialog.png)

## 如果出现问题

- 如果看不到 `Apply Discount` 或 `Cancel Discount`，请检查账号权限。
- 如果折扣列表是空的，请检查门市折扣设定并重新打开订单。
- 如果确认后总额没有更新，请先关掉再重新打开订单。

## 什么时候要找经理／管理员

- 出现 `Manager only` 授权提示，而你无法继续
- 折扣选项与门市政策不一致
- 已套用折扣，但结账仍被付款规则挡住
