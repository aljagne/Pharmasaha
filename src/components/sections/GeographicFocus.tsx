import { useEffect, useRef, useState, useCallback } from "react";

// Extended market data with detailed information
const markets = [
  {
    country: "The Gambia",
    code: "GM",
    status: "active",
    stats: { partners: 30, products: 150, coverage: "85%" },
    focusAreas: [
      "Essential medicines distribution",
      "Quality assurance & regulatory support",
      "Supply chain optimization (cold chain, forecasting)",
      "Public health partnerships with hospitals & MoH"
    ],
    impact: "Improving access to affordable, high-quality medications nationwide."
  },
  {
    country: "Senegal",
    code: "SN",
    status: "active",
    stats: { partners: 15, products: 200, coverage: "70%" },
    focusAreas: [
      "Onboarding distributors & pharmacy networks",
      "Manufacturer-to-pharmacy supply streamlining",
      "Local regulatory compliance support"
    ],
    impact: "Strengthening cross-border pharmaceutical accessibility."
  },
];

// Source regions with image maps
const sourceRegions = [
  {
    name: "Morocco",
    image: "/maps/morocco.png",
    pharmaceuticals: "Generic medicines, APIs",
    manufacturers: 45,
    certifications: ["WHO-GMP", "EU-GMP"],
  },
  {
    name: "Europe",
    image: "/maps/europe.png",
    pharmaceuticals: "Specialty drugs, Biologics",
    manufacturers: 120,
    certifications: ["EMA", "FDA"],
  },
  {
    name: "India",
    image: "/maps/india.png",
    pharmaceuticals: "Generics, Vaccines, APIs",
    manufacturers: 200,
    certifications: ["WHO-PQ", "FDA"],
  },
  {
    name: "China",
    image: "/maps/china.png",
    pharmaceuticals: "APIs, Medical devices",
    manufacturers: 180,
    certifications: ["NMPA", "WHO-GMP"],
  },
];

