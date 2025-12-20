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
    <footer className="bg-[#001D21] text-white border-t border-[#B8DFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#705B3C] to-[#BBBAFF] flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-white">
                Pharma<span className="text-[#705B3C]">Saha</span>
              </span>
            </a>
            <p className="text-white/80 mb-6 max-w-sm">
              Bridging global pharmaceutical innovation with West African markets.
              Your trusted partner for healthcare access.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#001D21] border-t border-[#1A3F45] border border-[#B8DFC2] flex items-center justify-center hover:bg-[#705B3C] hover:border-[#705B3C] hover:text-white transition-all duration-300 text-white/80"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#001D21] border-t border-[#1A3F45] border border-[#B8DFC2] flex items-center justify-center hover:bg-[#BBBAFF] hover:border-[#BBBAFF] hover:text-white transition-all duration-300 text-white/80"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#705B3C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#705B3C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white/80">
                <Mail size={16} className="text-[#705B3C]" />
                <span>info@pharmasaha.com</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone size={16} className="text-[#BBBAFF]" />
                <span>+220 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <MapPin size={16} className="text-[#705B3C]" />
                <span>Banjul, The Gambia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#B8DFC2] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} PharmaSaha. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-[#705B3C] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-[#705B3C] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
