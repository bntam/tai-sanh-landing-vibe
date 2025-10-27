# Deployment Checklist - Phòng Khám YHCT Tái Sanh

## ✅ Pre-Deployment Checklist

### 1. Content Preparation

- [ ] **Thông tin phòng khám**
  - [ ] Cập nhật địa chỉ chính xác trong `src/content/settings/general.json`
  - [ ] Cập nhật số điện thoại
  - [ ] Cập nhật email
  - [ ] Cập nhật giờ làm việc
  - [ ] Thêm links Facebook, Zalo (nếu có)

- [ ] **Hình ảnh**
  - [ ] Upload logo phòng khám (thay thế `/uploads/logo-32x32.png`)
  - [ ] Upload ảnh hero banner (desktop & mobile)
  - [ ] Upload ảnh bác sĩ thật
  - [ ] Upload ảnh dịch vụ (nếu có)
  - [ ] Tối ưu tất cả ảnh (compress, webp format)

- [ ] **Nội dung**
  - [ ] Viết ít nhất 3-5 bài blog
  - [ ] Thêm thông tin đầy đủ cho tất cả dịch vụ
  - [ ] Thêm profile đầy đủ cho tất cả bác sĩ
  - [ ] Thêm 5-10 đánh giá khách hàng
  - [ ] Tạo notification popup (nếu cần)

### 2. Technical Checks

- [ ] **Build Test**
  ```bash
  npm run build
  ```
  - [ ] Build thành công không có errors
  - [ ] Kiểm tra warnings (nếu có)

- [ ] **Preview Test**
  ```bash
  npm run preview
  ```
  - [ ] Test tất cả pages
  - [ ] Test responsive (mobile, tablet, desktop)
  - [ ] Test navigation
  - [ ] Test links

- [ ] **Performance**
  - [ ] Kiểm tra page load speed
  - [ ] Kiểm tra image optimization
  - [ ] Kiểm tra JavaScript bundle size

### 3. SEO & Meta Tags

- [ ] **Meta Tags**
  - [ ] Title tags cho tất cả pages
  - [ ] Meta descriptions
  - [ ] Open Graph tags (Facebook sharing)
  - [ ] Twitter Card tags

- [ ] **Sitemap & Robots**
  - [ ] Tạo sitemap.xml (Astro auto-generates)
  - [ ] Kiểm tra robots.txt

- [ ] **Analytics**
  - [ ] Setup Google Analytics (optional)
  - [ ] Setup Google Search Console (optional)

### 4. Functionality Tests

- [ ] **Homepage**
  - [ ] Hero section hiển thị đúng
  - [ ] About section
  - [ ] Services section
  - [ ] Doctors section
  - [ ] Contact section
  - [ ] Footer với thông tin liên hệ
  - [ ] Scroll to top button
  - [ ] Mobile contact button

- [ ] **Navigation**
  - [ ] Desktop menu
  - [ ] Mobile menu
  - [ ] Smooth scroll to sections
  - [ ] All links work

- [ ] **Notification Popup**
  - [ ] Popup hiển thị đúng
  - [ ] Delay time hoạt động
  - [ ] Close button hoạt động
  - [ ] "Đã hiểu" button hoạt động
  - [ ] Show once functionality (localStorage)

- [ ] **Blog**
  - [ ] Blog listing page (`/blog`)
  - [ ] Individual blog posts (`/blog/[slug]`)
  - [ ] Markdown rendering
  - [ ] Images display correctly
  - [ ] Back button works

- [ ] **Responsive Design**
  - [ ] Mobile (375px)
  - [ ] Tablet (768px)
  - [ ] Desktop (1024px+)
  - [ ] Large desktop (1440px+)

## 🚀 Deployment Steps

### Option 1: Netlify (Recommended)

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Deploy to Netlify

