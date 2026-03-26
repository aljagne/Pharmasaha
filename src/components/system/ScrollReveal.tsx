import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 50,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If the user prefers reduced motion, render without animation wrappers
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 };
      case 'down': return { y: -distance, opacity: 0 };
      case 'left': return { x: distance, opacity: 0 };
      case 'right': return { x: -distance, opacity: 0 };
      case 'none': return { opacity: 0 };
      default: return { y: distance, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialOffset()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: once, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.76, 0, 0.24, 1], // The custom "cinematic" ease token defined in tailwind
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
