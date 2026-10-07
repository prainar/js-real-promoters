import { Link } from "../../App";
import { Reveal } from "../common/Reveal";
import { VISION_DISCLAIMER } from "../../data/labels";

export function FinalCTA() {
  return (
    <section className="lux-section lux-cta">
      <div className="shell">
        <Reveal>
          <span className="lux-kicker">Give your projects an intelligence layer</span>
          <h2>
            Build better. Let your AI workforce
            <br />
            handle the complexity.
          </h2>
          <p className="lux-cta-sub">
            Join the developers and builders modernizing how site visibility and project execution
            actually work.
          </p>
          <div className="lux-hero-actions">
            <Link to="/contact" className="button">
              Request access <i>→</i>
            </Link>
            <Link to="/platform" className="button button-ghost-dark">
              Explore the platform
            </Link>
          </div>
          <p className="lux-cta-note">{VISION_DISCLAIMER}</p>
        </Reveal>
      </div>
    </section>
  );
}
