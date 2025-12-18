import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Market Access", href: "#" },
    { label: "Regulatory Affairs", href: "#" },
    { label: "Distribution", href: "#" },
    { label: "Pharmacovigilance", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  markets: [
    { label: "Gambia", href: "#" },
    { label: "Senegal", href: "#" },
    { label: "West Africa", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] text-[#1A1A1A] border-t border-[#E1E6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F78C1E] to-[#00C1A8] flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-[#1A1A1A]">
                Pharma<span className="text-[#F78C1E]">Saha</span>
              </span>
            </a>
            <p className="text-gray-600 mb-6 max-w-sm">
              Bridging global pharmaceutical innovation with West African markets.
              Your trusted partner for healthcare access.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-[#E1E6ED] flex items-center justify-center hover:bg-[#F78C1E] hover:border-[#F78C1E] hover:text-white transition-all duration-300 text-gray-600"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-[#E1E6ED] flex items-center justify-center hover:bg-[#00C1A8] hover:border-[#00C1A8] hover:text-white transition-all duration-300 text-gray-600"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#1A1A1A] font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#F78C1E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#1A1A1A] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#F78C1E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1A1A1A] font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-[#F78C1E]" />
                <span>info@pharmasaha.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} className="text-[#00C1A8]" />
                <span>+220 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} className="text-[#F78C1E]" />
                <span>Banjul, The Gambia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E1E6ED] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PharmaSaha. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#F78C1E] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#F78C1E] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
