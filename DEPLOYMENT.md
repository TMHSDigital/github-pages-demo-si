# 🚀 GitHub Pages Deployment Guide

This document provides detailed guidance for deploying your application to GitHub Pages.

## Prerequisites

- A GitHub repository
- GitHub Pages enabled in repository settings
- The repository must be public (for free GitHub accounts)

## Deployment Methods

### Option 1: GitHub Actions (Recommended)

This repository is pre-configured with GitHub Actions for automatic deployment.

**Setup Steps:**
1. Go to your repository's **Settings** tab
2. Navigate to **Pages** in the sidebar  
3. Under **Source**, select **GitHub Actions**
4. Push to the `main` branch - deployment will happen automatically!

**Your site URL will be:**
- User/Organization pages: `https://USERNAME.github.io/`
- Project pages: `https://USERNAME.github.io/REPOSITORY-NAME/`

### Option 2: Deploy from Branch

If you prefer to deploy from a branch instead:

1. Go to **Settings** > **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose `main` branch and `/ (root)` folder
4. Build your site locally with `npm run build`
5. Commit the `dist/` folder to your repository

## Configuration

### Base URL Configuration

The `vite.config.ts` file is configured to handle GitHub Pages paths automatically:

```typescript
base: process.env.NODE_ENV === 'production' ? '/REPO-NAME/' : '/',
```

**Important:** Replace `/REPO-NAME/` with your actual repository name if different.

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS records:
   - For apex domains (example.com): Create A records pointing to GitHub's IPs
   - For subdomains (www.example.com): Create a CNAME record pointing to your GitHub Pages URL

## Troubleshooting

### Build Failures

**Error: "npm run build" fails**
- Check that all dependencies are installed
- Ensure TypeScript compilation succeeds locally
- Verify all imported files exist and have correct casing

**Error: "Module not found"**
- Check import paths use `@/` alias for src files
- Ensure all components are exported properly
- Verify shadcn/ui components are installed

### Deployment Issues

**Site shows 404 error**
- Ensure you have an `index.html` in the root of your built application
- Check that GitHub Pages source is configured correctly
- Verify the base URL in `vite.config.ts` matches your repository name

**Changes not appearing**
- GitHub Pages can take up to 10 minutes to update
- Clear your browser cache
- Check the Actions tab for deployment status
- Ensure you're pushing to the correct branch

**Assets not loading**
- Verify asset imports use the `@/assets/` alias
- Check that the base URL configuration is correct
- Ensure assets exist in the `public/` directory or are imported properly

### GitHub Actions Issues

**Workflow not running**
- Ensure the workflow file is in `.github/workflows/`
- Check that GitHub Actions are enabled for your repository
- Verify the branch name in the workflow matches your default branch

**Permission errors**
- Check that Actions have write permissions to GitHub Pages
- Ensure the repository has Pages enabled in settings
- Verify the workflow has the correct permissions block

## Performance Optimization

### Build Optimization
- The build automatically splits code into chunks
- Static assets are hashed for cache busting
- Unused code is tree-shaken during build

### Loading Performance
- Use `@/assets/` imports for images to enable optimization
- Keep bundle sizes reasonable by code splitting
- Consider lazy loading for non-critical components

## Security Considerations

- Never commit secrets or API keys to the repository
- Be cautious with third-party dependencies
- GitHub Pages sites are always public, even from private repos

## Common Gotchas

1. **Case Sensitivity**: GitHub Pages is case-sensitive. Ensure file names match imports exactly.

2. **Trailing Slashes**: Be consistent with trailing slashes in URLs.

3. **SPA Routing**: For single-page applications, you may need custom 404.html handling for client-side routing.

4. **Environment Variables**: Only `VITE_` prefixed environment variables are available in the browser.

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Actions tab](../../actions) for deployment logs
- Look at similar repositories for configuration examples