1. Đăng nhập [Netlify](https://app.netlify.com)
2. Click "New site from Git"
3. Chọn GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (trong netlify.toml hoặc environment variables)
5. Click "Deploy site"

#### Step 3: Setup Netlify Identity

1. Vào site settings
2. Identity > Enable Identity
3. Identity > Registration preferences > **Invite only**
4. Identity > Services > **Enable Git Gateway**
5. Identity > Invite users
   - Nhập email của admin
   - Gửi invite

#### Step 4: Configure Domain (Optional)

1. Domain settings > Add custom domain
2. Configure DNS records
3. Enable HTTPS (auto)

#### Step 5: Test CMS

1. Truy cập `https://your-site.netlify.app/admin`
2. Đăng nhập bằng email đã invite
3. Test tạo/sửa content
4. Verify changes appear on site

### Option 2: Vercel

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Deploy to Vercel

1. Đăng nhập [Vercel](https://vercel.com)
2. Import project from GitHub
3. Configure:
   - Framework Preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy

#### Step 3: Setup Netlify Identity (Separate)

**Note**: Vercel không có Identity service, cần setup Netlify Identity riêng:

1. Tạo Netlify site (chỉ để dùng Identity)
2. Enable Identity như hướng dẫn trên
3. Update `public/admin/config.yml`:
   ```yaml
   backend:
     name: git-gateway
     repo: your-username/your-repo
     branch: main
   ```

## 📋 Post-Deployment Checklist

### 1. Verification

- [ ] **Site Access**
  - [ ] Homepage loads correctly
  - [ ] All pages accessible
  - [ ] No 404 errors
  - [ ] HTTPS enabled

- [ ] **CMS Access**
  - [ ] `/admin` accessible
  - [ ] Login works
  - [ ] Can create content
  - [ ] Can edit content
  - [ ] Can delete content
  - [ ] Changes reflect on site

- [ ] **Performance**
  - [ ] Run Lighthouse test
  - [ ] Check Core Web Vitals
  - [ ] Verify image optimization

### 2. Monitoring

- [ ] **Setup Monitoring**
  - [ ] Uptime monitoring (UptimeRobot, etc.)
  - [ ] Error tracking (Sentry, etc.)
  - [ ] Analytics (Google Analytics)

- [ ] **Backup**
  - [ ] Git repository backed up
  - [ ] Media files backed up
  - [ ] Database/content backed up

### 3. Documentation

- [ ] **Admin Training**
  - [ ] Train staff on CMS usage
  - [ ] Document common tasks
  - [ ] Create admin guide

- [ ] **Maintenance Plan**
  - [ ] Regular content updates
  - [ ] Security updates
  - [ ] Dependency updates

## 🔧 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf dist .astro node_modules
npm install
npm run build
```

### CMS Not Working

1. Check Netlify Identity is enabled
2. Check Git Gateway is enabled
3. Check user is invited and confirmed
4. Check `config.yml` is correct
5. Clear browser cache

### Images Not Loading

1. Check images are in `public/uploads/`
2. Check image paths start with `/uploads/`
3. Check file permissions
4. Check file size (optimize if needed)

### Notification Not Showing

1. Check `enabled: true` in CMS
2. Clear localStorage
3. Check console for errors
4. Verify notification file exists in `src/content/notifications/`

## 📞 Support Resources

- **Astro**: https://docs.astro.build
- **Netlify**: https://docs.netlify.com
- **Decap CMS**: https://decapcms.org/docs/
- **Tailwind**: https://tailwindcss.com/docs

## ✅ Final Checklist

- [ ] All content uploaded
- [ ] All images optimized
- [ ] Build successful
- [ ] Deployed to hosting
- [ ] CMS configured
- [ ] Admin users invited
- [ ] Domain configured (if custom)
- [ ] HTTPS enabled
- [ ] Analytics setup (optional)
- [ ] Monitoring setup (optional)
- [ ] Team trained on CMS
- [ ] Documentation complete

## 🎉 Launch!

Once all items are checked, your website is ready to go live!

**Next Steps**:
1. Announce launch on social media
2. Submit to Google Search Console
3. Monitor analytics
4. Gather user feedback
5. Plan regular content updates

---

**Good luck with your launch! 🚀**