// Source region glassmorphism tile with actual map images
function SourceRegionTile({
  region,
  index,
  isVisible,
  onHover,
  isHovered,
}: {
  region: typeof sourceRegions[0];
  index: number;
  isVisible: boolean;
  onHover: (index: number | null) => void;
  isHovered: boolean;
}) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        animation: isVisible ? `float 5s ease-in-out infinite ${index * 0.8}s` : "none",
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glassmorphism tile */}
      <div
        className={`relative w-32 h-32 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${
          isHovered ? "scale-105" : ""
        }`}
        style={{
          background: isHovered
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(16px)",
          boxShadow: isHovered
            ? "0px 20px 50px rgba(247, 140, 30, 0.25)"
            : "0px 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        {/* Map image with brand color overlay */}
        <div className="absolute inset-3 flex items-center justify-center">
          <div 
            className="relative w-full h-full"
            style={{
              filter: isHovered 
                ? "drop-shadow(0 0 8px rgba(247, 140, 30, 0.5))" 
                : "none",
            }}
          >
            <img 
              src={region.image} 
              alt={region.name}
              className="w-full h-full object-contain transition-all duration-500"
              style={{
                filter: `sepia(100%) saturate(300%) brightness(${isHovered ? '90%' : '70%'}) hue-rotate(${index % 2 === 0 ? '350deg' : '140deg'})`,
              }}
            />
          </div>
        </div>

        {/* Glow indicator dot */}
        <div
          className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            isHovered ? "bg-[#705B3C]" : "bg-[#705B3C]/50"
          }`}
          style={{
            boxShadow: isHovered ? "0 0 12px #705B3C" : "none",
          }}
        >
          <span
            className="absolute inset-0 rounded-full bg-[#705B3C] animate-ping"
            style={{ animationDuration: "2s" }}
          />
        </div>
      </div>

      {/* Region name label */}
      <div
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-70 -translate-y-1"
        }`}
      >
        {region.name}
      </div>

      {/* Hover tooltip */}
      {isHovered && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 z-50 w-56 p-4 rounded-2xl pointer-events-none"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            animation: "fadeInUp 0.3s ease-out",
          }}
        >
          <div className="text-xs font-semibold text-[#705B3C] mb-2">
            {region.pharmaceuticals}
          </div>
          <div className="flex justify-between text-xs text-white/80 mb-2">
            <span>{region.manufacturers} Manufacturers</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {region.certifications.map((cert) => (
              <span
                key={cert}
                className="px-2 py-0.5 text-[10px] font-medium bg-[#BBBAFF]/10 text-[#BBBAFF] rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Handshake Bridge Connector with actual image
function HandshakeBridge({ isVisible, beamActive }: { isVisible: boolean; beamActive: boolean }) {
  return (
    <div
      className={`relative transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{ transitionDelay: "400ms" }}
    >
      {/* Outer glow sphere */}
      <div
        className="relative w-52 h-52 rounded-full flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(247,140,30,0.08) 100%)",
          boxShadow: beamActive
            ? "0 0 80px rgba(247, 140, 30, 0.35), 0 0 120px rgba(0, 193, 168, 0.2), inset 0 0 60px rgba(255,255,255,0.3)"
            : "0 0 50px rgba(247, 140, 30, 0.2), inset 0 0 40px rgba(255,255,255,0.2)",
          transition: "box-shadow 0.6s ease",
        }}
      >
        {/* Handshake Image */}
        <div 
          className="relative w-36 h-36 flex items-center justify-center"
          style={{
            filter: beamActive 
              ? "drop-shadow(0 0 15px rgba(247, 140, 30, 0.4))" 
              : "drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))",
          }}
        >
          <img 
            src="/maps/handshake.png" 
            alt="Partnership"
            className="w-full h-full object-contain transition-all duration-500"
            style={{
              filter: `sepia(20%) saturate(150%) brightness(${beamActive ? '100%' : '90%'}) contrast(110%)`,
              opacity: beamActive ? 1 : 0.85,
            }}
          />
        </div>

        {/* Center branding */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center mt-40">
            <div
              className="text-[11px] font-bold bg-gradient-to-r from-[#705B3C] to-[#BBBAFF] bg-clip-text text-transparent tracking-wider"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              PHARMASAHA
            </div>
          </div>
        </div>
      </div>

      {/* Rotating rings */}
      <div
        className="absolute inset-[-12px] rounded-full border border-[#705B3C]/20"
        style={{ animation: "spin 25s linear infinite" }}
      />
      <div
        className="absolute inset-[-24px] rounded-full border border-[#BBBAFF]/15"
        style={{ animation: "spin 35s linear infinite reverse" }}
      />
      <div
        className="absolute inset-[-36px] rounded-full border border-dashed border-[#705B3C]/10"
        style={{ animation: "spin 45s linear infinite" }}
      />

      {/* Pulsing nodes around the connector */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <div
          key={angle}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px - 6px)`,
            top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px - 6px)`,
            background: i % 2 === 0 ? "#705B3C" : "#BBBAFF",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "#705B3C" : "#BBBAFF"}`,
            animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

// Premium Africa Map with actual image and country highlights
function AfricaMap({
  hoveredCountry,
  onHover,
}: {
  hoveredCountry: string | null;
  onHover: (country: string | null) => void;
}) {
  return (
    <div className="relative w-full max-w-[320px]">
      {/* Africa map image */}
      <div 
        className="relative"
        style={{
          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.08))",
        }}
      >
        <img 
          src="/maps/africa.png" 
          alt="Africa"
          className="w-full h-auto"
          style={{
            filter: "sepia(30%) saturate(80%) brightness(95%) hue-rotate(180deg)",
            opacity: 0.85,
          }}
        />
        
        {/* Senegal highlight overlay - positioned at West Africa */}
        <div
          className={`absolute cursor-pointer transition-all duration-500 ${
            hoveredCountry === "Senegal" ? "scale-110" : ""
          }`}
          style={{
            left: "18%",
            top: "28%",
            width: "10%",
            height: "6%",
          }}
          onMouseEnter={() => onHover("Senegal")}
          onMouseLeave={() => onHover(null)}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: "#BBBAFF",
              opacity: hoveredCountry === "Senegal" ? 0.9 : 0.7,
              boxShadow: hoveredCountry === "Senegal" 
                ? "0 0 25px #BBBAFF, 0 0 50px rgba(0, 193, 168, 0.5)" 
                : "0 0 15px #BBBAFF",
              transition: "all 0.5s ease",
            }}
          />
          {/* Pulse animation */}
          <div 
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: "#BBBAFF",
              opacity: 0.4,
              animationDuration: "2s",
            }}
          />
        </div>

        {/* The Gambia highlight overlay - positioned above Senegal */}
        <div
          className={`absolute cursor-pointer transition-all duration-500 ${
            hoveredCountry === "The Gambia" ? "scale-110" : ""
          }`}
          style={{
            left: "15%",
            top: "26%",
            width: "8%",
            height: "3%",
          }}
          onMouseEnter={() => onHover("The Gambia")}
          onMouseLeave={() => onHover(null)}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: "#705B3C",
              opacity: hoveredCountry === "The Gambia" ? 0.9 : 0.7,
              boxShadow: hoveredCountry === "The Gambia" 
                ? "0 0 25px #705B3C, 0 0 50px rgba(247, 140, 30, 0.5)" 
                : "0 0 15px #705B3C",
              transition: "all 0.5s ease",
            }}
          />
          {/* Pulse animation */}
          <div 
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: "#705B3C",
              opacity: 0.4,
              animationDuration: "2.5s",
            }}
          />
        </div>

        {/* Labels for active markets - GM label */}
        <div 
          className={`absolute text-xs font-bold transition-all duration-300 ${
            hoveredCountry === "The Gambia" ? "opacity-100" : "opacity-80"
          }`}
          style={{
            left: "24%",
            top: "24%",
            color: "#705B3C",
            textShadow: "0 1px 3px rgba(255,255,255,0.8)",
          }}
        >
          GM
        </div>
        
        {/* SN label */}
        <div 
          className={`absolute text-xs font-bold transition-all duration-300 ${
            hoveredCountry === "Senegal" ? "opacity-100" : "opacity-80"
          }`}
          style={{
            left: "28%",
            top: "30%",
            color: "#BBBAFF",
            textShadow: "0 1px 3px rgba(255,255,255,0.8)",
          }}
        >
          SN
        </div>
      </div>
    </div>
  );
}

