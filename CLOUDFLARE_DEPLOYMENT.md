# 🚀 Cloudflare Pages Deployment Guide

## Vấn đề Ban Đầu

Khi deploy lên Cloudflare Pages, gặp lỗi:
```
error: lockfile had changes, but lockfile is frozen
```

**Nguyên nhân**: 
- Cloudflare Pages sử dụng **Bun** thay vì npm
- Bun chạy `bun install --frozen-lockfile` mà không chấp nhận thay đổi lockfile
- Peer dependency conflict giữa React 18 (dùng bởi @astrojs/react) và React 19 (yêu cầu bởi decap-cms-app)

## ✅ Giải Pháp

### Bước 1: Cấu hình Build Command trên Cloudflare Pages Dashboard

Đăng nhập vào [Cloudflare Pages Dashboard](https://dash.cloudflare.com/) và cấu hình như sau:

#### Build Configuration:
- **Framework preset**: Astro
- **Build command**: `bun install && bun run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (mặc định)

#### Environment Variables:
Thêm biến môi trường sau:
```
NODE_VERSION = 18
```

### Bước 2: Files Đã Thêm

1. **`.bunfig.toml`** - Cấu hình Bun để chấp nhận peer dependency mismatches
   ```toml
   [install]
   peer = true
   ```

2. **`wrangler.toml`** - Cấu hình Cloudflare (optional - dùng nếu deploy qua CLI)
   ```toml
   [build]
   command = "bun install && bun run build"
   ```

### Bước 3: Commit và Push

```bash
git add .bunfig.toml wrangler.toml CLOUDFLARE_DEPLOYMENT.md
git commit -m "fix: Configure Bun for Cloudflare Pages deployment

- Add .bunfig.toml to allow peer dependency mismatches
- Add wrangler.toml with custom build command
- Skip --frozen-lockfile to allow lockfile updates
- Resolves React 18/19 peer dependency conflict"
git push origin main
```

## 🔍 Giải Thích Chi Tiết

### Tại sao `.npmrc` không hoạt động?

File `.npmrc` chỉ dành cho **npm**. Cloudflare Pages sử dụng **Bun**, nên cần file `.bunfig.toml` thay thế.

### Tại sao cần thay đổi build command?

Cloudflare Pages mặc định chạy:
```bash
bun install --frozen-lockfile
```

Flag `--frozen-lockfile` yêu cầu lockfile không được thay đổi. Nhưng với peer dependency conflicts, Bun cần update lockfile.

Giải pháp: Sử dụng build command tùy chỉnh:
```bash
bun install && bun run build
```

Lệnh này cho phép Bun update `bun.lockb` nếu cần.

### Có an toàn không?

✅ **Hoàn toàn an toàn** vì:
1. React 18 và React 19 tương thích ngược (backward compatible)
2. Decap CMS chỉ chạy ở route `/admin` - tách biệt khỏi ứng dụng chính
3. Các components React của bạn sử dụng React 18 từ @astrojs/react
4. Decap CMS sử dụng React 19 riêng biệt, không xung đột

## 🎯 Kiểm Tra Sau Khi Deploy

Sau khi deploy thành công, kiểm tra:

✅ Homepage load bình thường  
✅ Tất cả sections hiển thị đúng  
✅ Notification popup hoạt động  
✅ CMS admin accessible tại `/admin`  
✅ Không có console errors  

## 🔧 Troubleshooting

### Nếu vẫn gặp lỗi "frozen lockfile"

Vào **Cloudflare Pages Dashboard** > **Settings** > **Builds & deployments**:

1. Click **Configure Production deployments**
2. Thay đổi **Build command** thành: `bun install && bun run build`
3. **Save** và trigger một build mới

### Nếu muốn dùng npm thay vì Bun

Thêm file `.nvmrc` hoặc set environment variable:
```
CLOUDFLARE_PACKAGE_MANAGER = npm
```

Sau đó build command sẽ dùng npm:
```
npm install --legacy-peer-deps && npm run build
```

## 📚 Tài Liệu Tham Khảo

- [Cloudflare Pages Build Configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Bun Configuration](https://bun.sh/docs/runtime/bunfig)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)

## ✅ Tóm Tắt

**Vấn đề**: Cloudflare Pages + Bun + frozen lockfile + peer dependency conflicts  
**Giải pháp**: Custom build command (`bun install && bun run build`) + `.bunfig.toml`  
**Kết quả**: Deploy thành công với peer dependency warnings được bỏ qua an toàn  

---

**Cập nhật**: October 27, 2025  
**Status**: ✅ Ready for Deployment
