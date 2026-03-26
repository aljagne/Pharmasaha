import { Suspense, useEffect, useRef } from "react";
import PageTransition from "../components/layout/PageTransition";
import InfrastructureDeepDive from "../components/sections/InfrastructureDeepDive";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import gsap from "gsap";

export default function Infrastructure() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Cinematic entrance animation for the sophisticated hero
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".infra-title-word",
        { y: 100, opacity: 0, rotateX: 45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".infra-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
      );
      gsap.fromTo(
        ".infra-grid-line",
        { scaleY: 0 },
        { scaleY: 1, duration: 2, stagger: 0.05, ease: "expo.inOut", transformOrigin: "top" }
      );
      gsap.to(".infra-ambient-glow", {
        opacity: 0.5,
        scale: 1.2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        
        {/* ─── CINEMATIC HERO ─── */}
        <div 
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-32 pb-20"
        >
          {/* Abstract Wireframe / Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Vertical grid lines dropping down */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={`v-${i}`} 
                className="infra-grid-line absolute top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-primary/30 to-white/0"
                style={{ left: `${(i / 11) * 100}%` }}
              />
            ))}
          </div>

          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none infra-ambient-glow" />

          {/* Core Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
            <div className="overflow-hidden mb-6">
              <span className="infra-subtitle inline-block text-secondary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase border border-secondary/20 px-6 py-2 rounded-full bg-secondary/5 backdrop-blur-sm">
                Operational Architecture
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.9] flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 perspective-1000">
              <div className="overflow-hidden p-2"><span className="infra-title-word inline-block origin-bottom text-white">The</span></div>
              <div className="overflow-hidden p-2"><span className="infra-title-word inline-block origin-bottom text-white">Complete</span></div>
              <div className="overflow-hidden p-2 w-full flex justify-center mt-2"><span className="infra-title-word inline-block origin-bottom text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white">Access Architecture.</span></div>
            </h1>
            
            <p className="infra-subtitle mt-12 text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
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
