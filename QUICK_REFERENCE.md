# Quick Reference Guide

## 🚀 Getting Started

### Start Development Server
```bash
npm run dev
```
Website: http://localhost:4322  
CMS Admin: http://localhost:4322/admin

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📝 Content Management

### Access CMS Admin
1. Visit http://localhost:4321/admin (or your-domain.com/admin in production)
2. For local development: Click "Login with Local Backend" (run `npx decap-server` first)
3. For production: Login with GitHub OAuth
4. Edit content and click "Publish"

### Edit Website Content

#### Site Information (Address, Phone, Hours)
1. Go to "Nội dung website" → "Thông tin phòng khám"
2. Edit any field
3. Click "Publish"
4. Changes appear immediately on website

#### Navigation Menu
1. Go to "Nội dung website" → "Header"
2. Edit navigation items
3. Click "Publish"

#### About Section
1. Go to "Nội dung website" → "Giới thiệu"
2. Edit title, description, mission, reasons
3. Click "Publish"

#### Services Section
1. Go to "Nội dung website" → "Dịch vụ"
2. Edit section labels and CTA text
3. Click "Publish"

#### Contact Section
1. Go to "Nội dung website" → "Liên hệ"
2. Edit labels (addressLabel, phoneLabel, etc.)
3. Click "Publish"

### Add Blog Post
1. Go to "Bài viết" → "New Bài viết"
2. Fill in all fields
3. For image: Upload file OR enter URL
4. Click "Publish"

### Add Doctor Profile
1. Go to "Bác sĩ" → "New Bác sĩ"
2. Fill in information
3. For image: Upload file OR enter URL
4. Click "Publish"

### Manage Notification Popup
1. Go to "Thông báo" → Edit existing or create new
2. Set display mode:
   - "always" = Show on every visit
   - "dismissible" = Hide after user clicks "Tắt thông báo"
3. Set dismiss duration (in hours)
4. Set active status
5. Click "Publish"

---

## 🖼️ Image Management

### Two Ways to Add Images

#### Method 1: Upload File
1. Click on image field
2. Click "Choose an image"
3. Select file from computer
4. Image saved to `/public/uploads/`

#### Method 2: Enter URL
1. Click on image field
2. Paste external image URL
3. Image loaded from external source

### Recommended Image Sizes
- **Blog posts**: 1200x630px
- **Doctor photos**: 400x400px
- **About section**: 800x600px
- **Hero images**: 1920x1080px

---

## 🔍 SEO Features

### Automatic SEO
- ✅ Sitemap: http://localhost:4322/sitemap.xml
- ✅ Robots.txt: http://localhost:4322/robots.txt
- ✅ Meta tags on all pages
- ✅ Structured data (JSON-LD)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags

### Check SEO
1. View page source (Ctrl+U)
2. Look for `<meta>` tags in `<head>`
3. Look for `<script type="application/ld+json">` for structured data

### Test SEO
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator

---

## ⚡ Performance Features

### Automatic Optimizations
- ✅ Image lazy loading (except hero)
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Code splitting
- ✅ HTML compression
- ✅ Optimized chunk sizes

### Test Performance
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Click "Generate report"
4. Check Performance, SEO, Accessibility scores

---

## 🛠️ Common Tasks

### Update Site Address
1. CMS: "Nội dung website" → "Thông tin phòng khám" → Edit "Địa chỉ"
2. Click "Publish"
3. Appears in Contact section and Footer

### Update Phone Number
1. CMS: "Nội dung website" → "Thông tin phòng khám" → Edit "Số điện thoại"
2. Click "Publish"
3. Appears in Contact, Footer, and floating button

### Update Working Hours
1. CMS: "Nội dung website" → "Thông tin phòng khám" → Edit "Giờ làm việc"
2. Click "Publish"
3. Appears in Contact section

### Change Navigation Menu
1. CMS: "Nội dung website" → "Header" → Edit "navigation"
2. Add/remove/edit menu items
3. Click "Publish"

### Feature a Blog Post
1. Edit blog post in CMS
2. Check "Nổi bật" (Featured)
3. Click "Publish"
4. Post appears in featured section on blog page

---

## 📁 File Structure

```
tai-sanh-landing-vibe/
├── public/
│   ├── admin/           # CMS configuration
│   ├── uploads/         # Uploaded images
│   └── robots.txt       # Search engine instructions
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Hero, About, Services, etc.
│   │   └── ui/          # Reusable UI components
│   ├── content/         # CMS content files
│   │   ├── blog/        # Blog posts
│   │   ├── doctors/     # Doctor profiles
│   │   ├── notifications/ # Popup notifications
│   │   └── settings/    # Website settings
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Astro pages
│   │   ├── index.astro  # Homepage
│   │   ├── blog.astro   # Blog listing
│   │   └── sitemap.xml.ts # Dynamic sitemap
│   └── utils/           # Utility functions
└── astro.config.mjs     # Astro configuration
```

---

## 🐛 Troubleshooting

### CMS Not Loading
1. For local dev: Make sure `npx decap-server` is running
2. For production: Check GitHub OAuth app is configured correctly
3. Clear browser cache
4. Check browser console for errors

### Changes Not Appearing
1. Make sure you clicked "Publish" in CMS
2. Refresh the page (Ctrl+F5)
3. Check if dev server is running

### Images Not Showing
1. Check image path is correct
2. For uploads: Check `/public/uploads/` folder
3. For URLs: Check URL is accessible
4. Check browser console for errors

### Build Errors
1. Run `npm install` to update dependencies
2. Check for TypeScript errors: `npm run build`
3. Check console output for specific errors

---

## 📞 Support

### Documentation Files
- `README.md` - Full project documentation
- `TASKS_COMPLETION_SUMMARY.md` - Latest updates and changes
- `CMS_USER_GUIDE.md` - Detailed CMS guide
- `SEO_GUIDE.md` - SEO best practices
- `QUICK_START.md` - Quick start guide

### Useful Commands
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run build
```

---

## ✅ Quick Checklist

### Before Going Live
- [ ] Update all content in CMS
- [ ] Add real doctor photos
- [ ] Write at least 3-5 blog posts
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up GitHub OAuth for CMS (see DECAP_CMS_AUTH_EXPLAINED.md)
- [ ] Configure custom domain on Cloudflare Pages
- [ ] Test CMS in production
- [ ] Submit sitemap to Google Search Console

### Regular Maintenance
- [ ] Add new blog posts weekly
- [ ] Update notification popup as needed
- [ ] Monitor site performance
- [ ] Check for broken links
- [ ] Update doctor information
- [ ] Respond to patient inquiries

---

**Last Updated**: January 2025  
**Version**: 2.1  
**Status**: Production Ready ✅

