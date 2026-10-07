// From project intelligence toward increasingly autonomous workflows. Framed as
// vision, not a shipped feature list.

export type RoadmapStage = { index: string; name: string; detail: string };

export const ROADMAP: readonly RoadmapStage[] = [
  { index: "01", name: "See", detail: "Computer vision and site understanding." },
  { index: "02", name: "Understand", detail: "Project-wide intelligence across every feed." },
  { index: "03", name: "Reason", detail: "Agents connect events, plans, and history." },
  { index: "04", name: "Predict", detail: "Identify emerging risks and opportunities early." },
  { index: "05", name: "Act", detail: "Agents assist with workflows and coordination." },
  { index: "06", name: "Autonomous", detail: "Construction systems increasingly coordinate themselves." },
] as const;
