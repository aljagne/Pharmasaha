import {
  Building2,
  ShieldCheck,
  Truck,
  Landmark,
  Megaphone,
  GraduationCap,
  ArrowRight,
  Activity,
  Globe2,
  Network,
  Scale,
  Zap,
  ShieldAlert
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const PILLARS = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial Representation",
    shortTitle: "Representation",
    metricValue: "USD 118B",
    metricLabel: "Addressable Continental Market",
    description: "Acting as the exclusive local partner for global pharmaceutical innovators entering West Africa. We operate at the intersection of regulatory compliance and commercial strategy, mapping highly fragmented stakeholder networks into a singular, accelerated go-to-market pipeline. PharmaSaha removes the friction of local incorporation, representing your interests with total transparency, executive leverage, and aggressive market positioning.",
    features: [
      { name: "Go-to-Market Strategy", icon: <Globe2 className="w-4 h-4" /> },
      { name: "Competitive Pricing Models", icon: <Scale className="w-4 h-4" /> },
      { name: "Stakeholder Mapping", icon: <Network className="w-4 h-4" /> }
    ]
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Regulatory Navigation",
    shortTitle: "Regulatory",
    metricValue: "12-18 Mo",
    metricLabel: "Accelerated AMA Registration Pathways",
    description: "Navigating the complex African regulatory framework is our foundational strength. With the advent of the African Medicines Agency (AMA) and ECOWAS Joint Assessment Procedures, we compress product registration timelines from years to months. Our regulatory affairs command center manages CTD dossier compilation, digital submission, and pharmacovigilance architecture directly with national authorities like NAFDAC and the FDA.",
    features: [
      { name: "CTD Dossier Assembly", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Post-Market Surveillance", icon: <Activity className="w-4 h-4" /> },
      { name: "GMP Inspection Readiness", icon: <ShieldAlert className="w-4 h-4" /> }
    ]
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Sales & Distribution",
    shortTitle: "Distribution",
    metricValue: "-20°C to +8°C",
    metricLabel: "Strict Unbroken Cold-Chain Integrity",
    description: "A flawless cold-chain and secure distribution matrix forms the absolute backbone of our operation. We connect your manufacturing outputs directly to qualified local hospital networks and regional wholesale distributors without intermediaries. Our proprietary logistics monitoring ensures completely unbroken environmental parameters across the most challenging topographies in West Africa.",
    features: [
      { name: "Distributor Due Diligence", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Supply Chain Architecture", icon: <Network className="w-4 h-4" /> },
      { name: "Cold-Chain IoT Logs", icon: <Activity className="w-4 h-4" /> }
    ]
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Institutional Supply",
    shortTitle: "Institutional",
    metricValue: "USD 2.5B+",
    metricLabel: "Donor & Sovereign Procurement Pool",
    description: "Unlocking immediate access to massive multinational donor-funded procurement cycles. We strategically posture your portfolios to secure high-volume Ministry of Health sovereign tenders, Global Fund interventions, and PEPFAR supply channels. Our institutional engagement desk meticulously tracks essential medicines lists protocols to guarantee your therapies reach population-scale deployment.",
    features: [
      { name: "Sovereign Tender Assembly", icon: <Landmark className="w-4 h-4" /> },
      { name: "Essential Medicines Formatting", icon: <Globe2 className="w-4 h-4" /> },
      { name: "Multilateral NGO Alliances", icon: <Network className="w-4 h-4" /> }
    ]
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Brand Activation",
    shortTitle: "Activation",
    metricValue: "CME & KOL",
    metricLabel: "Medical Education & Peer Advocacy",
    description: "We transform therapeutic innovations into established regional clinical standards. PharmaSaha continuously builds brand equity and healthcare professional (HCP) trust through rigorous, data-driven medical educational continuous learning (CME) programs. Our activation relies on deep peer-to-peer advocacy, aligning global brands with local clinical realities to aggressively drive rational drug adoption at the prescribing level.",
    features: [
      { name: "KOL Advisory Boards", icon: <GraduationCap className="w-4 h-4" /> },
      { name: "Scientific Symposia", icon: <Activity className="w-4 h-4" /> },
      { name: "Clinical Data Dissemination", icon: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Capacity Building",
    shortTitle: "Capacity",
    metricValue: "100%",
    metricLabel: "Commitment to Local Skill Transfer",
    description: "We recognize that sustainable supply chains demand highly resilient local healthcare systems. PharmaSaha commits significant capital and resources to localized skill transfer, training indigenous healthcare professionals on adverse event reporting matrices, rational drug use, and advanced patient counseling. This solidifies your brand’s reputation as a true architectural partner in African healthcare, not merely an opportunistic vendor.",
    features: [
      { name: "Pharmacy Training Networks", icon: <Building2 className="w-4 h-4" /> },
      { name: "Train-the-Trainer Modules", icon: <GraduationCap className="w-4 h-4" /> },
      { name: "Patient Adherence Ecosystems", icon: <Activity className="w-4 h-4" /> }
    ]
  }
];

export default function InfrastructureDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const indexMarkersRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    PILLARS.forEach((_, idx) => {
      const section = sectionsRef.current[idx];
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(idx);
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <section className="bg-background relative" id="infrastructure-deep-dive" ref={containerRef}>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="lg:hidden mb-16 text-center">
          <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">End-to-End Infrastructure</span>
          <h2 className="text-4xl font-bold text-white tracking-tighter">
            The 6 Pillars of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#BAB9FF]">Market Access.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative">
          
          {/* ── STICKY LEFT COLUMN (Index Tracker) ── */}
          <div className="hidden lg:block w-72 flex-shrink-0 relative">
            <div className="sticky top-40">
              <span className="text-secondary font-bold tracking-[0.2em] text-[10px] uppercase mb-12 block">End-to-End Infrastructure</span>
              <h2 className="text-5xl xl:text-6xl font-black text-white tracking-tighter mb-16 leading-[1.1]">
                System <br />
                <span className="text-white/30 italic font-serif">Architecture.</span>
              </h2>

              <nav className="space-y-6 border-l border-white/10 pl-6">
                {PILLARS.map((pillar, idx) => (
                  <div 
                    key={idx}
                    ref={el => indexMarkersRef.current[idx] = el}
                    className={`group flex flex-col gap-1 transition-all duration-300 relative cursor-pointer ${activeIdx === idx ? 'text-[#D4A855] translate-x-2.5' : 'text-white/30'}`}
                    onClick={() => {
                      sectionsRef.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {/* Active line indicator */}
                    <div className={`indicator-line absolute -left-[25px] top-3 w-4 h-[2px] bg-primary origin-left transition-all duration-300 ${activeIdx === idx ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
                    
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono tracking-widest uppercase">0{idx + 1}</span>
                      <span className="text-sm font-bold uppercase tracking-widest">{pillar.shortTitle}</span>
                    </div>
                  </div>
                ))}
              </nav>

              {/* Call to action connecting to Institutional/Network */}
              <div className="mt-20">
                <Link to="/gateway" className="flex items-center space-x-4 text-white hover:text-primary transition-colors group w-max">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <span className="font-bold tracking-widest text-[10px] uppercase">Access Blueprint</span>
                </Link>
              </div>

            </div>
          </div>

          {/* ── SCROLLING RIGHT COLUMN (Deep Content) ── */}
          <div className="flex-1 w-full space-y-32 lg:space-y-64 pb-32">
            {PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                ref={el => sectionsRef.current[idx] = el}
                className="relative scroll-m-32"
              >
                {/* Mobile Number Indicator */}
                <div className="lg:hidden text-primary font-mono text-sm tracking-[0.3em] font-bold mb-4">
                  0{idx + 1} // {pillar.shortTitle}
                </div>

                {/* Section Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-2xl relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 highlight-glow transition-opacity duration-700" />
                    {pillar.icon}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                    {pillar.title}
                  </h3>
                </div>

                {/* Main Copy */}
                <p className="text-white/60 text-lg md:text-xl leading-[1.8] font-light max-w-3xl mb-12">
                  {pillar.description}
                </p>

                {/* Premium Data Box & Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                  
                  {/* Hero Metric Card */}
                  <div className="glass-panel p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-primary/40 transition-colors duration-700">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Key Metric</span>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 tracking-tight">
                      {pillar.metricValue}
                    </div>
                    <div className="text-white/60 text-xs font-medium uppercase tracking-widest">
                      {pillar.metricLabel}
                    </div>
                  </div>

                  {/* Micro-Features Grid */}
                  <div className="grid grid-rows-3 gap-3">
                    {pillar.features.map((feature, fIdx) => (
                      <div key={fIdx} className="bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-white/[0.04] hover:border-white/10 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                          {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-3.5 h-3.5' })}
                        </div>
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{feature.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
