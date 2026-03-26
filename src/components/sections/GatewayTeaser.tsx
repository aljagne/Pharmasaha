import { Lock, FileText, Globe2, ShieldCheck, Handshake, ChevronDown } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    id: "DATA_NODE_01",
    title: "Market Sizing & Economic Projections",
    icon: <Globe2 className="w-8 h-8 text-[#B9A37A]" />,
    blurLevel: "group-hover:blur-none blur-sm",
    color: "from-[#B9A37A]",
    description: "Detailed actuarial breakdown of the USD 118B addressable market across 15 ECOWAS states. Includes sovereign spending trajectories, GDP-healthcare ratios, and foreign direct investment (FDI) impact models."
  },
  {
    id: "DATA_NODE_02",
    title: "Sovereign Regulatory Alignment",
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    blurLevel: "group-hover:blur-none blur-[2px]",
    color: "from-secondary",
    description: "The complete architectural framework for aligning global drug dossiers with the African Medicines Agency (AMA) and the ECOWAS Joint Assessment Procedure (JAP). Reduce registration timelines by 60%."
  },
  {
    id: "DATA_NODE_03",
    title: "B2G Route-to-Market Schematics",
    icon: <Handshake className="w-8 h-8 text-primary" />,
    blurLevel: "group-hover:blur-none blur-md",
    color: "from-primary",
    description: "The mathematical models for winning sovereign Ministry of Health tenders. Exact lifecycle mapping from pre-qualification and WHO-PQ bidding to Central Medical Store (CMS) integration."
  }
];

export default function GatewayTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    ScrollTrigger.getAll().forEach(t => t.kill());

    const cards = gsap.utils.toArray(".teaser-card");
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".teaser-grid",
          start: "top 80%",
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="bg-background py-32 relative border-t border-white/5" ref={containerRef}>
      <div className="max-w-[80rem] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 max-w-4xl mx-auto opacity-0 teaser-card">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-red-500/20 mb-8 mt-2">
            <Lock className="w-5 h-5 text-red-500" />
            <span className="ml-3 text-red-500 font-mono text-[10px] tracking-widest uppercase font-bold mr-2">Clearance Required</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
            Classified Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Architecture Preview.</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg leading-relaxed font-light">
            The Strategic Master Blueprint contains highly sensitive geopolitical and commercial modeling. 
            Below is a heavily redacted preview of the core intelligence architectures you will unlock upon verification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 teaser-grid">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="teaser-card relative group cursor-pointer opacity-0">
              
              {/* Card Container */}
              <div className="glass-panel h-full p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden relative">
                
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl ${pillar.color} to-transparent opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700 pointer-events-none`} />

                {/* Secure Tagline */}
                <div className="flex justify-between items-center mb-12">
                  <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${pillar.color.replace('from-', 'text-')}`}>
                    {pillar.id}
                  </span>
                  <FileText className="w-4 h-4 text-white/20" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white tracking-tight mb-6 leading-tight">
                  {pillar.title}
                </h3>
                
                <div className="relative">
                  <p className={`text-white/60 text-sm leading-relaxed transition-all duration-700 ${pillar.blurLevel} select-none`}>
                    {pillar.description}
                  </p>
                  
                  {/* Decrypting Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                     <span className="bg-[#000508] border border-white/10 text-white/40 px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-mono font-bold blur-none">
                       Encrypted
                     </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Scroll down indicator to the form */}
        <div className="mt-24 text-center">
          <ChevronDown className="w-8 h-8 text-white/20 mx-auto animate-bounce" />
          <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest mt-4 block">Proceed to Clearance Portal</span>
        </div>

      </div>
    </section>
  );
}
