import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface StaggerTextProps {
  text: string;
  className?: string;
  delayStart?: number;
  staggerDuration?: number;
  wordMode?: boolean; // If true, staggers word by word instead of character by character
  once?: boolean;
}

export default function StaggerText({
  text,
  className = '',
  delayStart = 0,
  staggerDuration = 0.03,
  wordMode = false,
  once = true
}: StaggerTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  // Tokenize the string into either words or characters
  const elements = wordMode ? text.split(' ') : text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDuration, delayChildren: delayStart * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45, // Add a 3D peeling effect for luxury feel
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, margin: "-50px" }}
      className={className}
    >
      {elements.map((element, index) => (
        <motion.span
          variants={child}
          style={{ 
            display: 'inline-block',
            marginRight: wordMode ? '0.25em' : '0em', // add space if splitting by words
            willChange: 'transform, opacity'
          }}
          key={index}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.div>
  );
}
