import React from "react";
import { ChevronDown } from "lucide-react";
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
      className="relative w-full mt-20 overflow-hidden bg-gradient-to-r from-[#18584A] via-[#114137] to-[#05261F]"
    >
      <div className="container mx-auto relative">
        {/* Desktop Image */}
        <img 
          src="/uploads/54a4eb8c-2c8a-4049-82d5-02d60f08c7ba.webp" 
          alt="Hero background"
          className="hidden md:block w-full max-w-full h-auto object-contain" 
        />
        {/* Mobile Image */}
        <img 
          src="/uploads/mobile-bg2.webp" 
          alt="Hero background mobile"
          className="md:hidden block w-full max-w-full h-auto object-contain transform scale-[1.3] origin-center" 
        />
      </div>
    </section>
  );
};

export default Hero;
