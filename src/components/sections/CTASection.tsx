import { ArrowRight, Globe, Shield, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F78C1E] rounded-full filter blur-[200px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C1A8] rounded-full filter blur-[200px] opacity-10" />
      </div>

      {/* Noodle network */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ctaNoodle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F78C1E" stopOpacity="0" />
            <stop offset="50%" stopColor="#F78C1E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00C1A8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,300 Q360,200 720,300 T1440,300"
          stroke="url(#ctaNoodle)"
          strokeWidth="2"
          fill="none"
          className="animate-dash"
        />
        <path
          d="M0,400 Q360,300 720,400 T1440,400"
          stroke="url(#ctaNoodle)"
          strokeWidth="1.5"
          fill="none"
          className="animate-dash"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-[#E1E6ED] shadow-sm hover:shadow-lg hover:border-[#00C1A8]/30 transition-all duration-300 group cursor-pointer">
              <Globe className="w-8 h-8 text-[#00C1A8] group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-[#E1E6ED] shadow-sm hover:shadow-lg hover:border-[#F78C1E]/30 transition-all duration-300 group cursor-pointer">
              <Shield className="w-8 h-8 text-[#F78C1E] group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-[#E1E6ED] shadow-sm hover:shadow-lg hover:border-[#00C1A8]/30 transition-all duration-300 group cursor-pointer">
              <Truck className="w-8 h-8 text-[#00C1A8] group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Ready to Enter the West African Market?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Join the growing network of global pharmaceutical companies trusting
            PharmaSaha to navigate regulatory complexities and reach new patients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-orange group text-lg px-8 py-6 animate-glow-pulse">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Partnership
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-[#E1E6ED] text-[#1A1A1A] hover:bg-white hover:border-[#F78C1E]/50 text-lg px-8 py-6 transition-all"
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500">
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-[#E1E6ED] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#00C1A8] mr-2 animate-pulse" />
              <span>100% Compliance Rate</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-[#E1E6ED] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#00C1A8] mr-2 animate-pulse" />
              <span>50+ Global Partners</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-[#E1E6ED] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#F78C1E] mr-2 animate-pulse" />
              <span>24-48hr Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
