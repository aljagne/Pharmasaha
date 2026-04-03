import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ARTICLES } from "../../lib/articles";

export default function InsightsSection() {
  // Pick specific articles for the editorial grid
  const gridArticles = [
    { ...ARTICLES.find((a) => a.slug === "west-african-pharmaceutical-logistics-expansion")!, className: "col-span-1 md:col-span-2 row-span-2", imageGradient: "from-primary/20 to-transparent" },
    { ...ARTICLES.find((a) => a.slug === "navigating-cross-border-medicine-compliance")!, className: "col-span-1 row-span-1", imageGradient: "from-secondary/20 to-transparent" },
    { ...ARTICLES.find((a) => a.slug === "cold-chain-innovations-gambia")!, className: "col-span-1 row-span-1", imageGradient: "from-[#001E22] to-primary/20" },
  ];

  return (
    <section className="py-32 bg-background relative" id="insights">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-8">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Editorial</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Industry <span className="text-white/40">Insights</span>
            </h2>
          </div>
          <Link to="/intelligence" className="group flex items-center text-sm font-bold tracking-widest text-primary uppercase hover:text-white transition-colors duration-300">
            View All Reports
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {gridArticles.map((article, index) => (
            <Link
              to={`/intelligence/${article.slug}`}
              key={article.slug}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-secondary/40 transition-[border-color,transform] duration-700 ease-out ${article.className} glass-panel`}
            >
              {/* Background gradient/image layer */}
              <div className={`absolute inset-0 bg-gradient-to-t ${article.imageGradient} opacity-50 z-0 transition-opacity duration-700 group-hover:opacity-80`} />

              {/* If there's an image, render it */}
              {article.image && (
                <div
                  className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay"
                  style={{
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              )}

              {/* Content Layer */}
              <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold tracking-widest text-white/50 uppercase border border-white/20 px-3 py-1 rounded-full group-hover:text-primary group-hover:border-primary/50 transition-colors duration-300">
                     {article.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-secondary group-hover:text-[#001E22] text-white transition-colors duration-300">
                     <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                   <span className="text-sm font-bold text-secondary mb-4 block">{article.date}</span>
                   <h3 className={`font-bold text-white transition-colors duration-300 group-hover:text-primary ${index === 0 ? 'text-3xl md:text-5xl leading-tight' : 'text-2xl leading-snug'}`}>
                     {article.title}
                   </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
