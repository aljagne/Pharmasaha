import { ShieldCheck, Truck, Globe2, Activity, Network, Anchor } from "lucide-react";
import React, { useRef } from "react";
import ScrollReveal from "../system/ScrollReveal";

const NODES = [
  {
    id: "01",
    title: "Global Origins",
    subtitle: "Sourcing & Verification",
    icon: <Globe2 className="w-8 h-8 text-[#B9A37A]" />,
    description: "The integrity of our supply chain begins across oceans. We identify and finalize exclusive commercial agreements with EU-GMP and WHO-PQ certified manufacturers across Europe and Asia. Before a single unit of medicine leaves the facility, our compliance team conducts rigorous audits of manufacturing documentation, ensuring absolute adherence to international pharmacopeial standards.",
    metrics: [
      { label: "Manufacturing Base", value: "EU & ASIA" },
      { label: "Regulatory Bar", value: "WHO-PQ / SRA" },
      { label: "Origin Verification", value: "100% GMP Audited" }
    ],
    features: ["Dossier Pre-Clearance", "Supplier Due Diligence", "Batch Release Protocols"],
    glowColor: "from-[#B9A37A]"
  },
  {
    id: "02",
    title: "The Operational Hub",
    subtitle: "Casablanca & West African Nodes",
    icon: <Anchor className="w-8 h-8 text-secondary" />,
    description: "All global procurement flows securely into our regional bonded hubs. Operating strict GDP-certified (Good Distribution Practice) warehousing, we maintain unbroken environmental parameters, ranging from ambient conditions down to -20°C freeze-storage. We act as the absolute gatekeeper of product integrity, utilizing automated, harmonized regional customs documentation to guarantee rapid port clearance.",
    metrics: [
      { label: "Cold-Chain Range", value: "-20°C to +8°C" },
      { label: "Facility Grade", value: "GDP-Certified" },
      { label: "Clearance Velocity", value: "Customs Fast-Track" }
    ],
    features: ["Bonded Warehousing", "Environmental IoT Tracking", "Automated Clearances"],
    glowColor: "from-secondary"
  },
  {
    id: "03",
    title: "The ECOWAS 15",
    subtitle: "Last-Mile Sovereign Access",
    icon: <Truck className="w-8 h-8 text-primary" />,
    description: "The final, most complex maneuver is executing highly-secure, cross-border overland and air-freight logistics. We deliver directly into the national Central Medical Stores (CMS), multilateral NGO warehouses, and top-tier hospital networks of all 15 West African sovereign states. Our dedicated fleet operators and regional partners utilize real-time telemetry to ensure absolute chain-of-custody to the dispensing level.",
    metrics: [
      { label: "Regional Reach", value: "15 Sovereign Borders" },
      { label: "Integration Tier", value: "CMS & NGO Logistics" },
      { label: "Sub-Regional Dispatch", value: "< 48 Hours" }
    ],
    features: ["Cross-Border Logistics", "Last-Mile Distribution Matrix", "Chain-of-Custody Logs"],
    glowColor: "from-primary"
  }
];

export default function NetworkDeepDive() {
  return (
    <section className="bg-background py-32 relative border-t border-white/5" id="network-deep-dive">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="mb-32 text-center max-w-4xl mx-auto">
          <span className="text-secondary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 block flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-secondary" />
            Logistics Matrix
            <span className="w-12 h-px bg-secondary" />
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
            Deterministic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Supply Chain Operations.</span>
          </h2>
        </ScrollReveal>

        {/* Alternating Nodes */}
        <div className="space-y-40 lg:space-y-64 pb-32">
          {NODES.map((node, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollReveal key={node.id} delay={idx * 0.1}>
                <div 
                  className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                >
                {/* Visual / Abstract Representation */}
                <div className="node-visual w-full lg:w-1/2 relative">
                  <div className="aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 relative group">
                    {/* Giant blurred number background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000 mix-blend-overlay">
                      <span className="text-[20rem] font-black text-white leading-none tracking-tighter">{node.id}</span>
                    </div>
                    
                    {/* Interactive glowing pulse */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr ${node.glowColor} to-transparent opacity-10 group-hover:opacity-20 blur-[100px] transition-all duration-1000 rotate-45 pointer-events-none`} />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10" />

                    {/* High-Tech Telemetry Overlay (Simulated Data) */}
                    <div className="absolute bottom-12 left-12 right-12 z-20">
                      <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4 relative overflow-hidden">
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${node.glowColor} to-transparent opacity-50`} />
                        <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-white/50">
                          <span>Node Phase Status</span>
                          <span className="text-primary flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Live Telemetry
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {node.metrics.slice(0, 2).map((m, i) => (
                            <div key={i}>
                              <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">{m.label}</div>
                              <div className="text-white font-bold tracking-tight bg-white/5 border border-white/5 py-1 px-2 rounded-md inline-block">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Content Right/Left */}
                <div className="node-content w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-6 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative">
                      {node.icon}
                    </div>
                    <div>
                      <div className="text-white/30 text-xs font-mono font-bold tracking-[0.3em] uppercase mb-1">NODE // {node.id}</div>
                      <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{node.title}</h3>
                    </div>
                  </div>
                  
                  <div className="text-primary font-bold tracking-widest text-sm uppercase mb-8 border-l-2 border-primary pl-4 py-1">
                    {node.subtitle}
                  </div>

                  <p className="text-white/60 text-lg md:text-xl leading-[1.8] font-light mb-12">
                    {node.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {node.features.map((feature, fIdx) => (
                      <div key={fIdx} className="bg-white/[0.02] border border-white/5 p-4 flex items-center gap-4 hover:border-white/20 transition-colors">
                        <ShieldCheck className="w-4 h-4 text-white/30" />
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
