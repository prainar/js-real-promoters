import { motion, useReducedMotion } from "framer-motion";
import type { ProductMetric } from "../../types/product";

interface ProgressBarProps {
  metric: ProductMetric;
}

export function ProgressBar({ metric }: ProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-text-muted">{metric.label}</span>
        <span className="font-medium text-text-primary">{metric.value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-accent-cyan shadow-glow"
          initial={{ width: 0 }}
          whileInView={{ width: `${metric.value}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
