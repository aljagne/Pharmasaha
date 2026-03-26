import { Linkedin, Shield } from "lucide-react";

const executives = [
  {
    name: "Dr. Amina Diallo",
    role: "Chief Executive Officer",
    background: "Ex-Novartis, 15+ years engineering sovereign supply chains across sub-Saharan Africa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Global Logistics",
    background: "Former Director at Maersk Logistics. Precision cold chain architect and telemetry expert.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Elena Rostova",
    role: "Chief Regulatory Officer",
    background: "12 years navigating EMEA & MoH compliance frameworks. JAP/AMA harmonizer.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "VP, Regional Operations",
    background: "Operations scaling expert across 14 West African nations. Market penetration lead.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

export default function LeadershipSection() {
  return (
    <section className="py-32 bg-[#000508] relative border-b border-white/5" id="leadership">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.01]" />

      <div className="max-w-[80rem] mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 border border-white/10 bg-white/5 py-1.5 px-4 rounded-full">
               <Shield className="w-4 h-4 text-[#B9A37A]" />
               <span className="text-white/60 font-mono tracking-[0.2em] text-[10px] uppercase font-bold">The Strategic Authority</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1]">
              Board of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/30 to-white/10">Architects.</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm mt-8 md:mt-0 text-lg font-light leading-relaxed">
            Decades of global pharmaceutical and military-grade logistics pedigree, entirely unified by a singular mission to connect the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((exec, index) => (
            <div key={index} className="group cursor-pointer">
              
              {/* Image Container with Glow Effect */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 bg-[#000B0D] border border-white/10 group-hover:border-[#B9A37A]/50 transition-colors duration-700 shadow-2xl group-hover:shadow-[0_0_40px_rgba(185,163,122,0.15)]">
                
                {/* Image Element */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 filter grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  style={{ backgroundImage: `url(${exec.image})` }}
                />

                {/* Deep bottom shadow for text legibility if needed, but text is below now. Keeping for atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000508] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />

                {/* Glassmorphism Title Tag (Hover Reveal) */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                     <span className="text-[#B9A37A] font-mono font-bold text-[10px] tracking-widest uppercase">Verified ID</span>
                     <Linkedin className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
                   </div>
                </div>
              </div>

              {/* Text Meta Info */}
              <div className="px-2">
                <h3 className="text-2xl font-black text-white group-hover:text-[#B9A37A] transition-colors duration-500 tracking-tight mb-2">
                  {exec.name}
                </h3>
                <p className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/70 text-[10px] uppercase font-bold tracking-[0.2em] mb-4">
                  {exec.role}
                </p>
                <p className="text-white/40 text-sm leading-relaxed font-light line-clamp-3">
                  {exec.background}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
