import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ValueFramework from "@/components/sections/ValueFramework";
import GeographicFocus from "@/components/sections/GeographicFocus";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import InsightsSection from "@/components/sections/InsightsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

interface HomeProps {
  className?: string;
}

function Home({ className }: HomeProps = {}) {
  return (
    <div className={`min-h-screen bg-slate-900 ${className}`}>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ValueFramework />
        <GeographicFocus />
        <ServicesSection />
        <AboutSection />
        <InsightsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
