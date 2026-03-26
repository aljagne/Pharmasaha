import { Suspense, useEffect, useRef } from "react";
import PageTransition from "../components/layout/PageTransition";
import GlobalNetworkMap from "../components/sections/GlobalNetworkMap";
import NetworkDeepDive from "../components/sections/NetworkDeepDive";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import gsap from "gsap";

export default function Network() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Cinematic entrance animation for the sophisticated hero
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".net-title-word",
        { y: 150, opacity: 0, rotateZ: 5 },
        { y: 0, opacity: 1, rotateZ: 0, duration: 1.5, stagger: 0.15, ease: "power4.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".net-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.8 }
      );
      gsap.to(".net-ambient-glow", {
        opacity: 0.6,
        scale: 1.1,
        rotation: 30,
        duration: 8,
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
        
        {/* ─── CINEMATIC NETWORK HERO ─── */}
        <section 
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-32 pb-20"
        >
          {/* Abstract Data Nodes/Topographical Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border border-white/10 rounded-full animate-ping" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] border border-white/5 rounded-full animate-ping" style={{ animationDuration: '12s', animationDelay: '2s' }} />
          </div>

          <div className="net-ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/10 rounded-[40%] blur-[120px] pointer-events-none mix-blend-screen" />

          {/* Core Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
            <div className="overflow-hidden mb-8">
              <span className="net-subtitle inline-block text-secondary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase border border-secondary/20 px-6 py-2 rounded-full bg-secondary/5 backdrop-blur-sm">
                Cross-Continental Logistics
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.9] flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 perspective-1000">
              <div className="overflow-hidden pb-4"><span className="net-title-word inline-block origin-bottom-left text-white">Routing</span></div>
              <div className="overflow-hidden pb-4"><span className="net-title-word inline-block origin-bottom-left text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white">Global</span></div>
              <div className="overflow-hidden pb-4 w-full flex justify-center"><span className="net-title-word inline-block origin-bottom-left text-white">Innovation.</span></div>
            </h1>
            
            <p className="net-subtitle mt-12 text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              We operate a hyper-resilient, GDP-certified supply chain matrix. From verified European and Asian pharmaceutical manufacturers directly into the most challenging last-mile Central Medical Stores of West Africa.
            </p>
          </div>
        </section>

        {/* ─── THE GLOWING NETWORK MAP ─── */}
        <section className="relative z-20 pb-20 border-b border-white/5">
          {/* Subtle styling overlay for context */}
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32 pointer-events-none z-10" />
          <GlobalNetworkMap />
        </section>

        {/* ─── GEOGRAPHIC DEEP DIVE NODES ─── */}
        <NetworkDeepDive />

        {/* ─── CTA & FOOTER ─── */}
        <div className="border-t border-white/5">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
