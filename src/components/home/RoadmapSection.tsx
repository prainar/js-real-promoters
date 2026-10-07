import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { PreviewBadge } from "../common/PreviewBadge";
import { ROADMAP } from "../../data/roadmap";

export function RoadmapSection() {
  return (
    <section className="lux-section roadmap">
      <div className="shell">
        <div className="lux-head-row">
          <SectionHeading
            kicker="The roadmap"
            title={<>From intelligence toward <em>autonomous workflows.</em></>}
            copy="We're not promising full autonomy overnight. This is the long arc — each stage earns the next."
          />
          <PreviewBadge label="Vision — multi-year" />
        </div>
        <div className="roadmap-track">
          {ROADMAP.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.05}>
              <div className="roadmap-stage">
                <span className="roadmap-index">{s.index}</span>
                <h4>{s.name}</h4>
                <p>{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
