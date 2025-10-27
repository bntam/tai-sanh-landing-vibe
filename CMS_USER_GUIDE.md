# Hướng dẫn sử dụng CMS - Phòng Khám YHCT Tái Sanh

## 📖 Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Đăng nhập CMS](#đăng-nhập-cms)
3. [Quản lý Thông báo](#quản-lý-thông-báo)
4. [Quản lý Bài viết](#quản-lý-bài-viết)
5. [Quản lý Nội dung Website](#quản-lý-nội-dung-website)
6. [Quản lý Dịch vụ](#quản-lý-dịch-vụ)
7. [Quản lý Bác sĩ](#quản-lý-bác-sĩ)
8. [Quản lý Đánh giá](#quản-lý-đánh-giá)
9. [Tips và Lưu ý](#tips-và-lưu-ý)

---

## Giới thiệu

CMS (Content Management System) là hệ thống quản lý nội dung cho phép bạn cập nhật website mà không cần kiến thức lập trình. Tất cả nội dung được lưu trữ dưới dạng file trong dự án và được quản lý qua Git.

### Tính năng chính:
- ✅ Quản lý thông báo popup
- ✅ Quản lý bài viết blog với SEO
- ✅ Quản lý toàn bộ nội dung website
- ✅ Quản lý dịch vụ
- ✅ Quản lý thông tin bác sĩ
- ✅ Quản lý đánh giá khách hàng

---

## Đăng nhập CMS

### Bước 1: Truy cập CMS
Mở trình duyệt và truy cập: `https://your-domain.com/admin`

### Bước 2: Đăng nhập
- Nhấn nút "Login with Netlify Identity"
- Nhập email và mật khẩu đã được cấp
- Nhấn "Log in"

### Bước 3: Giao diện chính
Sau khi đăng nhập, bạn sẽ thấy menu bên trái với các mục:
- Thông báo
- Bài viết
- Dịch vụ
- Bác sĩ
- Đánh giá
- Nội dung website

---

## Quản lý Thông báo

### Tạo thông báo mới

1. Nhấn vào "Thông báo" trong menu
2. Nhấn nút "New Thông báo"
3. Điền các thông tin:

#### Thông tin cơ bản:
- **Tiêu đề**: Tiêu đề ngắn gọn cho thông báo
- **Nội dung**: Nội dung chi tiết (hỗ trợ nhiều dòng)
- **Ngày**: Ngày hiển thị thông báo

#### Cài đặt hiển thị:
- **Kích hoạt**: Bật/tắt thông báo
- **Hiển thị một lần**: Nếu bật, thông báo chỉ hiện 1 lần cho mỗi người dùng
- **Độ trễ hiển thị**: Thời gian chờ trước khi hiện popup (milliseconds)

#### Cài đặt nâng cao (MỚI):
- **Chế độ hiển thị**:
  - **Luôn hiển thị**: Popup hiện mỗi lần truy cập
  - **Có thể tắt tạm thời**: Người dùng có thể tắt popup trong một khoảng thời gian

- **Thời gian ẩn sau khi tắt** (chỉ khi chọn "Có thể tắt tạm thời"):
  - Nhập số giờ muốn ẩn popup
  - Ví dụ:
    - 24 giờ = 1 ngày
    - 168 giờ = 1 tuần
    - 720 giờ = 1 tháng
    - 2160 giờ = 3 tháng

### Ví dụ cấu hình:

**Thông báo nghỉ lễ (hiển thị 1 tuần):**
```
Tiêu đề: Thông báo nghỉ Tết
Nội dung: Phòng khám nghỉ từ 01/01 đến 03/01
Kích hoạt: ✓
Hiển thị một lần: ✗
Chế độ hiển thị: Có thể tắt tạm thời
Thời gian ẩn: 168 (giờ)
```

**Thông báo khẩn cấp (luôn hiển thị):**
```
Tiêu đề: Thông báo khẩn cấp
Nội dung: Phòng khám tạm ngưng hoạt động
Kích hoạt: ✓
Hiển thị một lần: ✗
Chế độ hiển thị: Luôn hiển thị
```

---

## Quản lý Bài viết

### Tạo bài viết mới

1. Nhấn vào "Bài viết" trong menu
2. Nhấn nút "New Bài viết"
3. Điền các thông tin:

#### Thông tin cơ bản:
- **Tiêu đề**: Tiêu đề bài viết (tối đa 60 ký tự cho SEO tốt)
- **Mô tả ngắn**: Tóm tắt bài viết (150-160 ký tự cho SEO tốt)
- **Ngày đăng**: Ngày xuất bản bài viết
- **Ngày cập nhật**: Để trống nếu chưa cập nhật
- **Ảnh đại diện**: Upload ảnh (khuyến nghị 1200x630px)
- **Tác giả**: Tên tác giả
- **Ảnh tác giả**: Upload ảnh tác giả (tùy chọn)

#### Nội dung:
- **Nội dung**: Viết bài bằng Markdown
  - Sử dụng `#` cho tiêu đề cấp 1
  - Sử dụng `##` cho tiêu đề cấp 2
  - Sử dụng `###` cho tiêu đề cấp 3
  - Sử dụng `**text**` cho chữ đậm
  - Sử dụng `*text*` cho chữ nghiêng
  - Sử dụng `[text](url)` cho link

#### Phân loại:
- **Danh mục**: Chọn danh mục phù hợp
  - Tin tức
  - Sức khỏe
  - Y học cổ truyền
  - Mẹo hay
- **Tags**: Thêm các từ khóa liên quan (mỗi tag một dòng)
- **Bài viết nổi bật**: Đánh dấu nếu muốn hiển thị ở mục nổi bật
- **Xuất bản**: Bật để hiển thị bài viết

#### SEO (Tùy chọn nâng cao):
- **Meta Title**: Tiêu đề hiển thị trên Google (để trống sẽ dùng tiêu đề bài viết)
- **Meta Description**: Mô tả hiển thị trên Google (để trống sẽ dùng mô tả ngắn)
- **Keywords**: Từ khóa cách nhau bởi dấu phẩy
- **Canonical URL**: URL chính thức (chỉ dùng khi cần)

### Ví dụ bài viết:

```markdown
---
Tiêu đề: Lợi ích của Y học cổ truyền
Mô tả ngắn: Khám phá những lợi ích tuyệt vời của y học cổ truyền...
Danh mục: Y học cổ truyền
Tags: 
  - y học cổ truyền
  - sức khỏe
  - đông y
Bài viết nổi bật: ✓
---

## Giới thiệu

Y học cổ truyền là...

### Lợi ích chính

1. Điều trị từ gốc rễ
2. An toàn, ít tác dụng phụ
3. Tăng cường sức đề kháng

## Kết luận

Hãy liên hệ với chúng tôi...
```

### Tips viết bài SEO tốt:

1. **Tiêu đề**:
   - Độ dài: 50-60 ký tự
   - Chứa từ khóa chính
   - Hấp dẫn, thu hút click

2. **Mô tả**:
   - Độ dài: 150-160 ký tự
   - Tóm tắt nội dung chính
   - Có call-to-action

3. **Nội dung**:
   - Sử dụng heading đúng cách (H1 > H2 > H3)
   - Đoạn văn ngắn, dễ đọc
   - Thêm hình ảnh minh họa
   - Độ dài tối thiểu 500 từ

4. **Tags**:
   - 3-5 tags cho mỗi bài
   - Liên quan đến nội dung
   - Sử dụng từ khóa phổ biến

---

## Quản lý Nội dung Website

### Chỉnh sửa nội dung trang chủ

1. Nhấn vào "Nội dung website" trong menu
2. Nhấn vào file "content"
3. Chỉnh sửa các phần:

#### Header (Đầu trang):
- **Tên ngắn**: Hiển thị trên mobile
- **Tên đầy đủ**: Hiển thị trên desktop
- **Menu điều hướng**: Danh sách các mục menu

#### About (Giới thiệu):
- **Nhãn phần**: "Giới thiệu"
- **Tiêu đề**: Tiêu đề chính
- **Tiêu đề nổi bật**: Phần được tô màu
- **Mô tả**: Mô tả ngắn
- **Sứ mệnh**: Nội dung về sứ mệnh
- **Lý do**: Danh sách 5 lý do chọn phòng khám

#### Services (Dịch vụ):
- **Nhãn phần**: "Dịch vụ"
- **Tiêu đề**: Tiêu đề chính
- **CTA**: Nội dung kêu gọi hành động

#### Doctors (Đội ngũ):
- **Nhãn phần**: "Đội ngũ"
- **Tiêu đề**: Tiêu đề chính
- **Mô tả**: Mô tả về đội ngũ

#### Contact (Liên hệ):
- **Nhãn phần**: "Liên hệ"
- **Tiêu đề**: Tiêu đề chính
- **Nhãn thông tin**: Địa chỉ, Điện thoại, Giờ làm việc, Email

#### Footer & Buttons:
- **Bản quyền**: Nội dung footer
- **Nhãn nút**: Gọi ngay, Liên hệ ngay, Đọc thêm, v.v.

### Lưu ý:
- ⚠️ Cẩn thận khi chỉnh sửa, ảnh hưởng toàn bộ website
- ✅ Kiểm tra kỹ trước khi lưu
- ✅ Giữ nguyên cấu trúc, chỉ sửa nội dung

---

## Quản lý Dịch vụ

### Thêm dịch vụ mới

1. Nhấn vào "Dịch vụ" trong menu
2. Nhấn nút "New Dịch vụ"
3. Điền thông tin:
   - **Tên dịch vụ**: Tên ngắn gọn
   - **Mô tả**: Mô tả chi tiết
   - **Icon**: Chọn icon phù hợp
   - **Hiển thị**: Bật để hiển thị trên trang chủ

### Danh sách icon có sẵn:
- `Stethoscope` - Ống nghe
- `Heart` - Tim
- `Activity` - Hoạt động
- `Droplet` - Giọt nước
- `Zap` - Sét
- `Shield` - Khiên

---

## Quản lý Bác sĩ

### Thêm bác sĩ mới

1. Nhấn vào "Bác sĩ" trong menu
2. Nhấn nút "New Bác sĩ"
3. Điền thông tin:
   - **Tên**: Họ và tên đầy đủ
   - **Chức danh**: Lương y, Bác sĩ, v.v.
   - **Mô tả**: Giới thiệu ngắn
   - **Ảnh**: Upload ảnh chân dung (khuyến nghị 400x400px)
   - **Hiển thị**: Bật để hiển thị trên trang chủ

---

## Quản lý Đánh giá

### Thêm đánh giá mới

1. Nhấn vào "Đánh giá" trong menu
2. Nhấn nút "New Đánh giá"
3. Điền thông tin:
   - **Tên khách hàng**: Họ tên
   - **Nội dung**: Nội dung đánh giá
   - **Đánh giá**: Số sao (1-5)
   - **Ngày**: Ngày đánh giá
   - **Ảnh**: Upload ảnh khách hàng (tùy chọn)
   - **Hiển thị**: Bật để hiển thị

---

## Tips và Lưu ý

### Quy trình làm việc:

1. **Soạn thảo**: Viết nội dung trong CMS
2. **Xem trước**: Kiểm tra trước khi lưu
3. **Lưu**: Nhấn "Save" để lưu nháp
4. **Xuất bản**: Nhấn "Publish" để xuất bản

### Lưu ý quan trọng:

⚠️ **Backup**: Nội dung được lưu trong Git, có thể khôi phục nếu cần

⚠️ **Hình ảnh**: 
- Upload ảnh có kích thước phù hợp
- Nén ảnh trước khi upload
- Sử dụng định dạng WebP hoặc JPEG

⚠️ **SEO**:
- Điền đầy đủ meta tags
- Sử dụng từ khóa phù hợp
- Viết nội dung chất lượng

⚠️ **Kiểm tra**:
- Xem trước trên nhiều thiết bị
- Kiểm tra link
- Kiểm tra chính tả

### Hỗ trợ:

Nếu gặp vấn đề, liên hệ:
- Email: support@example.com
- Điện thoại: 098 44 38 960

---

**Cập nhật lần cuối**: January 2025  
**Phiên bản**: 2.0

