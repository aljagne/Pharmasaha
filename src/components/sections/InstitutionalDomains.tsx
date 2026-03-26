import { Shield, Globe, Award, TrendingUp, Landmark, ShieldCheck } from "lucide-react";

const DOMAINS = [
  {
    id: "01",
    title: "Sovereign Ministry of Health Tenders",
    icon: <Landmark className="w-8 h-8 text-[#B9A37A]" />,
    description: "Securing national sovereignty in healthcare requires precise execution at the highest levels of government. PharmaSaha specializes in positioning global portfolios for inclusion in the National Essential Medicines Lists (NEML) across 15 West African nations. We navigate complex sovereign procurement laws, acting as your localized vanguard to secure massive, high-volume government awards and ensure seamless integration with Central Medical Stores (CMS) and regional sub-depots.",
    metrics: [
      { label: "Sovereign Nations", value: "15+" },
      { label: "Procurement Volume", value: "High-Predictability" },
      { label: "CMS Integration", value: "End-to-End" }
    ],
    glowColor: "from-[#B9A37A]"
  },
  {
    id: "02",
    title: "Multilateral NGO Pipelines",
    icon: <Globe className="w-8 h-8 text-primary" />,
    description: "The African health apparatus is heavily supported by a USD 2.5B+ annual donor-funded architecture. We connect global manufacturers directly with procurement mechanisms managed by The Global Fund, PEPFAR, USAID, and UNICEF. By leveraging WHO Prequalification (WHO-PQ) pathways and SRA approvals, we ensure your therapeutic interventions meet the exact stringent technical specifications required to win these massive multilateral health interventions.",
    metrics: [
      { label: "Donor Capital", value: "USD 2.5B+" },
      { label: "Pathway", value: "WHO-PQ Approved" },
      { label: "Scale", value: "Population-Level" }
    ],
    glowColor: "from-primary"
  },
  {
    id: "03",
    title: "Strategic National Stockpiling",
    icon: <Shield className="w-8 h-8 text-[#BAB9FF]" />,
    description: "In an era of supply chain fragility and sudden epidemiological shifts, sovereign nations require resilient strategic reserves. PharmaSaha partners with governments to establish bulk localized stockpiling of essential medicines, anti-infectives, and outbreak response therapeutics. We provide the rapid-deployment logistics, bonded warehousing, and cold-chain integrity required to guarantee national security against unforeseen public health crises.",
    metrics: [
      { label: "Deployment", value: "Rapid-Response" },
      { label: "Resilience", value: "Bonded Cold-Chain" },
      { label: "Focus", value: "Epidemic Preparedness" }
    ],
    glowColor: "from-[#BAB9FF]"
  }
];

export default function InstitutionalDomains() {
  return (
    <section className="bg-[#000B0D] py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-12">
          <div className="max-w-3xl">
            <span className="text-[#B9A37A] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 block flex items-center gap-4">
              <span className="w-12 h-px bg-[#B9A37A]" />
              Operating Matrix
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
              The Three Domains of <br />
              <span className="text-white/40 italic font-serif">Sovereign Scale.</span>
            </h2>
          </div>
          <p className="hidden md:block text-white/50 text-right text-xs uppercase tracking-widest max-w-[200px] leading-relaxed">
            Direct integration into national healthcare budgets.
          </p>
        </div>

        {/* The Massive Domain Cards */}
        <div className="flex flex-col gap-12">
          {DOMAINS.map((domain, idx) => (
            <div 
              key={domain.id} 
              className="group relative bg-[#050F12] border border-white/5 rounded-[2.5rem] p-10 lg:p-16 overflow-hidden hover:border-white/10 transition-colors duration-700"
            >
              {/* Massive background number */}
              <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/[0.02] pointer-events-none leading-none select-none group-hover:text-white/[0.04] transition-colors duration-1000">
                {domain.id}
              </div>
              
              {/* Dynamic Glow */}
              <div className={`absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br ${domain.glowColor} to-transparent opacity-0 group-hover:opacity-5 blur-[120px] pointer-events-none transition-opacity duration-1000`} />

              <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
                
                {/* Left: Icon & Title */}
                <div className="lg:w-1/3 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                      {domain.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 leading-tight">
                      {domain.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Description & Metrics Grid */}
                <div className="lg:w-2/3">
                  <p className="text-white/60 text-lg md:text-xl leading-[1.8] font-light mb-12">
                    {domain.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                    {domain.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{metric.label}</div>
                        <div className="text-white font-bold text-lg tracking-tight">{metric.value}</div>
                      </div>
                    ))}
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
