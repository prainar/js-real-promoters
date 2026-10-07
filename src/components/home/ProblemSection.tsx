import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

const SOURCES = [
  "Site cameras", "Drone footage", "BIM / CAD", "Schedules", "BOQs",
  "Invoices", "Site photos", "WhatsApp threads", "Change orders", "Inspections",
];

export function ProblemSection() {
  return (
    <section className="lux-section lux-bg-2 problem">
      <div className="shell">
        <SectionHeading
          kicker="The operational blindspot"
          title={<>Modern sites generate endless data. <em>Almost no shared context.</em></>}
          copy="When documentation lives in email threads and site reality lives on CCTV, variance is discovered weeks too late. The feeds exist — the understanding between them doesn't."
        />
        <Reveal>
          <div className="problem-flow">
            <div className="problem-sources">
              {SOURCES.map((s) => (
                <span key={s} className="problem-chip">{s}</span>
              ))}
            </div>
            <span className="problem-arrow" aria-hidden="true">↓</span>
            <div className="problem-core">
              <span className="problem-core-k">JS Real Promoters · Orchestrator</span>
              <strong>Toward one ground truth for the project</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
