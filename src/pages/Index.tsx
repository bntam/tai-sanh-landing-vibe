
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { Phone } from "lucide-react";

const Index = () => {
  // Add a scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTopButton = document.getElementById("scroll-top");
      if (scrollTopButton) {
        if (window.scrollY > 500) {
          scrollTopButton.classList.remove("opacity-0", "invisible");
          scrollTopButton.classList.add("opacity-100", "visible");
        } else {
          scrollTopButton.classList.remove("opacity-100", "visible");
          scrollTopButton.classList.add("opacity-0", "invisible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Doctors />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <footer className="bg-taisan-dark text-white py-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">
                Phòng Khám YHCT Tái Sanh
              </h3>
              <p className="text-white/70 mb-4">
                228 Lê Lợi, Phường 5, Tuy Hòa, Phú Yên
              </p>
              <a
                href="tel:0984438960"
                className="inline-flex items-center space-x-2 text-taisan-gold hover:text-taisan-gold-light transition-colors"
              >
                <Phone size={16} />
                <span>098 44 38 960</span>
              </a>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-sm">
              © YHCT Tái Sanh {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        id="scroll-top"
        onClick={scrollToTop}
        className="fixed right-5 bottom-5 w-12 h-12 rounded-full bg-taisan shadow-lg flex items-center justify-center text-white transition-all duration-300 opacity-0 invisible hover:bg-taisan-light z-50"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Floating contact button for mobile */}
      <a
        href="tel:0984438960"
        className="md:hidden fixed left-5 bottom-5 h-12 px-4 rounded-full bg-taisan shadow-lg flex items-center justify-center text-white hover:bg-taisan-light transition-colors z-50"
      >
        <Phone size={16} className="mr-2" />
        <span>Gọi ngay</span>
      </a>
    </div>
  );
};

export default Index;
