import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../ui/Magnetic";
import { ARTICLES } from "../../lib/articles";

gsap.registerPlugin(ScrollTrigger);

export default function NewsIntelligenceFeed() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current || !triggerRef.current) return;

    // Horizontal Scroll Animation
    const pin = gsap.to(scrollRef.current, {
      x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        end: "+=2000",
      }
    });

    // Headline Character Animation
    const headlines = document.querySelectorAll(".editorial-headline");
    headlines.forEach(headline => {
      const text = headline.textContent || "";
      headline.textContent = "";
      text.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "inline-block opacity-0 translate-y-4";
        headline.appendChild(span);
      });

      gsap.to(headline.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headline,
          start: "top 80%",
        }
      });
    });

    return () => {
      pin.kill();
    };
  }, []);

  // Use first 4 articles for the feed
  const articles = ARTICLES.slice(0, 4);

  return (
    <section className="bg-background relative" id="editorial" ref={triggerRef}>
      <div className="absolute top-0 left-0 w-full h-px bg-white/5 z-20" />
      
      {/* Editorial Navigation / Header (Static) */}
      <div className="pt-32 pb-16 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase">Editorial Intelligence</span>
            </div>
            <h2 className="editorial-headline text-5xl md:text-[7rem] font-serif italic text-white leading-[0.85] tracking-tighter">
              The Currency of Market Clarity.
            </h2>
          </div>
          <Magnetic>
            <Link to="/intelligence" className="flex items-center gap-4 group" data-cursor="ARCHIVE">
              <span className="text-white/40 group-hover:text-primary transition-colors font-bold uppercase tracking-[0.3em] text-[11px]">Browse Intelligence Archive</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                <ArrowRight className="w-4 h-4 text-white group-hover:scale-125 transition-transform" />
              </div>
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="overflow-hidden pb-40" data-cursor="DRAG (SCRUB)">
        <div 
          ref={scrollRef} 
          className="flex gap-12 px-6 lg:px-24 w-max"
        >
          {articles.map((article, idx) => (
            <Link 
              to={`/intelligence/${article.slug}`}
              key={article.slug} 
              className={`relative group cursor-pointer transition-all duration-700 ${article.featured ? 'w-[70vw] md:w-[800px]' : 'w-[80vw] md:w-[500px]'}`}
              data-cursor="READ BRIEF"
            >
              {/* Glossy Editorial Card */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-[#001E22] shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                {/* Specular Highlight */}
                <div className="absolute -inset-[100%] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#fff_0%,transparent_50%)]" />

                <div className="absolute top-8 left-8 flex items-center gap-4">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
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
              <div className="absolute -bottom-8 right-4 text-white/10 font-black italic text-[8rem] pointer-events-none group-hover:text-primary/20 transition-colors">
                0{idx + 1}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 z-20" />
    </section>
  );
}
