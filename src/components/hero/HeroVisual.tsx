import { motion, useReducedMotion } from "framer-motion";
import { HeroModel3D } from "../three/HeroModel3D";

interface HeroVisualProps {
  enable3D?: boolean;
  parallaxX: number;
  parallaxY: number;
}

export function HeroVisual({ enable3D = true, parallaxX, parallaxY }: HeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto mt-10 flex h-[340px] w-[340px] items-center justify-center rounded-full md:h-[430px] md:w-[430px]"
      animate={shouldReduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
      transition={{ type: "spring", stiffness: 52, damping: 16 }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent-cyan/25 via-accent-violet/15 to-transparent blur-2xl" />
      <div className="absolute -right-4 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute inset-[16%] rounded-full border border-white/15 bg-white/5" />
      {enable3D ? (
        <HeroModel3D intensity={1} autoRotate={!shouldReduceMotion} />
      ) : (
        <div className="relative h-[240px] w-[240px] rounded-full border border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/30 to-transparent shadow-glow" />
      )}
    </motion.div>
  );
}
