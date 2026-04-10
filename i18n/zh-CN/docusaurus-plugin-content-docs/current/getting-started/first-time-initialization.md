---
sidebar_position: 1
title: 首次初始化
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
为终端进行首次设置的店长或设置负责人。
:::

## 开始前

- 稳定的网络连接
- HQ 登录信息（`Email address or UserName` 和 `Password`）
- HQ 中已正确分配品牌和门店
- 选定产品类型有有效订阅
- 在选择其他语言前，默认语言为 `English`

## 步骤

1. 在 `Select language` 中选择 `English`、`繁體中文` 或 `简体中文`，然后点击 `Next`。
2. 在 `Login with HQ` 中输入凭据，然后点击 `Next`。
3. 在 `Select Brand and Shop` 中选择品牌和门店，然后点击 `Next`。
4. 在 `Select Product Type` 中选择终端产品类型，然后点击 `Next`。
5. 在 `Select Mode` 中选择终端模式，然后点击 `Next`。
6. 在 `Review your Settings` 中确认详情，然后点击 `Activate`。
7. 在 `Downloading your settings` 中等待所有设置项目完成。

:::note[向导中显示的步骤列表]
`Select language` -> `Login with HQ` -> `Select Brand and Shop` -> `Select Product Type` -> `Select Mode` -> `Review your Settings` -> `Downloading your settings`
:::

:::tip[设置期间的语言行为]
您选择的设置语言会立即应用到向导中，包括步骤标题和按钮文字。
:::

## 你应该看到什么

![步骤 1 - 选择语言](/img/manual/en/getting-started/miss_0_select_language.png)
![步骤 2 - 登录 HQ](/img/manual/en/getting-started/initialize-step1-hq-login.png)
![步骤 3 - 选择品牌和门店](/img/manual/en/getting-started/gs-02-initialize-step2-brand-shop.png)
![步骤 4 - 选择产品类型](/img/manual/en/getting-started/gs-03-initialize-step3-product-type.png)
![步骤 5 - 选择模式](/img/manual/en/getting-started/gs-step5-select-mode.png)
![步骤 6 - 检查设置](/img/manual/en/getting-started/gs-04-initialize-step5-review-settings.png)
![步骤 7 - 下载设置](/img/manual/en/getting-started/gs-05-initialize-step6-downloading.png)

## 设置完成后

<Tabs>
  <TabItem value="no-sync" label="没有同步提示">
1. 终端会返回正常登录流程。
2. 员工可以登录并开班。
  </TabItem>
  <TabItem value="sync-required" label="出现同步提示">
1. 选择同步天数（`1`、`3`、`5` 或 `7`）。
2. 点击 `Sync`。
3. 完成后，点击绿色完成按钮继续。

![订单数据同步提示](/img/manual/en/getting-started/miss_2_sales_data_sync.png)
![订单数据同步完成](/img/manual/en/getting-started/miss_1_sales_data_sync_complete.png)
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[`No Available Subscription`]
停止设置。请经理或管理员先在 HQ 中确认门店订阅状态，然后再继续。上报问题时，请一并提供此画面，方便对方查看当前设置状态。
:::

![首次初始化时出现 `No Available Subscription`](/img/manual/en/getting-started/gs-10-initialize-no-available-subscription.png)

*此画面表示所选门店目前没有可用于 POS 设置的有效订阅。*

:::warning[无法继续 `Login with HQ`]
请检查 HQ 凭据和网络连接，然后重试。
:::

:::note[设置语言看起来不对]
返回 `Select language`，重新选择语言后继续。
:::

:::note[下载步骤卡住]
只有在某个设置项失败时才使用 `Retry`。只有在需要完全重新开始时才使用 `Reset`。
:::

## 何时需要找经理／管理员

- HQ 账号或门店分配不正确
- 出现 `No Available Subscription`
- 在干净重试后仍无法完成设置
