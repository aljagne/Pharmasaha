import { ShieldCheck, Server, Lock, Fingerprint, Activity, ChevronDown, CheckCircle2 } from "lucide-react";
import React from "react";
import ScrollReveal from "../system/ScrollReveal";

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
    description: "The modern supply chain is an information battlefield. We protect manufacturer IP, pricing matrices, and patient telemetry with military-grade digital fortifications. Our operational ERP synchronizes in real-time with global partners via AES-256 encrypted endpoints, ensuring absolute data sovereignty and patient anonymization at scale.",
    specs: [
      "AES-256 End-to-End Encryption",
      "ISO 27001 Information Security Standard",
      "Patient Telemetry Anonymization",
      "Immutable Audit Trail Logging"
    ]
  }
];

const TRUST_SIGNALS = {
  LAYER_01: { ref: "WHO-GDP/2024-AFR", date: "Valid until 2029" },
  LAYER_02: { ref: "MOH-REG/15-WEST", date: "Active Status" },
  LAYER_03: { ref: "ISO-27001/SEC-RSA", date: "Audited 2025" }
};

export default function ComplianceDeepDive() {
  return (
    <section className="bg-background py-32 relative overflow-hidden" id="deep-dive">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[80rem] mx-auto px-6 relative z-10">
        
        <ScrollReveal className="text-center mb-32 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8 ring-1 ring-white/10">
            <ChevronDown className="w-6 h-6 text-white/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Zero-Trust Framework.</span>
          </h2>
          
          <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </ScrollReveal>

        <div className="relative">
          {/* Central connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-secondary/30 to-[#BAB9FF]/30 -translate-x-1/2 z-0" />

          <div className="space-y-24 md:space-y-32 relative">
            {LAYERS.map((layer, idx) => {
              const signals = idx === 0 ? TRUST_SIGNALS.LAYER_01 : idx === 1 ? TRUST_SIGNALS.LAYER_02 : TRUST_SIGNALS.LAYER_03;
              
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative z-10 group">
                    
                    {/* Visual Connection Node */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#000508] border-2 border-white/20 items-center justify-center z-20 group-hover:border-primary transition-colors duration-500">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500 group-hover:scale-125" />
                    </div>

                    <div className={`glass-panel rounded-[3rem] border ${layer.borderColor} p-8 md:p-14 relative overflow-hidden group hover:border-white/30 transition-all duration-500 bg-white/[0.01] hover:bg-white/[0.03]`}>
                      
                      <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                        
                        <div className="md:w-5/12 shrink-0">
                          <div className="flex items-center gap-6 mb-8">
                            <div className={`w-20 h-20 rounded-3xl bg-white/5 border ${layer.borderColor} flex items-center justify-center relative overflow-hidden`}>
                              <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-10`} />
                              <div className="relative z-10">{layer.icon}</div>
                            </div>
                            <div className="flex flex-col">
                              <span className={`text-xs uppercase tracking-[0.4em] font-black ${layer.color.replace('from-', 'text-')}`}>
                                {layer.id}
                              </span>
                              <span className="text-white/20 font-mono text-[9px] tracking-[0.2em] uppercase mt-1">Verification Status: PASS</span>
                            </div>
                          </div>
                          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.05] mb-6">
                            {layer.title}
                          </h3>
                          
                          <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                             <div className="flex flex-col">
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Document Registry</span>
                                <span className="text-[11px] font-mono text-primary font-bold">{signals.ref}</span>
                             </div>
                             <div className="flex flex-col border-l border-white/10 pl-4">
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Validation Cycle</span>
                                <span className="text-[11px] font-mono text-secondary font-bold">{signals.date}</span>
                             </div>
                          </div>
                        </div>

                        <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent shrink-0" />

                        <div className="md:w-7/12">
                          <p className="text-white/50 text-lg leading-relaxed font-light mb-10">
                            {layer.description}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {layer.specs.map((spec, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-4 group/spec p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover/spec:border-primary/50 transition-colors`}>
                                  <CheckCircle2 className={`w-3 h-3 ${layer.color.replace('from-', 'text-')}`} />
                                </div>
                                <span className="text-white/70 text-sm font-light tracking-wide group-hover/spec:text-white transition-colors">{spec}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-12 flex items-center gap-4 group/doc cursor-pointer">
                             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/doc:border-primary transition-colors">
                                <Fingerprint className="w-4 h-4 text-white/20 group-hover/doc:text-primary transition-colors" />
                             </div>
                             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 group-hover/doc:text-white transition-colors">Request Compliance Dossier (v4.2)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[180px] pointer-events-none" />
    </section>
  );
}
