import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInViewReveal } from "../../hooks/useInViewReveal";

type RevealProps = { children: ReactNode; delay?: number; className?: string };

// Fade + small rise as the element scrolls into view, once. Reduced motion
// renders it in place with no transform.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, revealed, prefersReduced } = useInViewReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
      animate={revealed ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
