import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Get the latest active notification
export async function getActiveNotification() {
  try {
    const notificationsDir = path.join(process.cwd(), 'src/content/notifications');
    
    if (!fs.existsSync(notificationsDir)) {
      return null;
    }

    const files = fs.readdirSync(notificationsDir)
      .filter(file => file.endsWith('.md'));

    if (files.length === 0) {
      return null;
    }

    // Sort by filename (date) descending to get the latest
    files.sort().reverse();

    for (const file of files) {
      const filePath = path.join(notificationsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      if (data.enabled) {
        return {
          title: data.title,
          message: data.message,
          enabled: data.enabled,
          showOnce: data.showOnce ?? true,
          displayDelay: data.displayDelay ?? 2000,
          displayMode: data.displayMode ?? 'dismissible',
          dismissDuration: data.dismissDuration ?? 168,
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Error loading notification:', error);
    return null;
  }
}

// Get all blog posts
export async function getBlogPosts() {
  try {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    
    if (!fs.existsSync(blogDir)) {
      return [];
    }

    const files = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.md'));

    const posts = files.map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        title: data.title,
        description: data.description,
        date: data.date,
        updatedDate: data.updatedDate,
        image: data.image,
        author: data.author,
        authorImage: data.authorImage,
        category: data.category,
        tags: data.tags || [],
        featured: data.featured ?? false,
        published: data.published ?? true,
        seo: data.seo || {},
        content,
      };
    });

    return posts
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Get site settings (now merged into content.json)
export async function getSiteSettings() {
  try {
    const content = await getWebsiteContent();
    return content.siteInfo || getDefaultSiteInfo();
  } catch (error) {
    console.error('Error loading site settings:', error);
    return getDefaultSiteInfo();
  }
}

// Default site info (fallback)
function getDefaultSiteInfo() {
  return {
    siteName: "Phòng Khám Y Học Cổ Truyền Tái Sanh",
    siteDescription: "Phòng khám y học cổ truyền uy tín tại Tuy Hòa, Phú Yên. Chuyên điều trị bằng đông y, châm cứu, bấm huyệt.",
    address: "228 Lê Lợi, Phường Tuy Hòa, Tỉnh Đắk Lắk",
    phone: "098 44 38 960",
    email: "",
    workingHours: "Tất cả các ngày trong tuần, ngày lễ.\n Chiều từ 14 giờ đến 18 giờ (2 giờ chiều đến 6 giờ tối)",
    facebookUrl: "",
    zaloUrl: ""
  };
}

// Get all services
export async function getServices() {
  try {
    const servicesDir = path.join(process.cwd(), 'src/content/services');
    
    if (!fs.existsSync(servicesDir)) {
      return [];
    }

    const files = fs.readdirSync(servicesDir)
      .filter(file => file.endsWith('.md'));

    const services = files.map(file => {
      const filePath = path.join(servicesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        title: data.title,
        description: data.description,
        icon: data.icon,
        price: data.price,
        duration: data.duration,
        order: data.order ?? 0,
        visible: data.visible ?? true,
        content,
      };
    });

    return services
      .filter(service => service.visible)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading services:', error);
    return [];
  }
}

// Get all doctors
export async function getDoctors() {
  try {
    const doctorsDir = path.join(process.cwd(), 'src/content/doctors');
    
    if (!fs.existsSync(doctorsDir)) {
      return [];
    }

    const files = fs.readdirSync(doctorsDir)
      .filter(file => file.endsWith('.md'));

    const doctors = files.map(file => {
      const filePath = path.join(doctorsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        name: data.name,
        title: data.title,
        specialty: data.specialty,
        image: data.image,
        description: data.description,
        experience: data.experience,
        education: data.education,
        order: data.order ?? 0,
        visible: data.visible ?? true,
      };
    });

    return doctors
      .filter(doctor => doctor.visible)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading doctors:', error);
    return [];
  }
}

// Get all testimonials
export async function getTestimonials() {
  try {
    const testimonialsDir = path.join(process.cwd(), 'src/content/testimonials');

    if (!fs.existsSync(testimonialsDir)) {
      return [];
    }

    const files = fs.readdirSync(testimonialsDir)
      .filter(file => file.endsWith('.md'));

    const testimonials = files.map(file => {
      const filePath = path.join(testimonialsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        name: data.name,
        image: data.image,
        content: data.content,
        rating: data.rating ?? 5,
        date: data.date,
        visible: data.visible ?? true,
      };
    });

    return testimonials
      .filter(testimonial => testimonial.visible)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return [];
  }
}

// Get website content (UI text)
export async function getWebsiteContent() {
  try {
    const contentPath = path.join(process.cwd(), 'src/content/settings/content.json');

    if (!fs.existsSync(contentPath)) {
      // Return default content if file doesn't exist
      return getDefaultWebsiteContent();
    }

    const fileContent = fs.readFileSync(contentPath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error loading website content:', error);
    return getDefaultWebsiteContent();
  }
}

// Default website content (fallback)
function getDefaultWebsiteContent() {
  return {
    siteInfo: getDefaultSiteInfo(),
    header: {
      shortName: "Tái Sanh",
      fullName: "Phòng Khám YHCT Tái Sanh",
      navigation: [
        { label: "Trang chủ", id: "hero" },
        { label: "Giới thiệu", id: "about" },
        { label: "Dịch vụ", id: "services" },
        { label: "Đội ngũ", id: "doctors" },
        { label: "Liên hệ", id: "contact" }
      ]
    },
    about: {
      sectionLabel: "Giới thiệu",
      title: "Về Phòng Khám YHCT",
      titleHighlight: "Tái Sanh",
      description: "Là phòng khám đông y uy tín tại Phú Yên, hoạt động dưới sự cấp phép của Bộ Y tế với hơn 30 năm kinh nghiệm.",
      image: "/uploads/news.webp",
      missionTitle: "Sứ mệnh của phòng khám",
      missionContent: "Phòng Khám Y Học Cổ Truyền Tái Sanh ra đời với sứ mệnh mang lại sức khỏe và niềm tin cho bệnh nhân bằng phương pháp y học cổ truyền kết hợp với tinh hoa y học hiện đại.",
      reasonsTitle: "Lý do bạn lựa chọn YHCT Tái Sanh:",
      reasons: [
        { title: "Được cấp phép chính thức", content: "Toàn bộ đầu tư trong nước, được Sở Y Tế Phú Yên cấp phép." },
        { title: "Đội ngũ y sĩ giàu kinh nghiệm", content: "Lương y Nguyễn Cao Định với bề dày kinh nghiệm và tâm huyết trong nghề." },
        { title: "Thuốc thiên nhiên an toàn", content: "Đạt tiêu chuẩn theo thông tư 44/2014//TT-BYT với công thức độc quyền từ các vị thuốc." },
        { title: "Hiệu quả điều trị cao", content: "Thời gian điều trị rút ngắn tới 50% so với các phương pháp truyền thống." },
        { title: "Được tin cậy rộng rãi", content: "Hàng nghìn bệnh nhân trong và ngoài nước đã tin tưởng và điều trị tại phòng khám." }
      ]
    },
    services: {
      sectionLabel: "Dịch vụ",
      title: "Các dịch vụ y tế tại",
      titleHighlight: "YHCT Tái Sanh",
      description: "Phòng khám cung cấp các dịch vụ y học cổ truyền chất lượng cao, giúp bạn phục hồi sức khỏe một cách tự nhiên và bền vững.",
      ctaTitle: "Đặt lịch khám ngay hôm nay",
      ctaDescription: "Phòng khám sẵn sàng tư vấn và hỗ trợ cho bạn mọi thắc mắc về sức khỏe",
      ctaButtonLabel: "Liên hệ ngay"
    },
    doctors: {
      sectionLabel: "Đội ngũ",
      title: "Đội ngũ y bác sĩ tại",
      titleHighlight: "YHCT Tái Sanh",
      description: "Phòng khám tự hào với đội ngũ y bác sĩ có chuyên môn cao và tâm huyết, luôn đặt sức khỏe của bệnh nhân lên hàng đầu."
    },
    contact: {
      sectionLabel: "Liên hệ",
      title: "Liên hệ với",
      titleHighlight: "YHCT Tái Sanh",
      description: "Bạn có thể đến trực tiếp hoặc liên hệ qua điện thoại để được tư vấn và đặt lịch khám.",
      infoTitle: "Thông tin liên hệ",
      addressLabel: "Địa chỉ",
      phoneLabel: "Điện thoại",
      hoursLabel: "Giờ làm việc",
      emailLabel: "Email",
      mapTitle: "Vị trí phòng khám"
    },
    footer: {
      copyright: "© YHCT Tái Sanh"
    },
    buttons: {
      callNow: "Gọi ngay",
      contactNow: "Liên hệ ngay",
      readMore: "Đọc thêm",
      seeMore: "Xem thêm",
      goBack: "Quay lại"
    }
  };
}


