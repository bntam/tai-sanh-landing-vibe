
import React from "react";
import { Stethoscope, ThermometerSun, Pill, Leaf, Beaker, BookOpen } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import AnimatedSection from "../ui/AnimatedSection";

const Services = () => {
  const services = [
    {
      title: "Khám và tư vấn",
      description: "Chẩn đoán bệnh theo phương pháp y học cổ truyền kết hợp hiện đại, tư vấn phương pháp điều trị phù hợp.",
      icon: <Stethoscope size={24} />,
    },
    {
      title: "Bốc thuốc đông y",
      description: "Bốc thuốc theo đơn riêng cho từng bệnh nhân với vị thuốc thiên nhiên an toàn, hiệu quả.",
      icon: <Pill size={24} />,
    },
    {
      title: "Châm cứu",
      description: "Điều trị bằng phương pháp châm cứu cổ truyền, giúp kích thích tuần hoàn máu và điều hòa âm dương.",
      icon: <ThermometerSun size={24} />,
    },
    {
      title: "Dưỡng sinh",
      description: "Hướng dẫn phương pháp dưỡng sinh, ăn uống và tập luyện phù hợp với thể trạng và căn bệnh.",
      icon: <Leaf size={24} />,
    },
    {
      title: "Phục hồi chức năng",
      description: "Giúp bệnh nhân hồi phục sau chấn thương, phẫu thuật, kết hợp phương pháp trị liệu hiện đại và y học cổ truyền.",
      icon: <Beaker size={24} />,
    },
    {
      title: "Tư vấn sức khỏe",
      description: "Tư vấn chế độ sinh hoạt, ăn uống và tập luyện để phòng ngừa bệnh tật và duy trì sức khỏe lâu dài.",
      icon: <BookOpen size={24} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-taisan/10 text-taisan rounded-full text-sm font-medium mb-4">
              Dịch vụ
            </div>
            <h2 className="heading-lg text-taisan-dark mb-4">
              Các dịch vụ y tế tại{" "}
              <span className="text-taisan">YHCT Tái Sanh</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Phòng khám cung cấp các dịch vụ y học cổ truyền chất lượng cao,
              giúp bạn phục hồi sức khỏe một cách tự nhiên và bền vững.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-16 p-6 md:p-8 rounded-xl bg-taisan/5 border border-taisan/10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:flex-1">
                <h3 className="heading-sm text-taisan-dark mb-2">
                  Đặt lịch khám ngay hôm nay
                </h3>
                <p className="text-muted-foreground">
                  Phòng khám sẵn sàng tư vấn và hỗ trợ cho bạn mọi thắc mắc về sức khỏe
                </p>
              </div>
              <div>
                <a
                  href="tel:0984438960"
                  className="inline-block btn-primary whitespace-nowrap"
                >
                  Gọi ngay: 098 44 38 960
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
