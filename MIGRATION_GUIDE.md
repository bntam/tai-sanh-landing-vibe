# Phòng Khám Y Học Cổ Truyền Tái Sanh - Migration Guide

## 🎉 Hoàn thành Migration

Website đã được chuyển đổi thành công từ React/Vite sang Astro framework với đầy đủ tính năng mới!

## 🚀 Công nghệ sử dụng

- **Astro 4.16+** - Framework web hiện đại, tối ưu hiệu suất
- **React 18** - Thư viện UI components (sử dụng với Astro Islands)
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Bộ components UI cao cấp
- **Decap CMS** - Hệ thống quản lý nội dung (CMS)

## 📋 Tính năng đã hoàn thành

### ✅ Task 1: Migration từ React/Vite sang Astro

- ✅ Chuyển đổi hoàn toàn sang Astro framework
- ✅ Giữ nguyên tất cả tính năng và thiết kế
- ✅ Tối ưu hiệu suất với Astro Islands
- ✅ Cấu hình TypeScript và Tailwind CSS
- ✅ Tất cả sections hoạt động: Hero, About, Services, Doctors, Contact

### ✅ Task 2: Hệ thống Notification Popup

- ✅ Popup thông báo với thiết kế y học cổ truyền (màu taisan-*)
- ✅ Cấu hình linh hoạt:
  - Bật/tắt popup
  - Tùy chỉnh tiêu đề và nội dung
  - Độ trễ hiển thị (displayDelay)
  - Hiển thị một lần (showOnce với localStorage)
- ✅ Tích hợp với Decap CMS

### ✅ Task 3: Tích hợp Decap CMS

- ✅ Cài đặt và cấu hình Decap CMS
- ✅ Quản lý thông báo popup
- ✅ Quản lý bài viết blog
- ✅ Quản lý dịch vụ
- ✅ Quản lý đội ngũ bác sĩ
- ✅ Quản lý đánh giá khách hàng
- ✅ Cài đặt website tổng quát
- ✅ Tích hợp Netlify Identity cho authentication

## 🛠️ Cài đặt và Phát triển

### Yêu cầu

- Node.js 18+ và npm

### Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

### Development Server

Sau khi chạy `npm run dev`, website sẽ chạy tại:
- **Frontend**: http://localhost:4321
- **CMS Admin**: http://localhost:4321/admin

## 📝 Quản lý nội dung với Decap CMS

### Truy cập CMS

1. Truy cập `/admin` trên website của bạn
2. Đăng nhập bằng Netlify Identity

### Cấu hình Netlify Identity (Cho Production)

1. Deploy website lên Netlify
2. Vào Settings > Identity > Enable Identity
3. Vào Settings > Identity > Registration preferences > Invite only
4. Vào Settings > Identity > Services > Enable Git Gateway
5. Mời người dùng qua email từ Identity tab

### Development với Local Backend

Để test CMS locally mà không cần Netlify:

1. Uncomment dòng `local_backend: true` trong `public/admin/config.yml`
2. Chạy: `npx decap-server` trong terminal riêng
3. Truy cập http://localhost:4321/admin

### Quản lý Notification Popup

1. Truy cập CMS Admin (`/admin`)
2. Chọn "Thông báo popup"
3. Tạo hoặc chỉnh sửa thông báo
4. Cấu hình:
   - **Tiêu đề**: Tiêu đề popup
   - **Nội dung**: Nội dung thông báo (hỗ trợ nhiều dòng)
   - **Kích hoạt**: Bật/tắt popup
   - **Hiển thị một lần**: Chỉ hiển thị một lần cho mỗi người dùng
   - **Độ trễ hiển thị**: Thời gian chờ trước khi hiển thị (ms)

### Quản lý Blog Posts

1. Truy cập CMS Admin
2. Chọn "Bài viết"
3. Tạo bài viết mới hoặc chỉnh sửa bài viết hiện có
4. Sử dụng Markdown editor để viết nội dung
5. Bài viết sẽ hiển thị tại `/blog`

### Quản lý Dịch vụ, Bác sĩ, Đánh giá

Tương tự như quản lý blog posts, truy cập các collection tương ứng trong CMS.

## 📁 Cấu trúc thư mục

```
tai-sanh-landing-vibe/
├── public/
│   ├── admin/              # Decap CMS admin interface
│   │   ├── index.html
│   │   └── config.yml      # CMS configuration
│   └── uploads/            # Media uploads
├── src/
│   ├── components/         # React components
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Doctors.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/             # shadcn/ui components
│   │   ├── IndexPage.tsx
│   │   ├── NotificationPopup.tsx
│   │   └── Providers.tsx
│   ├── content/            # CMS content (managed by Decap CMS)
│   │   ├── blog/
│   │   ├── doctors/
│   │   ├── notifications/
│   │   ├── services/
│   │   ├── settings/
│   │   └── testimonials/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   └── [slug].astro  # Dynamic blog post pages
│   │   ├── blog.astro        # Blog listing page
│   │   ├── index.astro       # Homepage
│   │   └── 404.astro         # 404 page
│   ├── utils/
│   │   └── cms.ts            # CMS utility functions
│   ├── config/
│   │   └── notification.ts   # Fallback notification config
│   └── index.css
├── astro.config.mjs
├── tailwind.config.ts
└── package.json
```

## 🎨 Customization

### Thay đổi màu sắc

Màu sắc được định nghĩa trong `tailwind.config.ts`:

```typescript
taisan: {
  DEFAULT: '#158560',
  light: '#25A77C',
  dark: '#0A6447',
  gold: '#FFD700',
  cream: '#F2F0E6',
  'gold-light': '#FAEDB9',
  'background-light': '#F9FCF9',
}
```

### Thay đổi notification mặc định

Chỉnh sửa file `src/config/notification.ts`:

```typescript
export const notificationConfig: NotificationConfig = {
  enabled: true,
  title: "Thông báo",
  message: "Nội dung thông báo...",
  showOnce: true,
  displayDelay: 2000,
};
```

## 🚀 Deployment

### Deploy lên Netlify

1. Push code lên GitHub
2. Kết nối repository với Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Enable Netlify Identity (xem phần Cấu hình Netlify Identity ở trên)

### Deploy lên Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Build settings sẽ tự động được detect
4. Để sử dụng Decap CMS, bạn cần setup Netlify Identity riêng hoặc sử dụng Git Gateway alternative

## 📚 Tài liệu tham khảo

- [Astro Documentation](https://docs.astro.build)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🐛 Troubleshooting

### CMS không load được

- Kiểm tra xem Netlify Identity đã được enable chưa
- Kiểm tra Git Gateway đã được enable chưa
- Thử sử dụng local backend cho development

### Notification không hiển thị

- Kiểm tra `enabled: true` trong CMS hoặc config file
- Xóa localStorage để test lại (nếu `showOnce: true`)
- Kiểm tra console log để xem có lỗi không

### Build errors

- Chạy `npm install` lại
- Xóa `node_modules` và `package-lock.json`, sau đó `npm install` lại
- Kiểm tra Node.js version (cần 18+)

## 📞 Liên hệ

Phòng Khám Y Học Cổ Truyền Tái Sanh
- Địa chỉ: 228 Lê Lợi, Phường Tuy Hòa, Đắk Lắk
- Điện thoại: 098 44 38 960

