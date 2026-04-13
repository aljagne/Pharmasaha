import { Link } from "react-router-dom";

const partners = [
  { name: "Global Manufacturer Partner", initials: "GM", gradient: "from-[#D4A855] to-[#8F7249]" },
  { name: "Biologics Innovation Lab", initials: "BI", gradient: "from-[#BAB9FF] to-[#8A88E0]" },
  { name: "Precision Oncology Group", initials: "PO", gradient: "from-[#C2EED0] to-[#7CB98A]" },
  { name: "Cold Chain Solutions Ltd", initials: "CC", gradient: "from-[#D4A855] to-[#B89358]" },
  { name: "Pan-African Health Systems", initials: "PA", gradient: "from-[#BAB9FF] to-[#9F9DE6]" },
  { name: "Regulatory Sciences Corp", initials: "RS", gradient: "from-[#C2EED0] to-[#A8D9B5]" },
  { name: "Vaccine Logistics Alliance", initials: "VL", gradient: "from-[#D4A855] to-[#C49A45]" },
  { name: "Clinical Supply Networks", initials: "CS", gradient: "from-[#BAB9FF] to-[#D4D3FF]" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#001E22] py-10 border-y border-[#00363D] overflow-hidden relative">
      {/* Noodle connection line */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trustNoodle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#745A37" stopOpacity="0" />
            <stop offset="50%" stopColor="#745A37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#BAB9FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 Q360,20 720,40 T1440,40"
          stroke="url(#trustNoodle)"
          strokeWidth="2"
          fill="none"
          className="animate-dash"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/80 text-sm mb-8 uppercase tracking-wider font-medium">
          Strategic Partnerships
        </p>
      </div>

      {/* Infinite Scroll Marquee with Edge Fades */}
      <div className="relative">
        {/* Left edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #001E22, transparent)' }} />
        {/* Right edge fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #001E22, transparent)' }} />

        <div className="flex animate-marquee space-x-8">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-6 py-3 bg-[#00282D] rounded-xl min-w-fit border border-[#00363D] hover:border-[#745A37]/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center shadow-inner`}>
                <span className="text-white font-bold text-sm drop-shadow-sm">{partner.initials}</span>
              </div>
              <span className="text-white font-medium whitespace-nowrap group-hover:text-[#BAB9FF] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
