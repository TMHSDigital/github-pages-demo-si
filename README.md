# GitHub Pages Demo Repository

[![Build Status](https://github.com/TMHSDigital/github-pages-demo-si/actions/workflows/deploy.yml/badge.svg)](https://github.com/TMHSDigital/github-pages-demo-si/actions/workflows/deploy.yml)
[![Last Commit](https://img.shields.io/github/last-commit/TMHSDigital/github-pages-demo-si)](https://github.com/TMHSDigital/github-pages-demo-si/commits/main)
[![License](https://img.shields.io/github/license/TMHSDigital/github-pages-demo-si)](https://github.com/TMHSDigital/github-pages-demo-si/blob/main/LICENSE)
[![Repo Size](https://img.shields.io/github/repo-size/TMHSDigital/github-pages-demo-si)](https://github.com/TMHSDigital/github-pages-demo-si)

A complete template and demonstration for deploying modern web applications to GitHub Pages using GitHub Actions.

## What's This?

This repository showcases how to:
- Build a modern React + Vite application
- Deploy automatically to GitHub Pages using GitHub Actions
- Set up a professional development workflow
- Create beautiful, responsive web applications

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Deployment**: GitHub Actions → GitHub Pages
- **Icons**: Phosphor Icons

## Quick Start

### 1. Use This Template
Click "Use this template" to create your own repository.

### 2. Enable GitHub Pages
1. Go to your repository's **Settings** tab
2. Navigate to **Pages** in the sidebar
3. Under **Source**, choose **GitHub Actions**
4. That's it! Your site will deploy automatically on the next push to main.

### 3. Local Development
```bash
# Clone your repository
git clone https://github.com/TMHSDigital/github-pages-demo-si.git
cd github-pages-demo-si

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Deploy Changes
Simply push to the `main` branch:
```bash
git add .
git commit -m "Update site"
git push origin main
```

The GitHub Action will automatically build and deploy your changes!

## 📁 Project Structure

```
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/         # React components
│   │   └── ui/            # shadcn/ui components
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and theme
├── index.html             # HTML template
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

### Theming
Edit `src/index.css` to customize colors, fonts, and spacing:
```css
:root {
  --primary: oklch(0.35 0.15 250);
  --background: oklch(1 0 0);
  /* ... more theme variables */
}
```

### Components
All shadcn/ui components are pre-installed in `src/components/ui/`. Use them directly:
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

## GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) automatically:
1. Installs Node.js and dependencies
2. Builds the application with `npm run build:github`
3. Deploys the `dist/` folder to GitHub Pages
4. Runs on every push to `main` branch

## Live Demo

Once deployed, your site will be available at:
`https://TMHSDigital.github.io/github-pages-demo-si/`

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this template!

## 📄 License 

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.