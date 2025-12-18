import { Target, Eye, Award, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Global Partners" },
  { value: "350+", label: "Products Registered" },
  { value: "2M+", label: "Patients Reached" },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To bridge the gap between global pharmaceutical innovation and West African healthcare needs, ensuring every community has access to quality medicines.",
    color: "orange",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted healthcare access partner in West Africa, recognized for our integrity, expertise, and commitment to patient outcomes.",
    color: "teal",
  },
];

// Animated stat counter
function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-[#F78C1E]">{value}</div>
      <div className="text-gray-500 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background noodle */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="aboutNoodle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F78C1E" />
            <stop offset="100%" stopColor="#00C1A8" />
          </linearGradient>
        </defs>
        <path
          d="M-100,400 Q300,200 600,400 T1200,400 T1600,400"
          stroke="url(#aboutNoodle)"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#F78C1E] font-medium text-sm uppercase tracking-wider">
              About PharmaSaha
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-6">
              The Vital Nexus for West African Healthcare
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              PharmaSaha was founded with a singular purpose: to ensure that
              life-saving medicines reach those who need them most. We combine
              deep regulatory expertise with extensive distribution networks to
              create seamless pathways for pharmaceutical products into The Gambia
              and Senegal.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of regulatory specialists, logistics experts, and market
              analysts work together to navigate the complexities of West African
              healthcare markets, providing our partners with the confidence and
              support they need to succeed.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              {values.map((item) => {
                const isOrange = item.color === "orange";
                return (
                  <div key={item.title} className="flex space-x-4 group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOrange 
                        ? "bg-[#F78C1E]/10 group-hover:bg-[#F78C1E]/20" 
                        : "bg-[#00C1A8]/10 group-hover:bg-[#00C1A8]/20"
                    }`}>
                      <item.icon className={`w-6 h-6 ${isOrange ? "text-[#F78C1E]" : "text-[#00C1A8]"}`} />
                    </div>
                    <div>
                      <h3 className="text-[#1A1A1A] font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Healthcare professionals"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 border border-[#E1E6ED] shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-[#F78C1E]/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#F78C1E]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A1A]">100%</div>
                  <div className="text-gray-500 text-sm">Compliance Rate</div>
                </div>
              </div>
            </div>

            {/* Floating Team Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 border border-[#E1E6ED] shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-[#00C1A8]/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#00C1A8]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A1A]">30+</div>
                  <div className="text-gray-500 text-sm">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-[#F5F7FA] rounded-2xl border border-[#E1E6ED]">
          {stats.map((stat, index) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
