import { Suspense, useEffect, useRef } from "react";
import PageTransition from "../components/layout/PageTransition";
import InstitutionalDomains from "../components/sections/InstitutionalDomains";
import TenderLifecycle from "../components/sections/TenderLifecycle";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import gsap from "gsap";

export default function Institutional() {
  const heroRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!heroRef.current || !counterRef.current) return;
    
    const ctx = gsap.context(() => {
      // Background orbit animation
      gsap.to(".inst-orbit", {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center"
      });

      // Cinematic text entrance
      gsap.fromTo(
        ".inst-title",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, stagger: 0.2, ease: "power3.out" }
      );

      // Numeric counter animation for USD 2.5B
      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: 2.5,
        duration: 2.5,
        ease: "power2.out",
        delay: 0.5,
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = counterObj.val.toFixed(1);
          }
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000B0D] text-foreground">
        
        {/* ─── CINEMATIC SOVEREIGN HERO ─── */}
        <section 
          ref={heroRef}
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-white/5"
        >
          {/* Abstract Orbital / Sovereign Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 mix-blend-screen">
            <div className="inst-orbit absolute w-[800px] h-[800px] rounded-full border border-white/10 border-dashed" />
            <div className="inst-orbit absolute w-[1200px] h-[1200px] rounded-full border border-white/5" style={{ animationDirection: 'reverse' }} />
            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#000B0D_70%)]" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B9A37A]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
            <div className="mb-8">
              <span className="inst-title inline-block text-[#B9A37A] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase border border-[#B9A37A]/20 px-6 py-2 rounded-full bg-[#B9A37A]/5 backdrop-blur-sm">
                B2G & NGO Architecture
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8">
              <div className="inst-title overflow-hidden">Unlocking Sovereign</div>
              <div className="inst-title overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#B9A37A] via-white to-[#BAB9FF]">
                Procurement Scale.
              </div>
            </h1>
            
            <div className="inst-title mt-12 flex flex-col items-center justify-center">
              <div className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Addressing a multi-lateral donor pipeline of</div>
              <div className="text-5xl md:text-7xl font-mono font-black text-white drop-shadow-[0_0_30px_rgba(185,163,122,0.3)]">
                USD <span ref={counterRef}>0.0</span>B+
              </div>
            </div>

            <p className="inst-title mt-12 text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              PharmaSaha connects global manufacturing outputs directly to sovereign Ministry of Health networks and the massive multilateral NGO funding apparatus across West Africa.
            </p>
          </div>
        </section>

        {/* ─── DOMAIN DEEP DIVE ─── */}
        <InstitutionalDomains />

        {/* ─── B2G DEAL LIFECYCLE ─── */}
        <TenderLifecycle />

        {/* ─── CTA & FOOTER ─── */}
        <div className="border-t border-white/5">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
