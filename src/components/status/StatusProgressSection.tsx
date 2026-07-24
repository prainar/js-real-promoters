import { motion } from "framer-motion";
import type { ProductMetric } from "../../types/product";
import { SectionShell } from "../layout/SectionShell";
import { GlassPanel } from "../ui/GlassPanel";
import { ProgressBar } from "../ui/ProgressBar";
import { ProgressRing } from "../ui/ProgressRing";

interface StatusProgressSectionProps {
  level: number;
  stageLabel: string;
  stageValue: string;
  microText: string;
  metrics: ProductMetric[];
}

export function StatusProgressSection({ level, stageLabel, stageValue, microText, metrics }: StatusProgressSectionProps) {
  return (
    <SectionShell
      id="status"
      title="Product Intelligence"
      subtitle="Track live maturity and system direction with smooth, signal-first status visualization."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <GlassPanel className="p-8">
          <ProgressRing value={level} label="Level" />
          <div className="mt-8 text-center">
            <p className="text-xs uppercase tracking-wider text-text-muted">{stageLabel}</p>
            <p className="mt-2 text-lg font-semibold text-text-primary">{stageValue}</p>
            <p className="mt-3 inline-flex rounded-full border border-accent-cyanSoft bg-accent-cyanSoft/20 px-3 py-1 text-xs text-accent-cyan">
              {microText}
            </p>
          </div>
        </GlassPanel>

        <GlassPanel className="p-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } }
            }}
            className="space-y-6"
          >
            {metrics.map((metric) => (
              <motion.div key={metric.label} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
                <ProgressBar metric={metric} />
              </motion.div>
            ))}
          </motion.div>
        </GlassPanel>
      </div>
    </SectionShell>
  );
}
