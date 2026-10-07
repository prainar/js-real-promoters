import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

const PRINCIPLES = [
  { title: "Deterministic citations", body: "No hallucinated reports. Every claim links back to an image, invoice, or drawing ID." },
  { title: "No autonomous sign-off", body: "The system observes and calculates. Licensed professionals keep approval authority." },
  { title: "Your data stays yours", body: "Blueprints, contracts, and site video are private — never trained into public models." },
];

export function TrustSection() {
  return (
    <section className="lux-section trust">
      <div className="shell">
        <SectionHeading
          kicker="Human in the loop"
          title={<>AI that assists decisions. <em>People who stay in command.</em></>}
          copy="The point isn't to remove the engineer. It's to make sure nothing important reaches them late."
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
