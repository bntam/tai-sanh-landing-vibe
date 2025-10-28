# 🚀 Quick Setup: Decap CMS with Direct GitHub Auth on Cloudflare Pages

## ⚡ 3-Minute Setup Guide (No Netlify Required!)

Follow these steps to enable the CMS admin panel on your Cloudflare Pages deployment.

**NEW:** This guide uses **Direct GitHub Authentication** - no Netlify dependencies!

---

## Step 1: Create GitHub OAuth App (2 minutes)

1. **Go to:** https://github.com/settings/developers
2. **Click:** "OAuth Apps" → "New OAuth App"
3. **Fill in:**
   ```
   Application name: Decap CMS - Tái Sanh
   Homepage URL: https://phongkhamtaisanh.com
   Authorization callback URL: https://phongkhamtaisanh.com/admin/
   ```

   ⚠️ **IMPORTANT:** The callback URL is now **YOUR site** (not Netlify!)

4. **Click:** "Register application"
5. **Done!** You don't need to copy the Client ID or Secret for this method

---

## Step 2: Deploy Your Changes (1 minute)

The configuration files have already been updated to use **Direct GitHub Authentication**. Just commit and push:

```bash
git add .
git commit -m "Switch to direct GitHub authentication (no Netlify)"
git push
```

Wait for Cloudflare Pages to deploy (2-5 minutes).

---

## Step 3: Test the CMS (30 seconds)

1. **Go to:** `https://phongkhamtaisanh.com/admin`
2. **Click:** "Login with GitHub"
3. **You'll be redirected to GitHub** (not Netlify!)
4. **Authorize:** the OAuth app when prompted
5. **Success!** You should now see the CMS dashboard

---

## ✅ What Was Changed

The following files have been updated for you:

### `public/admin/config.yml`
```yaml
backend:
  name: github
  repo: bntam/tai-sanh-landing-vibe
  branch: main

local_backend: true  # For local development
```

**Notice:** No `base_url` or `auth_endpoint` - this means **Direct GitHub Authentication**!

### `public/admin/index.html`
- Removed Netlify Identity widget script
- Now uses Direct GitHub OAuth (no Netlify proxy)

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
- Verify the callback URL in GitHub OAuth app is: `https://phongkhamtaisanh.com/admin/`
- Check that your GitHub account has access to the repository
- Make sure you've deployed the latest changes

### "Cannot read repository"
- Verify your GitHub account has access to the repository
- Check that the repository name in `config.yml` is correct: `bntam/tai-sanh-landing-vibe`
- Make sure the repository is public or you've authorized the OAuth app for private repos

### "Local backend not working"
- Make sure `npx decap-server` is running in a separate terminal
- Check that you're accessing `http://localhost:4321/admin` (not the production URL)
- Verify `local_backend: true` is set in `config.yml`

---

## 📋 Configuration Summary

| Setting | Value |
|---------|-------|
| **Backend** | GitHub (Direct Auth) |
| **Repository** | bntam/tai-sanh-landing-vibe |
| **Branch** | main |
| **OAuth Provider** | GitHub (Direct - No Netlify!) |
| **Callback URL** | https://phongkhamtaisanh.com/admin/ |
| **Local Backend** | Enabled (for development) |
| **Environment Variables** | None required! ✨ |

---

## 🔐 Security Notes

- **Only authorize** users who should have CMS access
- **Review** authorized users regularly in GitHub settings
- **Use branch protection** on your main branch
- **No secrets needed** - Direct GitHub auth doesn't require environment variables!

---

## 🎯 Why This Is Better

**Old Method (Netlify OAuth Proxy):**
- ❌ Requires environment variables
- ❌ Depends on Netlify's infrastructure
- ❌ More complex setup
- ❌ Extra redirect through Netlify

**New Method (Direct GitHub Auth):**
- ✅ No environment variables needed
- ✅ No Netlify dependency
- ✅ Simpler setup
- ✅ Direct authentication with GitHub
- ✅ Faster (one less redirect)

---

## 📚 Need More Help?

See the detailed guides:
- `DECAP_CMS_AUTH_EXPLAINED.md` - Complete explanation of authentication methods
- `DECAP_CMS_CLOUDFLARE_SETUP.md` - Comprehensive setup guide

---

**That's it!** Your CMS now uses Direct GitHub Authentication - no Netlify required! 🎉

