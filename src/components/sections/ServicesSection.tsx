import { 
  FileCheck, 
  Truck, 
  Shield, 
  Users, 
  BarChart3, 
  HeartPulse
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: FileCheck,
    title: "Market Access Strategy",
    description: "Navigate complex market entry requirements with our expert guidance on pricing, reimbursement, and stakeholder engagement.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Regulatory Affairs",
    description: "Comprehensive regulatory support from dossier preparation to product registration and ongoing compliance management.",
    color: "teal",
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    description: "End-to-end supply chain solutions including cold-chain management, warehousing, and last-mile delivery.",
    color: "orange",
  },
  {
    icon: HeartPulse,
    title: "Pharmacovigilance",
    description: "Robust safety monitoring and adverse event reporting systems to ensure patient safety and regulatory compliance.",
    color: "teal",
  },
  {
    icon: Users,
    title: "Commercial Partnerships",
    description: "Strategic partnership development connecting global manufacturers with local distributors and healthcare providers.",
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Data-driven insights on market trends, competitive landscape, and growth opportunities in West African markets.",
    color: "teal",
  },
];

// Elegant dark glass service card
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isOrange = service.color === "orange";
  const accentColor = isOrange ? "#745A37" : "#BAB9FF";

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card background with gradient border effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 50%, ${accentColor}10 100%)`,
        }}
      />
      
      {/* Main card */}
      <div className="relative bg-[#001E22] border-y border-[#00363D] rounded-3xl p-8 border border-[#C2EED0]/20 hover:border-[#D0D7DE] transition-all duration-500 h-full shadow-sm hover:shadow-lg">
        {/* Subtle inner glow */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at top, ${accentColor}08 0%, transparent 60%)`,
          }}
        />
        
        {/* Icon container with elegant styling */}
        <div className="relative mb-8">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}05 100%)`,
              border: `1px solid ${accentColor}20`,
            }}
          >
            {/* Icon glow effect */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{ background: accentColor, opacity: 0.15 }}
            />
            <service.icon 
              className="w-10 h-10 relative z-10 transition-all duration-500 group-hover:scale-110"
              style={{ color: accentColor }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 
            className="text-xl font-semibold text-white mb-3 transition-colors duration-300"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {service.title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ 
            background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)`,
          }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#001E22] border-y border-[#00363D] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 30%, rgba(247, 140, 30, 0.05) 0%, transparent 50%),
                             radial-gradient(ellipse at 80% 70%, rgba(0, 193, 168, 0.04) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#745A37] font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From regulatory navigation to last-mile delivery, we provide end-to-end
            support for pharmaceutical market access in West Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#745A37] text-white font-semibold rounded-xl hover:bg-[#5E482C] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
          >
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
}
