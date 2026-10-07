// Mock content for the platform preview. Everything is illustrative — see
// data/labels.ts. No figure is presented as a real live metric.

export type Metric = { label: string; value: string; note: string; state?: "ok" | "flagged" };
export type BBox = { top: number; left: number; width: number; height: number; label: string; state: "ok" | "flagged" };
export type AgentEvent = { time: string; agent: string; message: string };

export const PROJECT_NAME = "Sector 9 Pavilion" as const;

export const METRICS: readonly Metric[] = [
  { label: "Project health", value: "94.2%", note: "All zones reporting", state: "ok" },
  { label: "Schedule variance", value: "−2.4d", note: "Critical path intact", state: "flagged" },
  { label: "Visual verification", value: "98.1%", note: "Active zones verified", state: "ok" },
  { label: "Cost run-rate", value: "+0.8%", note: "Within contingency", state: "ok" },
];

export const CAPTURE_BOXES: readonly BBox[] = [
  { top: 44, left: 10, width: 26, height: 30, label: "Zone B · Rebar tie verified", state: "ok" },
  { top: 30, left: 55, width: 30, height: 34, label: "Zone C · Formwork dev. 14mm", state: "flagged" },
];

export const EVENT_STREAM: readonly AgentEvent[] = [
  { time: "09:14", agent: "VISION", message: "Analyzed 62 drone orthomosaics." },
  { time: "09:16", agent: "SCHEDULE", message: "Re-baselined Milestone 04 dependencies." },
  { time: "09:19", agent: "RISK", message: "Flagged rebar delivery vs pour forecast." },
  { time: "09:22", agent: "COST", message: "Reconciled BOQ line 4.2 against progress." },
  { time: "09:25", agent: "DOCS", message: "Indexed 37 new site documents." },
  { time: "09:28", agent: "COMMS", message: "Generated weekly owner summary." },
];

export const ASK = {
  query: "Why is the Zone B structural pour held up?",
  answer: "Hold detected: pending third-party inspection sign-off on formwork tie-down.",
  sources: ["Drawing S-204", "Site Cam #02", "Submittal #89"],
} as const;
