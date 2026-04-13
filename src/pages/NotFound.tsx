import { Link } from "react-router-dom";
import { ArrowRight, Signal } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#000508] flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-lg">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/10 rounded-full mb-8 backdrop-blur-md">
            <Signal className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Signal Interrupted</span>
          </div>

          {/* Error Code */}
          <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5 mb-4">
            404
          </h1>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Route <span className="text-white/30">Not Found.</span>
          </h2>

          {/* Description */}
          <p className="text-white/50 text-lg font-light leading-relaxed mb-10 max-w-md mx-auto">
            The coordinates you entered don't match any known route in our network.
            Let's navigate you back to operational territory.
          </p>

          {/* CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-background transition-all duration-500 shadow-[0_0_30px_rgba(112,91,60,0.3)] group"
          >
            Return to Base
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-white/20 text-[10px] tracking-[0.3em] uppercase font-mono">
          © {new Date().getFullYear()} PHARMASAHA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </PageTransition>
  );
}
