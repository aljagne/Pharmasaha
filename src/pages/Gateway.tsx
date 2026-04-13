import PageTransition from "../components/layout/PageTransition";
import GatewayTeaser from "../components/sections/GatewayTeaser";
import InvestorGateway from "../components/sections/InvestorGateway";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import { LockKeyhole } from "lucide-react";

export default function Gateway() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000508] text-foreground">
        
        {/* ─── EXECUTIVE VAULT HERO ─── */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-20 border-b border-white/5">
          {/* Abstract Data Room Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full rotate-45" />
            <div className="absolute w-[700px] h-[700px] border border-white/5 rounded-full -rotate-45" />
            <div className="absolute w-[600px] h-[600px] border border-primary/10 rounded-full" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B9A37A]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
            
            <div className="hero-reveal hero-reveal-1 mb-12 w-20 h-20 rounded-2xl bg-[#050B0D] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(185,163,122,0.1)]">
              <LockKeyhole className="w-8 h-8 text-[#B9A37A]" />
            </div>

            <div className="hero-reveal hero-reveal-2 mb-8 flex items-center justify-center gap-3 border border-[#B9A37A]/30 bg-[#B9A37A]/10 text-[#B9A37A] px-6 py-2 rounded-full backdrop-blur-md">
              <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                Executive Data Room
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[1] text-center mb-6 lg:mb-8">
              <div className="hero-reveal hero-reveal-3 overflow-hidden">The Strategic</div>
              <div className="hero-reveal hero-reveal-3 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#B9A37A] via-white to-[#B9A37A]">
                Master Blueprint.
              </div>
            </h1>
            
            <p className="hero-reveal hero-reveal-4 mt-4 text-white/50 text-lg md:text-xl max-w-3xl text-center leading-relaxed font-light mb-12">
              Step beyond the public interface. Gain strictly confidential access to the proprietary operational architecture, geopolitical tailwinds, and econometric modeling required to architect a USD 118B bridge into West Africa.
            </p>

          </div>
        </section>

        {/* ─── BLUEPRINT CONTENT TEASER ─── */}
        <GatewayTeaser />

        {/* ─── SECURE CLEARANCE FORM ─── */}
        <InvestorGateway />

        {/* ─── CTA & FOOTER ─── */}
        <div className="border-t border-white/5">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
