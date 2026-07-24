import { motion, useReducedMotion } from "framer-motion";
import type { FeatureItem } from "../../types/product";
import { SectionShell } from "../layout/SectionShell";
import { GlassPanel } from "../ui/GlassPanel";
import { MagneticCard } from "../ui/MagneticCard";

interface FeatureGridSectionProps {
  features: FeatureItem[];
}

export function FeatureGridSection({ features }: FeatureGridSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="features"
      title="Feature Architecture"
      subtitle="Floating modular capabilities designed with minimal form and high-signal clarity."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, idx) => (
          <motion.article
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.018 }}
            className="group"
          >
            <MagneticCard intensity={7}>
              <GlassPanel className="h-full p-6 transition-all duration-300 group-hover:shadow-glow">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-accent-cyan">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{feature.short}</p>
                <div
                  className="mt-4 max-h-0 overflow-hidden border-t border-white/10 pt-0 text-sm leading-relaxed text-text-muted opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:pt-3 group-hover:opacity-100"
                >
                  {feature.detail}
                </div>
              </GlassPanel>
            </MagneticCard>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
