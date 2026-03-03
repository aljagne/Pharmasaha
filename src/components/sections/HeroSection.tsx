import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe, Shield, Truck, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animated counter component
function CountUpNumber({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setCount(Math.round(progress * end));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
          }
        });
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={elementRef} className="text-3xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
}

// Globe visualization component
function GlobeVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer rotating rings */}
      <div
        className="absolute w-72 h-72 rounded-full border-[#C2EED0]/40 text-white border-[#745A37]/20"
        style={{ animation: "spin 20s linear infinite" }}
      />
      <div
        className="absolute w-64 h-64 rounded-full border border-[#BAB9FF]/20"
        style={{ animation: "spin 15s linear infinite reverse" }}
      />
      {/* Inner glow sphere */}
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-[#745A37]/10 to-[#BAB9FF]/10 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-[#C2EED0] flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <Globe
            className="w-20 h-20 text-[#745A37]"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          />
        </div>
      </div>
      {/* Particle dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            background: i % 2 === 0 ? "#BAB9FF" : "#745A37",
            top: `${30 + Math.sin(i * 0.5) * 20}%`,
            left: `${30 + Math.cos(i * 0.5) * 20}%`,
            animation: `float 4s ease-in-out infinite ${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

// Region tag component
function RegionTag({
  name,
  status,
  position,
  delay,
}: {
  name: string;
  status: "active" | "source" | "coming-soon";
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay: number;
}) {
  const config = {
    active: {
      bg: "bg-[#BAB9FF]/10",
      border: "border-[#BAB9FF]/30",
      text: "text-[#BAB9FF]",
      dot: "bg-[#BAB9FF]",
      label: "Active",
    },
    source: {
      bg: "bg-[#745A37]/10",
      border: "border-[#745A37]/30",
      text: "text-[#745A37]",
      dot: "bg-[#745A37]",
      label: "Source Labs",
    },
    "coming-soon": {
      bg: "bg-white/10 backdrop-blur-md",
      border: "border-white/20",
      text: "text-[#BAB9FF]/80 font-medium",
      dot: "bg-white/40",
      label: "Coming Soon",
    },
  }[status];

  return (
    <div
      className={`absolute ${config.bg} ${config.border} border backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm`}
      style={{
        ...position,
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="relative">
          <div className={`w-2 h-2 rounded-full ${config.dot}`} />
          {status === "active" && (
            <div
              className={`absolute inset-0 rounded-full ${config.dot} animate-ping`}
            />
          )}
        </div>
        <div>
          <div className="text-white text-sm font-medium whitespace-nowrap">
            {name}
          </div>
          <div className={`text-xs ${config.text}`}>{config.label}</div>
        </div>
      </div>
    </div>
  );
}

// Floating icon component
function FloatingIcon({
  children,
  position,
  delay = 0,
}: {
  children: React.ReactNode;
  position: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute ${position} w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-[#C2EED0]`}
      style={{ animation: `float 5s ease-in-out infinite ${delay}s` }}
    >
      {children}
    </div>
  );
}

// Background noodle network
function NoodleBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="heroNoodleGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#745A37" stopOpacity="0" />
          <stop offset="50%" stopColor="#745A37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#BAB9FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroNoodleGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BAB9FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#BAB9FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#745A37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Curved noodle lines */}
      <path
        d="M-100,300 Q300,200 600,350 T1200,300 T1600,400"
        stroke="url(#heroNoodleGrad1)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M-100,500 Q400,400 700,500 T1100,450 T1600,550"
        stroke="url(#heroNoodleGrad2)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M-100,700 Q350,600 650,700 T1050,650 T1600,700"
        stroke="url(#heroNoodleGrad1)"
        strokeWidth="1"
        fill="none"
      />
      {/* Animated beam dot */}
      <circle
        r="4"
        fill="#745A37"
        style={{ filter: "drop-shadow(0 0 6px #745A37)" }}
      >
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#heroBeamPath" />
        </animateMotion>
      </circle>
      <path
        id="heroBeamPath"
        d="M-100,300 Q300,200 600,350 T1200,300 T1600,400"
        fill="none"
      />
    </svg>
  );
}

