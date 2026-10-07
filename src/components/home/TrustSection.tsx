import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

const PRINCIPLES = [
  { title: "Cited by design", body: "Built to link every claim back to a source — an image, invoice, or drawing ID — rather than generate unsupported text." },
  { title: "No autonomous sign-off", body: "The platform is built to observe and calculate. Licensed professionals keep approval authority." },
  { title: "Your data stays yours", body: "Designed so blueprints, contracts, and site video remain private — not used to train public models." },
];

export function TrustSection() {
  return (
    <section className="lux-section trust">
      <div className="shell">
        <SectionHeading
          kicker="Human in the loop"
          title={<>AI that assists decisions. <em>People who stay in command.</em></>}
          copy="These are the principles we're building the platform to. The point isn't to remove the engineer — it's to make sure nothing important reaches them late."
        />
        <div className="trust-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="trust-card">
                <span className="trust-rule" aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
