---
sidebar_position: 4
---

# Departments

![Departments](/img/hq/pos-settings/departments_page.png)

The **Departments** module manages the macro-level organizational structure of your accounting data. It is fundamentally critical for financial reporting.

When you pull a backend sales report, the line-items are grouped according to this Department tree hierarchy.

## The Hierarchy

Departments are structured in a Parent-Child relationship. 
You can switch between the specific views using the tabs on the page: `Departments` (Parents), `Sub-Departments` (Children), and `Revenue Centers`.

1. **Top-Level Departments:** The major organizational trunks (e.g., `FOOD`, `BEVERAGE`, `MERCHANDISE`).
2. **Sub-Departments:** The granular branches (e.g., inside `BEVERAGE`, you might create `Alcoholic`, `Non-Alcoholic`, `Coffee`, `Tea`).
3. **Revenue Centers:** Sometimes POS deployments spread across different physical zones inside the same branch (e.g., `Main Dining Room`, `Rooftop Bar`). You can flag a department with a specific **Revenue Center Code** to partition reporting data to that zone.

> [!CAUTION]
> If a Top-Level Department acts as a parent holder for several Sub-Departments, **do not map POS Items directly to the Parent**. Always map POS Items to the deepest-level Sub-Department. Otherwise, reporting engines may miscalculate item breakdowns.

## Configuration Details

When creating either a Department or a Sub-Department:

- **Code:** Alphanumeric identifier used mostly for API integrations or legacy accounting ERP mapping (e.g., SAP, Oracle Netsuite).
- **Name:** The internal name for HQ reporting visibility.
- **Parent Department:** Required only if you are creating a Sub-Department. It dictates the rollup summary level. 
- **Revenue Center Code:** Maps the department's gross sales into a distinct financial bucket code.
