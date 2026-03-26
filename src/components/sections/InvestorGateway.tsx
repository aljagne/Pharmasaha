import { useState, useRef, useEffect } from "react";
import { FileText, ArrowRight, Lock, CheckCircle, AlertCircle, Loader2, Key, Fingerprint } from "lucide-react";
import { supabase } from "../../lib/supabase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InvestorGateway() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    corporateName: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.corporateName || !form.firstName || !form.email) return;
    setStatus("loading");

    try {
      const { error } = await supabase.from("public.request_blueprint").insert({
        corporate_name: form.corporateName,
        first_name: form.firstName,
        "last_name text": form.lastName,
        rofessional_email: form.email,
      });

      if (error) throw error;
      setStatus("success");
      setForm({ corporateName: "", firstName: "", lastName: "", email: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="blueprint-gateway">

      <div className="max-w-[80rem] mx-auto px-6 relative z-10 flex flex-col items-center opacity-0" ref={containerRef}>

        {/* Lead Capture Form - Redesigned as a Biometric Security Terminal */}
        <div className="w-full max-w-2xl bg-[#000B0D] rounded-3xl p-1 shadow-2xl relative group border border-white/5 overflow-hidden">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02]" />

          <div className="relative bg-[#050B0D] rounded-[22px] p-8 md:p-12 border border-white/5">
            
            {/* Terminal Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-white/5 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Fingerprint className="w-5 h-5 text-[#B9A37A]" />
                  <span className="text-[#B9A37A] font-bold text-xs uppercase tracking-[0.3em]">Identity Verification</span>
                </div>
                <h3 className="text-white font-black text-3xl tracking-tighter">Clearance Portal</h3>
              </div>
              <div className="text-right flex flex-col items-start md:items-end">
                <span className="space-x-2 flex items-center mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-secondary font-mono text-[10px] tracking-widest uppercase">AES-256 Active</span>
                </span>
                <span className="text-white/30 text-xs font-mono tracking-widest">Protocol V4.2</span>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-10 font-light leading-relaxed">
              Access to the Strategic Master Blueprint is granted exclusively to verified C-Suite executives, private equity partners, and sovereign stakeholders. Please construct your digital dossier below for immediate clearance.
            </p>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="group/input">
                <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2 block group-focus-within/input:text-[#B9A37A] transition-colors">Corporate Entity</label>
                <input
                  type="text"
                  name="corporateName"
                  value={form.corporateName}
                  onChange={handleChange}
                  placeholder="Enter organization name"
                  className="w-full bg-[#000508] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#B9A37A] focus:bg-white/[0.02] transition-colors text-sm font-mono"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group/input">
                  <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2 block group-focus-within/input:text-[#B9A37A] transition-colors">First Identity</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className="w-full bg-[#000508] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#B9A37A] focus:bg-white/[0.02] transition-colors text-sm font-mono"
                  />
                </div>
                <div className="group/input">
                  <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2 block group-focus-within/input:text-[#B9A37A] transition-colors">Sur Identity</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="w-full bg-[#000508] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#B9A37A] focus:bg-white/[0.02] transition-colors text-sm font-mono"
                  />
                </div>
              </div>

              <div className="group/input">
                <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2 block group-focus-within/input:text-[#B9A37A] transition-colors">Encrypted Routing (Email)</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@corporation.com"
                  className="w-full bg-[#000508] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#B9A37A] focus:bg-white/[0.02] transition-colors text-sm font-mono"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading" || status === "success"}
                className={`w-full font-bold uppercase tracking-widest text-sm py-5 mt-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 group/btn
                  ${status === "success"
                    ? "bg-secondary text-white shadow-[0_0_30px_rgba(100,255,180,0.3)]"
                    : status === "error"
                    ? "bg-red-500/80 text-white shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                    : "bg-[#B9A37A] hover:bg-white text-[#001E22] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  }
                  disabled:opacity-70 disabled:cursor-not-allowed
                `}
              >
                {status === "loading" && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#001E22]" />
                    <span className="text-[#001E22]">Encrypting Request...</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span className="text-white">Clearance Granted</span>
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-4 h-4 text-white" />
                    <span className="text-white">Verification Failed — Try Again</span>
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Key className="w-4 h-4 text-[#001E22] group-hover/btn:rotate-90 transition-transform duration-500" />
                    <span className="text-[#001E22]">Establish Connection</span>
                    <ArrowRight className="w-4 h-4 text-[#001E22] group-hover/btn:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
