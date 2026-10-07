import { ReactNode } from "react";

// Editorial section heading: gold kicker, bold Manrope title, optional lede.
export function SectionHeading({
  kicker,
  title,
  copy,
  center,
}: {
  kicker: string;
  title: ReactNode;
  copy?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={"lux-heading" + (center ? " lux-heading-center" : "")}>
      <span className="lux-kicker">{kicker}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
