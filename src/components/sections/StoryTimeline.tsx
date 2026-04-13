import { useRef } from "react";
import { Crosshair, Shield, Activity, Globe } from "lucide-react";
import ScrollReveal from "../system/ScrollReveal";

const TIMELINE_PHASES = [
  {
    phase: "01",
    year: "THE VISION",
    title: "Recognizing the Gap",
    icon: <Crosshair className="w-6 h-6 text-[#B9A37A]" />,
    color: "from-[#B9A37A]",
    description: "Witnessing firsthand the stark disconnect between global pharmaceutical abundance and the severe shortages across West Africa, the founders of PharmaSaha realized that the issue was not supply, but routing. Global manufacturers hesitated to enter the market due to fragmented regulations and unreliable last-mile chains."
  },
  {
    phase: "02",
    year: "THE FOUNDATION",
    title: "Building the Network",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "from-primary",
    description: "We established critical partnerships with WHO-GMP certified manufacturers in India and Europe, securing a robust, high-quality supply chain. Simultaneously, we began constructing a sovereign-grade compliance matrix that could satisfy the rigorous demands of both global exporters and local Ministries of Health."
  },
  {
    phase: "03",
    year: "THE CATALYST",
    title: "Entering Senegal & The Gambia",
    icon: <Activity className="w-6 h-6 text-secondary" />,
    color: "from-secondary",
    description: "PharmaSaha successfully navigated complex regulatory environments to become a premier importer in our inaugural markets. By drastically cutting lead times and eliminating counterfeit infiltration, we instantly elevated the standard of available healthcare products."
  },
  {
    phase: "04",
    year: "THE FUTURE",
    title: "Pan-African Healthcare",
    icon: <Globe className="w-6 h-6 text-white" />,
    color: "from-white/50",
    description: "Our mission continues. We are expanding our digital infrastructure, advancing our cold-chain logistics, and rapidly bringing our sovereign fast-track models to the remaining members of the ECOWAS 15. The goal remains unchanged: absolute healthcare access across the continent."
  }
];

export default function StoryTimeline() {
  return (
    <section className="bg-background relative border-b border-white/5">
      <div className="max-w-[80rem] mx-auto px-6 relative flex flex-col md:flex-row gap-0 md:gap-20">

        {/* ─── LEFT: STICKY PROGRESS PANEL ─── */}
        <div className="w-full md:w-1/3 py-20 md:py-32 relative">
          <div className="sticky top-32">
            <span className="text-white/20 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Chronological Record
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
              The Matrix <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Evolution.</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-sm">
              Tracing the architectural steps that transformed a regional distribution vision into a sovereign-grade pan-African healthcare bridge.
            </p>
            
            {/* Visual Anchor Line */}
            <div className="hidden md:block absolute -right-10 top-0 bottom-[-100vh] w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
          </div>
        </div>

        {/* ─── RIGHT: SCROLLING NARRATIVE CARDS ─── */}
        <div className="w-full md:w-2/3 py-10 md:py-32 flex flex-col gap-32 relative z-10">
          {TIMELINE_PHASES.map((phase, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="min-h-[50vh] flex flex-col justify-center relative group">
                
                {/* Massive Phase Number Background */}
                <div className="absolute -left-10 md:-left-20 top-0 text-[10rem] md:text-[15rem] font-black text-white/[0.02] tracking-tighter leading-none pointer-events-none select-none -z-10 group-hover:text-white/[0.04] transition-colors duration-500">
                  {phase.phase}
                </div>

                {/* Glowing Icon Marker */}
                <div className="mb-8 w-14 h-14 rounded-2xl bg-[#000508] border border-white/10 flex items-center justify-center shadow-2xl relative">
                  <div className={`absolute inset-0 bg-gradient-to-b ${phase.color} to-transparent opacity-10 rounded-2xl`} />
                  {phase.icon}
                </div>

                <span className="text-white font-mono tracking-[0.3em] text-xs uppercase mb-4 block">
                  {phase.year}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
                  {phase.title}
                </h3>
                
                <p className="text-white/60 text-xl font-light leading-[1.8] max-w-2xl">
                  {phase.description}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
