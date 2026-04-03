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
    
    // Scoped GSAP Context for memory safety and perfect cleanup
    const ctx = gsap.context(() => {
      // 1. COMPLEX RADAR ARCHITECTURE
      // Main rotating sweep
      gsap.to(".radar-sweep", {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear"
      });

      // Secondary counter-rotating ring
      gsap.to(".radar-ring-1", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "linear"
      });

      // Subtle pulse rings
      gsap.to(".radar-pulse", {
        scale: 1.5,
        opacity: 0,
        duration: 4,
        repeat: -1,
        ease: "power2.out",
        stagger: 2
      });

      // 2. CINEMATIC NARRATIVE ENTRANCE
      const tl = gsap.timeline();

      // Top badge reveal
      tl.fromTo(".comp-badge", 
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // Main Title "Decryption" Reveal
      tl.fromTo(".comp-title-line",
        { y: 100, opacity: 0, skewY: 10 },
        { 
          y: 0, 
          opacity: 1, 
          skewY: 0, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: "expo.out" 
        },
        "-=0.6"
      );

      // Character-level flicker for the "Design" part
      tl.fromTo(".comp-flicker",
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.05, 
          repeat: 8, 
          yoyo: true, 
          ease: "none",
          stagger: 0.05
        },
        "-=0.4"
      );

      // Subheadline fade
      tl.fromTo(".comp-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      // Console slide up
      tl.fromTo(".comp-console",
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "expo.out" },
        "-=1"
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000508] text-foreground selection:bg-primary selection:text-white">
        
        {/* ─── CINEMATIC COMPLIANCE HERO ─── */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-white/5"
        >
          {/* ──── ULTRA-TECH RADAR BACKGROUND ──── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* Pulsing Base Glow */}
            <div className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-40 animate-pulse-slow" />
            
            {/* The Radar Geometry */}
            <div className="relative w-[1200px] h-[1200px] opacity-20">
              {/* Spinning Scan Sweep */}
              <div className="radar-sweep absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_340deg,rgba(116,90,55,0.4)_360deg)] z-10" />
              
              {/* Concentric Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-[15%] border border-white/10 rounded-full border-dashed radar-ring-1" />
              <div className="absolute inset-[30%] border border-primary/20 rounded-full" />
              <div className="absolute inset-[45%] border border-white/5 rounded-full" />
              
              {/* Pulse Waves */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="radar-pulse absolute inset-0 border-2 border-primary/40 rounded-full" />
              ))}

              {/* Crosshair Lines */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000508_70%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
            
            <div className="comp-badge opacity-0 mb-8 flex items-center justify-center gap-3 border border-primary/30 bg-primary/10 text-primary px-6 py-2 rounded-full backdrop-blur-md">
              <ShieldAlert className="w-4 h-4" />
              <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                Zero-Trust Defensive Stance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-black text-white tracking-tighter leading-[0.9] text-center mb-10" style={{ perspective: "1000px" }}>
              <div className="comp-title-line opacity-0 block origin-bottom">Invulnerable</div>
              <div className="comp-title-line opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary block origin-bottom mt-2">
                By <span className="comp-flicker">Design.</span>
              </div>
            </h1>
            
            <p className="comp-desc opacity-0 mt-4 text-white/50 text-base md:text-xl max-w-3xl text-center leading-relaxed font-light mb-16">
              Compliance is not an afterthought. It is the architectural core of our entire supply chain. By embedding WHO Good Distribution Practices, Ministry of Health validations, and AES-256 encryption into every movement, we eliminate regulatory risk from emerging market access.
            </p>

            {/* Simulated Live Console */}
            <div className="comp-console opacity-0 w-full">
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
