import { PREVIEW_LABEL } from "../../data/labels";

// The single, consistent "this is where we're heading" marker.
export function PreviewBadge({ label = PREVIEW_LABEL }: { label?: string }) {
  return (
    <span className="preview-badge">
      <span className="preview-badge-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