// Premium noodle network with flowing beams
function NoodleNetwork({
  isVisible,
  hoveredSource,
  hoveredCountry,
}: {
  isVisible: boolean;
  hoveredSource: number | null;
  hoveredCountry: string | null;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Orange gradient for source beams */}
        <linearGradient id="orangeNoodle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#705B3C" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#705B3C" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#705B3C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#705B3C" stopOpacity="0.1" />
        </linearGradient>

        {/* Teal gradient for target beams */}
        <linearGradient id="tealNoodle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BBBAFF" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#BBBAFF" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#BBBAFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#BBBAFF" stopOpacity="0.1" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="noodleGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Bright glow for hovered */}
        <filter id="noodleBrightGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Source to center noodles */}
      {[
        { path: "M220,140 C380,120 480,220 600,300", sourceIndex: 0, delay: 0 },
        { path: "M220,220 C400,200 500,260 600,300", sourceIndex: 1, delay: 0.8 },
        { path: "M220,360 C400,380 500,340 600,300", sourceIndex: 2, delay: 1.6 },
        { path: "M220,440 C380,460 480,380 600,300", sourceIndex: 3, delay: 2.4 },
      ].map((noodle, i) => (
        <g key={`source-noodle-${i}`}>
          {/* Base noodle line */}
          <path
            d={noodle.path}
            stroke="url(#orangeNoodle)"
            strokeWidth={hoveredSource === noodle.sourceIndex ? 3 : 2}
            fill="none"
            filter={hoveredSource === noodle.sourceIndex ? "url(#noodleBrightGlow)" : "url(#noodleGlow)"}
            className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${noodle.delay + 0.5}s` }}
          />

          {/* Traveling beam dot */}
          <circle
            r={hoveredSource === noodle.sourceIndex ? 7 : 5}
            fill="#705B3C"
            filter="url(#noodleGlow)"
          >
            <animateMotion
              dur={hoveredSource === noodle.sourceIndex ? "2.5s" : "4s"}
              repeatCount="indefinite"
              begin={`${noodle.delay}s`}
            >
              <mpath href={`#sourcePath${i}`} />
            </animateMotion>
          </circle>
          <path id={`sourcePath${i}`} d={noodle.path} fill="none" />
        </g>
      ))}

      {/* Center to target noodles */}
      {[
        { path: "M600,300 C720,240 850,230 980,250", country: "Senegal", delay: 3 },
        { path: "M600,300 C720,360 850,350 980,300", country: "The Gambia", delay: 3.5 },
      ].map((noodle, i) => (
        <g key={`target-noodle-${i}`}>
          {/* Base noodle line */}
          <path
            d={noodle.path}
            stroke="url(#tealNoodle)"
            strokeWidth={hoveredCountry === noodle.country ? 3 : 2}
            fill="none"
            filter={hoveredCountry === noodle.country ? "url(#noodleBrightGlow)" : "url(#noodleGlow)"}
            className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${noodle.delay + 0.5}s` }}
          />

          {/* Traveling beam dot */}
          <circle
            r={hoveredCountry === noodle.country ? 7 : 5}
            fill="#BBBAFF"
            filter="url(#noodleGlow)"
          >
            <animateMotion
              dur={hoveredCountry === noodle.country ? "2.5s" : "4s"}
              repeatCount="indefinite"
              begin={`${noodle.delay}s`}
            >
              <mpath href={`#targetPath${i}`} />
            </animateMotion>
          </circle>
          <path id={`targetPath${i}`} d={noodle.path} fill="none" />
        </g>
      ))}
    </svg>
  );
}

