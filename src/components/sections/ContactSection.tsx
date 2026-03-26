import { useState } from "react";
import { Send, MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const { error } = await supabase.from("public.concierge_partnership").insert({
        first_name: form.firstName,
        "last_name text": form.lastName,
        "corporate_email text": form.email,
        inquiry_details: form.message,
      });

      if (error) throw error;
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Informational Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Concierge</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8">
                Initiate <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pr-2">Partnership.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-md font-light">
                Whether you are a global manufacturer seeking rapid market entry or a regional network requiring reliable supply channels, our executive team is ready to assist.
              </p>
            </div>

            <div className="mt-16 space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors duration-300">
                   <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Global Headquarters</h4>
                  <p className="text-white/50 text-sm">Paris, France<br/>Operational Hubs: Dakar & Banjul</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-secondary/20 transition-colors duration-300">
                   <Mail className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Outreach</h4>
                  <p className="text-white/50 text-sm hover:text-secondary transition-colors cursor-pointer">partners@pharmasaha.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Concierge Form Side */}
          <div className="w-full lg:w-1/2">
            <div
              className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden transition-all duration-700 hover:border-secondary/30"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Subtle tracking glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

              <form className="relative z-10 flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block group-focus-within:text-secondary transition-colors">Corporate Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-white/20"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="group">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">Inquiry Details</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none"
                    placeholder="How can we accelerate your market access?"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "loading" || status === "success"}
                  className={`mt-4 w-full py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center group transition-all duration-300
                    ${status === "success"
                      ? "bg-green-500 text-white"
                      : status === "error"
                      ? "bg-red-500/80 text-white"
                      : "bg-white text-background hover:bg-secondary"
                    }
                    disabled:opacity-70 disabled:cursor-not-allowed
                  `}
                >
                  {status === "loading" && (
                    <>
                      <Loader2 className="w-4 h-4 mr-3 animate-spin" />
                      Submitting...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle className="w-4 h-4 mr-3" />
                      Request Submitted Successfully
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle className="w-4 h-4 mr-3" />
                      Submission Failed — Try Again
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Submit Request
                      <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
