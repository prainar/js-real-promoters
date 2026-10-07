// Explicit named imports so Vite tree-shakes lucide to just these icons instead
// of bundling the whole registry. Keep in sync with icon names in src/data/*.
import {
  ScanEye, GitCompareArrows, ScanSearch, CalendarClock, Receipt, Truck,
  TriangleAlert, FolderSearch, FileText, Building2, HardHat, ClipboardList,
  Wrench, DraftingCompass, KeyRound, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  ScanEye, GitCompareArrows, ScanSearch, CalendarClock, Receipt, Truck,
  TriangleAlert, FolderSearch, FileText, Building2, HardHat, ClipboardList,
  Wrench, DraftingCompass, KeyRound,
};

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Cmp = MAP[name];
  return Cmp ? <Cmp size={size} strokeWidth={1.5} aria-hidden="true" /> : null;
}
