import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { Icon } from "../common/Icon";
import { PILLARS } from "../../data/agents";

export function WorkforceSection() {
  return (
    <section className="lux-section lux-bg-2 workforce">
      <div className="shell">
        <SectionHeading
          kicker="The AI workforce"
          title={<>A coordinated team, <em>not a chatbot.</em></>}
          copy="Nine specialist agents, grouped into three engines. Each reads the project, reasons about it, and hands findings to a human — with every claim traced to a source."
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
                      <div>
                        <strong>{a.name}</strong>
                        <span>{a.blurb}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
