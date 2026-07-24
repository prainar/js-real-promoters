import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { DepthLayer } from "../../types/product";
import { SectionShell } from "../layout/SectionShell";
import { GlassPanel } from "../ui/GlassPanel";
import { MagneticCard } from "../ui/MagneticCard";

interface InteractiveDepthSectionProps {
  layers: DepthLayer[];
}

export function InteractiveDepthSection({ layers }: InteractiveDepthSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <SectionShell
      id="depth"
      title="Interactive Depth Experience"
      subtitle="Foreground, midground, and background layers move at distinct speeds to express product depth."
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 md:p-8"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          setOffset({ x, y });
        }}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  backgroundPositionX: `${50 + offset.x * 2.2}%`,
                  backgroundPositionY: `${50 + offset.y * 2.2}%`
                }
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(122,182,255,0.18), transparent 45%), linear-gradient(120deg, rgba(141,123,255,0.11), transparent)",
            opacity: 0.7
          }}
        />
        <motion.div
          className="pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-accent-violet/15 blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: offset.x * 24, y: offset.y * 18 }}
          transition={{ type: "spring", stiffness: 58, damping: 18 }}
        />
        <motion.div
          className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-accent-cyan/15 blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: offset.x * -20, y: offset.y * -14 }}
          transition={{ type: "spring", stiffness: 58, damping: 18 }}
        />

        <div className="relative grid gap-4 md:grid-cols-3">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -4 }}
            >
              <MagneticCard intensity={8}>
                <GlassPanel className="h-full p-6 transition-shadow duration-300 hover:shadow-glow">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent-cyanSoft bg-accent-cyanSoft/20 text-sm font-semibold text-accent-cyan">
                    {layer.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">{layer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{layer.description}</p>
                  <div className="mt-5 inline-flex rounded-full border border-accent-cyanSoft px-3 py-1 text-xs text-accent-cyan">
                    {layer.state}
                  </div>
                </GlassPanel>
              </MagneticCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
