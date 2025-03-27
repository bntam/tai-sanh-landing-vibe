
import React from "react";
import DoctorCard from "../ui/DoctorCard";
import AnimatedSection from "../ui/AnimatedSection";

const Doctors = () => {
  const doctors = [
    {
      name: "Lương y Nguyễn Cao Định",
      title: "Chủ phòng khám",
      bio: "Với bề dày kinh nghiệm và tâm huyết trong nghề, nhiều năm tận tâm hành nghề cứu chữa, giúp đỡ nhiều bệnh nhân.",
      imageSrc: "/lovable-uploads/doctor1.jpg",
    },
    {
      name: "Ths.Bs. Nguyễn Trần Anh Thư",
      title: "Bác sĩ Y học cổ truyền",
      bio: "Kinh nghiệm làm việc, nguyên cứu tại nhiều phòng khám lớn ở Hồ Chí Minh, hiện công tác tại Bệnh viện Y học cổ truyền Phú Yên.",
      imageSrc: "/lovable-uploads/doctor2.jpg",
    },
  ];

  return (
    <section
      id="doctors"
      className="py-20 bg-taisan-background-light relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-taisan/10 text-taisan rounded-full text-sm font-medium mb-4">
              Đội ngũ
            </div>
            <h2 className="heading-lg text-taisan-dark mb-4">
              Đội ngũ y bác sĩ tại{" "}
              <span className="text-taisan">Tái Sanh</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Chúng tôi tự hào với đội ngũ y bác sĩ có chuyên môn cao và tâm huyết, 
              luôn đặt sức khỏe của bệnh nhân lên hàng đầu.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {doctors.map((doctor, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <DoctorCard
                name={doctor.name}
                title={doctor.title}
                bio={doctor.bio}
                imageSrc={doctor.imageSrc}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
