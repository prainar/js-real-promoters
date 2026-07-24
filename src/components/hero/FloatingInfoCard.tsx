import { motion } from "framer-motion";
import type { FloatingCardData } from "../../types/product";

interface FloatingInfoCardProps {
  card: FloatingCardData;
}

const positionClasses: Record<FloatingCardData["position"], string> = {
  "top-left": "left-2 top-2 md:-left-10 md:top-10",
  "top-right": "right-2 top-2 md:-right-8 md:top-20",
  "bottom-left": "bottom-2 left-2 md:-left-12 md:bottom-16",
  "bottom-right": "bottom-2 right-2 md:-right-10 md:bottom-10"
};

export function FloatingInfoCard({ card }: FloatingInfoCardProps) {
  return (
    <motion.div
      className={`glass-panel absolute w-40 rounded-2xl p-3 md:w-48 ${positionClasses[card.position]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.7 },
        y: { duration: 5.8 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="text-[11px] uppercase tracking-wider text-text-muted">{card.title}</div>
      <div className="mt-2 text-xl font-semibold text-text-primary">{card.value}</div>
      <div className="mt-1 text-xs text-accent-cyan">{card.hint}</div>
    </motion.div>
  );
}
