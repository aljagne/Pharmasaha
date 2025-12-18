const partners = [
  { name: "Global Pharma Co", logo: "GP" },
  { name: "MedTech Labs", logo: "MT" },
  { name: "BioScience Inc", logo: "BS" },
  { name: "HealthFirst", logo: "HF" },
  { name: "PharmaWorld", logo: "PW" },
  { name: "MediCare Plus", logo: "MC" },
  { name: "VitaLabs", logo: "VL" },
  { name: "CureGen", logo: "CG" },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-10 border-y border-[#B8DFC2] overflow-hidden relative">
      {/* Noodle connection line */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trustNoodle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#705B3C" stopOpacity="0" />
            <stop offset="50%" stopColor="#705B3C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#BBBAFF" stopOpacity="0" />
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
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider font-medium">
          Trusted by Leading Pharmaceutical Companies
        </p>
      </div>
      
      {/* Infinite Scroll Marquee */}
      <div className="relative">
        <div className="flex animate-marquee space-x-8">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-6 py-3 bg-[#CCEED3] rounded-xl min-w-fit border border-[#B8DFC2] hover:border-[#705B3C]/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#705B3C]/10 to-[#BBBAFF]/10 rounded-lg flex items-center justify-center group-hover:from-[#705B3C]/20 group-hover:to-[#BBBAFF]/20 transition-all">
                <span className="text-[#705B3C] font-bold text-sm group-hover:text-[#5A4830] transition-colors">{partner.logo}</span>
              </div>
              <span className="text-[#001D21] font-medium whitespace-nowrap group-hover:text-[#705B3C] transition-colors">
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
