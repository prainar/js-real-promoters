import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { PreviewBadge } from "../common/PreviewBadge";
import { ILLUSTRATIVE_NOTE } from "../../data/labels";
import { PROJECT_NAME } from "../../data/dashboard";
import { MetricRibbon } from "./platform/MetricRibbon";
import { SiteCapturePane } from "./platform/SiteCapturePane";
import { AgentEventStream } from "./platform/AgentEventStream";
import { AskYourProject } from "./platform/AskYourProject";

export function PlatformPreview() {
  return (
    <section className="lux-section platform-preview">
      <div className="shell">
        <div className="lux-head-row">
          <SectionHeading
            kicker="The platform"
            title={<>One project. <em>One command surface.</em></>}
            copy="Site reality, schedule, cost, and the agent feed in a single view — so the next question is a sentence, not a folder hunt."
          />
          <PreviewBadge />
        </div>
        <Reveal>
          <div className="os-window">
            <div className="os-titlebar">
              <span className="os-dot" aria-hidden="true" />
              <span>Project: {PROJECT_NAME}</span>
              <span className="os-sep">·</span>
              <span>Active intelligence</span>
            </div>
            <div className="os-body">
              <MetricRibbon />
              <div className="os-stage">
                <SiteCapturePane />
                <AgentEventStream />
              </div>
              <AskYourProject />
            </div>
            <div className="os-footnote">{ILLUSTRATIVE_NOTE}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
