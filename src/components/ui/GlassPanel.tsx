import type { PropsWithChildren } from "react";

interface GlassPanelProps extends PropsWithChildren {
  className?: string;
}

export function GlassPanel({ className = "", children }: GlassPanelProps) {
  return <div className={`glass-panel rounded-3xl ${className}`}>{children}</div>;
}
