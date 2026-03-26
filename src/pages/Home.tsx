import PageTransition from "../components/layout/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import TrustBar from "../components/sections/TrustBar";
import GlobalNetworkMap from "../components/sections/GlobalNetworkMap";
import CapabilitiesMatrix from "../components/sections/CapabilitiesMatrix";
import InstitutionalEngagement from "../components/sections/InstitutionalEngagement";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import ComplianceMatrix from "../components/sections/ComplianceMatrix";
import LeadershipSection from "../components/sections/LeadershipSection";
import InsightsSection from "../components/sections/InsightsSection";
import NewsIntelligenceFeed from "../components/sections/NewsIntelligenceFeed";
import StoryTimeline from "../components/sections/StoryTimeline";
import ContactSection from "../components/sections/ContactSection";
import InvestorGateway from "../components/sections/InvestorGateway";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-background text-foreground">

        {/* Intro */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Trust & Connections */}
        <TrustBar />

        {/* Our Story */}
        <section id="our-story" className="pt-20">
          <div className="max-w-7xl mx-auto px-6 mb-8 mt-24 text-center">
            <h2 className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The Genesis</h3>
          </div>
          <StoryTimeline />
        </section>

        {/* Global Network Map */}
        <GlobalNetworkMap />

        {/* --- Phase VII: The Master Blueprint 6-Pillars --- */}
        <section id="solutions" className="pt-10">
          <CapabilitiesMatrix />
          <InstitutionalEngagement />
        </section>

        {/* --- Phase V: Corporate Proof --- */}
        <CaseStudiesSection />
        <ComplianceMatrix />
        <LeadershipSection />

        {/* Intelligence (Insights + News Feed) */}
        <section id="intelligence" className="pt-10">
          <InsightsSection />
          <NewsIntelligenceFeed />
        </section>

        {/* --- Phase VII: Investor Gateway --- */}
        <InvestorGateway />

        {/* Contact (Concierge) */}
        <section id="contact" className="pt-10">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />

      </div>
    </PageTransition>
  );
}
