---
sidebar_position: 1
title: 首次初始化
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
为终端进行首次开机设置的门市经理或安装负责人。
:::

## 开始前

- 稳定的网络连接
- HQ 登录资料（`Email address or UserName` 和 `Password`）
- HQ 已正确绑定品牌与店铺
- 所选产品类型已启用有效订阅
- 在你选择其他语言之前，系统默认显示 `English`

## 步骤

1. 在 `Select language` 选择 `English`、`繁體中文` 或 `简体中文`，然后点按 `Next`。
2. 在 `Login with HQ` 输入资料，然后点按 `Next`。
3. 在 `Select Brand and Shop` 选择品牌与店铺，然后点按 `Next`。
4. 在 `Select Product Type` 选择终端产品类型，然后点按 `Next`。
5. 在 `Select Mode` 选择终端模式，然后点按 `Next`。
6. 在 `Review your Settings` 核对资料，然后点按 `Activate`。
7. 在 `Downloading your settings` 等待所有设定下载完成。

:::note[向导中的步骤顺序]
`Select language` -> `Login with HQ` -> `Select Brand and Shop` -> `Select Product Type` -> `Select Mode` -> `Review your Settings` -> `Downloading your settings`
:::

:::tip[设置期间的语言行为]
你在设置向导中选择的语言会立即生效，包括步骤标题和按钮文字。
:::

## 你应该会看到

![Step 1 - Select language](/img/manual/en/getting-started/miss_0_select_language.png)
![Step 2 - Login with HQ](/img/manual/en/getting-started/initialize-step1-hq-login.png)
![Step 3 - Select Brand and Shop](/img/manual/en/getting-started/gs-02-initialize-step2-brand-shop.png)
![Step 4 - Select Product Type](/img/manual/en/getting-started/gs-03-initialize-step3-product-type.png)
![Step 5 - Select Mode](/img/manual/en/getting-started/gs-step5-select-mode.png)
![Step 6 - Review your Settings](/img/manual/en/getting-started/gs-04-initialize-step5-review-settings.png)
![Step 7 - Downloading your settings](/img/manual/en/getting-started/gs-05-initialize-step6-downloading.png)

## 设置完成后

<Tabs>
  <TabItem value="no-sync" label="没有同步提示">
1. 终端会返回正常登录流程。
2. 员工可以登录并开始上班。
  </TabItem>
  <TabItem value="sync-required" label="出现同步提示">
1. 选择同步天数（`1`、`3`、`5` 或 `7`）。
2. 点按 `Sync`。
3. 完成后，点按绿色的完成按钮继续。

![Order data sync prompt](/img/manual/en/getting-started/miss_2_sales_data_sync.png)
![Order data sync complete](/img/manual/en/getting-started/miss_1_sales_data_sync_complete.png)
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[`No Available Subscription`]
停止设置。请老板／管理员先到 HQ 检查该店铺的订阅状态，再继续操作。回报问题时，请把这个画面一起提供，让他们能直接看到当前设置状态。
:::

![`No Available Subscription` during first-time initialization](/img/manual/en/getting-started/gs-10-initialize-no-available-subscription.png)

*这个画面表示所选店铺目前没有可用的 POS 订阅。*

:::warning[无法从 `Login with HQ` 继续]
检查 HQ 登录资料与网络连接，然后重试。
:::

:::note[设置语言看起来不对]
回到 `Select language`，重新选择语言，然后继续。
:::

:::note[下载步骤卡住]
只有在某个设置项目失败时才用 `Retry`。只有需要完全重来时才用 `Reset`。
:::

## 什么时候要找经理／管理员

- HQ 账号或店铺绑定不正确
- 你看到 `No Available Subscription`
- 经过一次干净重试后还是无法完成设置
