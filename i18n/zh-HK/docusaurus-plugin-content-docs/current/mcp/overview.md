---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Model Context Protocol (MCP)

使用我們的 MCP 伺服器，讓 AI 助理可以與 X1 API 互動。

X1 的 Model Context Protocol (MCP) 伺服器提供一組工具，讓 AI 助理可以與 X1 POS API 互動，並安全地搜尋 X1 知識庫，包括手冊頁面與支援文章。

## 連線到 X1 的 MCP 伺服器

<Tabs>
  <TabItem value="cursor" label="Cursor" default>
  若要在 Cursor 中自動加入 X1 MCP，請開啟 `~/.cursor/mcp.json` 檔案並加入以下設定。更多詳細資料請參考 Cursor 文件。

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
  您可以將相同設定加入 Claude Desktop 的設定檔，讓本機直接連線到 X1 伺服器。儲存檔案後，請明確重新啟動 Claude 應用程式。

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
  若要與 OpenAI 的 ChatGPT 網頁介面整合，請透過 Custom GPT 使用我們的託管伺服器架構。
    1. 前往 **Explore GPTs** -> **Create a Custom GPT**。
    2. 在 **Actions** 分頁中，點選 `Add Action`。
    3. 貼上 **OpenAPI Schema URL**：`https://mcp.x1.tech/mcp/openapi.json`
    4. 將驗證方式設為 **OAuth**，並使用我們提供的 X1 Client ID。
 </TabItem>
</Tabs>

## 工具

伺服器會公開下列 MCP 工具。為了避免提示注入攻擊或非預期變更，我們建議先確認工具用途，並在共用伺服器上使用 X1 MCP 時保持謹慎。如需回饋或希望新增工具，請寄信至 `mcp@x1.tech`。

| 資源 | 工具 | 說明 |
| :--- | :--- | :--- |
| **Sales** | `get_net_sales_summary` | 取得各營運地點的財務淨銷售摘要。 |
| **Sales** | `list_void_transactions` | 取得已作廢或失效交易收據的稽核紀錄。 |
| **Menus** | `list_menu_categories` | 取得實體與線上菜單分類樹。 |
| **Menus** | `list_menu_items` | 取得所有品項，包含特定通路的價格層級。 |
| **Logistics** | `get_inventory_levels` | 取得特定原料或品項的耗用門檻。 |
| **Logistics** | `get_staff_attendance` | 取得打卡與下班記錄，以便薪資對帳。 |
| **裝置** | `get_shop_info` | 取得組織與特定店舖的終端設定。 |
| **裝置** | `get_device_terminals` | 取得特定店舖的硬體對應。 |
| **Support** | `search_x1_documentation` | 搜尋 X1 HQ 知識庫以取得操作支援。 |
