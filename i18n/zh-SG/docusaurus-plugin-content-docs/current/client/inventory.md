---
title: 库存
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
控制售完与限量品项可用性的经理与授权员工。
:::

## 开始前

- 你已经登录
- 你可以从左侧菜单进入 `Inventory`
- 门市政策允许在 POS 上做库存覆盖

## 这个画面的用途

使用 `Inventory` 在营业期间管理临时可用状态。

## 主要画面

<Tabs>
  <TabItem value="sold-out" label="Sold Out">
管理完全不可用的品项。
  </TabItem>
  <TabItem value="limited-item" label="Limited Item">
管理带有配额／剩余数量控制的品项。
  </TabItem>
</Tabs>

## 步骤

1. 点按 `Inventory`。
2. 选择 `Sold Out` 或 `Limited Item`。
3. 用分类或搜寻找到目标品项。
4. 执行所需动作（`Cancel`、`Edit`、`Reset` 或批次动作）。
5. 确认列表中的状态已更新。

## 你应该会看到

- 品项列表会显示 `Name`、`Quota`、`Remain` 等栏位
- 在可用批次操作时，会出现 `Cancel All`／`Reset All`

:::note[待补截图]
需要文件：`client/cl-30-inventory-sold-out-tab.png`, `client/cl-31-inventory-limited-item-tab.png`
:::

## 如果出现问题

:::warning[品项状态看起来没有变化]
刷新列表，并确认你改的是正确的品项／分类。
:::

## 什么时候要找经理／管理员

- 品项可用状态与厨房／库存记录冲突
- 批次重设／取消会影响很多进行中的订单
