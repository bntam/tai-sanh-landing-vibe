# Quick Start Guide - Phòng Khám YHCT Tái Sanh

## 🚀 Bắt đầu nhanh

### 1. Cài đặt

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: http://localhost:4321

### 3. Truy cập CMS Admin

Mở trình duyệt và truy cập: http://localhost:4321/admin

## 📝 Quản lý Notification Popup

### Cách 1: Qua CMS (Khuyến nghị)

1. Truy cập `/admin`
2. Chọn "Thông báo popup"
3. Click "New Thông báo popup"
4. Điền thông tin:
   ```
   Tiêu đề: Thông báo nghỉ lễ
   Nội dung: Phòng khám nghỉ từ ngày 01/01 đến 03/01
   Kích hoạt: ✓
   Hiển thị một lần: ✓
   Độ trễ hiển thị: 2000
   ```
5. Click "Publish"

### Cách 2: Chỉnh sửa file config (Fallback)

Chỉnh sửa `src/config/notification.ts`:

```typescript
export const notificationConfig: NotificationConfig = {
  enabled: true,
  title: "Thông báo",
  message: "Nội dung thông báo của bạn...",
  showOnce: true,
  displayDelay: 2000,
};
```

## 📰 Tạo Blog Post

1. Truy cập `/admin`
2. Chọn "Bài viết"
3. Click "New Bài viết"
4. Điền thông tin và viết nội dung bằng Markdown
5. Click "Publish"
6. Bài viết sẽ xuất hiện tại `/blog`

## 🏥 Quản lý Dịch vụ

1. Truy cập `/admin`
2. Chọn "Dịch vụ"
3. Click "New Dịch vụ"
4. Điền thông tin dịch vụ
5. Click "Publish"

## 👨‍⚕️ Quản lý Bác sĩ

1. Truy cập `/admin`
2. Chọn "Đội ngũ bác sĩ"
3. Click "New Đội ngũ bác sĩ"
4. Upload ảnh và điền thông tin
5. Click "Publish"

## ⭐ Quản lý Đánh giá

1. Truy cập `/admin`
2. Chọn "Đánh giá khách hàng"
3. Click "New Đánh giá khách hàng"
4. Điền thông tin đánh giá
5. Click "Publish"

## 🔧 Cài đặt Website

1. Truy cập `/admin`
2. Chọn "Cài đặt website" > "Thông tin chung"
3. Chỉnh sửa thông tin:
   - Tên phòng khám
   - Địa chỉ
   - Số điện thoại
   - Email
   - Giờ làm việc
   - Social media links
4. Click "Publish"

## 🌐 Deploy lên Production

### Netlify (Khuyến nghị)

1. Push code lên GitHub
2. Đăng nhập Netlify
3. Click "New site from Git"
4. Chọn repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Enable Netlify Identity:
   - Settings > Identity > Enable Identity
   - Settings > Identity > Services > Enable Git Gateway
8. Mời admin user qua email

### Vercel

1. Push code lên GitHub
2. Đăng nhập Vercel
3. Import project
4. Deploy

**Lưu ý**: Với Vercel, bạn cần setup Netlify Identity riêng để sử dụng CMS.

## 🧪 Test Notification Popup

### Test hiển thị popup

1. Đảm bảo `enabled: true` trong notification config
2. Reload trang
3. Popup sẽ hiển thị sau `displayDelay` milliseconds

### Test "hiển thị một lần"

1. Set `showOnce: true`
2. Reload trang - popup hiển thị
3. Đóng popup
4. Reload trang - popup không hiển thị nữa
5. Để test lại: Mở DevTools > Application > Local Storage > Xóa key `notification-popup-dismissed`

### Tắt popup

Có 2 cách:
1. Trong CMS: Set "Kích hoạt" = false
2. Trong code: Set `enabled: false` trong `src/config/notification.ts`

## 📱 Test Responsive

1. Mở DevTools (F12)
2. Click icon mobile/tablet
3. Test các breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px+

## 🎨 Tùy chỉnh màu sắc

Chỉnh sửa `tailwind.config.ts`:

```typescript
taisan: {
  DEFAULT: '#158560',    // Màu chính
  light: '#25A77C',      // Màu sáng
  dark: '#0A6447',       // Màu tối
  gold: '#FFD700',       // Màu vàng
  cream: '#F2F0E6',      // Màu kem
}
```

## 🐛 Debug

### Xem logs

```bash
# Development
npm run dev

# Check console trong browser DevTools
```

### Clear cache

```bash
# Xóa build cache
rm -rf dist .astro

# Rebuild
npm run build
```

### Reinstall dependencies

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Tài liệu chi tiết

Xem file `MIGRATION_GUIDE.md` để biết thêm chi tiết về:
- Cấu trúc thư mục
- Customization nâng cao
- Troubleshooting
- API documentation

## ✅ Checklist trước khi deploy

- [ ] Test tất cả sections trên homepage
- [ ] Test notification popup
- [ ] Test responsive trên mobile/tablet
- [ ] Kiểm tra tất cả links
- [ ] Upload ảnh thật cho doctors, services
- [ ] Tạo ít nhất 3-5 blog posts
- [ ] Cập nhật thông tin liên hệ
- [ ] Test CMS trên production
- [ ] Setup Netlify Identity
- [ ] Mời admin users
- [ ] Test form liên hệ (nếu có)

## 🎉 Hoàn thành!

Website của bạn đã sẵn sàng! Chúc bạn thành công! 🚀

