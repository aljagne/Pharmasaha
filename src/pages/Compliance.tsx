import { Suspense, useEffect, useRef } from "react";
import PageTransition from "../components/layout/PageTransition";
import ComplianceDeepDive from "../components/sections/ComplianceDeepDive";
import AuditTrailConsole from "../components/sections/AuditTrailConsole";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import gsap from "gsap";
import { ShieldAlert } from "lucide-react";

export default function Compliance() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    const ctx = gsap.context(() => {
      // Background scanning radar/grid animation
      gsap.to(".comp-radar", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center"
      });

      // Cinematic text entrance
      gsap.fromTo(
        ".comp-title",
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, ease: "power4.out" }
      );

      // Warning flashes
      gsap.to(".comp-alert", {
        opacity: 0.2,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        delay: 2,
        ease: "none"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000508] text-foreground">
        
        {/* ─── CINEMATIC COMPLIANCE HERO ─── */}
        <section 
          ref={heroRef}
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-white/5"
        >
          {/* Abstract Radar / Scanning Shield Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 mix-blend-screen">
            <div className="comp-radar absolute w-[1000px] h-[1000px] rounded-full border border-primary/20" style={{ backgroundImage: 'conic-gradient(from 0deg, transparent 0deg 340deg, theme("colors.primary.DEFAULT") 360deg)' }} />
            <div className="comp-radar absolute w-[600px] h-[600px] rounded-full border border-secondary/20 border-dashed" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
            <div className="absolute w-[2px] h-full bg-primary/20 rotate-45" />
            <div className="absolute w-full h-[2px] bg-secondary/20 rotate-45" />
            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#000508_60%)]" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
            
            <div className="comp-title opacity-0 mb-8 flex items-center justify-center gap-3 border border-primary/30 bg-primary/10 text-primary px-6 py-2 rounded-full backdrop-blur-md">
              <ShieldAlert className="w-4 h-4 comp-alert" />
              <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                Zero-Trust Defensive Stance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[1] text-center mb-8">
              <div className="comp-title opacity-0 overflow-hidden">Invulnerable</div>
              <div className="comp-title opacity-0 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                By Design.
              </div>
            </h1>
            
            <p className="comp-title opacity-0 mt-4 text-white/50 text-lg md:text-xl max-w-3xl text-center leading-relaxed font-light mb-16">
              Compliance is not an afterthought. It is the architectural core of our entire supply chain. By embedding WHO Good Distribution Practices, Ministry of Health validations, and AES-256 encryption into every movement, we eliminate regulatory risk from emerging market access.
            </p>

            {/* Simulated Live Console */}
            <div className="comp-title opacity-0 w-full mt-8">
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
