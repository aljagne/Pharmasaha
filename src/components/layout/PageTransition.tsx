import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
    filter: "blur(5px)",
  },
  in: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    y: -15,
    filter: "blur(5px)",
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1.0], // Elegant custom easing
  duration: 0.6,
};

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full min-h-screen pt-20" // Padding for new fixed Island Navbar
    >
      {children}
    </motion.div>
  );
}
