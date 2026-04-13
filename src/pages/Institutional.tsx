import { useEffect, useRef, useState } from "react";
import PageTransition from "../components/layout/PageTransition";
import InstitutionalDomains from "../components/sections/InstitutionalDomains";
import TenderLifecycle from "../components/sections/TenderLifecycle";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";

// Pure JS counter — no GSAP
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out quad
          const eased = 1 - (1 - progress) * (1 - progress);
          setValue(parseFloat((eased * target).toFixed(1)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value}</span>;
}

export default function Institutional() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#000B0D] text-foreground">
        
        {/* ─── SOVEREIGN HERO ─── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-white/5">
          {/* Abstract Orbital Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 mix-blend-screen">
            <div className="animate-slow-spin absolute w-[800px] h-[800px] rounded-full border border-white/10 border-dashed" />
            <div className="animate-slow-spin absolute w-[1200px] h-[1200px] rounded-full border border-white/5" style={{ animationDirection: 'reverse' }} />
            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#000B0D_70%)]" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B9A37A]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
            <div className="mb-8">
              <span className="hero-reveal hero-reveal-1 inline-block text-[#B9A37A] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase border border-[#B9A37A]/20 px-6 py-2 rounded-full bg-[#B9A37A]/5 backdrop-blur-sm">
                B2G & NGO Architecture
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8">
              <div className="hero-reveal hero-reveal-2 overflow-hidden">Unlocking Sovereign</div>
              <div className="hero-reveal hero-reveal-3 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#B9A37A] via-white to-[#BAB9FF]">
                Procurement Scale.
              </div>
            </h1>
            
            <div className="hero-reveal hero-reveal-4 mt-12 flex flex-col items-center justify-center">
              <div className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Addressing a multi-lateral donor pipeline of</div>
              <div className="text-5xl md:text-7xl font-mono font-black text-white drop-shadow-[0_0_30px_rgba(185,163,122,0.3)]">
                USD <AnimatedCounter target={2.5} />B+
              </div>
            </div>

            <p className="hero-reveal hero-reveal-5 mt-12 text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
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
