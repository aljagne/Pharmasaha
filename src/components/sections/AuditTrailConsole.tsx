import React, { useEffect, useState, useRef } from "react";
import { Terminal, ShieldAlert, CheckCircle2, Activity } from "lucide-react";

// Massive pool of realistic-sounding compliance telemetry events
const LOG_POOL = [
  { type: "SYS", msg: "IoT sensor #442a temp verified: 4.2°C", status: "STABLE" },
  { type: "GOV", msg: "Senegal MoH customs clearance authorized: SN-8891", status: "CLEARED" },
  { type: "SEC", msg: "AES-256 handshake established with Central Medical Store (CMS)", status: "SECURE" },
  { type: "SYS", msg: "Biometric vault access requested: Hub Beta. Approved.", status: "VERIFIED" },
  { type: "QA", msg: "Batch #992-K release protocol signature valid.", status: "PASSED" },
  { type: "GOV", msg: "NEML inclusion registry synced with regional DB.", status: "SYNCED" },
  { type: "SYS", msg: "Cold-chain ambient fluctuation detected: +0.4°C. Correcting.", status: "RESOLVED" },
  { type: "SEC", msg: "Patient endpoint telemetry anonymization active. Salt rotated.", status: "LOCKED" },
  { type: "SYS", msg: "GDP compliance routine check initiated.", status: "ACTIVE" },
  { type: "QA", msg: "WHO-PQ certificate expiration check: Valid until 2029.", status: "VERIFIED" },
  { type: "GOV", msg: "ECOWAS border crossing manifest validated: CI-422", status: "APPROVED" },
  { type: "SYS", msg: "Backup diesel generator test: 100% operational.", status: "READY" },
];

export default function AuditTrailConsole() {
  const [logs, setLogs] = useState<any[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Initialize with some logs
  useEffect(() => {
    const initialLogs = Array.from({ length: 6 }).map((_, i) => ({
      ...LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)],
      id: `init-${i}`,
      time: new Date(Date.now() - (6 - i) * 15000).toISOString().split('T')[1].split('.')[0]
    }));
    setLogs(initialLogs);
  }, []);

  // Simulate ongoing incoming logs
  useEffect(() => {
    const interval = setInterval(() => {
      const newLogBase = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
      const newLog = {
        ...newLogBase,
        id: `log-${Date.now()}`,
        time: new Date().toISOString().split('T')[1].split('.')[0]
      };
      
      setLogs(prev => {
        const next = [...prev, newLog];
        // Keep only last 20 logs to prevent DOM bloat
        if (next.length > 20) return next.slice(next.length - 20);
        return next;
      });
    }, 2500 + Math.random() * 2000); // Random interval between 2.5s and 4.5s

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "STABLE":
      case "SECURE":
      case "PASSED":
      case "READY":
        return "text-[#B9A37A]";
      case "VERIFIED":
      case "APPROVED":
      case "CLEARED":
        return "text-secondary";
      case "RESOLVED":
      case "SYNCED":
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
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#050B0D] shadow-2xl relative">
      
      {/* Console Header */}
      <div className="bg-[#0A1215] border-b border-white/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-white/40" />
          <span className="text-white/80 font-mono text-sm tracking-widest uppercase">Live Audit Telemetry</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-mono text-xs uppercase tracking-widest">System Active</span>
          </div>
        </div>
      </div>

      {/* Console Body */}
      <div className="p-6 h-[400px] overflow-y-auto font-mono text-xs md:text-sm relative custom-scrollbar">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="space-y-4 relative z-10">
          {logs.map((log) => (
            <div key={log.id} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 group">
              <div className="text-white/30 shrink-0 select-none">[{log.time}]</div>
              <div className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${getTypeColor(log.type)}`}>
                {log.type}
              </div>
              <div className="text-white/70 flex-grow font-light">
                {log.msg}
              </div>
              <div className={`shrink-0 font-bold tracking-wider ${getStatusColor(log.status)}`}>
                [{log.status}]
              </div>
            </div>
          ))}
          <div ref={consoleEndRef} />
        </div>
      </div>

      {/* Console Footer */}
      <div className="bg-[#0A1215] border-t border-white/5 px-4 py-2 flex justify-between items-center text-[10px] text-white/30 font-mono uppercase tracking-widest">
        <span>PharmaSaha OS v4.2.1</span>
        <span>AES-256 Encryption ENABLED</span>
      </div>

    </div>
  );
}
