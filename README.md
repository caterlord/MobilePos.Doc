# POS X1 User Manual

Online documentation site for POS X1, built with Docusaurus.

## Languages
- English (`en`)
- Traditional Chinese, Hong Kong (`zh-HK`)
- Simplified Chinese (`zh-CN`)

## Linked Repositories
- Client app (`MobilePos`)
  - Git: `https://github.com/caterlord/MobilePos`
  - Local: `/Users/michaelyung/RiderProjects/MobilePos`
- HQ back office (`MobilePos.HQ`)
  - Git: `https://github.com/caterlord/MobilePos.HQ`
  - Local: `/Users/michaelyung/RiderProjects/ewhq-new`

## Stack
- Docusaurus `3.9.2`
- React `19`
- TypeScript `5.6`

## Quick Start
```bash
nvm use
npm install
npm start
```

## Build
```bash
npm run build
npm run serve
```

## Localization Workflow
Generate translation JSON files for a locale:

```bash
npm run write-translations -- --locale zh-HK
npm run write-translations -- --locale zh-CN
```

Translated docs live under:
- `i18n/zh-HK/docusaurus-plugin-content-docs/current/`
- `i18n/zh-CN/docusaurus-plugin-content-docs/current/`

## Project Structure
- `docs/getting-started/`: access, navigation, role model
- `docs/client/`: POS front-end operations for store staff (current priority)
- `docs/hq/`: back-office admin workflows (WIP)
- `docs/reference/`: glossary and troubleshooting
- `src/`: homepage and theme-level customization

## Deployment (GitHub Pages)
This repo is configured for:
- `url`: `https://caterlord.github.io`
- `baseUrl`: `/MobilePos.Doc/`

If your hosting target changes, update these values in `docusaurus.config.ts`.

To deploy:
```bash
GIT_USER=<github-username> npm run deploy
```

## CI

GitHub Actions workflow: `.github/workflows/docs-ci.yml`

- Runs on `push` to `main` and all pull requests
- Installs dependencies with `npm ci`
- Verifies documentation site build with `npm run build`

## Auto Deploy

GitHub Actions workflow: `.github/workflows/deploy-gh-pages.yml`

- Runs on `push` to `main` (and manual trigger)
- Publishes to `gh-pages` branch using `npm run deploy`
