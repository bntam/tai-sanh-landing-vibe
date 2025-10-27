import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import NotificationPopup, { type NotificationConfig } from "@/components/NotificationPopup";
import { Phone } from "lucide-react";

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  address: string;
  phone: string;
  email?: string;
  workingHours: string;
  facebookUrl?: string;
  zaloUrl?: string;
}

interface WebsiteContent {
  siteInfo: SiteSettings;
  header: any;
  about: any;
  services: any;
  doctors: any;
  contact: any;
  footer: any;
  buttons: any;
}

interface IndexPageProps {
  notification?: NotificationConfig;
  websiteContent?: WebsiteContent;
  siteSettings?: SiteSettings;
}

const IndexPage: React.FC<IndexPageProps> = ({ notification, websiteContent, siteSettings }) => {
  // Use siteSettings from websiteContent if available
  const settings = siteSettings || websiteContent?.siteInfo || {
    siteName: "Phòng Khám YHCT Tái Sanh",
    address: "228 Lê Lợi, Phường Tuy Hòa, Tỉnh Đắk Lắk",
    phone: "098 44 38 960",
    workingHours: "Tất cả các ngày trong tuần, ngày lễ. Chiều từ 14 giờ đến 18 giờ (2 giờ chiều đến 6 giờ tối)"
  };
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
      {notification && <NotificationPopup config={notification} />}
      <Header content={websiteContent?.header} />
      <main className="flex-grow">
        <Hero />
        <About content={websiteContent?.about} />
        <Services content={websiteContent?.services} siteSettings={settings} />
        <Doctors content={websiteContent?.doctors} />
        {/* <Testimonials /> */}
        <Contact content={websiteContent?.contact} siteSettings={settings} />
      </main>

      <footer className="bg-taisan-dark text-white py-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">
                {settings.siteName}
              </h3>
              <p className="text-white/70 mb-4">
                {settings.address}
              </p>
              <a
                href={`tel:${settings.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center space-x-2 text-taisan-gold hover:text-taisan-gold-light transition-colors"
              >
                <Phone size={16} />
                <span>{settings.phone}</span>
              </a>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-sm">
                {websiteContent?.footer?.copyright || "© YHCT Tái Sanh"} {new Date().getFullYear()}
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
        href={`tel:${settings.phone.replace(/\s/g, '')}`}
        className="md:hidden fixed left-5 bottom-5 h-12 px-4 rounded-full bg-taisan shadow-lg flex items-center justify-center text-white hover:bg-taisan-light transition-colors z-50"
      >
        <Phone size={16} className="mr-2" />
        <span>{websiteContent?.buttons?.callNow || "Gọi ngay"}</span>
      </a>
    </div>
  );
};

export default IndexPage;

