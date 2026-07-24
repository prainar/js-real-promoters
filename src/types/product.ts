export type StageKey = "concept" | "research" | "build" | "test" | "deploy";

export interface ProductMetric {
  label: string;
  value: number;
  unit?: string;
  trend?: "up" | "down" | "stable";
}

export interface FloatingCardData {
  id: string;
  title: string;
  value: string;
  hint: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  short: string;
  detail: string;
}

export interface TimelineStage {
  key: StageKey;
  label: string;
  description: string;
}

export interface DepthLayer {
  id: string;
  title: string;
  description: string;
  state: string;
  icon: string;
}
