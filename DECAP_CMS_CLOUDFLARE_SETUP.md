# Decap CMS Configuration for Cloudflare Pages

## 🔍 Problem

Decap CMS is currently configured to use **Netlify Identity** (`git-gateway` backend), which doesn't work on Cloudflare Pages. You need to switch to a compatible authentication method.

---

## ✅ Solution Options for Cloudflare Pages

You have **3 main options** for authentication with Decap CMS on Cloudflare Pages:

### **Option 1: GitHub OAuth (Recommended) ⭐**
- **Pros**: Free, secure, works well with GitHub repositories
- **Cons**: Requires GitHub OAuth app setup
- **Best for**: Production deployments

### **Option 2: GitLab OAuth**
- **Pros**: Free, secure, works well with GitLab repositories
- **Cons**: Requires GitLab OAuth app setup
- **Best for**: Projects hosted on GitLab

### **Option 3: Test/Local Backend**
- **Pros**: No authentication needed, instant setup
- **Cons**: Only works locally, not for production
- **Best for**: Local development and testing

---

## 🚀 Recommended Setup: GitHub OAuth

This is the most common and recommended approach for Cloudflare Pages deployments.

### **Step 1: Create GitHub OAuth App**

1. **Go to GitHub Settings:**
   - Navigate to: https://github.com/settings/developers
   - Click **"OAuth Apps"** → **"New OAuth App"**

2. **Fill in the OAuth App details:**
   ```
   Application name: Decap CMS - Phòng Khám Tái Sanh
   Homepage URL: https://your-site.pages.dev
   Authorization callback URL: https://api.netlify.com/auth/done
   ```
   
   **Important:** Even though you're using Cloudflare Pages, you still use Netlify's OAuth callback URL because Decap CMS uses Netlify's OAuth service.

3. **Save the credentials:**
   - After creating the app, you'll get a **Client ID**
   - Click **"Generate a new client secret"** to get a **Client Secret**
   - **Save both values** - you'll need them in the next step

### **Step 2: Set Up Cloudflare Pages Environment Variables**

1. **Go to your Cloudflare Pages project:**
   - Navigate to: Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables

2. **Add the following environment variables:**
   ```
   OAUTH_GITHUB_CLIENT_ID = your_github_client_id
   OAUTH_GITHUB_CLIENT_SECRET = your_github_client_secret
   ```

3. **Important:** Set these for **both** Production and Preview environments

### **Step 3: Update CMS Configuration**

Update `public/admin/config.yml` to use GitHub backend:

```yaml
backend:
  name: github
  repo: your-username/your-repo-name  # Replace with your GitHub repo
  branch: main
  base_url: https://api.netlify.com  # Netlify's OAuth service
  auth_endpoint: auth

# Rest of your configuration stays the same...
```

### **Step 4: Remove Netlify Identity Script**

Update `public/admin/index.html` to remove the Netlify Identity widget:

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Quản trị nội dung - Phòng Khám YHCT Tái Sanh</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

### **Step 5: Deploy and Test**

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Configure Decap CMS for Cloudflare Pages with GitHub OAuth"
   git push
   ```

2. **Wait for Cloudflare Pages to deploy**

3. **Test the admin panel:**
   - Go to: `https://your-site.pages.dev/admin`
   - Click **"Login with GitHub"**
   - Authorize the OAuth app
   - You should now be able to access the CMS!

---

## 🔧 Alternative: Local Development Backend

For **local development only**, you can use the local backend:

### **Enable Local Backend**

1. **Update `public/admin/config.yml`:**
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo-name
     branch: main
     base_url: https://api.netlify.com
     auth_endpoint: auth

   # Enable local backend for development
   local_backend: true
   ```

2. **Run the local backend server:**
   ```bash
   npx decap-server
   ```

3. **In another terminal, run your dev server:**
   ```bash
   npm run dev
   ```

4. **Access the CMS locally:**
   - Go to: `http://localhost:4321/admin`
   - You'll see a **"Login with Local Backend"** button
   - No authentication needed!

**Note:** This only works locally. For production, you must use GitHub OAuth.

---

## 📋 Complete Configuration Example

Here's what your final `public/admin/config.yml` should look like:

```yaml
backend:
  name: github
  repo: your-username/tai-sanh-landing-vibe  # Replace with your actual repo
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth

# Enable for local development
local_backend: true

media_folder: "public/uploads"
public_folder: "/uploads"

locale: "vi"

# ... rest of your collections configuration stays the same
```

---

## 🔐 Security Best Practices

1. **Never commit OAuth secrets to Git**
   - Always use environment variables in Cloudflare Pages
   - Add `.env` to `.gitignore` if testing locally

2. **Restrict OAuth app access**
   - Only authorize users who should have CMS access
   - Review authorized users regularly in GitHub settings

3. **Use branch protection**
   - Enable branch protection rules on your main branch
   - Require pull request reviews for sensitive changes

---

## 🐛 Troubleshooting

### **Issue: "Error: Failed to load config.yml"**
**Solution:** Check that your `config.yml` syntax is correct. Use a YAML validator.

### **Issue: "Authentication failed"**
**Solution:** 
- Verify your GitHub OAuth app credentials
- Check that environment variables are set correctly in Cloudflare Pages
- Ensure the callback URL is exactly: `https://api.netlify.com/auth/done`

### **Issue: "Cannot read repository"**
**Solution:**
- Verify the `repo` value in `config.yml` matches your GitHub repository
- Ensure your GitHub account has access to the repository
- Check that the repository is not private (or that the OAuth app has access to private repos)

### **Issue: "Local backend not working"**
**Solution:**
- Make sure you're running `npx decap-server` in a separate terminal
- Check that `local_backend: true` is uncommented in `config.yml`
- Verify you're accessing `http://localhost:4321/admin` (not the production URL)

---

## 📚 Additional Resources

- [Decap CMS GitHub Backend Documentation](https://decapcms.org/docs/github-backend/)
- [Decap CMS Authentication Documentation](https://decapcms.org/docs/authentication-backends/)
- [Cloudflare Pages Environment Variables](https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables)

---

## ✅ Quick Checklist

Before deploying, make sure you've completed:

- [ ] Created GitHub OAuth app
- [ ] Saved Client ID and Client Secret
- [ ] Added environment variables to Cloudflare Pages
- [ ] Updated `config.yml` with GitHub backend
- [ ] Removed Netlify Identity script from `index.html`
- [ ] Updated `repo` value in `config.yml` with your actual repository
- [ ] Committed and pushed changes
- [ ] Tested login at `/admin` after deployment

---

**Need help?** If you encounter any issues, check the troubleshooting section above or refer to the Decap CMS documentation.

