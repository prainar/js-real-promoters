import { motion, useReducedMotion } from "framer-motion";

interface ProgressRingProps {
  value: number;
  size?: number;
  stroke?: number;
  label: string;
}

export function ProgressRing({ value, size = 210, stroke = 14, label }: ProgressRingProps) {
  const shouldReduceMotion = useReducedMotion();
  const clamped = Math.max(0, Math.min(100, value));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#7AB6FF"
          strokeLinecap="round"
          strokeWidth={stroke}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ strokeDasharray: circumference, filter: "drop-shadow(0 0 10px rgba(122,182,255,0.55))" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-4xl font-semibold text-text-primary">{clamped}%</div>
        <div className="mt-2 text-xs uppercase tracking-wider text-text-muted">{label}</div>
      </div>
    </div>
  );
}
