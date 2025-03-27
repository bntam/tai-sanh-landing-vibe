
import React from "react";
import { Check } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 bg-taisan-background-light bg-pattern">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-taisan/10 text-taisan rounded-full text-sm font-medium mb-4">
              Giới thiệu
            </div>
            <h2 className="heading-lg text-taisan-dark mb-4">
              Về Phòng Chẩn Trị Y Học Cổ Truyền{" "}
              <span className="text-taisan">Tái Sanh</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Là phòng khám đông y uy tín tại Phú Yên, hoạt động dưới sự cấp phép của Bộ Y tế
              với hơn 15 năm kinh nghiệm.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card image-reveal">
                <img
                  src="/uploads/luong-y-nguyen-cao-dinh.jpg"
                  alt="Phòng khám Tái Sanh"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-8 -right-6 bg-white p-4 rounded-lg shadow-card border border-taisan/10 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-taisan-light/10 w-12 h-12 rounded-full flex items-center justify-center text-taisan">
                    <span className="text-xl font-bold">15+</span>
                  </div>
                  <div>
                    <p className="text-taisan font-medium">Năm kinh nghiệm</p>
                    <p className="text-sm text-muted-foreground">Chăm sóc bệnh nhân</p>
                  </div>
                </div>
              </div> */}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="space-y-6">
              <h3 className="heading-md text-taisan-dark">
                Sứ mệnh của phòng khám
              </h3>
              <p className="text-lg text-muted-foreground">
                Phòng Chẩn Trị Y Học Cổ Truyền Tái Sanh ra đời với sứ mệnh mang lại sức khỏe và
                niềm tin cho bệnh nhân bằng phương pháp y học cổ truyền kết hợp với tinh hoa y
                học hiện đại.
              </p>

              <div className="pt-4 space-y-4">
                <h4 className="heading-sm text-taisan-dark">
                Lý do bạn lựa chọn Y học cổ truyền Tái Sanh:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-taisan-gold/20 flex items-center justify-center mt-1">
                      <Check size={16} className="text-taisan" />
                    </div>
                    <p>
                      <span className="font-medium">Được cấp phép chính thức</span> - Toàn bộ đầu tư
                      trong nước, được Sở Y Tế Phú Yên cấp phép.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-taisan-gold/20 flex items-center justify-center mt-1">
                      <Check size={16} className="text-taisan" />
                    </div>
                    <p>
                      <span className="font-medium">Đội ngũ y sĩ giàu kinh nghiệm</span> - Lương y Nguyễn
                      Cao Định với bề dày kinh nghiệm và tâm huyết trong nghề.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-taisan-gold/20 flex items-center justify-center mt-1">
                      <Check size={16} className="text-taisan" />
                    </div>
                    <p>
                      <span className="font-medium">Thuốc thiên nhiên an toàn</span> - Đạt tiêu chuẩn
                      theo thông tư 44/2014//TT-BYT với công thức độc quyền từ các vị thuốc.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-taisan-gold/20 flex items-center justify-center mt-1">
                      <Check size={16} className="text-taisan" />
                    </div>
                    <p>
                      <span className="font-medium">Hiệu quả điều trị cao</span> - Thời gian điều trị
                      rút ngắn tới 50% so với các phương pháp truyền thống.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-taisan-gold/20 flex items-center justify-center mt-1">
                      <Check size={16} className="text-taisan" />
                    </div>
                    <p>
                      <span className="font-medium">Được tin cậy rộng rãi</span> - Hàng nghìn bệnh
                      nhân trong và ngoài nước đã tin tưởng và điều trị tại phòng khám.
                    </p>
                  </div>
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
