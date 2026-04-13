import { useEffect } from "react";
import PageTransition from "../components/layout/PageTransition";
import ComplianceDeepDive from "../components/sections/ComplianceDeepDive";
import AuditTrailConsole from "../components/sections/AuditTrailConsole";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import { ShieldAlert, ChevronRight } from "lucide-react";

export default function Compliance() {
  useEffect(() => {
    document.title = "Trust & Compliance | Pharmasaha Sovereign Logistics";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Our zero-trust architecture embeds WHO-GDP, ISO 27001, and Ministry of Health validations into the core of every pharmaceutical movement.");
    }
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000508] text-foreground selection:bg-primary selection:text-white">
        
        {/* ─── COMPLIANCE HERO ─── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12 border-b border-white/5">
          {/* ──── RADAR BACKGROUND ──── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-40" />
            
            <div className="relative w-[1200px] h-[1200px] opacity-20">
              {/* Spinning Scan Sweep — now CSS */}
              <div className="animate-emblem-spin absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_340deg,rgba(116,90,55,0.4)_360deg)] z-10" style={{ animationDuration: '8s' }} />
              
              {/* Concentric Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-[15%] border border-white/10 rounded-full border-dashed animate-slow-spin" style={{ animationDirection: 'reverse' }} />
              <div className="absolute inset-[30%] border border-primary/20 rounded-full" />
              <div className="absolute inset-[45%] border border-white/5 rounded-full" />

              {/* Crosshair Lines */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000508_70%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
            
            <div className="hero-reveal hero-reveal-1 mb-6 flex items-center justify-center gap-3 border border-primary/30 bg-primary/10 text-primary px-6 py-2 rounded-full backdrop-blur-md">
              <ShieldAlert className="w-4 h-4" />
              <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                Zero-Trust Defensive Stance
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.9] text-center mb-8">
              <div className="hero-reveal hero-reveal-2 block origin-bottom uppercase">Architecting</div>
              <div className="hero-reveal hero-reveal-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary block origin-bottom mt-2">
                Invulnerable Access.
              </div>
            </h1>
            
            <p className="hero-reveal hero-reveal-4 mt-4 text-white/50 text-base md:text-lg max-w-2xl text-center leading-relaxed font-light mb-12">
              Compliance is not an afterthought. It is the architectural core of our entire supply chain. By embedding WHO Good Distribution Practices, Ministry of Health validations, and AES-256 encryption into every movement, we eliminate regulatory risk from emerging market access.
            </p>

            {/* Scroll Indicator */}
            <div className="hero-reveal hero-reveal-4 mb-12 flex flex-col items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30">Explore Architecture</span>
              <button 
                onClick={() => document.getElementById('deep-dive')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group"
                aria-label="Scroll down to compliance architecture layers"
              >
                <ChevronRight className="w-5 h-5 text-white/40 rotate-90 group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Simulated Live Console */}
            <div className="hero-reveal hero-reveal-5 w-full">
              <AuditTrailConsole />
            </div>

          </div>
        </section>

        {/* ─── SHIELD DEEP DIVE ─── */}
        <ComplianceDeepDive />

        {/* ─── CTA & FOOTER ─── */}
        <div className="border-t border-white/5">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
