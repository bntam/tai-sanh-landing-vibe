import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, Menu, X } from "lucide-react";

interface HeaderContent {
  shortName?: string;
  fullName?: string;
  navigation?: Array<{ label: string; id: string }>;
}

interface HeaderProps {
  content?: HeaderContent;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Default values
  const shortName = content?.shortName || "Tái Sanh";
  const fullName = content?.fullName || "Phòng Khám YHCT Tái Sanh";
  const navigation = content?.navigation || [
    { label: "Trang chủ", id: "hero" },
    { label: "Giới thiệu", id: "about" },
    { label: "Dịch vụ", id: "services" },
    { label: "Đội ngũ", id: "doctors" },
    { label: "Liên hệ", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src="/uploads/logo-32x32.png" alt="Tái Sanh Logo" className="w-8 h-8" />
            <span className="text-taisan text-xl font-serif font-bold">
              {isMobile ? shortName : fullName}
            </span>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="text-foreground hover:text-taisan transition-colors font-medium link-hover"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            <Button className="bg-taisan hover:bg-taisan-light text-white shadow-sm hover:shadow-md transition-all">
              <Phone className="h-4 w-4" />098 44 38 960
            </Button>
            
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="md:hidden text-taisan p-2 rounded-md transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } pt-20`}
        >
          <div className="container-custom">
            <nav className="flex flex-col space-y-6 py-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="text-xl font-medium hover:text-taisan transition-colors py-2 border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
