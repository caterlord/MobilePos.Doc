---
sidebar_position: 2
title: 访问与导航
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
所有登录 POS 终端的门店员工。
:::

## 开始前

- 终端已初始化并在线
- 您有有效的登录 PIN

## 登录页面基础

你会看到：

- 当前门店名称
- Home 图标（切换门店）
- 由经理启用时可能出现的快速语言切换按钮（`EN` / `繁` / `简`）
- PIN 键盘
- `SIGN IN` 登录按钮

## 步骤

<Tabs>
  <TabItem value="quick-language-switch" label="快速切换语言（如果显示）">
1. 在登录页面点击圆形语言按钮（`EN` / `繁` / `简`）。
2. 确认页面文字切换到下一个可用语言。
3. 继续正常登录。
  </TabItem>
  <TabItem value="sign-in" label="登录">
1. 输入 PIN，或者在已配置时刷卡。
2. 点击 `SIGN IN`。
3. 等待 `Ordering` 页面加载。
  </TabItem>
  <TabItem value="clock-in" label="签到/签退（如果启用）">
1. 在登录页面点击更表按钮。
2. 在班次开始时点击 `Clock In`，在班次结束时点击 `Clock Out`。
3. 然后继续正常登录。
  </TabItem>
  <TabItem value="sign-out" label="登出">
1. 前往桌台/订单页面。
2. 点击右上角红色登出按钮。
3. 确认会返回登录页面。
  </TabItem>
</Tabs>

## 你应该看到什么

![登录 PIN 页面](/img/manual/en/getting-started/gs-06-login-passcode-screen.png)
![带有更表弹窗的登录页面](/img/manual/en/getting-started/gs-07-login-roster-flyout.png)

:::note[截图待补]
所需文件：`getting-started/gs-10-login-quick-language-switch.png`
:::

## 如果出现问题

:::warning[`SIGN IN` 无法使用]
请重新输入 PIN，确认无误后再重试一次。
:::

:::note[登录被服务提示阻止]
如果出现订阅或离线提示，请先恢复连接，然后再重试登录。
:::

## 何时需要找经理／管理员

- 重试后 PIN 仍然失败
- 订阅或离线阻止提示无法消失
- 您无法进入正确的门店或角色
