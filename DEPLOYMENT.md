# 🚀 GitHub Pages Deployment Guide

This document provides detailed guidance for deploying your application to GitHub Pages.

- A GitHub repos

- A GitHub repository
- GitHub Pages enabled in repository settings
**Setup Steps:**

4. Push to the `main`

- Project pages: `https://USERNAME.github.

If you prefer to deploy from a branch instead:

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
- Verify all imported files exist and have co
**Error: "Module not found"**
- Ensure all components are exported properly



- Verify the base URL in `

- Clear your browser cache

**Assets not 
- Check that the base URL configuration is correct


- Ensure the workflow file is in `.github/workflows/`

**Permission erro



- The build automatically splits code into chunks
- Unused code is tree-sha
### Loading Performance
- Keep bundle sizes reasonable by code splitting








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





