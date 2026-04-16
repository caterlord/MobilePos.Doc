# Contributing

Thank you for helping improve the X1 documentation.

## Best Ways To Contribute

- Report unclear or incorrect instructions
- Request missing pages or screenshots
- Fix wording, navigation, or formatting problems
- Submit pull requests for focused documentation improvements

## Before You Open An Issue

Please check whether the problem is already reported:

- `https://github.com/caterlord/X1.Doc/issues`

When possible, include:

- the page URL
- the manual section (`POS`, `HQ`, or `MCP`)
- what you expected to see
- what is currently wrong
- screenshots if the problem is visual

## Pull Request Workflow

1. Fork the repository.
2. Create a focused branch.
3. Make the documentation change.
4. Run:

```bash
npm install
npm run build
```

5. Open a pull request.
6. Link the related issue if one exists.

## Writing Expectations

- Use the real UI labels shown in the product.
- Write for non-technical operators and admins.
- Keep steps short and in the same order users follow on screen.
- Add screenshots when they materially improve clarity.

## Sensitive Information

Do not include:

- local file system paths
- credentials, tokens, or secrets
- private repository URLs
- internal-only support notes that are not meant for public readers
