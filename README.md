# Phòng Khám Y Học Cổ Truyền Tái Sanh

## 🏥 Vietnamese Traditional Medicine Clinic Website

A modern, SEO-optimized website for Tái Sanh Traditional Medicine Clinic built with Astro, React, TypeScript, and Tailwind CSS.

**Version**: 2.1
**Status**: Production Ready ✅
**Lovable Project**: https://lovable.dev/projects/317da220-e4b2-4125-85d3-7fb054d976fc

---

## 🎉 Latest Updates (January 2025)

### ✅ All Enhancement Tasks Completed!

Three major enhancement tasks have been successfully completed:

1. **✅ Task 1: Dynamic Content Management**
   - All website text now managed through CMS
   - No hardcoded content in components
   - Instant updates without code changes

2. **✅ Task 2: Flexible Image Management**
   - Support for both image upload and URL input
   - Clear guidance for content editors
   - Recommended image sizes provided

3. **✅ Task 3: Performance & SEO Optimization**
   - Dynamic sitemap.xml generation
   - Comprehensive meta tags and structured data
   - Image lazy loading and optimization
   - CSS/JavaScript minification and code splitting

📄 **See [TASKS_COMPLETION_SUMMARY.md](TASKS_COMPLETION_SUMMARY.md) for detailed information.**

---

## ✨ Features

### Core Features
- 🎨 Modern, responsive design with traditional medicine aesthetic
- ⚡ Fast performance with Astro Islands architecture
- 📱 Mobile-first responsive layout
- 🎯 SEO-optimized with meta tags and structured data
- 🌐 Vietnamese language content
- 📝 Decap CMS for easy content management

### New in Version 2.0

#### 1. Enhanced Notification Popup System
- **Two display modes**: Always show or dismissible for a duration
- **Smart dismissal tracking**: Timestamp-based with automatic expiration
- **Configurable duration**: Set how long to hide popup (in hours)
- **CMS integration**: Easy configuration through admin panel

#### 2. CMS-Manageable Website Content
- **All text editable**: Header, About, Services, Doctors, Contact, Footer
- **No code changes needed**: Update content through CMS
- **Structured data**: Organized content with fallback defaults
- **User-friendly**: Vietnamese labels and helpful hints

#### 3. SEO-Optimized Blog Pages
- **Beautiful design**: Modern layout with traditional medicine theme
- **Complete SEO**: Meta tags, Open Graph, Twitter Cards, JSON-LD
- **Reading time**: Automatic calculation and display
- **Table of contents**: Auto-generated from headings
- **Social sharing**: Facebook, Twitter, native share buttons
- **Related posts**: Automatic suggestions by category
- **Featured posts**: Highlight important articles
- **Author cards**: Display author information and bio

