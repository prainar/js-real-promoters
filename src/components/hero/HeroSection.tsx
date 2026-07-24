import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { FloatingCardData } from "../../types/product";
import { GlowBadge } from "../ui/GlowBadge";
import { HeroVisual } from "./HeroVisual";
import { FloatingInfoCard } from "./FloatingInfoCard";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  floatingCards: FloatingCardData[];
  enable3D?: boolean;
}

export function HeroSection({ headline, subtext, floatingCards, enable3D = true }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const parallax = useMemo(() => {
    if (shouldReduceMotion) {
      return { x: 0, y: 0 };
    }
    return { x: pointer.x * 12, y: pointer.y * 12 };
  }, [pointer, shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="surface relative flex min-h-screen items-center px-6 pb-20 pt-24 md:px-10 lg:px-16"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        setPointer({ x, y });
      }}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={shouldReduceMotion ? undefined : { x: pointer.x * 8, y: pointer.y * 8 }}
        transition={{ type: "spring", stiffness: 45, damping: 14 }}
      >
        <div className="absolute left-[8%] top-[22%] h-28 w-28 rounded-full bg-accent-cyan/15 blur-3xl" />
        <div className="absolute right-[11%] top-[34%] h-36 w-36 rounded-full bg-accent-violet/15 blur-3xl" />
      </motion.div>
      <div className="mx-auto w-full max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowBadge text="Futuristic Product Reveal" />
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-6xl">
            {headline}
          </h1>
          <p className="section-subtitle mx-auto mt-6 max-w-2xl text-sm md:text-base">{subtext}</p>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-4xl md:mt-14">
          <HeroVisual enable3D={enable3D} parallaxX={parallax.x} parallaxY={parallax.y} />
          <div className="hidden md:block">
            {floatingCards.map((card) => (
              <FloatingInfoCard key={card.id} card={card} />
            ))}
          </div>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2 md:hidden">
            {floatingCards.map((card) => (
              <div key={card.id} className="glass-panel min-w-40 rounded-2xl p-3">
                <div className="text-[11px] uppercase tracking-wider text-text-muted">{card.title}</div>
                <div className="mt-2 text-lg font-semibold text-text-primary">{card.value}</div>
                <div className="mt-1 text-xs text-accent-cyan">{card.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
