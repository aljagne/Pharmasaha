import PageTransition from "../components/layout/PageTransition";
import StoryTimeline from "../components/sections/StoryTimeline";
import LeadershipSection from "../components/sections/LeadershipSection";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import { BookOpen } from "lucide-react";

export default function OurStory() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000508] text-foreground">
        
        {/* ─── DOCUMENTARY HERO ─── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-20 border-b border-white/5">
          {/* Massive Abstract Globe/Mesh Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="animate-slow-spin absolute w-[1200px] h-[1200px] border-[0.5px] border-secondary/10 rounded-full" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.03) 10deg 20deg)' }} />
            <div className="animate-slow-spin absolute w-[900px] h-[900px] border border-primary/20 rounded-full" style={{ borderStyle: 'dashed', animationDirection: 'reverse' }} />
            <div className="absolute w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
            
            <div className="hero-reveal hero-reveal-1 mb-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <BookOpen className="w-6 h-6 text-white/50" />
            </div>

            <div className="hero-reveal hero-reveal-2 mb-6 flex items-center justify-center gap-3">
              <span className="text-secondary font-bold tracking-[0.4em] text-xs uppercase block text-center">
                The Origins of Pan-African Access
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-black text-white tracking-tighter leading-[0.9] text-center mb-6 lg:mb-8">
              <div className="hero-reveal hero-reveal-3 overflow-hidden">Bridging Global</div>
              <div className="hero-reveal hero-reveal-3 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary pb-2 sm:pb-4">
                Innovation.
              </div>
            </h1>
            
            <p className="hero-reveal hero-reveal-4 mt-6 text-white/50 text-xl max-w-3xl mx-auto text-center leading-relaxed font-light mb-16">
              Forged out of the critical need for a reliable, fully compliant distribution network, PharmaSaha was built to connect billions of dollars in global healthcare advancements directly to West African populations.
            </p>

          </div>
        </section>

        {/* ─── STICKY SCROLL HISTORY CORE ─── */}
        <StoryTimeline />

        {/* ─── BOARD OF ARCHITECTS ─── */}
        <LeadershipSection />
        
        {/* ─── CTA & FOOTER ─── */}
        <div className="border-t border-white/5">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
