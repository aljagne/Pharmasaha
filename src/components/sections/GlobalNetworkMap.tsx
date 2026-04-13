import { MapPin, ArrowRight, ShieldCheck, Zap, Globe, Activity, FlaskConical, Microscope, Pill } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
   INLINE LOGO SVG COMPONENT (from Logo.svg, recolored gold)
   ───────────────────────────────────────────────────────── */
function LogoSymbol({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 156 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M72.5315 135.752L72.4161 149.972L71.5446 149.998C71.0653 150.011 69.3006 149.95 67.623 149.859C40.1761 148.374 15.6966 131.506 5.24774 106.879C1.16056 97.2439 -0.630304 86.2501 0.19759 75.899C1.30435 62.0765 6.33272 49.5457 15.2043 38.4933C17.6095 35.4952 22.7555 30.4217 25.9516 27.8969C38.4594 18.0146 52.5924 12.8629 69.3115 12.0901L72.525 11.9425V23.6591L68.9847 23.9131C60.1044 24.5514 53.4922 26.2817 46.0542 29.9137C39.7622 32.9878 34.9103 36.4722 30.1368 41.346C24.6313 46.9666 20.9429 52.5286 18.2065 59.3454C14.348 68.9497 13.2478 78.8081 14.9254 88.7511C15.3633 91.3432 16.1302 94.5041 16.3241 94.5041C16.4069 94.5041 16.5441 93.5033 16.6269 92.2789C17.5158 79.0751 22.8644 67.3801 32.3395 57.9213C42.1718 48.1063 55.49 42.2643 69.5315 41.6065L72.5315 41.4654L72.4161 56.1867L70.2374 56.3365C51.6664 57.6238 36.3831 70.7126 32.6118 88.5622C32.1717 90.6442 32.1129 91.5364 32.1129 96.1324C32.1129 100.338 32.1891 101.699 32.5072 103.188C33.1761 106.314 34.5116 110.569 34.8232 110.569C34.9059 110.569 35.0889 109.445 35.2327 108.07C35.5595 104.957 35.9604 103.006 36.8188 100.366C40.6119 88.6881 50.5248 79.5614 62.8583 76.3875C65.3724 75.7405 69.159 75.1934 71.1677 75.1869L72.5315 75.1826L72.4749 80.7728L72.4161 86.363L70.5293 86.5063C61.7929 87.1706 53.9671 92.09 49.7797 99.5538C46.625 105.172 45.93 112.797 48.0215 118.81C49.6991 123.632 52.5684 127.637 56.4159 130.525C61.0565 134.011 65.6578 135.752 70.2221 135.752H72.5315ZM91.4642 137.596C89.7343 137.771 87.2659 137.917 85.9783 137.919L83.6362 137.923V126.2L85.2157 126.198C88.7125 126.194 94.2049 125.427 98.4599 124.353C108.275 121.873 117.65 116.672 125 109.627C128.451 106.318 132.902 100.453 135.332 96.013C138.384 90.4358 140.602 83.4974 141.469 76.8195C141.907 73.4523 141.909 66.9829 141.471 63.4529C141.14 60.7652 140.181 56.0412 139.846 55.4377C139.663 55.1099 139.643 55.2531 139.186 60.0944C138.419 68.2398 135.486 76.3158 130.682 83.5147C121.946 96.6056 108.122 105.381 92.3509 107.843C89.865 108.229 84.122 108.672 83.8388 108.498C83.7212 108.424 83.6362 105.346 83.6362 101.113C83.6362 95.049 83.6863 93.8528 83.939 93.8528C85.0044 93.8528 89.1156 93.3383 91.0437 92.9649C96.3945 91.925 102.717 89.2135 107.166 86.0482C109.632 84.2941 113.453 80.7359 115.303 78.4716C123.146 68.8759 126.003 56.1237 122.972 44.2464C122.308 41.6434 121.342 38.9275 121.081 38.9275C120.976 38.9275 120.891 39.6504 120.891 40.534C120.891 46.0873 118.209 53.766 114.403 59.1131C111.482 63.2206 106.643 67.5321 102.188 70.0005C97.0394 72.851 90.3574 74.7484 85.4663 74.7484H83.6362V63.7112L85.1068 63.5701C89.1003 63.1902 91.7256 62.4759 95.0895 60.8564C99.1244 58.9112 102.693 55.7742 105.286 51.8903C111.639 42.3728 110.297 29.7161 102.061 21.4556C99.9435 19.3324 98.1287 18.0212 95.5099 16.7229C91.8498 14.9058 89.011 14.1916 85.4336 14.1829L83.6362 14.1785V0L87.3944 0.132429C92.523 0.312619 97.0394 0.916145 101.501 2.01899C102.519 2.27082 103.745 2.57259 104.225 2.68982C107.443 3.47788 112.92 5.54464 116.843 7.45074C136.85 17.168 150.911 35.4127 154.994 56.9465C155.942 61.9419 156.282 70.3565 155.746 75.5733C153.789 94.6192 143.9 111.791 128.122 123.536C117.425 131.502 105.148 136.208 91.4642 137.596ZM139.192 54.4499C139.192 54.6301 139.29 54.7755 139.41 54.7755C139.53 54.7755 139.628 54.6301 139.628 54.4499C139.628 54.2697 139.53 54.1242 139.41 54.1242C139.29 54.1242 139.192 54.2697 139.192 54.4499Z"
        fill="url(#logoGold)"
      />
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="156" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4A855" />
          <stop offset="50%" stopColor="#C49A45" />
          <stop offset="100%" stopColor="#8F7249" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   NETWORK CONFIGURATION
   ───────────────────────────────────────────────────────── */
const LABS = [
  { id: "eu", name: "EU Quality Hub", region: "Europe", icon: Microscope, x: 8, y: 28, tooltip: { status: "Active", detail: "WHO-GMP Certified", volume: "34 SKUs in pipeline" } },
  { id: "na", name: "NA Innovation Lab", region: "North America", icon: FlaskConical, x: 5, y: 50, tooltip: { status: "Active", detail: "FDA-Approved Biologics", volume: "12 clinical compounds" } },
  { id: "apac", name: "APAC Scale Center", region: "Asia Pacific", icon: Pill, x: 10, y: 72, tooltip: { status: "Active", detail: "Cost-Optimized Generics", volume: "56 formulations" } },
];

const MARKETS = [
  { id: "sn", name: "Dakar Distribution", region: "Senegal", icon: MapPin, x: 92, y: 28, tooltip: { status: "Primary Hub", detail: "Cold Chain -20°C to +8°C", volume: "11 countries served" } },
  { id: "ci", name: "Abidjan Hub", region: "Côte d'Ivoire", icon: MapPin, x: 95, y: 50, tooltip: { status: "Active", detail: "Francophone Gateway", volume: "8 ministry partnerships" } },
  { id: "ng", name: "Lagos Gateway", region: "Nigeria", icon: MapPin, x: 90, y: 72, tooltip: { status: "Active", detail: "NAFDAC Fast-Track", volume: "200M+ patient reach" } },
];

/* ─────────────────────────────────────────────────────────
   SVG NETWORK LINES + ANIMATED FLOW DOTS
   ───────────────────────────────────────────────────────── */
function NetworkSVG() {
  return (
    <svg
      className="network-svg absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Golden line gradient */}
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A855" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#C49A45" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4A855" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="goldLineReverse" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4A855" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#C49A45" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4A855" stopOpacity="0.6" />
        </linearGradient>
        {/* Glow filter for dots */}
        <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Radial glow for center */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A855" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#D4A855" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#D4A855" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Center glow halo */}
      <circle cx="50" cy="50" r="22" fill="url(#centerGlow)" />

      {/* ── LEFT CONNECTION LINES (Labs → Center) ── */}
      {/* EU → Center */}
      <path d="M 12 28 C 28 28, 35 40, 42 50" stroke="url(#goldLine)" strokeWidth="0.15" fill="none" opacity="0.5" />
      <path d="M 12 28 C 25 32, 33 42, 42 50" stroke="url(#goldLine)" strokeWidth="0.08" fill="none" opacity="0.25" />
      {/* NA → Center */}
      <path d="M 10 50 C 22 50, 32 50, 42 50" stroke="url(#goldLine)" strokeWidth="0.15" fill="none" opacity="0.5" />
      <path d="M 10 50 C 20 48, 30 49, 42 50" stroke="url(#goldLine)" strokeWidth="0.08" fill="none" opacity="0.25" />
      {/* APAC → Center */}
      <path d="M 14 72 C 28 72, 35 60, 42 50" stroke="url(#goldLine)" strokeWidth="0.15" fill="none" opacity="0.5" />
      <path d="M 14 72 C 25 68, 33 58, 42 50" stroke="url(#goldLine)" strokeWidth="0.08" fill="none" opacity="0.25" />

      {/* ── RIGHT CONNECTION LINES (Center → Markets) ── */}
      {/* Center → Dakar */}
      <path d="M 58 50 C 65 40, 72 28, 88 28" stroke="url(#goldLineReverse)" strokeWidth="0.15" fill="none" opacity="0.5" />
      <path d="M 58 50 C 67 42, 75 32, 88 28" stroke="url(#goldLineReverse)" strokeWidth="0.08" fill="none" opacity="0.25" />
      {/* Center → Abidjan */}
      <path d="M 58 50 C 68 50, 78 50, 90 50" stroke="url(#goldLineReverse)" strokeWidth="0.15" fill="none" opacity="0.5" />
      <path d="M 58 50 C 66 51, 76 50, 90 50" stroke="url(#goldLineReverse)" strokeWidth="0.08" fill="none" opacity="0.25" />
      {/* Center → Lagos */}
      <path d="M 58 50 C 65 60, 72 72, 86 72" stroke="url(#goldLineReverse)" strokeWidth="0.15" fill="none" opacity="0.5" />
      <path d="M 58 50 C 67 58, 75 68, 86 72" stroke="url(#goldLineReverse)" strokeWidth="0.08" fill="none" opacity="0.25" />

      {/* ── RADIATING ACCENT LINES from center ── */}
      {[30, 60, 120, 150, 210, 240, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 50 + Math.cos(rad) * 30;
        const y2 = 50 + Math.sin(rad) * 30;
        return (
          <line
            key={`ray-${i}`}
            x1="50" y1="50"
            x2={x2} y2={y2}
            stroke="#D4A855"
            strokeWidth="0.06"
            opacity={0.12 + (i % 3) * 0.04}
          />
        );
      })}

      {/* ── ANIMATED FLOW DOTS ── */}
      {/* Left → Center */}
      <circle r="0.45" fill="#D4A855" filter="url(#dotGlow)" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 12 28 C 28 28, 35 40, 42 50" />
      </circle>
      <circle r="0.35" fill="#E8C070" filter="url(#dotGlow)" opacity="0.7">
        <animateMotion dur="5s" repeatCount="indefinite" begin="1.5s" path="M 10 50 C 22 50, 32 50, 42 50" />
      </circle>
      <circle r="0.4" fill="#D4A855" filter="url(#dotGlow)" opacity="0.8">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.8s" path="M 14 72 C 28 72, 35 60, 42 50" />
      </circle>

      {/* Center → Right */}
      <circle r="0.45" fill="#BAB9FF" filter="url(#dotGlow)" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M 58 50 C 65 40, 72 28, 88 28" />
      </circle>
      <circle r="0.35" fill="#BAB9FF" filter="url(#dotGlow)" opacity="0.7">
        <animateMotion dur="5s" repeatCount="indefinite" begin="0.5s" path="M 58 50 C 68 50, 78 50, 90 50" />
      </circle>
      <circle r="0.4" fill="#BAB9FF" filter="url(#dotGlow)" opacity="0.8">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="3s" path="M 58 50 C 65 60, 72 72, 86 72" />
      </circle>

      {/* Extra subtle dots for density */}
      <circle r="0.2" fill="#D4A855" opacity="0.4">
        <animateMotion dur="6s" repeatCount="indefinite" begin="3s" path="M 12 28 C 25 32, 33 42, 42 50" />
      </circle>
      <circle r="0.2" fill="#BAB9FF" opacity="0.4">
        <animateMotion dur="6s" repeatCount="indefinite" begin="1s" path="M 58 50 C 67 42, 75 32, 88 28" />
      </circle>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   NODE COMPONENT
   ───────────────────────────────────────────────────────── */
function NetworkNode({
  node,
  side,
  index,
}: {
  node: (typeof LABS)[0] | (typeof MARKETS)[0];
  side: "left" | "right";
  index: number;
}) {
  const Icon = node.icon;
  const isLeft = side === "left";
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`network-node absolute flex items-center gap-3 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
        animationDelay: `${index * 0.3}s`,
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Node Circle */}
      <div className="network-node-circle relative flex-shrink-0">
        {/* Outer glow ring */}
        <div
          className="absolute inset-[-3px] rounded-full opacity-40"
          style={{
            background: isLeft
              ? "linear-gradient(135deg, #D4A855 0%, #8F7249 100%)"
              : "linear-gradient(135deg, #BAB9FF 0%, #8A88E0 100%)",
          }}
        />
        {/* Main circle */}
        <div
          className="relative w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-xl border cursor-pointer"
          style={{
            background: isLeft
              ? "linear-gradient(135deg, rgba(212,168,85,0.15) 0%, rgba(143,114,73,0.08) 100%)"
              : "linear-gradient(135deg, rgba(186,185,255,0.15) 0%, rgba(138,136,224,0.08) 100%)",
            borderColor: isLeft ? "rgba(212,168,85,0.35)" : "rgba(186,185,255,0.35)",
            boxShadow: isLeft
              ? "0 0 20px rgba(212,168,85,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
              : "0 0 20px rgba(186,185,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: isLeft ? "#D4A855" : "#BAB9FF" }} />
        </div>
        {/* Pulse ring */}
        <div
          className="absolute inset-[-6px] rounded-full animate-ping-slow"
          style={{
            border: `1px solid ${isLeft ? "rgba(212,168,85,0.15)" : "rgba(186,185,255,0.15)"}`,
          }}
        />
      </div>

      {/* Label */}
      <div className={`flex flex-col ${isLeft ? "items-start" : "items-end"}`}>
        <span
          className="text-[10px] md:text-xs font-bold tracking-wide whitespace-nowrap"
          style={{ color: isLeft ? "#D4A855" : "#BAB9FF" }}
        >
          {node.name}
        </span>
        <span className="text-[8px] md:text-[9px] text-white/30 tracking-[0.2em] uppercase font-mono">
          {node.region}
        </span>
      </div>

      {/* Hover Tooltip */}
      {showTooltip && node.tooltip && (
        <div
          className={`absolute z-50 w-48 p-3 bg-[#000B0D]/95 backdrop-blur-xl border rounded-xl shadow-2xl pointer-events-none transition-all duration-300 ${isLeft ? 'left-full ml-3' : 'right-full mr-3'}`}
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            borderColor: isLeft ? 'rgba(212,168,85,0.3)' : 'rgba(186,185,255,0.3)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isLeft ? 'bg-[#D4A855]' : 'bg-[#BAB9FF]'} animate-pulse`} />
            <span className="text-[9px] font-mono font-bold tracking-widest uppercase" style={{ color: isLeft ? '#D4A855' : '#BAB9FF' }}>
              {node.tooltip.status}
            </span>
          </div>
          <p className="text-white/80 text-[11px] font-bold mb-1">{node.tooltip.detail}</p>
          <p className="text-white/40 text-[10px]">{node.tooltip.volume}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────── */
export default function GlobalNetworkMap() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section className="py-24 lg:py-32 bg-background relative" id="network" ref={containerRef}>
      {/* Background Volumetrics */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#000405] to-transparent pointer-events-none z-0" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── TEXT HEADER ── */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24" style={{ perspective: "1200px" }}>
          <div className="network-subtitle inline-flex items-center gap-2 text-secondary font-bold tracking-[0.4em] text-[10px] uppercase border border-secondary/20 px-5 py-2 rounded-full bg-secondary/5 backdrop-blur-md mb-8">
            <Activity className="w-3 h-3 text-secondary animate-pulse" />
            Intelligence &amp; Logistics
          </div>

          <h2 className="text-[3rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-black text-white tracking-tighter leading-[0.9] mb-8">
            <div className="overflow-hidden py-1">
              <span className="network-title-line block">Accelerating Access</span>
            </div>
            <div className="overflow-hidden py-1">
              <span className="network-title-line block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-[#BAB9FF]">
                From Labs To Markets.
              </span>
            </div>
          </h2>

          <p className="network-description text-white/60 text-base md:text-xl font-light mx-auto max-w-2xl leading-relaxed">
            We orchestrate a high-velocity neural pipeline that connects global manufacturing
            excellence directly with West Africa's most promising healthcare environments.
          </p>
        </div>

        {/* ── THE NETWORK MAP ── */}
        <div
          className="network-map-container relative w-full overflow-hidden will-change-transform"
          style={{
            aspectRatio: "2.8 / 1",
            minHeight: "380px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(212,168,85,0.12)",
            boxShadow: "0 30px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            willChange: "transform",
          }}
        >
          {/* Left gold accent edge */}
          <div
            className="absolute left-0 top-0 bottom-0 w-12 md:w-20"
            style={{
              background: "linear-gradient(90deg, rgba(212,168,85,0.08) 0%, transparent 100%)",
            }}
          />
          {/* Right gold accent edge */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 md:w-20"
            style={{
              background: "linear-gradient(270deg, rgba(186,185,255,0.08) 0%, transparent 100%)",
            }}
          />
          {/* Center radial warmth */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[120%] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(212,168,85,0.06) 0%, transparent 70%)",
            }}
          />

          {/* SVG Connection Lines + Flow Dots */}
          <NetworkSVG />

          {/* ── CENTER LOGO EMBLEM ── */}
          <div className="center-emblem absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Outer glow */}
            <div
              className="absolute inset-[-30%] rounded-full animate-emblem-glow"
              style={{
                background: "radial-gradient(circle, rgba(212,168,85,0.2) 0%, rgba(212,168,85,0.05) 40%, transparent 70%)",
              }}
            />
            {/* Outer ring */}
            <div
              className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center animate-emblem-spin"
              style={{
                background: "conic-gradient(from 0deg, rgba(212,168,85,0.3), rgba(212,168,85,0.05), rgba(186,185,255,0.2), rgba(212,168,85,0.05), rgba(212,168,85,0.3))",
                padding: "2px",
              }}
            >
              {/* Inner container */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, rgba(0,30,34,0.95) 0%, rgba(0,15,17,0.98) 100%)",
                  boxShadow: "inset 0 2px 10px rgba(212,168,85,0.1), 0 0 40px rgba(212,168,85,0.08)",
                }}
              >
                {/* Logo */}
                <LogoSymbol className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-[0_0_12px_rgba(212,168,85,0.3)]" />

                {/* Inner ring detail */}
                <div
                  className="absolute inset-2 rounded-full pointer-events-none"
                  style={{ border: "1px solid rgba(212,168,85,0.08)" }}
                />
              </div>
            </div>
          </div>

          {/* ── NETWORK NODES ── */}
          {LABS.map((lab, i) => (
            <NetworkNode key={lab.id} node={lab} side="left" index={i} />
          ))}
          {MARKETS.map((market, i) => (
            <NetworkNode key={market.id} node={market} side="right" index={i + 3} />
          ))}

          {/* ── STAGE LABELS ── */}
          <div className="absolute top-4 md:top-6 left-6 md:left-8 stage-label">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A855] animate-pulse" />
              <span className="font-mono text-[8px] md:text-[9px] text-[#D4A855]/70 uppercase tracking-[0.3em]">
                Global Labs
              </span>
            </div>
            <span className="text-white/20 text-[7px] font-mono tracking-widest uppercase">Source Network</span>
          </div>

          <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 text-center stage-label">
            <span className="font-mono text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.3em]">
              PharmaSaha Core
            </span>
          </div>

          <div className="absolute top-4 md:top-6 right-6 md:right-8 text-right stage-label">
            <div className="flex items-center gap-2 mb-1 justify-end">
              <span className="font-mono text-[8px] md:text-[9px] text-[#BAB9FF]/70 uppercase tracking-[0.3em]">
                Local Markets
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#BAB9FF] animate-pulse" />
            </div>
            <span className="text-white/20 text-[7px] font-mono tracking-widest uppercase">Destination Network</span>
          </div>

          {/* ── BOTTOM TELEMETRY ── */}
          <div className="absolute bottom-3 md:bottom-5 left-6 md:left-8 flex items-center gap-2 z-30 pointer-events-none">
            <div className="w-1.5 h-1.5 bg-[#00ffcc] rounded-full animate-ping" />
            <span className="font-mono text-[8px] text-[#00ffcc]/60 uppercase tracking-[0.2em]">Pipeline Active</span>
          </div>
          <div className="absolute bottom-3 md:bottom-5 right-6 md:right-8 text-right z-30 pointer-events-none">
            <span className="font-mono text-[7px] text-white/20 uppercase tracking-widest">Throughput: Optimum</span>
          </div>

          {/* Glass frame borders */}
          <div className="absolute inset-0 border border-white/[0.03] pointer-events-none z-40 rounded-[inherit]" />
          {/* Top/bottom gradient fade */}
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-background/30 to-transparent pointer-events-none z-30" />
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-background/30 to-transparent pointer-events-none z-30" />
        </div>

        {/* ── BOTTOM METRICS ── */}
        <div className="network-metrics-wrapper mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-5xl mx-auto">
          {[
            { label: "Global Source", value: "3 Continents", sub: "EU, NA, APAC", icon: Globe },
            { label: "Pipeline Speed", value: "Real-time", sub: "Data Telemetry", icon: Zap },
            { label: "Core Security", value: "100%", sub: "GxD Compliant", icon: ShieldCheck },
            { label: "Destination", value: "West Africa", sub: "Strategic Markets", icon: MapPin },
          ].map((item, i) => (
            <div
              key={i}
              className="network-metric-card flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-white font-black text-xl mb-1">{item.value}</span>
              <span className="text-white/40 text-[9px] tracking-widest uppercase mb-3">{item.label}</span>
              <span className="text-secondary/50 text-[10px]">{item.sub}</span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-20 flex justify-center">
          <Link to="/network" className="flex items-center gap-4 px-10 py-5 bg-transparent border border-secondary text-secondary rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-secondary hover:text-background transition-all duration-500 overflow-hidden relative group">
            <span className="relative z-10">Explore Partnership Models</span>
            <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <ArrowRight className="w-4 h-4 relative z-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
