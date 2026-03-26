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

  useEffect(() => {
    if (!containerRef.current) return;
    
    ScrollTrigger.getAll().forEach(t => t.kill());

    const layers = gsap.utils.toArray(".compliance-layer");
    
    layers.forEach((layer, idx) => {
      const el = layer as HTMLElement;
      
      gsap.fromTo(el, 
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="bg-background py-32 relative" ref={containerRef} id="zero-trust-layers">
      <div className="max-w-[80rem] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            Penetrating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Zero-Trust Architecture.</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-8 relative">
          
          {/* Vertical central connection line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0" />

          {LAYERS.map((layer, idx) => (
            <div key={idx} className="compliance-layer relative z-10 opacity-0">
              
              <div className={`glass-panel rounded-[2.5rem] border ${layer.borderColor} p-8 md:p-12 relative overflow-hidden group hover:border-white/40 transition-colors duration-700`}>
                
                {/* Dynamic Ambient Glow */}
                <div className={`absolute -top-1/2 -right-1/4 w-[150%] h-[150%] bg-gradient-to-bl ${layer.color} to-transparent opacity-0 group-hover:opacity-10 blur-[100px] transition-all duration-1000 pointer-events-none`} />

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center relative z-10">
                  
                  {/* Left: Icon & Title */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-white/5 border ${layer.borderColor} flex items-center justify-center`}>
                        {layer.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${layer.color.replace('from-', 'text-')}`}>
                          {layer.id}
                        </span>
                        <span className="text-white/50 text-xs font-mono tracking-widest uppercase">Verified Secure</span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight">
                      {layer.title}
                    </h3>
                  </div>

                  {/* Division line */}
                  <div className="hidden md:block w-px h-32 bg-white/10 shrink-0" />

                  {/* Right: Description & Specs */}
                  <div className="md:w-2/3">
                    <p className="text-white/60 text-lg leading-relaxed font-light mb-8">
                      {layer.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {layer.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${layer.color.replace('from-', 'text-')}`} />
                          <span className="text-white/80 text-sm font-medium tracking-wide">{spec}</span>
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
    </section>
  );
}
