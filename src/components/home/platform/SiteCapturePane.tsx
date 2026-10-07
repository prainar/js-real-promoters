import clsx from "clsx";
import { CAPTURE_BOXES } from "../../../data/dashboard";

// Illustrative "live capture" — an architectural image with percentage-placed
// bounding boxes so they scale responsively.
export function SiteCapturePane() {
  return (
    <div className="capture-pane">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85"
        alt=""
        className="capture-img"
        draggable={false}
      />
      <span className="capture-tag">Illustrative capture · Zone B/C</span>
      {CAPTURE_BOXES.map((b) => (
        <div
          key={b.label}
          className={clsx("bbox", b.state === "flagged" && "bbox-flagged")}
          style={{ top: `${b.top}%`, left: `${b.left}%`, width: `${b.width}%`, height: `${b.height}%` }}
        >
          <span className="bbox-label">{b.label}</span>
        </div>
      ))}
    </div>
  );
}