export default function HeroSection() {
  const [badgeText, setBadgeText] = useState(
    "West Africa's Healthcare Gateway",
  );

  return (
    <section className="relative min-h-screen bg-[#001E22] overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#745A37] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#BAB9FF] rounded-full blur-[180px] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#745A37]/5 rounded-full blur-[200px]" />
      </div>
      {/* Noodle network background */}
      <NoodleBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8 z-10 pl-4 lg:pl-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#BAB9FF] rounded-full cursor-pointer hover:bg-[#A3A2F0] transition-all shadow-md">
              <span className="relative w-2 h-2 mr-2">
                <span className="absolute inset-0 bg-[#001E22] rounded-full animate-ping" />
                <span className="absolute inset-0 bg-[#001E22] rounded-full" />
              </span>
              <span className="text-white text-sm font-bold">
                West Africa's Healthcare Gateway
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Global Innovation.</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#745A37] to-[#BAB9FF]">
                West African
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#745A37] to-[#BAB9FF]">
                Vitality.
              </span>
            </h1>

            <p className="text-lg text-white/90 text-xl font-light tracking-wide max-w-lg">
              PharmaSaha bridges international pharmaceutical excellence with
              underserved markets. We are the vital nexus connecting global labs
              to local communities across The Gambia and Senegal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#745A37] hover:bg-[#5E482C] text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md group">
                <span className="flex items-center">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                className="border-[#C2EED0] text-white hover:bg-white hover:border-[#745A37]/50 transition-all px-5 py-2.5 rounded-lg"
              >
                Explore Solutions
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#C2EED0] w-full max-w-lg">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-[#BAB9FF]/80 font-medium text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BAB9FF] mr-2 animate-pulse" />
                  Partner Labs
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-[#BAB9FF]/80 font-medium text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BAB9FF] mr-2 animate-pulse" />
                  Active Markets
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-[#BAB9FF]/80 font-medium text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#745A37] mr-2 animate-pulse" />
                  Compliance Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Globe */}
          <div className="relative hidden lg:flex h-[550px] items-center justify-center">
            <GlobeVisualization />

            {/* Region Tags - positioned around the globe */}
            <RegionTag
              name="Morocco"
              status="source"
              position={{ top: "12%", right: "20%" }}
              delay={0.5}
            />
            <RegionTag
              name="The Gambia"
              status="active"
              position={{ top: "38%", right: "2%" }}
              delay={0.7}
            />
            <RegionTag
              name="Senegal"
              status="active"
              position={{ top: "52%", right: "12%" }}
              delay={0.9}
            />
            <RegionTag
              name="Guinea-Bissau"
              status="coming-soon"
              position={{ top: "66%", right: "5%" }}
              delay={1.1}
            />

            {/* Floating Icons */}
            <FloatingIcon
              position="top-[8%] left-1/2 -translate-x-1/2"
              delay={0}
            >
              <Shield className="w-6 h-6 text-[#BAB9FF]" />
            </FloatingIcon>
            <FloatingIcon
              position="top-1/2 right-[-5%] -translate-y-1/2"
              delay={0.3}
            >
              <Truck className="w-6 h-6 text-[#745A37]" />
            </FloatingIcon>
            <FloatingIcon
              position="bottom-[8%] left-1/2 -translate-x-1/2"
              delay={0.6}
            >
              <Layers className="w-6 h-6 text-[#BAB9FF]" />
            </FloatingIcon>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 cursor-pointer group">
        <span className="text-sm mb-2 group-hover:text-[#745A37] transition-colors">
          Scroll to explore
        </span>
        <div className="w-8 h-12 border-2 border-[#C2EED0]/40 rounded-full flex justify-center relative overflow-hidden group-hover:border-[#745A37] transition-colors">
          <div className="w-2 h-3 bg-[#745A37] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
      {/* CSS Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
