import { motion } from "framer-motion";
import { Link } from "../../App";
import { PreviewBadge } from "../common/PreviewBadge";

// Bold static editorial hero on warm paper. Big Manrope ExtraBold headline,
// gold kicker + hairline, one architectural image, ochre + ghost CTA.
export function HeroSection() {
  return (
    <section className="lux-hero">
      <div className="shell lux-hero-grid">
        <div className="lux-hero-copy">
          <motion.span
            className="lux-kicker"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The agentic OS for construction
          </motion.span>
          <span className="lux-hero-rule" aria-hidden="true" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
          >
            Construction is physical.
            <br />
            Its intelligence <em>shouldn't be.</em>
          </motion.h1>
          <motion.p
            className="lux-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
          >
            We're building an intelligence layer for the people who build the world — designed to
            connect site cameras, documents, schedules, and BOQs so teams can see variance, risk, and
            cost as it happens, not weeks later.
          </motion.p>
          <motion.div
            className="lux-hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <Link to="/platform" className="button">
              Explore the platform <i>→</i>
            </Link>
            <Link to="/contact" className="button button-ghost-dark">
              Talk to the team
            </Link>
          </motion.div>
          <motion.div
            className="lux-hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PreviewBadge label="Platform in development · engineer-led construction today" />
          </motion.div>
        </div>

        <motion.div
          className="lux-hero-visual"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1300&q=85"
            alt="Modern architectural construction project"
            draggable={false}
          />
          <span className="lux-hero-caption">Observe · Reason · Verify — with a human in command</span>
        </motion.div>
      </div>
    </section>
  );
}
