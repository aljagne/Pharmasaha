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
    <div ref={elementRef} className="text-3xl font-bold text-[#1A1A1A]">
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
        className="absolute w-72 h-72 rounded-full border-2 border-[#F78C1E]/20"
        style={{ animation: "spin 20s linear infinite" }}
      />
      <div
        className="absolute w-64 h-64 rounded-full border border-[#00C1A8]/20"
        style={{ animation: "spin 15s linear infinite reverse" }}
      />
      {/* Inner glow sphere */}
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-[#F78C1E]/10 to-[#00C1A8]/10 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-[#E1E6ED] flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <Globe
            className="w-20 h-20 text-[#F78C1E]"
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
            background: i % 2 === 0 ? "#00C1A8" : "#F78C1E",
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
      bg: "bg-[#00C1A8]/10",
      border: "border-[#00C1A8]/30",
      text: "text-[#00C1A8]",
      dot: "bg-[#00C1A8]",
      label: "Active",
    },
    source: {
      bg: "bg-[#F78C1E]/10",
      border: "border-[#F78C1E]/30",
      text: "text-[#F78C1E]",
      dot: "bg-[#F78C1E]",
      label: "Source Labs",
    },
    "coming-soon": {
      bg: "bg-gray-100",
      border: "border-gray-200",
      text: "text-gray-500",
      dot: "bg-gray-400",
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
          <div className="text-[#1A1A1A] text-sm font-medium whitespace-nowrap">
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
      className={`absolute ${position} w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-[#E1E6ED]`}
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
          <stop offset="0%" stopColor="#F78C1E" stopOpacity="0" />
          <stop offset="50%" stopColor="#F78C1E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00C1A8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroNoodleGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C1A8" stopOpacity="0" />
          <stop offset="50%" stopColor="#00C1A8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F78C1E" stopOpacity="0" />
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
        fill="#F78C1E"
        style={{ filter: "drop-shadow(0 0 6px #F78C1E)" }}
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
    <section className="relative min-h-screen bg-[#F5F7FA] overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F78C1E] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00C1A8] rounded-full blur-[180px] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F78C1E]/5 rounded-full blur-[200px]" />
      </div>
      {/* Noodle network background */}
      <NoodleBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8 z-10 pl-4 lg:pl-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#F78C1E]/10 border border-[#F78C1E]/20 rounded-full cursor-pointer hover:bg-[#F78C1E]/20 transition-all">
              <span className="relative w-2 h-2 mr-2">
                <span className="absolute inset-0 bg-[#00C1A8] rounded-full animate-ping" />
                <span className="absolute inset-0 bg-[#00C1A8] rounded-full" />
              </span>
              <span className="text-[#1A1A1A] text-sm font-medium">
                West Africa's Healthcare Gateway
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#1A1A1A]">Global Innovation.</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#F78C1E] to-[#FF9F40]">
                West African
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#F78C1E] to-[#FF9F40]">
                Vitality.
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              PharmaSaha bridges international pharmaceutical excellence with
              underserved markets. We are the vital nexus connecting global labs
              to local communities across The Gambia and Senegal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#F78C1E] hover:bg-[#E07A10] text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md group">
                <span className="flex items-center">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                className="border-[#E1E6ED] text-[#1A1A1A] hover:bg-white hover:border-[#F78C1E]/50 transition-all px-5 py-2.5 rounded-lg"
              >
                Explore Solutions
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E1E6ED] w-full max-w-lg">
              <div>
                <div className="text-3xl font-bold text-[#1A1A1A]">50+</div>
                <div className="text-gray-500 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A8] mr-2 animate-pulse" />
                  Partner Labs
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1A1A1A]">2</div>
                <div className="text-gray-500 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A8] mr-2 animate-pulse" />
                  Active Markets
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1A1A1A]">100%</div>
                <div className="text-gray-500 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F78C1E] mr-2 animate-pulse" />
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
              <Shield className="w-6 h-6 text-[#00C1A8]" />
            </FloatingIcon>
            <FloatingIcon
              position="top-1/2 right-[-5%] -translate-y-1/2"
              delay={0.3}
            >
              <Truck className="w-6 h-6 text-[#F78C1E]" />
            </FloatingIcon>
            <FloatingIcon
              position="bottom-[8%] left-1/2 -translate-x-1/2"
              delay={0.6}
            >
              <Layers className="w-6 h-6 text-[#00C1A8]" />
            </FloatingIcon>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 cursor-pointer group">
        <span className="text-sm mb-2 group-hover:text-[#F78C1E] transition-colors">
          Scroll to explore
        </span>
        <div className="w-8 h-12 border-2 border-[#E1E6ED] rounded-full flex justify-center relative overflow-hidden group-hover:border-[#F78C1E] transition-colors">
          <div className="w-2 h-3 bg-[#F78C1E] rounded-full mt-2 animate-bounce" />
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
