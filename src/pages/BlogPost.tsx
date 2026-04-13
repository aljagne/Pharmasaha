import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CalendarDays,
  ChevronRight,
  Bookmark,
  Share2,
  Building2,
  ExternalLink,
} from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import Footer from "../components/layout/Footer";
import { getArticleBySlug, getRelatedArticles, type Article } from "../lib/articles";
import { PARTNERS } from "../lib/partners";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────
   READING PROGRESS BAR
   ───────────────────────────────────────────────────────── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
      <div
        className="h-full transition-[width] duration-75 ease-linear"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #745A37, #D4A855, #BAB9FF)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   RELATED ARTICLE CARD
   ───────────────────────────────────────────────────────── */
function RelatedCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/intelligence/${article.slug}`}
      className="group block"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 bg-white/[0.02]">
        <div className="aspect-[16/9] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-[9px] text-white/30 font-mono">{article.readingTime}</span>
          </div>
          <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {article.title}
          </h4>
          <div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read Article <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN BLOG POST PAGE
   ───────────────────────────────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 3) : [];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  // 404 fallback
  if (!article) {
    return (
      <PageTransition>
        <div className="flex flex-col min-h-screen bg-background text-foreground pt-40 items-center justify-center">
          <h1 className="text-6xl font-black text-white mb-4">404</h1>
          <p className="text-white/50 mb-8">Article not found.</p>
          <button
            onClick={() => navigate("/intelligence")}
            className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <ReadingProgress />

      <div className="min-h-screen bg-background text-foreground">
        {/* ─── HERO ─── */}
        <div className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

          {/* Back Button */}
          <div className="absolute top-28 left-6 lg:left-12 z-20">
            <Link
              to="/intelligence"
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Intelligence Archive</span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 pb-12 lg:pb-16 max-w-5xl z-10">
            <div className="hero-reveal hero-reveal-1 flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-2 text-white/40 text-[10px] font-mono tracking-wide">
                <CalendarDays className="w-3 h-3" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2 text-white/40 text-[10px] font-mono tracking-wide">
                <Clock className="w-3 h-3" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="hero-reveal hero-reveal-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
              {article.title}
            </h1>

            <p className="hero-reveal hero-reveal-3 text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              {article.excerpt}
            </p>

            <div className="hero-reveal hero-reveal-4 flex items-center gap-4 mt-8">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-[10px] uppercase tracking-widest font-bold">
                <Bookmark className="w-3.5 h-3.5" /> Save
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-[10px] uppercase tracking-widest font-bold">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>
        </div>

        {/* ─── TWO-COLUMN BODY ─── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* ── MAIN CONTENT ── */}
            <article className="flex-1 min-w-0">
              <div className="w-20 h-px bg-gradient-to-r from-primary to-secondary mb-12" />

              {article.body.map((section, i) => (
                <div key={i} className="mb-12 lg:mb-16">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6 leading-tight">
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-white/60 text-base md:text-lg leading-[1.9] font-light">
                    {section.content}
                  </p>

                  {section.pullQuote && (
                    <blockquote className="my-10 py-8 px-8 border-l-2 border-primary bg-white/[0.02] rounded-r-2xl relative">
                      <div className="absolute top-4 left-4 text-primary/20 text-6xl font-serif leading-none">"</div>
                      <p className="text-white/80 text-xl md:text-2xl font-light italic leading-relaxed pl-6">
                        {section.pullQuote}
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}

              <div className="mt-16 pt-8 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    PS
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block">PharmaSaha Intelligence</span>
                    <span className="text-white/30 text-xs font-mono tracking-wide">
                      Research & Analytics Division
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-8">
              <div className="lg:sticky lg:top-24 space-y-8">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-5">
                    In This Article
                  </h4>
                  <ul className="space-y-3">
                    {article.body.map(
                      (section, i) =>
                        section.heading && (
                          <li key={i}>
                            <button
                              className="text-sm text-white/50 hover:text-primary transition-colors text-left leading-snug flex items-start gap-2 group"
                              onClick={() => {
                                const headings = document.querySelectorAll("article h2");
                                headings[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}
                            >
                              <ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-primary/40 group-hover:text-primary transition-colors" />
                              {section.heading}
                            </button>
                          </li>
                        )
                    )}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/[0.04] to-transparent">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/70 mb-5 flex items-center gap-2">
                    <Building2 className="w-3 h-3" />
                    Partner Spotlight
                  </h4>
                  <div className="space-y-4">
                    {PARTNERS.map((partner, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-xs font-black">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <span className="text-white text-sm font-bold block leading-tight group-hover:text-primary transition-colors">
                            {partner.name}
                          </span>
                          <span className="text-white/30 text-[10px] tracking-wide">{partner.type}</span>
                          <p className="text-white/40 text-xs mt-1 leading-relaxed">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="p-6 rounded-2xl border border-secondary/15 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(186,185,255,0.06) 0%, rgba(0,30,34,0.4) 100%)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-[40px] pointer-events-none" />
                  <h4 className="text-white font-bold text-base mb-2 relative">
                    Want exclusive insights?
                  </h4>
                  <p className="text-white/40 text-xs mb-5 leading-relaxed relative">
                    Get first access to our proprietary market reports and intelligence briefs.
                  </p>
                  <Link
                    to="/gateway"
                    className="relative flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Request Access <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ─── NEXT READS ─── */}
        {relatedArticles.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
            <div className="border-t border-white/5 pt-16">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/70 block mb-2">
                    Continue Reading
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    Next <span className="text-white/30">Reads</span>
                  </h3>
                </div>
                <Link
                  to="/intelligence"
                  className="hidden md:flex items-center gap-3 text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest group"
                >
                  View All
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedArticles.map((a) => (
                  <RelatedCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </PageTransition>
  );
}
