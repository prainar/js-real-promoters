// The AI workforce, grouped into three operational pillars. Each agent is
// described by capability, not performance claims. `icon` names a lucide icon,
// resolved in the component so this module stays React-free.

export type Agent = {
  id: string;
  name: string;
  icon: string;
  blurb: string;
};

export type Pillar = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  agents: readonly Agent[];
};

export const PILLARS: readonly Pillar[] = [
  {
    id: "reality",
    index: "01",
    name: "Reality & Site Vision",
    tagline: "Turn what's physically happening on site into structured project truth.",
    agents: [
      { id: "site-vision", name: "Site Vision Agent", icon: "ScanEye", blurb: "Reads site cameras and drone passes, classifies work stages, maps crew and equipment activity." },
      { id: "progress", name: "Progress Agent", icon: "GitCompareArrows", blurb: "Continuously compares observed work against the plan and explains the difference." },
      { id: "quality", name: "Quality Observer", icon: "ScanSearch", blurb: "Surfaces alignment anomalies and incomplete work for a human to review — never signs off." },
    ],
  },
  {
    id: "controls",
    index: "02",
    name: "Controls & Commercial",
    tagline: "Keep schedule, cost, and procurement honest against on-site reality.",
    agents: [
      { id: "schedule", name: "Schedule Agent", icon: "CalendarClock", blurb: "Tracks dependencies and the critical path, predicts where the next milestone is at risk." },
      { id: "cost", name: "Cost & BOQ Agent", icon: "Receipt", blurb: "Reconciles bill-of-quantities lines against observed progress to catch variance early." },
      { id: "procurement", name: "Procurement Agent", icon: "Truck", blurb: "Watches supplier lead times against the site's live consumption rate." },
    ],
  },
  {
    id: "governance",
    index: "03",
    name: "Governance & Memory",
    tagline: "Hold the project's risk, record, and reporting in one accountable place.",
    agents: [
      { id: "risk", name: "Risk Agent", icon: "TriangleAlert", blurb: "Correlates weather, milestone pace, and submittals to flag bottlenecks before they form." },
      { id: "documentation", name: "Documentation Agent", icon: "FolderSearch", blurb: "Indexes photos, drawings, invoices, and approvals so answers are a question, not a folder hunt." },
      { id: "communication", name: "Communication Agent", icon: "FileText", blurb: "Drafts daily logs, owner updates, and reports — each line traced to a source." },
    ],
  },
] as const;
