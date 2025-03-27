
import React from "react";
import DoctorCard from "../ui/DoctorCard";
import AnimatedSection from "../ui/AnimatedSection";

const Doctors = () => {
  const doctors = [
    {
      name: "Nguyễn Cao Định",
      title: "Trưởng phòng khám - Lương y",
      bio: "Hơn 30 năm kinh nghiệm trong lĩnh vực y học cổ truyền, chuyên gia về thuốc đông y và các phương pháp điều trị bằng y học cổ truyền.",
      imageSrc: "/uploads/doctor1.jpg",
    },
    {
      name: "Nguyễn Trần Anh Thư",
      title: "Thạc sĩ, Bác sĩ Y học cổ truyền",
      bio: "Kinh nghiệm làm việc tại nhiều phòng khám lớn ở Hồ Chí Minh, chuyên gia về châm cứu và cấy chỉ, kết hợp y học cổ truyền và y học hiện đại.",
      imageSrc: "/uploads/doctor2.jpg",
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
              <span className="text-taisan">YHCT Tái Sanh</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Phòng khám tự hào với đội ngũ y bác sĩ có chuyên môn cao và tâm huyết, 
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
