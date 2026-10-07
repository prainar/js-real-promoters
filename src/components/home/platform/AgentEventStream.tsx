import { EVENT_STREAM } from "../../../data/dashboard";

// CSS-only auto-scrolling feed — no timers. The list is duplicated so the
// translateY loop reads as continuous. Paused under reduced motion via CSS.
export function AgentEventStream() {
  const loop = [...EVENT_STREAM, ...EVENT_STREAM];
  return (
    <div className="event-stream">
      <span className="event-stream-head">Agent activity</span>
      <div className="event-stream-viewport">
        <ul className="event-stream-track">
          {loop.map((e, i) => (
            <li key={i} className="event-row">
              <span className="event-time">{e.time}</span>
              <span className="event-agent">{e.agent}</span>
              <span className="event-msg">{e.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
