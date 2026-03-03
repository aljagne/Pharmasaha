import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Market Reach", href: "#market-reach" },
  { label: "About Us", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#C2EED0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            {/* Custom Swirl Logo */}
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Pharmasaha Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Pharma<span className="text-white">saha</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 font-medium hover:text-[#745A37] ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-bronze">Partner With Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-[#001E22]" : "text-[#001E22]"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#C2EED0] rounded-b-2xl shadow-lg">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#001E22]/70 hover:text-[#745A37] hover:bg-[#C2EED0]/30 transition-colors duration-200 font-medium py-3 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button className="btn-bronze w-full">Partner With Us</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
