import { Search, FileText, Landmark, Truck, Building2 } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LIFECYCLE_STEPS = [
  {
    num: "01",
    title: "Intelligence & Pre-Qualification",
    icon: <Search className="w-6 h-6" />,
    desc: "We map upcoming sovereign tenders, secure manufacturer inclusion in the National Essential Medicines List (NEML), and align GMP documentation with WHO-PQ standards to qualify for bidding."
  },
  {
    num: "02",
    title: "Dossier Assembly & Bidding",
    icon: <FileText className="w-6 h-6" />,
    desc: "Our regulatory command center expertly compiles hyper-compliant technical and commercial bid formats, ensuring pricing matrices mathematically outmaneuver regional competitors."
  },
  {
    num: "03",
    title: "Sovereign Award & Contracting",
    icon: <Landmark className="w-6 h-6" />,
    desc: "Upon an institutional win, we act as the authorized legal representative to execute massive supply contracts directly with the Ministry of Health or multilateral funding bodies."
  },
  {
    num: "04",
    title: "Bulk Importation Transport",
    icon: <Truck className="w-6 h-6" />,
    desc: "We coordinate population-scale cargo movements from point of origin into West Africa, clearing customs with VIP fast-track status and maintaining strict GDP/cold-chain continuity."
  },
  {
    num: "05",
    title: "CMS Integration",
    icon: <Building2 className="w-6 h-6" />,
    desc: "Final delivery is seamlessly handed off into the national Central Medical Stores (CMS) networks, fulfilling the sovereign commitment and unlocking massive financial realization."
  }
];

export default function TenderLifecycle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop) {
        // Horizontal GSAP Scroll for the timeline track - Optimized for longer scroll journey
        const scrollWidth = trackRef.current?.scrollWidth || 0;
        const windowWidth = window.innerWidth;
        const amountToScroll = scrollWidth - windowWidth + (windowWidth * 0.15); 

        gsap.to(trackRef.current, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.6,
            // Fixed 2500px length to provide a luxurious, non-jumping experience
            end: "+=2500", 
            invalidateOnRefresh: true,
          }
        });
      } else {
        // Mobile vertical entrance animation
        const sections = gsap.utils.toArray(".lifecycle-card-mobile");
        sections.forEach((sec) => {
          gsap.fromTo(sec as Element, 
            { opacity: 0, y: 30 },
            {
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              scrollTrigger: {
                trigger: sec as Element,
                start: "top 85%"
              }
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#00080A] py-32 lg:py-0 overflow-hidden" ref={containerRef}>
      
      {/* ── DESKTOP HORIZONTAL SCROLL ── */}
      <div className="hidden lg:flex h-screen items-center relative pl-[10vw]">
        
        {/* Sticky Header inside the pin */}
        <div className="absolute top-24 left-[10vw] z-20">
          <span className="text-[#BAB9FF] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block flex items-center gap-4">
            <span className="w-8 h-px bg-[#BAB9FF]" />
            Workflow Physics
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            The B2G Deal <br />Lifecycle.
          </h2>
        </div>

        {/* Track Container */}
        <div 
          className="flex gap-12 will-change-transform" 
          ref={trackRef}
          style={{ willChange: "transform" }}
        >
          {LIFECYCLE_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="lifecycle-card w-[450px] flex-shrink-0 group relative cursor-crosshair"
            >
              <div className="h-full border border-white/10 bg-[#001214]/50 backdrop-blur-md rounded-3xl p-10 transition-[border-color,background-color] duration-500 hover:bg-white/5 hover:border-white/20">
                {/* Connecting Line to Next */}
                {idx !== LIFECYCLE_STEPS.length - 1 && (
                  <div className="absolute top-1/2 -right-12 w-12 h-px bg-white/20 overflow-hidden">
                    <div className="w-full h-full bg-[#B9A37A] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                  </div>
                )}
                
                <div className="text-[#B9A37A] font-mono text-sm tracking-widest font-bold mb-10">
                  PHASE // {step.num}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 transition-[transform,background-color,border-color,color] duration-500 group-hover:scale-110 group-hover:bg-[#B9A37A] group-hover:border-[#B9A37A] group-hover:text-[#00080A]">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {step.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed font-light text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* Empty spacer at the end for smooth final scroll */}
          <div className="lifecycle-card w-[20vw] flex-shrink-0" />
        </div>
      </div>

      {/* ── MOBILE VERTICAL LAYOUT ── */}
      <div className="lg:hidden max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#BAB9FF] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block flex items-center gap-4">
            <span className="w-8 h-px bg-[#BAB9FF]" />
            Workflow Physics
          </span>
          <h2 className="text-4xl font-black text-white tracking-tighter">
            The B2G Deal <br />Lifecycle.
          </h2>
        </div>

        <div className="space-y-6 relative border-l border-white/10 pl-8 ml-4">
          {LIFECYCLE_STEPS.map((step, idx) => (
            <div key={idx} className="lifecycle-card-mobile relative bg-white/5 border border-white/10 rounded-2xl p-6">
              {/* Connector Dot */}
              <div className="absolute top-10 -left-[37px] w-3 h-3 rounded-full bg-[#B9A37A] shadow-[0_0_10px_#B9A37A]" />
              
              <div className="text-[#B9A37A] font-mono text-xs tracking-widest font-bold mb-4">
                PHASE // {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
