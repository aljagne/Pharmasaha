import { Search, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Search,
    title: "Source",
    subtitle: "Global Discovery",
    description:
      "We identify and partner with world-class pharmaceutical manufacturers, ensuring access to innovative medicines and proven generics from Morocco, Europe, and Asia.",
    color: "teal",
  },
  {
    icon: Shield,
    title: "Regulate",
    subtitle: "Compliance Excellence",
    description:
      "Our regulatory experts navigate complex approval processes, ensuring every product meets local and international standards for safety and efficacy.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Activate",
    subtitle: "Market Delivery",
    description:
      "From cold-chain logistics to last-mile distribution, we ensure medicines reach pharmacies, hospitals, and communities when they need them most.",
    color: "teal",
  },
];

// Animated value card
function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
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
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isOrange = value.color === "orange";

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl p-8 border border-[#B8DFC2] hover:border-[${isOrange ? '#705B3C' : '#BBBAFF'}]/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number Badge */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#CCEED3] rounded-full flex items-center justify-center border-4 border-white shadow-md">
        <span className={`font-bold ${isOrange ? 'text-[#705B3C]' : 'text-[#BBBAFF]'}`}>{index + 1}</span>
      </div>

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isOrange
            ? "bg-[#705B3C]/10 group-hover:bg-[#705B3C]/20"
            : "bg-[#BBBAFF]/10 group-hover:bg-[#BBBAFF]/20"
        }`}
      >
        <value.icon
          className={`w-8 h-8 ${
            isOrange ? "text-[#705B3C]" : "text-[#BBBAFF]"
          }`}
        />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#001D21] mb-2">{value.title}</h3>
      <p
        className={`text-sm font-medium mb-4 ${
          isOrange ? "text-[#705B3C]" : "text-[#BBBAFF]"
        }`}
      >
        {value.subtitle}
      </p>
      <p className="text-gray-600 leading-relaxed">{value.description}</p>

      {/* Hover Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${
          isOrange ? "bg-[#705B3C]" : "bg-[#BBBAFF]"
        } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
      />
    </div>
  );
}

// Noodle connection SVG
function NoodleConnections() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="valueNoodle1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BBBAFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#BBBAFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#705B3C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="valueNoodle2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#705B3C" stopOpacity="0" />
          <stop offset="50%" stopColor="#705B3C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#BBBAFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Connecting noodles between cards */}
      <path
        d="M200,200 Q400,100 600,200"
        stroke="url(#valueNoodle1)"
        strokeWidth="2"
        fill="none"
        className="animate-dash"
      />
      <path
        d="M600,200 Q800,300 1000,200"
        stroke="url(#valueNoodle2)"
        strokeWidth="2"
        fill="none"
        className="animate-dash"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Beam dots */}
      <circle r="5" fill="#705B3C" filter="drop-shadow(0 0 8px #705B3C)">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#valuePath1" />
        </animateMotion>
      </circle>
      <path id="valuePath1" d="M200,200 Q400,100 600,200 Q800,300 1000,200" fill="none" />
    </svg>
  );
}

export default function ValueFramework() {
  return (
    <section id="solutions" className="py-24 bg-[#CCEED3] relative overflow-hidden">
      {/* Noodle connections */}
      <NoodleConnections />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#705B3C] font-medium text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001D21] mt-4 mb-6">
            The PharmaSaha Framework
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive approach to bridging global pharmaceutical innovation
            with West African healthcare needs.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

        {/* Connection Line */}
        <div className="hidden md:flex items-center justify-center mt-12">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 rounded-full bg-[#BBBAFF] animate-pulse" />
            <div className="w-32 h-0.5 bg-gradient-to-r from-[#BBBAFF] to-[#705B3C]" />
            <div className="w-4 h-4 rounded-full bg-[#705B3C] animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="w-32 h-0.5 bg-gradient-to-r from-[#705B3C] to-[#BBBAFF]" />
            <div className="w-4 h-4 rounded-full bg-[#BBBAFF] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
