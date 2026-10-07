import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// Shared scroll-reveal primitive. Under reduced motion it reports revealed
// immediately so content never animates in.
export function useInViewReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  return { ref, revealed: prefersReduced ? true : inView, prefersReduced };
}
