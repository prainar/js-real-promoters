import { motion } from "framer-motion";

interface HeroModel3DProps {
  intensity?: number;
  autoRotate?: boolean;
}

export function HeroModel3D({ intensity = 1, autoRotate = true }: HeroModel3DProps) {
  return (
    <motion.div
      className="relative h-[280px] w-[280px] rounded-full"
      animate={autoRotate ? { rotate: 360 } : undefined}
      transition={autoRotate ? { duration: 36 / intensity, repeat: Infinity, ease: "linear" } : undefined}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-white/20 bg-gradient-to-br from-accent-cyan/35 via-accent-violet/20 to-transparent blur-[0.5px]" />
      <div className="absolute inset-6 rounded-full border border-accent-cyan/30" />
      <div className="absolute inset-14 rounded-full border border-white/15" />
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-cyan/40 to-accent-violet/30 shadow-glow" />
    </motion.div>
  );
}
