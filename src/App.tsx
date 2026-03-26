import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from '@studio-freight/lenis';

import { NoiseOverlay } from "./components/ui/noise-overlay";
import Header from "./components/layout/Header";
import CustomCursor from "./components/ui/CustomCursor";

import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import Institutional from "./pages/Institutional";
import Gateway from "./pages/Gateway";
import OurStory from "./pages/OurStory";
import Intelligence from "./pages/Intelligence";
import BlogPost from "./pages/BlogPost";
import Network from "./pages/Network";
import Compliance from "./pages/Compliance";

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Reset scroll to top immediately on route change to prevent visual jump
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  return (
    <Suspense fallback={<div className="h-screen w-full bg-background flex items-center justify-center text-primary font-xl">Loading...</div>}>
      <div className="min-h-screen bg-background text-foreground flex flex-col relative">
        <CustomCursor />
        <NoiseOverlay />

        {/* The new Million-Dollar Navbar will go here */}
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/institutional" element={<Institutional />} />
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/intelligence/:slug" element={<BlogPost />} />
            <Route path="/network" element={<Network />} />
            <Route path="/compliance" element={<Compliance />} />
          </Routes>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
