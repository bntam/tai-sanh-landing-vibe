# Quick Start Guide - Phòng Khám YHCT Tái Sanh (English)

## 🚀 Getting Started

This guide will help you get the website up and running quickly.

### Prerequisites

- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
Navigate to: `http://localhost:4321`

4. **Access CMS**
Go to: `http://localhost:4321/admin`

---

## 🎯 What's New in Version 2.0

### ✨ Enhanced Notification Popup
- Two display modes: Always show or dismissible for a duration
- Smart dismissal with timestamp tracking
- Configurable duration in hours

### 📝 CMS-Manageable Website Content
- All website text editable through CMS
- No code changes needed
- Structured content for all sections

### 🎨 SEO-Optimized Blog Pages
- Beautiful, modern design
- Complete SEO features (meta tags, Open Graph, JSON-LD)
- Reading time calculation
- Table of contents
- Social sharing buttons
- Related posts
- Featured posts support

---

## 📝 Common Tasks

### 1. Create a Blog Post

1. Go to `/admin`
2. Click "Bài viết" → "New Bài viết"
3. Fill in:
   - **Title**: 50-60 characters
   - **Description**: 150-160 characters
   - **Featured Image**: 1200x630px recommended
   - **Content**: Write in Markdown
   - **Category**: Select category
   - **Tags**: Add 3-5 tags
   - **Featured**: Check if featured post
   - **SEO**: Optional meta fields
4. Click "Publish"

### 2. Manage Notification Popup

1. Go to `/admin`
2. Click "Thông báo"
3. Create/edit notification
4. Configure:
   - **Display Mode**: "Always" or "Dismissible"
   - **Dismiss Duration**: Hours to hide (e.g., 168 = 1 week)
5. Click "Publish"

### 3. Edit Website Content

1. Go to `/admin`
2. Click "Nội dung website"
3. Edit any section
4. Click "Save"

---

## 📚 Documentation

- **CMS_USER_GUIDE.md** - Complete CMS guide (Vietnamese)
- **SEO_GUIDE.md** - SEO best practices
- **TASK_COMPLETION_REPORT.md** - Technical details
- **FINAL_SUMMARY.md** - Project overview
- **DEPLOYMENT_CHECKLIST.md** - Deployment guide

---

## 🆘 Troubleshooting

### Dev server won't start
```bash
rm -rf node_modules .astro
npm install
npm run dev
```

### CMS not loading
1. Check `/admin` route
2. Clear browser cache
3. Check console for errors

### Content not updating
1. Restart dev server
2. Clear `.astro` cache
3. Hard refresh browser (Ctrl+Shift+R)

---

## 🚀 Deployment

See **DEPLOYMENT_CHECKLIST.md** for detailed instructions.

Quick deploy to Netlify:
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set up Netlify Identity
6. Deploy!

---

## 📞 Support

- Email: support@example.com
- Phone: 098 44 38 960
- Documentation: See other .md files

**Happy coding! 🎉**

