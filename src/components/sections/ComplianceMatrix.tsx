import { ShieldCheck, Activity, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const compliances = [
  {
    title: "WHO GDP Certified",
    description: "Strict adherence to World Health Organization Good Distribution Practices across all hubs.",
    icon: <Globe className="w-6 h-6 text-white" />,
    color: "from-[#001E22] to-primary/40",
    borderGlow: "group-hover:border-primary/50"
  },
  {
    title: "MoH Validated",
    description: "Pre-cleared operational status with 14 Ministries of Health across West Africa.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: "from-[#001E22] to-secondary/40",
    borderGlow: "group-hover:border-secondary/50"
  },
  {
    title: "ISO 9001:2015",
    description: "Quality management systems architected for flawless, repeatable logistics execution.",
    icon: <Activity className="w-6 h-6 text-white" />,
    color: "from-[#001E22] to-primary/30",
    borderGlow: "group-hover:border-primary/40"
  },
  {
    title: "Military-Grade Data",
    description: "AES-256 encrypted supply chain telemetry and patient anonymization protocols.",
    icon: <Lock className="w-6 h-6 text-white" />,
    color: "from-[#001E22] to-secondary/30",
    borderGlow: "group-hover:border-secondary/40"
  }
];

export default function ComplianceMatrix() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="compliance">
      {/* Dynamic Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 items-center">

          <div className="lg:col-span-1">
            <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Regulatory Matrix</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Compliant by <br /> <span className="text-white/40">Design.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We do not bolt compliance onto our processes; it is the foundational code of our entire operational infrastructure.
            </p>
            <Link to="/compliance" className="text-sm font-bold tracking-widest text-primary uppercase hover:text-white transition-colors duration-300 border-b border-primary/30 pb-1">
              View Full Documentation
            </Link>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {compliances.map((item, index) => (
              <div
                key={index}
                className={`glass-panel p-8 rounded-3xl border border-white/5 transition-all duration-700 group relative overflow-hidden ${item.borderGlow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
