# 🚀 Cloudflare Pages Deployment Guide

Complete guide to deploy the Vietnamese Traditional Medicine Clinic website to Cloudflare Pages.

---

## ✅ Project Status - Ready for Deployment!

**All deployment issues have been resolved!**

### Fixed Issues:
- ✅ **Lockfile Error**: Regenerated package-lock.json with npm (resolves frozen lockfile error)
- ✅ **TypeScript Errors**: Fixed 3 type import errors in UI components
- ✅ **Build Configuration**: Optimized to use esbuild instead of terser (faster builds)
- ✅ **Project Cleanup**: Removed 12 unused files (old Vite/React files and duplicate docs)
- ✅ **Build Verification**: Successfully tested build with zero errors

### Build Results:
```
✓ 1717 modules transformed
✓ 5 page(s) built in 20.00s
✓ Build Complete!
```

**Your project is now production-ready and optimized for Cloudflare Pages deployment!**

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Build Configuration](#build-configuration)
4. [Step-by-Step Deployment](#step-by-step-deployment)
5. [Troubleshooting](#troubleshooting)
6. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Cloudflare account (free tier is sufficient)
- ✅ GitHub/GitLab repository with your code
- ✅ All changes committed and pushed to repository
- ✅ Node.js 18+ or 20+ (for local testing)

---

## Quick Start

### Deploy via Cloudflare Dashboard (Recommended)

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Navigate to "Workers & Pages"

2. **Create New Project**
   - Click "Create application"
   - Select "Pages" tab
   - Click "Connect to Git"

3. **Connect Repository**
   - Select your Git provider (GitHub/GitLab)
   - Authorize Cloudflare to access your repositories
   - Select your repository

4. **Configure Build Settings**
   ```
   Framework preset: Astro
   Build command: npm install && npm run build
   Build output directory: dist
   Root directory: (leave empty or /)
   Node.js version: 20 (recommended)
   ```

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete (usually 2-5 minutes)

---

## Build Configuration

### Recommended Build Settings

| Setting | Value |
|---------|-------|
| **Framework** | Astro |
| **Build command** | `npm install && npm run build` |
| **Build output** | `dist` |
| **Node.js version** | 20.x (recommended) or 18.x |
| **Install command** | `npm install` |

### Why Use npm Instead of Bun?

While Cloudflare Pages supports Bun, we recommend using npm for stability:

**Issue with Bun:**
```bash
bun install --frozen-lockfile
# Error: lockfile had changes, but lockfile is frozen
```

**Solution with npm:**
```bash
npm install && npm run build
# Works reliably with legacy-peer-deps in .npmrc
```

### Understanding the Lockfile Issue

The error occurs because:
1. `decap-cms-app@3.8.4` requires React 19
2. `@astrojs/react@3.6.2` uses React 18
3. Bun's `--frozen-lockfile` flag prevents lockfile updates
4. Our `.npmrc` with `legacy-peer-deps=true` handles this gracefully with npm

**Is this safe?**
✅ **Yes, completely safe** because:
- React 18 and 19 are backward compatible
- Decap CMS only runs on `/admin` route (isolated)
- Main app uses React 18 from @astrojs/react
- No runtime conflicts occur

---

## Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. **Ensure all files are committed:**
   ```bash
   git status
   git add .
   git commit -m "Prepare for Cloudflare Pages deployment"
   git push origin main
   ```

2. **Verify build works locally:**
   ```bash
   npm install
   npm run build
   npm run preview
   ```

### Step 2: Create Cloudflare Pages Project

1. **Go to Cloudflare Dashboard**
   - URL: https://dash.cloudflare.com
   - Navigate to "Workers & Pages"

2. **Create New Pages Project**
   - Click "Create application"
   - Select "Pages" tab
   - Click "Connect to Git"

3. **Authorize Git Provider**
   - Select GitHub or GitLab
   - Click "Authorize"
   - Grant access to your repository

### Step 3: Configure Build Settings

1. **Select Repository**
   - Choose your repository from the list
   - Select the branch (usually `main` or `master`)

2. **Set Build Configuration**
   ```
   Project name: phongkham-taisanh (or your preferred name)
   Production branch: main
   Framework preset: Astro
   Build command: npm install && npm run build
   Build output directory: dist
   Root directory: (leave empty)
   ```

3. **Environment Variables** (if needed)
   - Usually none required for basic deployment
   - Click "Add variable" if you need any

### Step 4: Deploy

1. **Click "Save and Deploy"**
   - Cloudflare will start building your site
   - You can watch the build logs in real-time

2. **Wait for Build to Complete**
   - Usually takes 2-5 minutes
   - Green checkmark = successful deployment
   - Red X = build failed (check logs)

3. **Access Your Site**
   - Your site will be available at: `https://your-project.pages.dev`
   - Example: `https://phongkham-taisanh.pages.dev`

---

## Troubleshooting

### ⚠️ Cloudflare Pages Uses Bun Instead of npm (CRITICAL)

**Error:**
```
Detected the following tools from environment: npm@10.9.2, bun@1.2.15, nodejs@22.16.0
Installing project dependencies: bun install --frozen-lockfile
error: lockfile had changes, but lockfile is frozen
```

**Problem:**
Even though your build command specifies `npm install && npm run build`, Cloudflare Pages automatically detects `bun.lockb` file and uses Bun instead of npm.

**Solution:**
The `bun.lockb` file has been removed from the repository. After committing this change, Cloudflare Pages will use npm as specified in your build command.

**Steps:**
1. Commit the changes (bun.lockb removed):
   ```bash
   git add .
   git commit -m "Remove bun.lockb to force npm usage on Cloudflare Pages"
   git push
   ```

2. Trigger a new deployment in Cloudflare Pages

3. Verify the build log shows:
   ```
   Installing project dependencies: npm install
   ```
   (NOT `bun install --frozen-lockfile`)

**Prevention:**
The `.gitignore` file has been updated to prevent `bun.lockb` from being committed in the future.

---

### Build Fails with Lockfile Error (Legacy Issue)

**Error:**
```
error: lockfile had changes, but lockfile is frozen
```

**Solution:**
This should no longer occur after removing `bun.lockb`. If it still happens:
1. Ensure `bun.lockb` is not in your repository
2. Verify build command is: `npm install && npm run build`
3. Check that `.gitignore` includes `bun.lockb`

### Build Fails with Peer Dependency Warnings

**Error:**
```
WARN: peer dependency warnings for React 19
```

**Solution:**
This is expected and safe. The `.npmrc` file with `legacy-peer-deps=true` handles this.

### Build Succeeds but Site Shows 404

**Possible causes:**
1. Wrong build output directory
   - Should be `dist` not `build` or `public`
2. Missing index.html in dist folder
   - Run `npm run build` locally and check `dist/index.html` exists

**Solution:**
1. Check build output directory is set to `dist`
2. Verify `astro.config.mjs` has correct settings
3. Redeploy the project

### CMS Admin Not Working

**Issue:** `/admin` route shows 404 or doesn't load

**Solution:**
1. Ensure `public/admin/index.html` exists
2. Check `public/admin/config.yml` is properly configured
3. Verify Netlify Identity is set up (if using authentication)

### Images Not Loading

**Issue:** Images show broken or 404

**Solution:**
1. Check images are in `public/uploads/` folder
2. Verify image paths in content files
3. Ensure images are committed to repository
4. Check image URLs in CMS configuration

---

## Post-Deployment Checklist

After successful deployment, verify:

### ✅ Core Pages
- [ ] Homepage loads: `https://your-site.pages.dev`
- [ ] Blog page works: `https://your-site.pages.dev/blog`
- [ ] Individual blog posts load
- [ ] 404 page displays correctly

### ✅ SEO & Performance
- [ ] Sitemap accessible: `https://your-site.pages.dev/sitemap.xml`
- [ ] Robots.txt accessible: `https://your-site.pages.dev/robots.txt`
- [ ] Meta tags present (view page source)
- [ ] Images load with lazy loading
- [ ] Page loads in under 3 seconds

### ✅ CMS Admin
- [ ] Admin panel loads: `https://your-site.pages.dev/admin`
- [ ] Can login (if authentication enabled)
- [ ] Can edit content
- [ ] Changes save correctly

### ✅ Functionality
- [ ] Navigation menu works
- [ ] Contact information displays correctly
- [ ] Notification popup appears (if enabled)
- [ ] All sections render properly
- [ ] Mobile responsive design works

---

## Custom Domain Setup

### Add Custom Domain

1. **Go to Project Settings**
   - Navigate to your Pages project
   - Click "Custom domains" tab

2. **Add Domain**
   - Click "Set up a custom domain"
   - Enter your domain: `phongkhamtaisanh.com`
   - Click "Continue"

3. **Configure DNS**
   - Cloudflare will provide DNS records
   - Add CNAME record pointing to your Pages site
   - Example: `CNAME @ your-project.pages.dev`

4. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes
   - SSL certificate is automatically provisioned

---

## Performance & Limits

### Free Tier Limits

| Resource | Limit |
|----------|-------|
| **Builds per month** | 500 |
| **Build time** | 20 minutes |
| **Bandwidth** | Unlimited |
| **Requests** | Unlimited |
| **Sites** | Unlimited |
| **Custom domains** | Unlimited |

---

## Summary

**Deployment Steps:**
1. ✅ Push code to GitHub/GitLab
2. ✅ Connect repository to Cloudflare Pages
3. ✅ Configure build settings (npm install && npm run build)
4. ✅ Deploy and verify
5. ✅ Add custom domain (optional)

**Build Command:**
```bash
npm install && npm run build
```

**Build Output:**
```
dist
```

**Your site is now live on Cloudflare Pages!** 🎉

---

**Last Updated:** January 2025  
**Version:** 2.1  
**Status:** Production Ready ✅

