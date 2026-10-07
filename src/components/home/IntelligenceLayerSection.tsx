import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

const LAYERS = [
  { k: "Ingest", t: "Every feed, one place", d: "Video, documents, schedules, and cost data flow into a single project record." },
  { k: "Understand", t: "Context, not files", d: "The system maps each input to the plan, the stage, and the history around it." },
  { k: "Surface", t: "What matters, now", d: "Variance, risk, and next actions rise to the top — with the source attached." },
];

export function IntelligenceLayerSection() {
  return (
    <section className="lux-section intelligence">
      <div className="shell">
        <SectionHeading
          kicker="The intelligence layer"
          title={<>One layer, built to understand <em>the whole project.</em></>}
          copy="The platform is designed to sit between the field and the office — turning scattered inputs into one continuously-updated understanding your team can act on."
        />
        <div className="intel-grid">
          {LAYERS.map((l, i) => (
            <Reveal key={l.k} delay={i * 0.08}>
              <div className="intel-card">
                <span className="intel-k">{l.k}</span>
                <h3>{l.t}</h3>
                <p>{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
