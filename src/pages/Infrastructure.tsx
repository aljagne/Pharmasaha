import PageTransition from "../components/layout/PageTransition";
import InfrastructureDeepDive from "../components/sections/InfrastructureDeepDive";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";

export default function Infrastructure() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        
        {/* ─── HERO ─── */}
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-24 lg:pt-32 pb-12 lg:pb-20">
          {/* Abstract Wireframe / Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={`v-${i}`} 
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-primary/30 to-white/0"
                style={{ left: `${(i / 11) * 100}%` }}
              />
            ))}
          </div>

          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Core Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
            <div className="overflow-hidden mb-6">
              <span className="hero-reveal hero-reveal-1 inline-block text-secondary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase border border-secondary/20 px-6 py-2 rounded-full bg-secondary/5 backdrop-blur-sm">
                Operational Architecture
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.9] flex flex-wrap justify-center gap-x-2 sm:gap-x-4 md:gap-x-8 gap-y-1 sm:gap-y-2">
              <div className="overflow-hidden p-1 sm:p-2"><span className="hero-reveal hero-reveal-2 inline-block text-white">The</span></div>
              <div className="overflow-hidden p-1 sm:p-2"><span className="hero-reveal hero-reveal-2 inline-block text-white">Complete</span></div>
              <div className="overflow-hidden p-1 sm:p-2 w-full flex justify-center mt-1 sm:mt-2"><span className="hero-reveal hero-reveal-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white text-center">Access Architecture.</span></div>
            </h1>
            
            <p className="hero-reveal hero-reveal-4 mt-12 text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              PharmaSaha operates a definitive 6-pillar market access model across West Africa. Every layer of our physical and digital infrastructure is exclusively engineered to remove friction from global supply chains.
            </p>
          </div>
        </div>

        {/* ─── DEEP DIVE MATRIX ─── */}
        <section className="relative z-20 -mt-10">
          <InfrastructureDeepDive />
        </section>

        {/* ─── CTA & FOOTER ─── */}
        <div className="border-t border-white/5">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
