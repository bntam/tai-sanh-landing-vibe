
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-20 md:pt-32 md:pb-24 min-h-screen flex items-center"
    >
      {/* Full-width background image with gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/lovable-uploads/54a4eb8c-2c8a-4049-82d5-02d60f08c7ba.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-taisan/90 via-taisan/80 to-taisan/95"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="text-white space-y-6">
              <div className="bg-white/10 backdrop-blur-sm text-white rounded-full py-2 px-4 text-sm font-medium inline-block mb-4 border border-white/30">
                Phòng khám y học cổ truyền uy tín tại Phú Yên
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                PHÒNG CHẨN TRỊ Y HỌC CỔ TRUYỀN{" "}
                <span className="text-taisan-gold">TÁI SANH</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif italic">
                NƠI GỬI TRỌN NIỀM TIN
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <span className="text-taisan-gold text-xl">★</span>
                  <p className="text-lg">Chuyên chữa trị bằng thuốc đông y</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-taisan-gold text-xl">★</span>
                  <p className="text-lg">Lương y dày dặn kinh nghiệm, tận tâm</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-taisan-gold text-xl">★</span>
                  <p className="text-lg">Khám bệnh, đo huyết áp, châm cứu miễn phí</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-taisan hover:bg-taisan-gold hover:text-taisan-dark shadow-lg transition-all duration-300 text-base px-8"
                  onClick={() => window.open("tel:0984438960")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi ngay: 098 44 38 960
                </Button>
                <Button
                  size="lg"
                  onClick={scrollToAbout}
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300 text-base px-8"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={300} className="hidden md:block">
            <div className="glass-card p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg relative">
                <img
                  src="/lovable-uploads/54a4eb8c-2c8a-4049-82d5-02d60f08c7ba.png"
                  alt="Lương y Nguyễn Cao Định"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-taisan-dark/80 backdrop-blur-sm text-white p-4">
                  <p className="text-sm font-medium">Lương y</p>
                  <h3 className="text-xl font-serif">Nguyễn Cao Định</h3>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
