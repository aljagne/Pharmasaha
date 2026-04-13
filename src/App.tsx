import { Suspense, useEffect, useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import NotFound from "./pages/NotFound";

// Layout components
import { NoiseOverlay } from "./components/ui/noise-overlay";
import Header from "./components/layout/Header";
import CustomCursor from "./components/ui/CustomCursor";

// Redirect /contact to homepage #contact section
function ContactRedirect() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);
  return <Home />;
}

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

  // 2. SCROLL RESET ON ROUTE CHANGE
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
            <Route path="/contact" element={<ContactRedirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
