interface GlowBadgeProps {
  text: string;
}

export function GlowBadge({ text }: GlowBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent-cyanSoft bg-gradient-to-r from-accent-cyanSoft/60 to-accent-violet/20 px-3 py-1 text-xs font-medium tracking-wide text-accent-cyan shadow-glow">
      {text}
    </span>
  );
}
