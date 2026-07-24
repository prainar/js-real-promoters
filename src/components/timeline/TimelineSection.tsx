import { motion, useReducedMotion } from "framer-motion";
import type { StageKey, TimelineStage } from "../../types/product";
import { SectionShell } from "../layout/SectionShell";

interface TimelineSectionProps {
  stages: TimelineStage[];
  currentStage: StageKey;
}

export function TimelineSection({ stages, currentStage }: TimelineSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const currentIndex = stages.findIndex((s) => s.key === currentStage);

  return (
    <SectionShell
      id="timeline"
      title="Evolution Flow"
      subtitle="A clear progression from concept to deploy, with active momentum highlighted."
      className="pb-28"
    >
      <div className="glass-panel rounded-3xl p-6 md:p-8">
        <div className="relative hidden md:block">
          <div className="absolute left-0 top-8 h-[2px] w-full bg-white/10" />
          <motion.div
            className="absolute left-0 top-8 h-[2px] bg-accent-cyan shadow-glow"
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.max(((currentIndex + 1) / stages.length) * 100, 10)}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid grid-cols-5 gap-2">
            {stages.map((stage, idx) => {
              const active = idx <= currentIndex;
              const current = stage.key === currentStage;

              return (
                <div key={stage.key} className="relative pt-2">
                  <div
                    className={`h-3 w-3 rounded-full border ${
                      active ? "border-accent-cyan bg-accent-cyan shadow-glow" : "border-white/30 bg-bg-base"
                    }`}
                  />
                  <p className={`mt-4 text-sm font-medium ${current ? "text-accent-cyan" : "text-text-primary"}`}>{stage.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">{stage.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-5 md:hidden">
          {stages.map((stage, idx) => {
            const active = idx <= currentIndex;
            const current = stage.key === currentStage;

            return (
              <div key={stage.key} className="relative pl-8">
                {idx < stages.length - 1 && <div className="absolute left-[7px] top-4 h-[calc(100%+8px)] w-[1px] bg-white/15" />}
                <div
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border ${
                    active ? "border-accent-cyan bg-accent-cyan shadow-glow" : "border-white/30 bg-bg-base"
                  }`}
                />
                <p className={`text-sm font-medium ${current ? "text-accent-cyan" : "text-text-primary"}`}>{stage.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{stage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
