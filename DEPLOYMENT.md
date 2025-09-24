# Secure Deployment Setup

## Overview

This portfolio project uses GitHub Actions for secure, automated deployment to GitHub Pages. This setup eliminates the security risk of having hardcoded credentials or allowing anyone to deploy from their local machine.

## How It Works

### Automatic Deployment
- **Trigger**: Deployment happens automatically when code is pushed to the `main` branch
- **Authentication**: Uses GitHub's built-in `GITHUB_TOKEN` for secure authentication
- **Process**: The workflow builds the Angular application and deploys it to GitHub Pages

### Security Benefits
- ✅ No hardcoded credentials in the codebase
- ✅ Only authorized pushes to `main` branch can trigger deployment
- ✅ Uses GitHub's secure token system
- ✅ No local deployment capabilities that could be misused

## GitHub Pages Configuration

The workflow automatically:
1. Builds the Angular application using `npm run build`
2. Creates a `CNAME` file pointing to `maguilera.site`
3. Deploys to GitHub Pages using GitHub's official actions

## Manual Deployment (if needed)

If you need to trigger a deployment manually:
1. Go to the repository on GitHub
2. Navigate to Actions → Deploy to GitHub Pages
3. Click "Run workflow" → "Run workflow"

## Local Development

For local development, use:
```bash
npm start          # Start development server
npm run build      # Build for production (testing)
npm run deploy:info # Shows deployment information
```

## Migration Notes

**Previous setup**: Used `angular-cli-ghpages` with local git credentials, which posed a security risk.

**Current setup**: Uses GitHub Actions with secure token-based authentication, triggered only by pushes to main branch.

The old `npm run deploy` command has been removed and replaced with `npm run deploy:info` which provides information about the new deployment process.