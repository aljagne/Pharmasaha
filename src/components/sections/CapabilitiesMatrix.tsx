import {
  Building2,
  ShieldCheck,
  Truck,
  Landmark,
  Megaphone,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CapabilitiesMatrix() {
  const pillars = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Commercial Representation",
      description: "Acting as the exclusive local partner for global pharmaceutical innovators entering West Africa. We navigate market entry, product positioning, and stakeholder engagement.",
      features: ["Market Entry Strategy", "Competitive Analysis", "Local Partnership Identification"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#BAB9FF]" />,
      title: "Regulatory Navigation",
      description: "Expert management of ECOWAS JAP and national authority registrations (NAFDAC, FDA Ghana, ARP). We leverage WHO PQ pathways for accelerated approvals.",
      features: ["CTD Dossier Compilation", "Pharmacovigilance Setup", "GMP Documentation"]
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      title: "Sales & Distribution",
      description: "Connecting global manufacturers with qualified local distributors. We establish compliant cold chain parameters and coordinate hospital procurement networks.",
      features: ["Network Due Diligence", "Supply Chain Coordination", "Medical Representative Networks"]
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary" />,
      title: "Institutional Supply",
      description: "Facilitating access to USD 2.5B in donor-funded procurement. We secure Ministry of Health tenders and manage Global Fund / PEPFAR supply channels.",
      features: ["Government Tender Participation", "Essential Medicines List Strategy", "NGO Partnerships"]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-[#BAB9FF]" />,
      title: "Brand Activation",
      description: "Building brand awareness and healthcare professional engagement. We conduct CME-accredited medical education to drive rational drug adoption.",
      features: ["KOL Engagement", "Medical Conferences", "Patient Outreach"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      title: "Capacity Building",
      description: "Strengthening African healthcare resilience. We execute localized training on pharmacovigilance, rational drug use, and patient counseling protocols.",
      features: ["Healthcare Professional Workshops", "Pharmacy Continuing Ed", "Train-the-Trainer"]
    }
  ];

  return (
    <section className="py-32 bg-background relative" id="capabilities">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">End-to-End Infrastructure</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            The 6 Pillars of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#BAB9FF]">Market Access.</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed">
            We are not manufacturers. We are the definitive compliance, commercial, and operational bridge enabling global pharmaceutical innovation to scale across the USD 118B African market.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-white/10">
                {pillar.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-white/40 text-xs font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action connecting to Institutional/Network */}
        <div className="mt-20 flex justify-center">
            <Link to="/institutional" className="flex items-center space-x-3 text-white hover:text-primary transition-colors group">
              <span className="font-bold tracking-widest text-sm uppercase">Explore Institutional Integration</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
        </div>

      </div>
    </section>
  );
}