---

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:4321
```

### Access CMS

```
http://localhost:4321/admin
```

For detailed instructions, see **QUICK_START.md** or **QUICK_START_EN.md**.

---

## 📚 Documentation

### User Guides
- **QUICK_START.md** - Quick start guide (Vietnamese)
- **QUICK_START_EN.md** - Quick start guide (English)
- **CMS_USER_GUIDE.md** - Complete CMS usage guide (Vietnamese)
- **SEO_GUIDE.md** - SEO best practices and optimization tips

### Technical Documentation
- **TASK_COMPLETION_REPORT.md** - Detailed technical implementation
- **FINAL_SUMMARY.md** - High-level project overview
- **DEPLOYMENT_CHECKLIST.md** - Production deployment guide
- **MIGRATION_GUIDE.md** - React to Astro migration notes

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 4.16+
- **UI Library**: [React](https://react.dev) 18
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **CMS**: [Decap CMS](https://decapcms.org)
- **Icons**: [Lucide React](https://lucide.dev)
- **Markdown**: [Marked](https://marked.js.org)

---

## 📁 Project Structure

```
tai-sanh-landing-vibe/
├── src/
│   ├── components/          # React components
│   │   ├── NotificationPopup.tsx  # Enhanced popup
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Hero, About, Services, etc.
│   ├── pages/              # Astro pages
│   │   ├── index.astro     # Homepage
│   │   ├── blog.astro      # Blog listing (redesigned)
│   │   └── blog/[slug].astro  # Blog post (redesigned)
│   ├── layouts/            # Page layouts
│   ├── content/            # CMS content
│   │   ├── blog/           # Blog posts
│   │   ├── notifications/  # Notifications
│   │   ├── services/       # Services
│   │   ├── doctors/        # Doctor profiles
│   │   ├── testimonials/   # Customer reviews
│   │   └── settings/       # Website content (NEW)
│   ├── utils/              # Utility functions
│   │   ├── cms.ts          # CMS utilities
│   │   └── blog.ts         # Blog utilities (NEW)
│   └── config/             # Configuration
├── public/
│   ├── admin/              # CMS admin
│   └── uploads/            # Uploaded images
└── Documentation files (.md)
```

---

## 🎨 Design System

### Colors

```javascript
taisan: {
  DEFAULT: '#2D5016',      // Main green
  light: '#3D6B1F',        // Lighter green
  dark: '#1D3A0F',         // Darker green
  cream: '#F5F1E8',        // Cream background
  gold: '#D4AF37',         // Gold accent
}
```

### Typography

- **Headings**: Noto Serif (serif)
- **Body**: Inter (sans-serif)

---

## 📝 Content Management

### CMS Collections

1. **Thông báo** (Notifications)
   - Popup notifications with advanced display controls
   - Dismissible with configurable duration

2. **Bài viết** (Blog Posts)
   - SEO-optimized blog posts
   - Featured posts support
   - Tags and categories
   - Author information

3. **Dịch vụ** (Services)
   - Service listings with icons
   - Descriptions and details

4. **Bác sĩ** (Doctors)
   - Doctor profiles with photos
   - Qualifications and specialties

5. **Đánh giá** (Testimonials)
   - Customer reviews with ratings
   - Photos and dates

6. **Nội dung website** (Website Content) - NEW
   - All UI text and labels
   - Header, About, Services, Contact, Footer
   - Buttons and navigation

---

## 🔍 SEO Features

### Meta Tags
- Title tags (optimized length)
- Meta descriptions
- Keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

### Structured Data (JSON-LD)
- BlogPosting schema
- Breadcrumb schema
- Author information
- Publisher information

### Content Optimization
- Proper heading hierarchy
- Reading time calculation
- Table of contents
- Internal linking
- Image optimization
- Mobile-friendly design

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Set up Netlify Identity for CMS
5. Deploy!

See **DEPLOYMENT_CHECKLIST.md** for detailed instructions.

---

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Code Quality

- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Git hooks (optional)

---

## 📊 Performance

- ⚡ Lighthouse score: 90+
- 🎯 Core Web Vitals optimized
- 📦 Minimal JavaScript
- 🖼️ Optimized images (WebP)
- 🚀 Fast page loads

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📞 Contact Information

**Phòng Khám Y Học Cổ Truyền Tái Sanh**

- 📍 Address: 228 Lê Lợi, Phường 5, Tuy Hòa, Phú Yên
- 📱 Phone: 098 44 38 960
- 🕐 Hours: Monday - Sunday: 7:00 - 20:00

---

## 📄 License

This project is proprietary and confidential.

---

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- CMS powered by [Decap CMS](https://decapcms.org)
- Deployed on [Netlify](https://netlify.com)

---

## 📝 Changelog

### Version 2.0 (January 2025)

#### Added
- Enhanced notification popup with dismissible mode and duration control
- CMS-manageable website content for all UI text
- SEO-optimized blog pages with beautiful design
- Reading time calculation for blog posts
- Table of contents auto-generation
- Social sharing buttons (Facebook, Twitter, native share)
- Related posts section
- Featured posts support
- Author cards with images
- Comprehensive SEO meta tags and structured data
- Blog utility functions (reading time, TOC, schema generation)

#### Improved
- Blog listing page with featured posts section
- Blog post page with sidebar and enhanced layout
- CMS configuration with new fields
- Documentation (5 new guides)

#### Fixed
- TypeScript strict mode compliance
- Error handling in CMS utilities
- Fallback mechanisms for content loading

### Version 1.0 (December 2024)

- Initial release with Astro framework
- Basic CMS integration
- Core pages and sections
- Responsive design

---

## 🔮 Roadmap

### Planned Features

- [ ] Blog category filtering
- [ ] Blog search functionality
- [ ] Blog pagination
- [ ] RSS feed
- [ ] Comment system
- [ ] Newsletter signup
- [ ] Multilingual support (English)
- [ ] Advanced analytics dashboard
- [ ] Appointment booking system

---

**Made with ❤️ for Phòng Khám YHCT Tái Sanh**
