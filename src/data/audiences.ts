// Who the platform is built for. One clear job per audience.

export type Audience = { id: string; icon: string; role: string; value: string };

export const AUDIENCES: readonly Audience[] = [
  { id: "developers", icon: "Building2", role: "Developers", value: "See every project in the portfolio from one intelligence layer." },
  { id: "builders", icon: "HardHat", role: "Builders", value: "Reduce manual monitoring and improve project visibility." },
  { id: "managers", icon: "ClipboardList", role: "Project Managers", value: "Know what needs attention before the next meeting." },
  { id: "contractors", icon: "Wrench", role: "Contractors", value: "Track work, dependencies, and responsibilities in one place." },
  { id: "architects", icon: "DraftingCompass", role: "Architects", value: "Keep a continuous check between design intent and what's built." },
  { id: "owners", icon: "KeyRound", role: "Owners", value: "Understand progress without chasing updates." },
] as const;
