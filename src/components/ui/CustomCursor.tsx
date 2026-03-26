import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) {
        const text = (target.closest("[data-cursor]") as HTMLElement).getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovering(true);
        gsap.to(follower, {
          scale: 3,
          duration: 0.3,
          backgroundColor: "rgba(186, 185, 255, 0.2)",
        });
      }
    };

    const onMouseLeave = () => {
      setCursorText("");
      setIsHovering(false);
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        backgroundColor: "transparent",
      });
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
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
      >
        {isHovering && (
          <span className="text-[6px] font-black uppercase tracking-tighter text-white animate-fade-in whitespace-nowrap px-1">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
