
import React from "react";
import { Check } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

interface AboutContent {
  sectionLabel?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  image?: string;
  missionTitle?: string;
  missionContent?: string;
  reasonsTitle?: string;
  reasons?: Array<{ title: string; content: string }>;
}

interface AboutProps {
  content?: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  // Default values
  const sectionLabel = content?.sectionLabel || "Giới thiệu";
  const title = content?.title || "Về Phòng Khám YHCT";
  const titleHighlight = content?.titleHighlight || "Tái Sanh";
  const description = content?.description || "Là phòng khám đông y uy tín tại Phú Yên, hoạt động dưới sự cấp phép của Bộ Y tế với hơn 30 năm kinh nghiệm.";
  const image = content?.image || "/uploads/news.webp";
  const missionTitle = content?.missionTitle || "Sứ mệnh của phòng khám";
  const missionContent = content?.missionContent || "Phòng Khám Y Học Cổ Truyền Tái Sanh ra đời với sứ mệnh mang lại sức khỏe và niềm tin cho bệnh nhân bằng phương pháp y học cổ truyền kết hợp với tinh hoa y học hiện đại.";
  const reasonsTitle = content?.reasonsTitle || "Lý do bạn lựa chọn YHCT Tái Sanh:";
  const reasons = content?.reasons || [
    { title: "Được cấp phép chính thức", content: "Toàn bộ đầu tư trong nước, được Sở Y Tế Phú Yên cấp phép." },
    { title: "Đội ngũ y sĩ giàu kinh nghiệm", content: "Lương y Nguyễn Cao Định với bề dày kinh nghiệm và tâm huyết trong nghề." },
    { title: "Thuốc thiên nhiên an toàn", content: "Đạt tiêu chuẩn theo thông tư 44/2014//TT-BYT với công thức độc quyền từ các vị thuốc." },
    { title: "Hiệu quả điều trị cao", content: "Thời gian điều trị rút ngắn tới 50% so với các phương pháp truyền thống." },
    { title: "Được tin cậy rộng rãi", content: "Hàng nghìn bệnh nhân trong và ngoài nước đã tin tưởng và điều trị tại phòng khám." }
  ];

  return (
    <section id="about" className="py-20 bg-taisan-background-light bg-pattern">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-taisan/10 text-taisan rounded-full text-sm font-medium mb-4">
              {sectionLabel}
            </div>
            <h2 className="heading-lg text-taisan-dark mb-4">
              {title}{" "}
              <span className="text-taisan">{titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card image-reveal">
                <img
                  src={image}
                  alt="Phòng khám Tái Sanh"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="space-y-6">
              <h3 className="heading-md text-taisan-dark">
                {missionTitle}
              </h3>
              <p className="text-lg text-muted-foreground">
                {missionContent}
              </p>

              <div className="pt-4 space-y-4">
                <h4 className="heading-sm text-taisan-dark">
                  {reasonsTitle}
                </h4>
                <div className="space-y-3">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-taisan-gold/20 flex items-center justify-center mt-1">
                        <Check size={16} className="text-taisan" />
                      </div>
                      <p>
                        <span className="font-medium">{reason.title}</span> - {reason.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

