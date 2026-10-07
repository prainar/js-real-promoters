import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { PreviewBadge } from "../common/PreviewBadge";

export function SiteIntelligenceSection() {
  return (
    <section className="lux-section lux-bg-2 site-intel">
      <div className="shell lux-split">
        <Reveal className="lux-split-media">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85"
            alt="Construction site under observation"
            draggable={false}
          />
          <span className="site-intel-tag">Illustrative · Zone A · 1 item to review</span>
        </Reveal>
        <div className="lux-split-copy">
          <SectionHeading
            kicker="Site intelligence"
            title={<>Site captures become <em>searchable memory.</em></>}
            copy="The goal: every image, video, and site capture joins the project's evolving record — so a question about last week's pour is answered in seconds, with the exact frame attached."
          />
          <div className="lux-split-badge"><PreviewBadge /></div>
        </div>
      </div>
    </section>
  );
}
