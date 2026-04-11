---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 模型上下文协议（MCP）

使用我们的 MCP 服务器，让 AI 代理与 X1 API 交互。

X1 Model Context Protocol（MCP）服务器提供一组工具，供 AI 代理与 X1 POS API 交互，并安全搜索 X1 知识库，包括手册页面和支持文章。

## 连接到 X1 的 MCP 服务器

<Tabs>
  <TabItem value="cursor" label="Cursor" default>
    要在 Cursor 中自动添加 X1 MCP，请打开 `~/.cursor/mcp.json` 文件并加入以下配置。更多详情请参阅 Cursor 文档。

    ```json
    {
      "mcpServers": {
        "x1Agent": {
          "command": "npx",
          "args": ["-y", "@caterlord/x1-mcp-server@latest"],
          "env": {
            "X1_API_ENDPOINT": "https://mcp.x1.tech/mcp"
          }
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="claude" label="Claude Desktop">
    你可以通过把同样的配置追加到 Claude Desktop 配置文件来本地连接 X1 服务器。保存文件后，请明确重启 Claude 应用程序。

    - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
    - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

    ```json
    {
      "mcpServers": {
        "x1Agent": {
          "command": "npx",
          "args": ["-y", "@caterlord/x1-mcp-server@latest"],
          "env": {
            "X1_API_ENDPOINT": "https://mcp.x1.tech/mcp"
          }
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="chatgpt" label="ChatGPT">
    要与 OpenAI 的 ChatGPT 网页界面集成，请通过 Custom GPT 使用我们的托管服务器架构。
    1. 前往 **Explore GPTs** -> **Create a Custom GPT**。
    2. 在 **Actions** 标签页下点击 `Add Action`。
    3. 粘贴 **OpenAPI Schema URL**：`https://mcp.x1.tech/mcp/openapi.json`
    4. 使用你获得的 X1 Client ID，将 Authentication 设为 **OAuth**。
  </TabItem>
</Tabs>

## 工具

服务器提供以下 MCP 工具。为避免提示注入攻击或意外修改，建议开启手动工具确认，并在共享服务器上使用 X1 MCP 时保持谨慎。如果你有反馈或希望申请新增工具，请发送邮件到 `mcp@x1.tech`。

| 资源 | 工具 | 说明 |
| :--- | :--- | :--- |
| **销售** | `get_net_sales_summary` | 读取各营业地点的财务净销售汇总。 |
| **销售** | `list_void_transactions` | 读取已撤销或作废交易收据的安全审计日志。 |
| **菜单** | `list_menu_categories` | 读取实体和线上菜单分类树。 |
| **菜单** | `list_menu_items` | 读取所有产品，包括特定渠道的价格层级。 |
| **物流** | `get_inventory_levels` | 读取特定原料或品项的消耗阈值。 |
| **物流** | `get_staff_attendance` | 读取签到和签退记录，用于薪资核对。 |
| **设备** | `get_shop_info` | 读取组织及特定门店的终端配置。 |
| **设备** | `get_device_terminals` | 读取特定门店的硬件映射。 |
| **支持** | `search_x1_documentation` | 搜索 X1 HQ 知识库，获取操作协助。 |
