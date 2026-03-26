import { Mail, Linkedin, Twitter, ArrowUpRight, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerNav = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure' },
    { label: 'Institutional', href: '/institutional' },
    { label: 'Our Story', href: '/story' },
    { label: 'Global Network', href: '/network' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Intelligence', href: '/intelligence' },
  ];

  return (
    <footer className="relative bg-[#001D21] text-white overflow-hidden border-t border-white/5 pt-40 pb-12 z-20" role="contentinfo" aria-label="Global Footer">

      {/* Massive Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Brand Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#705B3C]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#BBBAFF]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10 flex flex-col">

        {/* ─── TERMINAL HERO CALL-TO-ACTION ─── */}
        <div className="mb-32 w-full group cursor-pointer flex flex-col items-center text-center" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="inline-flex items-center gap-2 mb-8 border border-white/10 bg-white/5 py-1.5 px-4 rounded-full">
            <Hexagon className="w-4 h-4 text-[#CCEED3]" />
            <span className="text-[#CCEED3] font-mono tracking-[0.2em] text-[10px] uppercase font-bold">The Architecture of Access</span>
          </div>
          
          <h2 className="text-[12vw] md:text-[8vw] lg:text-[9rem] font-black leading-[0.8] tracking-tighter text-white transition-all duration-700">
            Initiate <br />
            <span className="flex items-center justify-center gap-4 md:gap-8 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#705B3C] group-hover:to-[#BBBAFF] transition-all duration-1000">
              Partnership
              <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32 text-[#BBBAFF] opacity-0 -translate-x-10 translate-y-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
            </span>
          </h2>
        </div>

        {/* ─── ARCHITECTURAL GRID LINKS ─── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 text-left border-y border-white/10 py-20 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <button onClick={scrollToTop} className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#705B3C] to-[#001D21] border border-white/10 group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-[#BBBAFF]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="text-white font-black text-3xl relative z-10">P</span>
              </button>
              <p className="text-white/40 text-lg md:text-xl font-light mt-8 max-w-sm leading-relaxed">
                Bridging global pharmaceutical innovation with West African markets through invulnerable sovereign logistics.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h4 className="text-[#CCEED3] text-xs font-mono font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
               <span className="w-8 h-[1px] bg-[#CCEED3]/50" />
               Navigation Matrix
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} onClick={scrollToTop} className="text-white/60 hover:text-white text-lg transition-colors relative group inline-flex items-center gap-2">
                    <span className="w-0 h-[1px] bg-white group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-4">
             <h4 className="text-[#CCEED3] text-xs font-mono font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
               <span className="w-8 h-[1px] bg-[#CCEED3]/50" />
               Direct Line
             </h4>
             <a href="mailto:partners@pharmasaha.com" className="text-2xl md:text-3xl font-bold text-white hover:text-[#BBBAFF] transition-colors flex items-center gap-4 group mb-10" aria-label="Email Partners at PharmaSaha">
               <Mail className="w-8 h-8 text-[#705B3C] group-hover:scale-110 transition-transform duration-500" />
               partners@pharmasaha.com
             </a>
             
             <div className="flex gap-4">
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-[#BBBAFF] hover:border-[#BBBAFF] text-white/50 hover:text-[#001D21] transition-all duration-500 hover:scale-110" aria-label="Visit PharmaSaha LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-[#CCEED3] hover:border-[#CCEED3] text-white/50 hover:text-[#001D21] transition-all duration-500 hover:scale-110" aria-label="Visit PharmaSaha Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
             </div>
          </div>

        </div>

        {/* ─── ABSOLUTE BOTTOM SIGNATURE ─── */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-mono tracking-widest uppercase">
          <p>© {new Date().getFullYear()} PHARMASAHA LOGISTICS. ALL SYSTEMS NOMINAL.</p>
          <div className="flex gap-6 mt-6 md:mt-0 items-center">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Map</span>
            <span className="w-1 h-1 rounded-full bg-[#705B3C]" />
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Architecture</span>
            <span className="w-1 h-1 rounded-full bg-[#BBBAFF]" />
            <span className="hover:text-white transition-colors cursor-pointer">Anti-Bribery Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
