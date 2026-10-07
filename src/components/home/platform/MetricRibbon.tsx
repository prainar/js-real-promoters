import clsx from "clsx";
import { METRICS } from "../../../data/dashboard";

export function MetricRibbon() {
  return (
    <div className="metric-ribbon">
      {METRICS.map((m) => (
        <div key={m.label} className={clsx("metric", m.state === "flagged" && "metric-flagged")}>
          <span className="metric-label">{m.label}</span>
          <strong className="metric-value">{m.value}</strong>
          <span className="metric-note">{m.note}</span>
        </div>
      ))}
    </div>
  );
}
