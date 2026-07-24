import { motion, useReducedMotion } from "framer-motion";
import {
  currentStage,
  depthLayers,
  features,
  floatingCards,
  heroContent,
  metrics,
  status,
  timelineStages
} from "../data/productExperience";
import { InteractiveDepthSection } from "../components/depth/InteractiveDepthSection";
import { FeatureGridSection } from "../components/features/FeatureGridSection";
import { HeroSection } from "../components/hero/HeroSection";
import { StatusProgressSection } from "../components/status/StatusProgressSection";
import { TimelineSection } from "../components/timeline/TimelineSection";

export function ProductExperiencePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="page-bg">
      <motion.div
        className="surface"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <HeroSection
          headline={heroContent.headline}
          subtext={heroContent.subtext}
          floatingCards={floatingCards}
          enable3D
        />

        <StatusProgressSection
          level={status.level}
          stageLabel={status.stageLabel}
          stageValue={status.stageValue}
          microText={status.microText}
          metrics={metrics}
        />

        <InteractiveDepthSection layers={depthLayers} />
        <FeatureGridSection features={features} />
        <TimelineSection stages={timelineStages} currentStage={currentStage} />
      </motion.div>
    </div>
  );
}
