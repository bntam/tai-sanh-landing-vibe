
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
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Full-width background image - using direct URL to ensure it loads */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: "url('/lovable-uploads/54a4eb8c-2c8a-4049-82d5-02d60f08c7ba.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      {/* Subtle gradient overlay to ensure any UI elements remain visible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-taisan/20 to-taisan/40"></div>

      <div className="container-custom relative z-10">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
            aria-label="Scroll to about section"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
