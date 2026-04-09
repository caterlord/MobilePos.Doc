---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Model Context Protocol (MCP)

Use our MCP server to let AI agents interact with the X1 API.

The X1 Model Context Protocol (MCP) server provides a set of tools that AI agents can use to interact with the X1 POS API and securely search the X1 knowledge base, including manual pages and support articles.

## Connect to X1's MCP server

<Tabs>
  <TabItem value="cursor" label="Cursor" default>
    To automatically add the X1 MCP to Cursor, open your `~/.cursor/mcp.json` file and add the following configuration. For more details, see the Cursor documentation.

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
    You can link the X1 server locally by appending the same configuration to your Claude desktop configuration file. After saving the file, explicitly restart the Claude application.
    
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
    To integrate with OpenAI's ChatGPT web interface, use our hosted server architecture via a Custom GPT.
    1. Navigate to **Explore GPTs** -> **Create a Custom GPT**.
    2. Under the **Actions** tab, click `Add Action`.
    3. Paste the **OpenAPI Schema URL**: `https://mcp.x1.tech/mcp/openapi.json`
    4. Set Authentication to **OAuth** using your provided X1 Client ID.
  </TabItem>
</Tabs>

## Tools

The server exposes the following MCP tools. To avoid prompt injection attacks or unintended mutations, we recommend enabling manual tool confirmation and exercising caution when using the X1 MCP on shared servers. If you have any feedback or would like to request additional tools, please email `mcp@x1.tech`.

| Resource | Tool | Description |
| :--- | :--- | :--- |
| **Sales** | `get_net_sales_summary` | Retrieve financial net sales summaries across your operating locations. |
| **Sales** | `list_void_transactions` | Retrieve the security audit log of reversed or nullified transaction receipts. |
| **Menus** | `list_menu_categories` | Retrieve physical and online menu category trees. |
| **Menus** | `list_menu_items` | Retrieve all products, inclusive of pricing tiers for specific channels. |
| **Logistics** | `get_inventory_levels` | Retrieve specific ingredient or item depletion thresholds. |
| **Logistics** | `get_staff_attendance` | Retrieve clock-in and clock-out logs for payroll reconciliation. |
| **Devices** | `get_shop_info` | Retrieve organization and specific shop terminal configurations. |
| **Devices** | `get_device_terminals` | Retrieve hardware mapping for a specific shop. |
| **Support** | `search_x1_documentation` | Search the X1 HQ knowledge base for operational assistance. |
