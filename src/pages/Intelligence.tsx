import { Suspense } from "react";
import PageTransition from "../components/layout/PageTransition";
import InsightsSection from "../components/sections/InsightsSection";
import NewsIntelligenceFeed from "../components/sections/NewsIntelligenceFeed";
import Footer from "../components/layout/Footer";

export default function Intelligence() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-background text-foreground pt-32">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Market Intelligence</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 mt-4">Data-Driven <br/><span className="text-glow-secondary">Insights</span></h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Proprietary analysis and real-time intelligence from the forefront of the West African pharmaceutical landscape.
          </p>
        </div>

        <InsightsSection />
        <NewsIntelligenceFeed />
        
        <Footer />
      </div>
    </PageTransition>
  );
}
