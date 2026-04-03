import { ShieldCheck, Server, Lock, Fingerprint, Activity, ChevronDown, CheckCircle2 } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LAYERS = [
  {
    id: "LAYER 01",
    title: "Physical & Environmental Integrity",
    icon: <Activity className="w-10 h-10 text-[#B9A37A]" />,
    color: "from-[#B9A37A]",
    borderColor: "border-[#B9A37A]/30",
    description: "Our logistics architecture requires absolute physical security and unbroken environmental control. Operating under strict WHO Good Distribution Practices (GDP), every millimeter of our bonded warehousing and transit fleet is continuously monitored by independent IoT telemetry, ensuring temperature deviations (from ambient to -20°C) simply do not happen.",
    specs: [
      "WHO-GDP Certified Facilities",
      "IoT Thermostatic Telemetry",
      "Biometrically Secured Bonded Warehousing",
      "Autonomous Backup Power Systems"
    ]
  },
  {
    id: "LAYER 02",
    title: "Sovereign Regulatory Alignment",
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
    color: "from-secondary",
    borderColor: "border-secondary/30",
    description: "Compliance is not an afterthought; it is structurally embedded into our interaction with host nations. We maintain pre-cleared operational status with 15 Ministries of Health across West Africa. By harmonizing global dossiers with local National Essential Medicines Lists (NEML), we guarantee flawless customs fast-tracking and absolute sovereign authorization.",
    specs: [
      "15 MoH Pre-Clearance Approvals",
      "Automated Customs Fast-Tracking",
      "NEML Dossier Harmonization",
      "Counterfeit Product Elimination Protocols"
    ]
  },
  {
    id: "LAYER 03",
    title: "Digital Data & Cryptography",
    icon: <Lock className="w-10 h-10 text-primary" />,
    color: "from-primary",
    borderColor: "border-primary/30",
    description: "The modern supply chain is an information battlefield. We protect manufacturer IP, pricing matrices, and patient telemetry with military-grade digital fortifications. Our operational ERP synchronizes in real-time with global partners via AES-256 encrypted endpoints, ensuring absolute data sovereignity and patient anonymization at scale.",
    specs: [
      "AES-256 End-to-End Encryption",
      "ISO 27001 Information Security Standard",
      "Patient Telemetry Anonymization",
      "Immutable Audit Trail Logging"
    ]
  }
];

export default function ComplianceDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // 1. THE ENERGY THREAD (Vertical Connection Line)
      // Animate the height of the thread based on scroll
      gsap.fromTo(".energy-thread",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.5
          }
        }
      );

      // 2. LAYER CARD STAGGERED ENTRANCE
      const layers = gsap.utils.toArray(".compliance-layer");
      
      layers.forEach((layer: any, idx) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: layer,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(layer, 
          { opacity: 0, x: idx % 2 === 0 ? -40 : 40, filter: "blur(10px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "expo.out" }
        );

        tl.fromTo(layer.querySelectorAll(".layer-reveal"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.8"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background py-32 relative overflow-hidden" ref={containerRef} id="zero-trust-layers">
      {/* Background Architectural Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[80rem] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-32 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8 animate-bounce ring-1 ring-white/10">
            <ChevronDown className="w-6 h-6 text-white/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
            Penetrating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Zero-Trust Architecture.</span>
          </h2>
          
          {/* Decorative scanner line */}
          <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="relative" ref={triggerRef}>
          
          {/* THE ENERGY THREAD (Vertical central connection line) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.03] -translate-x-1/2 z-0" />
          <div className="energy-thread hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-[#BAB9FF] -translate-x-1/2 z-0 origin-top shadow-[0_0_15px_rgba(186,185,255,0.3)]" />

          <div className="space-y-24 md:space-y-40 relative">
            {LAYERS.map((layer, idx) => (
              <div key={idx} className="compliance-layer relative z-10 opacity-0 group">
                
                {/* Visual Connection Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#000508] border-2 border-white/20 items-center justify-center z-20 group-hover:border-primary transition-colors duration-500">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500 group-hover:scale-125" />
                </div>

                <div className={`glass-panel rounded-[3rem] border ${layer.borderColor} p-8 md:p-16 relative overflow-hidden group hover:border-white/30 transition-all duration-1000 bg-white/[0.01] hover:bg-white/[0.03]`}>
                  
                  {/* High-Tech Grid Overlays inside cards */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000"
                       style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

                  {/* Dynamic Ambient Glow */}
                  <div className={`absolute -top-1/2 -right-1/4 w-[150%] h-[150%] bg-gradient-to-bl ${layer.color} to-transparent opacity-0 group-hover:opacity-10 blur-[120px] transition-all duration-1000 pointer-events-none`} />

                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-start md:items-center relative z-10`}>
                    
                    {/* Left/Right: Icon & Title */}
                    <div className="md:w-5/12 shrink-0">
                      <div className="layer-reveal flex items-center gap-6 mb-8">
                        <div className={`w-20 h-20 rounded-3xl bg-white/5 border ${layer.borderColor} flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-700`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-10 group-hover:opacity-30 transition-opacity`} />
                          <div className="relative z-10">{layer.icon}</div>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs uppercase tracking-[0.4em] font-black ${layer.color.replace('from-', 'text-')}`}>
                            {layer.id}
                          </span>
                          <span className="text-white/20 font-mono text-[10px] tracking-[0.25em] uppercase mt-1">Sovereign Validation Passed</span>
                        </div>
                      </div>
                      <h3 className="layer-reveal text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.05]">
                        {layer.title}
                      </h3>
                    </div>

                    {/* Division line */}
                    <div className="hidden md:block w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent shrink-0" />

                    {/* Right/Left: Description & Specs */}
                    <div className="md:w-7/12">
                      <p className="layer-reveal text-white/50 text-lg md:text-xl leading-relaxed font-light mb-10">
                        {layer.description}
                      </p>
                      
                      <div className="layer-reveal grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {layer.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-4 group/spec">
                            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover/spec:border-secondary transition-colors`}>
                              <CheckCircle2 className={`w-2.5 h-2.5 ${layer.color.replace('from-', 'text-')}`} />
                            </div>
                            <span className="text-white/70 text-sm md:text-base font-light tracking-wide group-hover/spec:text-white transition-colors">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[180px] pointer-events-none" />
    </section>
  );
}
