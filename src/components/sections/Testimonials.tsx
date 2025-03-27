
import React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import AnimatedSection from "../ui/AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      content: "Tôi đã điều trị tại phòng khám Tái Sanh trong 3 tháng và đã có kết quả rất tốt. Các bác sĩ rất tận tâm và chuyên nghiệp.",
      location: "Phú Yên",
    },
    {
      name: "Trần Thị B",
      content: "Sau nhiều năm chữa trị không khỏi, tôi đã tìm đến Tái Sanh và đã hồi phục nhanh chóng. Thuốc uống rất hiệu quả và không có tác dụng phụ.",
      location: "TP. Hồ Chí Minh",
    },
    {
      name: "Lê Văn C",
      content: "Lương y Nguyễn Cao Định đã tận tình tư vấn và điều trị cho tôi. Chỉ sau 2 tháng, bệnh của tôi đã thuyên giảm đáng kể.",
      location: "Hà Nội",
    },
    {
      name: "Phạm Thị D",
      content: "Tôi rất hài lòng với dịch vụ tại phòng khám. Không chỉ điều trị bệnh mà còn được tư vấn cách phòng ngừa và duy trì sức khỏe.",
      location: "Nha Trang",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-white"
    >
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-taisan/10 text-taisan rounded-full text-sm font-medium mb-4">
              Đánh giá
            </div>
            <h2 className="heading-lg text-taisan-dark mb-4">
              Khách hàng nói gì về{" "}
              <span className="text-taisan">Tái Sanh</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Những trải nghiệm thực tế từ khách hàng là minh chứng rõ nhất cho
              chất lượng dịch vụ của chúng tôi.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <TestimonialCard
                name={testimonial.name}
                content={testimonial.content}
                location={testimonial.location}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground">
              Và nhiều khách hàng khác đã tin tưởng và hài lòng với dịch vụ của chúng tôi.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
