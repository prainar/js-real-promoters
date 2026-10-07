import { Link } from "../../App";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { PreviewBadge } from "../common/PreviewBadge";
import { Icon } from "../common/Icon";
import { PILLARS } from "../../data/agents";
import { LIFECYCLE } from "../../data/lifecycle";
import { VISION_DISCLAIMER } from "../../data/labels";

const TECH = [
  { layer: "Ingestion", items: "Video (drones / CCTV) · BIM (IFC / Revit) · Documents (PDF / Excel) · Schedules (P6 / MS Project)" },
  { layer: "Orchestration", items: "Retrieval + vector search · spatial computer-vision models · agent coordination" },
  { layer: "Execution", items: "Role-based access · human-in-the-loop verification · automated reporting" },
];

export function PlatformPage() {
  return (
    <>
      <section className="lux-section platform-hero">
        <div className="shell">
          <Reveal>
            <span className="lux-kicker">The platform</span>
            <h1 className="platform-h1">
              Every agent, every feed,<br /><em>one accountable surface.</em>
            </h1>
            <p className="platform-lede">
              A closer look at the agentic operating system — the agents, the loop they run, the
              memory they build, and the architecture underneath.
            </p>
            <PreviewBadge />
          </Reveal>
        </div>
      </section>

      {/* Agents in detail */}
      <section className="lux-section lux-bg-2">
        <div className="shell">
          <SectionHeading
            kicker="The AI workforce"
            title={<>Nine specialists, <em>three engines.</em></>}
            copy="Each agent has one job and hands its findings to a human. No agent acts on safety-critical work alone."
          />
          <div className="pillar-grid">
            {PILLARS.map((pillar, pi) => (
              <Reveal key={pillar.id} delay={pi * 0.08}>
                <div className="pillar">
                  <span className="pillar-index">{pillar.index}</span>
                  <h3>{pillar.name}</h3>
                  <p className="pillar-tagline">{pillar.tagline}</p>
                  <ul className="agent-list">
                    {pillar.agents.map((a) => (
                      <li key={a.id} className="agent-row">
                        <span className="agent-icon"><Icon name={a.icon} size={20} /></span>
                        <div><strong>{a.name}</strong><span>{a.blurb}</span></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="lux-section">
        <div className="shell">
          <SectionHeading
            kicker="The loop"
            title={<>Observe → <em>Act &amp; Verify.</em></>}
            copy="The same closed loop runs on every finding, with a human checkpoint before anything acts."
          />
          <Reveal>
            <ol className="pipeline">
              {LIFECYCLE.map((s) => (
                <li key={s.index} className={"pipeline-stage" + (s.human ? " pipeline-stage-human" : "")}>
                  <span className="pipeline-index">{s.index}</span>
                  <h4>{s.step}</h4>
                  <p>{s.detail}</p>
                  {s.human && <span className="pipeline-tag">Human in command</span>}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Project memory */}
      <section className="lux-section lux-bg-2">
        <div className="shell">
          <SectionHeading
            kicker="Project memory"
            title={<>Your project <em>remembers everything.</em></>}
            copy="Captures, documents, decisions, and inspections accumulate into one searchable record — so history is a question, not an archive dig."
          />
        </div>
      </section>

      {/* Technology architecture */}
      <section className="lux-section">
        <div className="shell">
          <SectionHeading
            kicker="Technology"
            title={<>Built on the <em>intelligence stack</em> of modern construction.</>}
            copy="Only technologies we use or genuinely plan to use — framed as the architecture we're building toward."
          />
          <div className="tech-stack">
            {TECH.map((t, i) => (
              <Reveal key={t.layer} delay={i * 0.07}>
                <div className="tech-layer">
                  <span className="tech-layer-name">{t.layer}</span>
                  <p>{t.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lux-section lux-cta">
        <div className="shell">
          <Reveal>
            <span className="lux-kicker">Give your projects an intelligence layer</span>
            <h2>See what an AI-native construction workflow looks like.</h2>
            <div className="lux-hero-actions">
              <Link to="/contact" className="button">Request access <i>→</i></Link>
              <Link to="/" className="button button-ghost-dark">Back to overview</Link>
            </div>
            <p className="lux-cta-note">{VISION_DISCLAIMER}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
