import React, { useEffect, useState, useRef } from "react";
import { Terminal, ShieldAlert, CheckCircle2, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Diversified, high-fidelity compliance telemetry pool
const LOG_POOL = [
  { type: "SYS", msg: "IoT sensor #442a temp verified: 4.2°C", status: "STABLE" },
  { type: "GOV", msg: "Senegal MoH customs clearance authorized: SN-8891", status: "CLEARED" },
  { type: "SEC", msg: "AES-256 handshake established with Central Medical Store (CMS)", status: "SECURE" },
  { type: "SYS", msg: "Biometric vault access requested: Hub Beta. Approved.", status: "VERIFIED" },
  { type: "QA", msg: "Batch #992-K release protocol signature valid.", status: "PASSED" },
  { type: "GOV", msg: "NEML inclusion registry synced with regional DB.", status: "SYNCED" },
  { type: "SYS", msg: "Cold-chain ambient fluctuation detected: +0.4°C. Correcting.", status: "RESOLVED" },
  { type: "SEC", msg: "Endpoint telemetry anonymization active. Salt rotated.", status: "LOCKED" },
  { type: "SYS", msg: "GDP compliance routine check initiated.", status: "ACTIVE" },
  { type: "QA", msg: "WHO-PQ certificate expiration check: Valid until 2029.", status: "VERIFIED" },
  { type: "GOV", msg: "ECOWAS border crossing manifest validated: CI-422", status: "APPROVED" },
  { type: "SYS", msg: "Backup diesel generator test: 100% operational.", status: "READY" },
  { type: "SEC", msg: "Intrusion detection: 0 threats detected in last 24h.", status: "SECURE" },
  { type: "SYS", msg: "GAMBIA MoH procurement portal sync complete.", status: "SYNCED" },
  { type: "QA", msg: "Pharma-grade humidity sensor calibrated (40.2%).", status: "STABLE" },
  { type: "GOV", msg: "Import license renewal: Ghana FDA (Ref: GH-772).", status: "VALID" },
  { type: "SYS", msg: "Regional Hub Delta: Power grid stabilized.", status: "ONLINE" },
  { type: "SEC", msg: "RSA-4096 layer verification successful.", status: "VALID" },
];

export default function AuditTrailConsole() {
  const [logs, setLogs] = useState<any[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastLogIndex = useRef<number>(-1);

  // Initialize with unique logs
  useEffect(() => {
    const initialLogs = Array.from({ length: 12 }).map((_, i) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * LOG_POOL.length);
      } while (randomIndex === lastLogIndex.current);
      lastLogIndex.current = randomIndex;
      
      return {
        ...LOG_POOL[randomIndex],
        id: `init-${i}-${Math.random()}`,
        time: new Date(Date.now() - (12 - i) * 15000).toISOString().split('T')[1].split('.')[0]
      };
    });
    setLogs(initialLogs);
  }, []);

  // Simulate ongoing unique incoming logs
  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * LOG_POOL.length);
      } while (randomIndex === lastLogIndex.current);
      lastLogIndex.current = randomIndex;

      const newLog = {
        ...LOG_POOL[randomIndex],
        id: `log-${Date.now()}`,
        time: new Date().toISOString().split('T')[1].split('.')[0]
      };
      
      setLogs(prev => {
        const next = [...prev, newLog];
        if (next.length > 20) return next.slice(next.length - 20);
        return next;
      });
    }, 4000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll logic: Scoped to container to prevent page jumping
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "STABLE":
      case "SECURE":
      case "PASSED":
      case "READY":
      case "ONLINE":
      case "VALID":
        return "text-[#B9A37A]";
      case "VERIFIED":
      case "APPROVED":
      case "CLEARED":
        return "text-secondary";
      case "RESOLVED":
      case "SYNCED":
      case "ACTIVE":
        return "text-primary";
      default:
        return "text-white/60";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "SYS": return "bg-white/10 text-white/80";
      case "GOV": return "bg-secondary/20 text-secondary";
      case "SEC": return "bg-[#B9A37A]/20 text-[#B9A37A]";
      case "QA": return "bg-primary/20 text-primary";
      default: return "bg-white/10 text-white/80";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#00080A]/80 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative transition-all duration-700 group hover:border-white/20">
      
      {/* ── CONSOLE HEADER ── */}
      <div className="bg-white/[0.02] border-b border-white/5 p-5 flex items-center justify-between">
        <div className="flex items-center gap-4 text-left">
          <Terminal className="w-4 h-4 text-[#B9A37A]" />
          <div className="flex flex-col">
            <span className="text-white/90 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">SOVEREIGN CORE TELEMETRY</span>
            <span className="text-white/20 font-mono text-[8px] uppercase tracking-widest mt-0.5">ESTABLISHED ENCRYPTED NODE 44-X</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(186,185,255,0.5)]" />
            <span className="text-secondary font-mono text-[9px] uppercase tracking-[0.2em] font-medium">System Nominal</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* ── CONSOLE BODY ── */}
      <div 
        ref={scrollContainerRef}
        className="p-6 md:p-8 h-[400px] overflow-y-auto font-mono text-[10px] md:text-xs relative custom-console-scrollbar pointer-events-none group-hover:pointer-events-auto scroll-smooth"
      >
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#00080A] via-transparent to-[#00080A] z-10 opacity-60" />

        <div className="space-y-3 relative z-0">
          <AnimatePresence initial={false}>
            {logs.map((log) => (
              <motion.div 
                key={log.id}
                initial={{ opacity: 0, x: -5, filter: "blur(2px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                className="flex items-center gap-4 group/line py-0.5 border-b border-white/[0.02]"
              >
                <span className="text-white/20 select-none w-16">[{log.time}]</span>
                <span className={`px-1.5 py-0.5 rounded-[3px] text-[8px] font-black tracking-wider uppercase ${getTypeColor(log.type)}`}>
                  {log.type}
                </span>
                <span className="text-white/60 flex-grow font-light tracking-wide group-hover/line:text-white transition-colors truncate">
                  {log.msg}
                </span>
                <span className={`font-bold tracking-[0.1em] text-[10px] ${getStatusColor(log.status)}`}>
                  &lt;{log.status}&gt;
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── CONSOLE FOOTER ── */}
      <div className="bg-white/[0.02] border-t border-white/5 px-6 py-4 flex justify-between items-center text-[9px] text-white/20 font-mono uppercase tracking-[0.3em] font-medium">
        <div className="flex items-center gap-3">
          <Activity className="w-3 h-3 text-primary animate-pulse" />
          <span>PHARMASAHA COMPLIANCE ARCHITECTURE v4.2 // REGIONAL SYNC</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/20">ENCRYPTED TELEMETRY FEED</span>
        </div>
      </div>

      <style>{`
        .custom-console-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-console-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-console-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(186, 185, 255, 0.2);
          border-radius: 10px;
        }
        .custom-console-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(186, 185, 255, 0.4);
        }
      `}</style>
    </div>
  );
}
