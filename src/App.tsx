import { Suspense, useEffect, useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Core brand pages
import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import Institutional from "./pages/Institutional";
import Gateway from "./pages/Gateway";
import OurStory from "./pages/OurStory";
import Intelligence from "./pages/Intelligence";
import BlogPost from "./pages/BlogPost";
import Network from "./pages/Network";
import Compliance from "./pages/Compliance";

// Layout components
import { NoiseOverlay } from "./components/ui/noise-overlay";
import Header from "./components/layout/Header";
import CustomCursor from "./components/ui/CustomCursor";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // 1. SESSION INITIALIZATION
  useEffect(() => {
    // Disable browser scroll restoration to prevent jumps on navigation
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // One-time cinematic intro control
    const hasSeenIntro = sessionStorage.getItem("pharmasaha_intro_seen");
    if (hasSeenIntro) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem("pharmasaha_intro_seen", "true");
    }
  }, []);

  // 2. LENIS SMOOTH SCROLL ENGINE (Singleton)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 5), // Quintic easing for high-end inertial feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const requestId = requestAnimationFrame(raf);
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(requestId);
    };
  }, []);

  // 3. ATOMIC SCROLL RESET ON ROUTE CHANGE
  // useLayoutEffect ensures this runs before the browser paints the new route content
  useLayoutEffect(() => {
    // Clear GSAP memory to prevent it from trying to 'restore' element positions
    ScrollTrigger.clearScrollMemory();
    
    const forceTop = () => {
      window.scrollTo(0, 0);
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      // Force refresh for all ScrollTriggers on the new page
      ScrollTrigger.refresh();
    };

    // Immediate reset
    forceTop();

    // Secondary reset after a tiny delay to catch any late-mounting component layout shifts
    const timeout = setTimeout(forceTop, 100);
    
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <Suspense fallback={<div className="h-screen w-full bg-[#000508] flex items-center justify-center text-primary font-mono tracking-[0.3em] uppercase text-xs">Initializing Secure Environment...</div>}>
      <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-primary selection:text-white">
        <CustomCursor />
        <NoiseOverlay />
        <Header />

        <main className="flex-grow">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home isFirstVisit={isFirstVisit} />} />
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
