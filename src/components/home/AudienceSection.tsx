import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { Icon } from "../common/Icon";
import { AUDIENCES } from "../../data/audiences";

export function AudienceSection() {
  return (
    <section className="lux-section lux-bg-2 audience">
      <div className="shell">
        <SectionHeading kicker="Built for the team" title="For the people who build the world." />
        <div className="audience-grid">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.05}>
              <div className="audience-card">
                <span className="audience-icon"><Icon name={a.icon} /></span>
                <h3>{a.role}</h3>
                <p>{a.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