// Premium glassmorphism tooltip for market info
function MarketInfoCard({
  market,
  isVisible,
}: {
  market: typeof markets[0] | null;
  isVisible: boolean;
}) {
  if (!market || !isVisible) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full mb-4 z-50 w-72 p-5 rounded-3xl pointer-events-none"
      style={{
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)",
        animation: "fadeInUp 0.35s ease-out",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-base font-semibold text-white">{market.country}</div>
          <div className="flex items-center space-x-1.5 mt-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: market.country === "The Gambia" ? "#705B3C" : "#BBBAFF",
                boxShadow: `0 0 8px ${market.country === "The Gambia" ? "#705B3C" : "#BBBAFF"}`,
              }}
            />
            <span className="text-xs font-medium text-[#BBBAFF]">Active Market</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-2xl bg-gray-50/80">
        <div className="text-center">
          <div className="text-xl font-bold text-[#705B3C]">{market.stats.partners}</div>
          <div className="text-[10px] text-white/80 font-medium">Partners</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-[#BBBAFF]">{market.stats.products}</div>
          <div className="text-[10px] text-white/80 font-medium">Products</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-[#705B3C]">{market.stats.coverage}</div>
          <div className="text-[10px] text-white/80 font-medium">Coverage</div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mb-3">
        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Focus Areas
        </div>
        <ul className="space-y-1.5">
          {market.focusAreas.slice(0, 3).map((area, i) => (
            <li key={i} className="flex items-start text-xs text-white/80">
              <span
                className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0"
                style={{ background: i % 2 === 0 ? "#705B3C" : "#BBBAFF" }}
              />
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div className="text-[11px] text-white/80 italic leading-relaxed">
        {market.impact}
      </div>
    </div>
  );
}

export default function GeographicFocus() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSource, setHoveredSource] = useState<number | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [beamActive, setBeamActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setBeamActive(true), 1000);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCountryHover = useCallback((country: string | null) => {
    setHoveredCountry(country);
  }, []);

  const handleSourceHover = useCallback((index: number | null) => {
    setHoveredSource(index);
  }, []);

  const hoveredMarket = markets.find((m) => m.country === hoveredCountry) || null;

  return (
    <section
      ref={sectionRef}
      id="market-reach"
      className="py-32 bg-[#001D21] border-y border-[#1A3F45] relative overflow-hidden"
    >
      {/* Subtle gradient mesh background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 25%, #705B3C 0%, transparent 45%),
            radial-gradient(ellipse at 85% 75%, #BBBAFF 0%, transparent 45%)
          `,
        }}
      />

      {/* Noodle Network */}
      <NoodleNetwork
        isVisible={isVisible}
        hoveredSource={hoveredSource}
        hoveredCountry={hoveredCountry}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#705B3C] font-medium text-sm uppercase tracking-widest">
            Geographic Focus
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-5 mb-7">
            Connecting Global to Local
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Strategic positioning in West Africa's most promising healthcare markets,
            with supply chains spanning three continents.
          </p>
        </div>

        {/* Main Flow Visualization */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 min-h-[550px]">
          {/* LEFT: Source Region Mini-Maps */}
          <div className="flex flex-col items-center lg:items-center lg:mr-8">
            <div
              className={`text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Source Regions
            </div>
            <div className="grid grid-cols-2 gap-6">
              {sourceRegions.map((region, index) => (
                <SourceRegionTile
                  key={region.name}
                  region={region}
                  index={index}
                  isVisible={isVisible}
                  onHover={handleSourceHover}
                  isHovered={hoveredSource === index}
                />
              ))}
            </div>
          </div>

          {/* CENTER: Handshake Bridge Connector */}
          <div className="flex-shrink-0 flex items-center justify-center py-8 lg:py-0 lg:mx-12">
            <HandshakeBridge isVisible={isVisible} beamActive={beamActive} />
          </div>

          {/* RIGHT: Africa Map */}
          <div className="flex flex-col items-center lg:items-center relative lg:ml-8">
            <div
              className={`text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Target Markets
            </div>
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: "800ms",
                animation: isVisible ? "breathe 7s ease-in-out infinite" : "none",
              }}
            >
              <AfricaMap hoveredCountry={hoveredCountry} onHover={handleCountryHover} />

              {/* Market info card */}
              <MarketInfoCard market={hoveredMarket} isVisible={!!hoveredCountry} />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-24 flex justify-center gap-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          {[
            { value: "4", label: "Source Continents", color: "#705B3C" },
            { value: "2", label: "Active Markets", color: "#BBBAFF" },
            { value: "55+", label: "Partner Network", color: "#705B3C" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-5xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -90%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -100%);
          }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
