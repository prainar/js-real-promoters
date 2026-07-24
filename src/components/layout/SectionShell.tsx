import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface SectionShellProps extends PropsWithChildren {
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionShell({ id, className = "", title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className={`relative px-6 py-20 md:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(title || subtitle) && (
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            className="mb-10"
          >
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle mt-4 max-w-2xl">{subtitle}</p>}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
