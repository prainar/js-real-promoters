import { ASK } from "../../../data/dashboard";

export function AskYourProject() {
  return (
    <div className="ask-project">
      <div className="ask-query">
        <span className="ask-caret">&gt;</span> {ASK.query}
      </div>
      <div className="ask-answer">
        <p>{ASK.answer}</p>
        <div className="ask-sources">
          {ASK.sources.map((s) => (
            <span key={s} className="ask-source">[{s}]</span>
          ))}
        </div>
      </div>
    </div>
  );
}
