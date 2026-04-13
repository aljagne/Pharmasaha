import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../ui/Magnetic";
import { ARTICLES } from "../../lib/articles";

export default function NewsIntelligenceFeed() {
  // Use first 4 articles for the feed
  const articles = ARTICLES.slice(0, 4);

  return (
    <section className="bg-background relative" id="editorial">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5 z-20" />
      
      {/* Editorial Navigation / Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-secondary font-black tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase">Editorial Intelligence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[7rem] font-serif italic text-white leading-[0.9] md:leading-[0.85] tracking-tighter">
              The Currency of Market Clarity.
            </h2>
          </div>
          <Magnetic>
            <Link to="/intelligence" className="flex items-center gap-4 group mt-4 lg:mt-0" data-cursor="ARCHIVE">
              <span className="text-white/40 group-hover:text-primary transition-colors font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px]">Browse Intelligence Archive</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                <ArrowRight className="w-4 h-4 text-white group-hover:scale-125 transition-transform" />
              </div>
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* Horizontal Scroll Area — CSS snap scroll, no GSAP pin */}
      <div className="overflow-x-auto pb-24 md:pb-40 scrollbar-hide" data-cursor="DRAG (SCRUB)">
        <div 
          className="flex gap-6 md:gap-12 px-6 lg:px-24 w-max snap-x snap-mandatory"
        >
          {articles.map((article, idx) => (
            <Link 
              to={`/intelligence/${article.slug}`}
              key={article.slug} 
              className={`relative group cursor-pointer snap-start transition-[transform,opacity] duration-500 ease-out ${article.featured ? 'w-[70vw] md:w-[800px]' : 'w-[80vw] md:w-[500px]'}`}
              data-cursor="READ BRIEF"
            >
              {/* Glossy Editorial Card */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-[#001E22] shadow-2xl transition-colors duration-500 group-hover:border-primary/20">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                <div className="absolute top-8 left-8 flex items-center gap-4">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2 transition-colors duration-300 group-hover:bg-primary/20">
                    <Tag className="w-3 h-3 text-secondary" />
                    <span className="text-white font-black text-[9px] uppercase tracking-widest">{article.category}</span>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-6 mb-6 text-white/40 font-bold uppercase tracking-widest text-[9px]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {article.readingTime}
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className={`text-white font-serif tracking-tighter group-hover:text-primary transition-colors duration-500 ${article.featured ? 'text-3xl md:text-5xl leading-[0.9]' : 'text-2xl md:text-3xl leading-tight'}`}>
                    {article.title}
                  </h3>
                </div>
              </div>

              {/* Dynamic Number Index */}
              <div className="absolute -bottom-8 right-4 text-white/10 font-black italic text-[8rem] pointer-events-none group-hover:text-primary/20 transition-colors duration-500">
                0{idx + 1}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 z-20" />

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
