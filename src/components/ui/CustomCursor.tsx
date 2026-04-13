import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const followerX = useSpring(0, { damping: 30, stiffness: 150, mass: 0.8 });
  const followerY = useSpring(0, { damping: 30, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) {
        const text = (target.closest("[data-cursor]") as HTMLElement).getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovering(true);
      }
    };

    const onMouseLeave = () => {
      setCursorText("");
      setIsHovering(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter as any);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter as any);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [cursorX, cursorY, followerX, followerY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div 
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <motion.div 
        style={{ x: followerX, y: followerY }}
        animate={{
          scale: isHovering ? 3 : 1,
          backgroundColor: isHovering ? "rgba(186, 185, 255, 0.2)" : "transparent",
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
      >
        {isHovering && (
          <span className="text-[6px] font-black uppercase tracking-tighter text-white animate-fade-in whitespace-nowrap px-1" style={{ transform: "scale(0.33)" }}>
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
