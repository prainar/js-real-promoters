// The closed agentic loop — a genuine ordered sequence. The "Human Review" step
// sits between recommendation and action so a person stays in command.

export type LifecycleStage = {
  index: string;
  step: string;
  detail: string;
  human?: boolean;
};

export const LIFECYCLE: readonly LifecycleStage[] = [
  { index: "01", step: "Observe", detail: "Site cameras, drone photogrammetry, and daily logs come in." },
  { index: "02", step: "Understand", detail: "Visuals are mapped against the BIM model and the schedule." },
  { index: "03", step: "Reason", detail: "A slab cast four days ahead of the MEP rough-in sign-off is spotted." },
  { index: "04", step: "Recommend", detail: "A potential inspection conflict is flagged; a staging review is proposed." },
  { index: "05", step: "Human Review", detail: "The project engineer accepts, edits, or dismisses the alert.", human: true },
  { index: "06", step: "Act & Verify", detail: "The subcontractor is notified; the next site pass confirms resolution." },
] as const;
