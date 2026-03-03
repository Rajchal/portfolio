# My Portfolio

Welcome to my portfolio!

## Table of Contents

- [About Me](#about-me)
- [Projects](#projects)
- [Skills](#skills)
- [Contact](#contact)

Made with vite

## Deploy to GitHub Pages

This repo is configured with a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

### One-time GitHub setup

1. Push this project to GitHub.
2. In your repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or update the workflow branch trigger if different).

### Deploy

- Push to `main` and GitHub Actions will build and publish `dist/` automatically.
- You can also run the workflow manually from the **Actions** tab via **workflow_dispatch**.

### Local check before pushing

```bash
npm ci
npm run build
npm run preview
```
