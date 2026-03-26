import { Globe } from "lucide-react";

export default function InstitutionalEngagement() {
  return (
    <section className="py-32 bg-[#000B0D] relative border-y border-white/5 overflow-hidden" id="institutional">

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: B2G Narrative */}
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center gap-4">
              <span className="w-12 h-px bg-secondary" />
              B2G & NGO Architecture
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
              Institutional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#BAB9FF]">Scale.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
              Beyond commercial distribution, PharmaSaha connects global manufacturers directly to the USD 2.5B annual donor-funded procurement pipeline. We navigate the complexities of national tenders, ensuring life-saving diagnostics and medicines reach public health systems.
            </p>

            <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Government Tenders</h4>
                <p className="text-white/50 text-sm leading-relaxed">Ministry of Health procurement channels and National Essential Medicines List (NEML) inclusion strategies.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Global Health Funding</h4>
                <p className="text-white/50 text-sm leading-relaxed">Direct facilitation for Global Fund, PEPFAR, and bilateral donor supply qualification.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Matrix */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-background rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group">

            <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale filter mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200')" }} />

            <div className="absolute inset-0 p-12 flex flex-col justify-center">
              <div className="space-y-6">

                {/* Visual Items representing Institutions */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 translate-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <div className="text-xs font-bold uppercase tracking-widest text-[#BAB9FF] mb-1">Procurement Pathway</div>
                     <div className="text-white font-bold text-lg">WHO Prequalification Supply</div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 -translate-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-black">MoH</span>
                  </div>
                  <div>
                     <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">National Sovereignty</div>
                     <div className="text-white font-bold text-lg">Ministries of Health Tenders</div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 translate-x-8">
                  <div className="w-12 h-12 rounded-full bg-[#BAB9FF]/20 flex items-center justify-center">
                    <span className="text-[#BAB9FF] font-black">NGO</span>
                  </div>
                  <div>
                     <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Donor Implementation</div>
                     <div className="text-white font-bold text-lg">PEPFAR & Global Fund Alignments</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
