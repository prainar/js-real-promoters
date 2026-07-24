import type { DepthLayer, FeatureItem, FloatingCardData, ProductMetric, TimelineStage } from "../types/product";

export const heroContent = {
  headline: "A Calm Interface For Deep Product Intelligence",
  subtext:
    "Visually understand purpose, live status, and evolution through cinematic depth, subtle motion, and premium clarity."
};

export const floatingCards: FloatingCardData[] = [
  { id: "f1", title: "Inference Latency", value: "31 ms", hint: "Realtime", position: "top-left" },
  { id: "f2", title: "Model Confidence", value: "98.2%", hint: "Stable", position: "top-right" },
  { id: "f3", title: "System Uptime", value: "99.99%", hint: "30-day", position: "bottom-left" },
  { id: "f4", title: "Current Throughput", value: "14.8k/s", hint: "Live", position: "bottom-right" }
];

export const status = {
  level: 76,
  stageLabel: "System Status",
  stageValue: "Stage 3 Active",
  microText: "System Optimizing"
};

export const metrics: ProductMetric[] = [
  { label: "Performance", value: 86, trend: "up" },
  { label: "Stability", value: 78, trend: "up" },
  { label: "Intelligence", value: 91, trend: "stable" }
];

export const depthLayers: DepthLayer[] = [
  {
    id: "d1",
    title: "Adaptive Engine",
    description: "Learns usage context and self-tunes execution paths for stable responsiveness.",
    state: "Active",
    icon: "AI"
  },
  {
    id: "d2",
    title: "Predictive Routing",
    description: "Forecasts load patterns and pre-allocates resources before spikes occur.",
    state: "Monitoring",
    icon: "PR"
  },
  {
    id: "d3",
    title: "Trust Layer",
    description: "Applies policy, auditability, and explainability checks with low-latency gates.",
    state: "Validated",
    icon: "TL"
  }
];

export const features: FeatureItem[] = [
  {
    id: "ft1",
    icon: "NX",
    title: "Neural Orchestration",
    short: "Coordinates modules in real time for consistent outcomes.",
    detail: "Cross-layer coordination aligns speed, confidence, and reliability under dynamic workload conditions."
  },
  {
    id: "ft2",
    icon: "QL",
    title: "Quality Loop",
    short: "Continuous feedback keeps outputs sharp and dependable.",
    detail: "Signals from user behavior and validation channels refine system behavior without disruptive changes."
  },
  {
    id: "ft3",
    icon: "SP",
    title: "Secure Pipeline",
    short: "End-to-end safeguards with minimal performance impact.",
    detail: "Layered controls enforce policy boundaries while preserving throughput and responsiveness."
  },
  {
    id: "ft4",
    icon: "RT",
    title: "Realtime Telemetry",
    short: "Live instrumentation highlights health and trajectory.",
    detail: "Unified observability surfaces bottlenecks, drift, and execution quality in near real time."
  },
  {
    id: "ft5",
    icon: "DX",
    title: "Developer Surface",
    short: "Composable APIs and controls for rapid iteration.",
    detail: "A stable interface layer shortens experimentation cycles while preserving production constraints."
  },
  {
    id: "ft6",
    icon: "AG",
    title: "Autonomous Guardrails",
    short: "Proactive checks prevent regressions before release.",
    detail: "Automated policy and quality guardrails reduce operational risk across deployment stages."
  }
];

export const timelineStages: TimelineStage[] = [
  { key: "concept", label: "Concept", description: "Define product intent, value, and directional hypotheses." },
  { key: "research", label: "Research", description: "Validate opportunities and map intelligent interaction patterns." },
  { key: "build", label: "Build", description: "Implement architecture, core modules, and adaptive systems." },
  { key: "test", label: "Test", description: "Stress, verify, and calibrate behavior under real-world conditions." },
  { key: "deploy", label: "Deploy", description: "Release with observability, safeguards, and measured rollout." }
];

export const currentStage = "build" as const;
