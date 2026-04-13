import React, { useEffect, useRef, useState, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../ui/Magnetic";

// Lazy load the WebGL canvas so it doesn't block the initial React hydration
const WebGLGlobe = React.lazy(() => import("../canvas/WebGLGlobe"));

// Pure JS counter — no GSAP
function CountUpNumber({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              setCount(Math.round(eased * end));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={elementRef} className="text-3xl lg:text-5xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
      {count}
      {suffix}
    </div>
  );
}

export default function HeroSection({ isFirstVisit = true }: { isFirstVisit?: boolean }) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-background overflow-hidden selection:bg-[#745A37] selection:text-white">
      {/* Background Deep Space Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] opacity-30 mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[200px] opacity-20 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/5 to-transparent blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-20 lg:pb-32 z-10 flex flex-col justify-center min-h-screen w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-20">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 z-30 lg:pl-4 xl:pl-8 w-full lg:max-w-[60%] xl:max-w-[55%] relative pointer-events-auto">
            
            <div className="hero-reveal hero-reveal-1 inline-flex items-center px-4 py-2 border border-secondary/30 bg-secondary/10 backdrop-blur-md rounded-full cursor-pointer hover:bg-secondary/20 hover:border-secondary/50 transition-all shadow-[0_0_15px_rgba(186,185,255,0.15)] group relative overflow-hidden">
              <span className="relative w-2 h-2 mr-3 flex items-center justify-center">
                <span className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" />
                <span className="relative w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_#BAB9FF]" />
              </span>
              <span className="text-secondary text-xs sm:text-sm font-semibold tracking-wide uppercase">
                West Africa's Healthcare Gateway
              </span>
            </div>

            <h1 className="hero-reveal hero-reveal-2 text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.9] tracking-tighter mb-2 lg:mb-4 drop-shadow-2xl hero-text-glow w-full">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 block origin-left">
                Access The
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-[#BAB9FF] block origin-left mt-2">
                Next Frontier.
              </div>
            </h1>

            <p className="hero-reveal hero-reveal-3 text-base md:text-lg lg:text-xl text-foreground/80 font-light leading-relaxed max-w-xl pr-4">
              The exclusive pharmaceutical market access partner for West Africa. Bridging global innovators to a projected USD 118B healthcare landscape.
            </p>

            <div className="hero-reveal hero-reveal-4 flex flex-col sm:flex-row gap-4 lg:gap-6 mt-8 lg:mt-12 w-full justify-center lg:justify-start">
              <Magnetic>
                <Link to="/infrastructure" className="inline-block">
                  <button className="bg-primary text-background px-8 lg:px-12 py-4 lg:py-6 rounded-full font-black text-sm lg:text-base uppercase tracking-[0.3em] flex items-center justify-center lg:justify-start gap-3 hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(116,90,55,0.3)] group whitespace-nowrap" data-cursor="EXPLORE">
                    Explore Infrastructure
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </Magnetic>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border border-white/20 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full font-black text-sm lg:text-base uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500 whitespace-nowrap"
              >
                Consulting
              </button>
            </div>

            <div className="hero-reveal hero-reveal-5 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 pt-8 lg:pt-10 mt-4 lg:mt-6 border-t border-border/50 w-full relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
              
              <div className="flex flex-col justify-end">
                <CountUpNumber end={118} suffix="B" />
                <div className="text-muted-foreground font-medium text-xs flex items-center mt-1 lg:mt-2 uppercase tracking-wider lg:text-[11px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shadow-[0_0_5px_#BAB9FF]" />
                  Market Scope
                </div>
              </div>
              
              <div className="flex flex-col justify-end">
                <CountUpNumber end={70} suffix="%+" />
                <div className="text-muted-foreground font-medium text-xs flex items-center mt-1 lg:mt-2 uppercase tracking-wider lg:text-[11px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shadow-[0_0_5px_#BAB9FF]" />
                  Import Ratio
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <CountUpNumber end={6} />
                <div className="text-muted-foreground font-medium text-xs flex items-center mt-1 lg:mt-2 uppercase tracking-wider lg:text-[11px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shadow-[0_0_5px_#BAB9FF]" />
                  Core Pillars
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <CountUpNumber end={100} suffix="%" />
                <div className="text-muted-foreground font-medium text-xs flex items-center mt-1 lg:mt-2 uppercase tracking-wider lg:text-[11px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shadow-[0_0_5px_#745A37]" />
                  Compliance
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual - Native WebGL Canvas Container */}
          <div className="absolute inset-0 lg:left-auto lg:right-[-10%] lg:top-1/2 lg:-translate-y-1/2 h-[60vh] lg:h-[120vh] w-full lg:w-[45vw] flex items-center justify-center opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto z-10 lg:z-20">
            <Suspense fallback={
              <div className="w-32 lg:w-48 h-32 lg:h-48 border border-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-secondary/50 text-[10px] lg:text-xs tracking-widest uppercase">Initializing 3D Core...</span>
              </div>
            }>
              <WebGLGlobe />
            </Suspense>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 cursor-pointer group z-50 pointer-events-auto"
        onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs mb-3 font-semibold uppercase tracking-widest group-hover:text-[#745A37] transition-colors">
          Scroll to Explore
        </span>
        <div className="w-7 h-11 border-2 border-[#C2EED0]/20 rounded-full flex justify-center relative overflow-hidden group-hover:border-[#745A37]/50 transition-colors">
          <div className="w-1.5 h-2.5 bg-[#745A37] rounded-full mt-2 animate-bounce shadow-[0_0_10px_#745A37]" />
        </div>
      </div>

      {/* Global CSS for unique hero fx */}
      <style>{`
        .hero-text-glow {
          text-shadow: 0 0 100px rgba(186,185,255,0.15), 0 0 30px rgba(116,90,55,0.4);
        }
      `}</style>
    </section>
  );
}
