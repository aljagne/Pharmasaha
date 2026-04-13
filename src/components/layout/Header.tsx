import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const navItems = [
  { label: "Our Story", href: "/story", description: "The genesis and mission behind Pharmasaha" },
  { label: "Infrastructure", href: "/infrastructure", description: "The definitive 6-pillar market access architecture" },
  { label: "Institutional", href: "/institutional", description: "B2G integration and donor-funded procurement" },
  { label: "Global Network", href: "/network", description: "Tracing supply lines across three continents" },
  { label: "Compliance", href: "/compliance", description: "Our regulatory and quality assurance matrix" },
  { label: "Intelligence", href: "/intelligence", description: "Data-driven insights & our core mission" },
  { label: "Investor Gateway", href: "/gateway", description: "Access the exclusive $118B Master Blueprint" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleInitiateClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* =========================================
          THE FLOATING MAGNETIC ISLAND NAVBAR
      ========================================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-700 ease-&lsqb;cubic-bezier(0.25,1,0.5,1)&rsqb; glass-panel ${
            isScrolled ? "w-[90%] md:w-[600px] shadow-[0_20px_40px_rgba(0,29,33,0.8)] bg-[#001D21]/80 backdrop-blur-2xl border-white/10" : "w-full max-w-7xl bg-transparent border-transparent shadow-none"
          }`}
        >
          {/* Logo Area */}
          <MagneticWrapper strength={0.1}>
            <Link to="/" className="flex items-center space-x-3 group outline-none" onClick={() => setIsMenuOpen(false)} aria-label="Return to Homepage">
              <div className="w-9 h-9 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#705B3C]/20 rounded-full blur-md group-hover:bg-[#705B3C]/40 transition-all duration-300" />
                <img src="/logo.png" alt="PharmaSaha Logo" className="w-full h-full object-contain relative z-10" />
              </div>
              <span 
                className={`font-black tracking-wide text-lg transition-all duration-700 flex ${isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 text-white"}`}
                style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.8))" }}
              >
                PHARMA<span className="text-[#BBBAFF]">SAHA</span>
              </span>
            </Link>
          </MagneticWrapper>

          {/* Center Actions / Trigger */}
          <div className="flex items-center space-x-3">
            {/* Always visible Contact Button on Desktop Island */}
            <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-out ${isScrolled ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
               <MagneticWrapper>
                 <button onClick={handleInitiateClick} aria-label="Initiate Contact">
                   <Button className="h-10 px-6 rounded-full bg-[#705B3C] hover:bg-[#5E482C] text-white font-bold tracking-wide text-sm shadow-[0_0_15px_rgba(112,91,60,0.4)] transition-all">
                     Initiate
                   </Button>
                 </button>
               </MagneticWrapper>
            </div>

            {/* Menu Trigger Button */}
            <MagneticWrapper strength={0.2}>
              <button
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-controls="global-mega-menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#BBBAFF]/20 border border-white/10 hover:border-[#BBBAFF]/30 transition-all duration-300 group outline-none focus:ring-2 focus:ring-[#BBBAFF]/50"
              >
                <span className="text-sm font-bold text-white tracking-widest uppercase group-hover:text-[#BBBAFF] transition-colors">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
                <div className="relative w-4 h-4 ml-1">
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                    className="absolute top-0 left-0 w-full h-[2px] bg-white group-hover:bg-[#BBBAFF] transition-colors rounded-full origin-center"
                  />
                  <motion.div
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                    className="absolute top-[7px] left-0 w-full h-[2px] bg-white group-hover:bg-[#BBBAFF] transition-colors rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white group-hover:bg-[#BBBAFF] transition-colors rounded-full origin-center"
                  />
                </div>
              </button>
            </MagneticWrapper>
          </div>
        </div>
      </motion.header>

      {/* =========================================
          THE ULTRA-PREMIUM MEGA MENU OVERLAY
      ========================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(200% at 50% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 50% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#001D21]/95 backdrop-blur-3xl"
          >
            {/* Ambient Background Glows inside Menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#705B3C]/10 rounded-full blur-[120px] mix-blend-screen" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#BBBAFF]/10 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <div id="global-mega-menu" className="relative w-full h-full max-w-[90rem] mx-auto px-6 lg:px-12 pt-32 pb-20 flex flex-col justify-between" role="navigation" aria-label="Main Mega Menu">

              {/* Top Section: Navigation Links */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 h-full min-h-0 overflow-hidden">
                <div className="flex flex-col space-y-1 overflow-y-auto overflow-x-hidden pr-6 pb-20 relative scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10">
                  <div className="text-[10px] lg:text-xs font-mono font-bold tracking-[0.3em] text-[#CCEED3] uppercase mb-4 lg:mb-6 sticky top-0 bg-[#001D21]/90 py-4 z-10 backdrop-blur-md flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-[#CCEED3]" />
                    Global Index
                  </div>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: "easeOut" }}
                      onHoverStart={() => setHoveredNav(item.label)}
                      onHoverEnd={() => setHoveredNav(null)}
                      className="group"
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex flex-col py-2 lg:py-4 outline-none block"
                      >
                        <div className={`flex items-end justify-between border-b pb-2 transition-colors duration-500 ${location.pathname === item.href ? 'border-[#BBBAFF]/40' : 'border-white/5 group-hover:border-[#BBBAFF]/50'}`}>
                          <span className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter transition-all duration-500 ${location.pathname === item.href ? 'text-[#BBBAFF]' : hoveredNav === item.label ? "text-[#BBBAFF] translate-x-4" : "text-white"}`}>
                            {item.label}
                          </span>
                          <div className="flex items-center gap-3">
                            {location.pathname === item.href && (
                              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-[#BBBAFF]/60 uppercase">Active</span>
                            )}
                            <ArrowRight className={`w-8 h-8 lg:w-10 lg:h-10 transition-all duration-500 ${location.pathname === item.href ? 'text-[#BBBAFF] opacity-100' : hoveredNav === item.label ? "text-[#BBBAFF] transform translate-x-0 opacity-100" : "text-white/20 transform -translate-x-10 opacity-0"}`} />
                          </div>
                        </div>
                        <div className={`mt-3 text-sm font-light tracking-wide transition-all duration-500 overflow-hidden ${hoveredNav === item.label ? "text-white/60 opacity-100 h-6 translate-y-0" : "opacity-0 h-0 -translate-y-2"}`}>
                          {item.description}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Right Section: Featured Callout / Contact */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden lg:flex flex-col justify-center h-full pl-20"
                >
                  <div className="glass-panel p-10 lg:p-14 rounded-3xl border border-white/10 relative overflow-hidden group bg-[#000508]/50">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#705B3C]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    <span className="text-[#705B3C] font-mono tracking-[0.2em] text-[10px] uppercase font-bold block mb-4">Secure Network</span>
                    <h3 className="text-4xl font-black text-white mb-6 relative z-10 leading-[1.1] tracking-tight">Scale your access across all 15 ECOWAS states.</h3>
                    <p className="text-white/50 text-xl font-light mb-12 leading-relaxed max-w-md relative z-10">
                      Partner with PharmaSaha for unparalleled, compliance-verified access to West Africa's rapidly organizing healthcare networks.
                    </p>
                    
                    <MagneticWrapper strength={0.15}>
                      <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                        <Button className="bg-[#705B3C] hover:bg-[#5E482C] text-white h-16 px-10 text-lg rounded-full flex items-center shadow-[0_0_30px_rgba(112,91,60,0.3)] relative z-10 transition-all font-bold">
                          Establish Connection <ChevronRight className="ml-3 w-6 h-6" />
                        </Button>
                      </a>
                    </MagneticWrapper>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Section: Footer-esque info inside Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10"
              >
                <div className="flex items-center space-x-10 mb-6 md:mb-0">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/company/pharmasaha' },
                    { name: 'Twitter', url: 'https://twitter.com/pharmasaha' },
                    { name: 'Instagram', url: 'https://instagram.com/pharmasaha' }
                  ].map(social => (
                    <MagneticWrapper key={social.name} strength={0.2}>
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold tracking-[0.2em] text-white hover:text-[#BBBAFF] transition-colors uppercase">
                        {social.name}
                      </a>
                    </MagneticWrapper>
                  ))}
                </div>
                <div className="text-xs text-white/30 font-mono tracking-widest uppercase">
                  © {new Date().getFullYear()} PHARMASAHA. ALL SYSTEMS ENCRYPTED.
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
