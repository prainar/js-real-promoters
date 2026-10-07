import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { LIFECYCLE } from "../../data/lifecycle";

export function HowItWorksSection() {
  return (
    <section className="lux-section howitworks">
      <div className="shell">
        <SectionHeading
          kicker="How it works"
          title={<>From observation to action — <em>a closed loop.</em></>}
          copy="Every finding runs the same path. The loop only acts after a person signs off, then verifies the result on the next site pass."
        />
        <Reveal>
          <ol className="pipeline" aria-label="Agentic lifecycle">
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
  );
}
