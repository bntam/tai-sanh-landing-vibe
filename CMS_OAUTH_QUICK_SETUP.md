# 🚀 Quick Setup: Decap CMS with GitHub OAuth on Cloudflare Pages

## ⚡ 5-Minute Setup Guide

Follow these steps to enable the CMS admin panel on your Cloudflare Pages deployment.

---

## Step 1: Create GitHub OAuth App (2 minutes)

1. **Go to:** https://github.com/settings/developers
2. **Click:** "OAuth Apps" → "New OAuth App"
3. **Fill in:**
   ```
   Application name: Decap CMS - Tái Sanh
   Homepage URL: https://your-site.pages.dev
   Authorization callback URL: https://api.netlify.com/auth/done
   ```
4. **Click:** "Register application"
5. **Copy:** Client ID (shown immediately)
6. **Click:** "Generate a new client secret"
7. **Copy:** Client Secret (save it now - you can't see it again!)

---

## Step 2: Add Environment Variables to Cloudflare Pages (2 minutes)

1. **Go to:** Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables
2. **Add these two variables:**
   
   **Variable 1:**
   ```
   Name: OAUTH_GITHUB_CLIENT_ID
   Value: [paste your Client ID from Step 1]
   ```
   
   **Variable 2:**
   ```
   Name: OAUTH_GITHUB_CLIENT_SECRET
   Value: [paste your Client Secret from Step 1]
   ```

3. **Important:** Set these for **both** Production and Preview environments
4. **Click:** "Save"

---

## Step 3: Deploy Your Changes (1 minute)

The configuration files have already been updated. Just commit and push:

```bash
git add .
git commit -m "Configure Decap CMS for Cloudflare Pages with GitHub OAuth"
git push
```

Wait for Cloudflare Pages to deploy (2-5 minutes).

---

## Step 4: Test the CMS (30 seconds)

1. **Go to:** `https://your-site.pages.dev/admin`
2. **Click:** "Login with GitHub"
3. **Authorize:** the OAuth app when prompted
4. **Success!** You should now see the CMS dashboard

---

## ✅ What Was Changed

The following files have been updated for you:

### `public/admin/config.yml`
```yaml
backend:
  name: github
  repo: bntam/tai-sanh-landing-vibe
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth

local_backend: true  # For local development
```

### `public/admin/index.html`
- Removed Netlify Identity widget script
- Now uses GitHub OAuth instead

---

## 🔧 Local Development

To test the CMS locally without authentication:

1. **Run the local backend server:**
   ```bash
   npx decap-server
   ```

2. **In another terminal, run your dev server:**
   ```bash
   npm run dev
   ```

3. **Access the CMS:**
   - Go to: `http://localhost:4321/admin`
   - Click "Login with Local Backend"
   - No authentication needed!

---

## 🐛 Troubleshooting

### "Authentication failed"
- Check that environment variables are set correctly in Cloudflare Pages
- Verify the callback URL is exactly: `https://api.netlify.com/auth/done`
- Make sure you've deployed the latest changes

### "Cannot read repository"
- Verify your GitHub account has access to the repository
- Check that the repository name in `config.yml` is correct: `bntam/tai-sanh-landing-vibe`

### "Local backend not working"
- Make sure `npx decap-server` is running in a separate terminal
- Check that you're accessing `http://localhost:4321/admin` (not the production URL)

---

## 📋 Configuration Summary

| Setting | Value |
|---------|-------|
| **Backend** | GitHub |
| **Repository** | bntam/tai-sanh-landing-vibe |
| **Branch** | main |
| **OAuth Provider** | Netlify (for GitHub OAuth) |
| **Callback URL** | https://api.netlify.com/auth/done |
| **Local Backend** | Enabled (for development) |

---

## 🔐 Security Notes

- **Never commit** OAuth secrets to Git
- **Only authorize** users who should have CMS access
- **Review** authorized users regularly in GitHub settings
- **Use branch protection** on your main branch

---

## 📚 Need More Help?

See the detailed guide: `DECAP_CMS_CLOUDFLARE_SETUP.md`

---

**That's it!** Your CMS should now work on Cloudflare Pages. 🎉

