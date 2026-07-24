import { useState, type PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticCardProps extends PropsWithChildren {
  className?: string;
  intensity?: number;
}

export function MagneticCard({ className = "", intensity = 10, children }: MagneticCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 0, y: 0 });

  return (
    <motion.div
      className={className}
      onMouseMove={(event) => {
        if (shouldReduceMotion) {
          return;
        }
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        setTilt({
          rx: py * -intensity,
          ry: px * intensity,
          x: px * 8,
          y: py * 8
        });
      }}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0, x: 0, y: 0 })}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              rotateX: tilt.rx,
              rotateY: tilt.ry,
              x: tilt.x,
              y: tilt.y
            }
      }
      transition={{ type: "spring", stiffness: 150, damping: 16, mass: 0.45 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
