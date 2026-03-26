export default function CaseStudiesSection() {
  const metrics = [
    {
      value: "4",
      label: "New Markets Entered",
      context: "In under 6 months for a Swiss precision oncology manufacturer."
    },
    {
      value: "0",
      label: "Cold Chain Excursions",
      context: "Across 2.4 million nautical and land-based supply miles."
    },
    {
      value: "+300%",
      label: "Distribution Efficiency",
      context: "Compared to legacy fragmentation models in the region."
    }
  ];

  return (
    <section className="py-24 bg-background relative border-t border-white/5" id="impact">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Proven Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Data, <span className="text-white/40">Not Promises.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Massive Metric Value */}
              <div className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6 group-hover:from-primary group-hover:to-primary/20 transition-all duration-700">
                {metric.value}
              </div>

              <div className="h-px w-12 bg-secondary/50 mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />

              <h3 className="text-xl font-bold text-white mb-4">
                {metric.label}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed max-w-[250px]">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
