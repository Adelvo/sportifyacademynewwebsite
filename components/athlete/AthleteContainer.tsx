import type { ReactNode } from "react";

/**
 * Content width for the Athlete page only: 1120px max, narrower than the site-wide Container,
 * so the page reads as compact without touching other pages' layout.
 */
export function AthleteContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 ${className}`}>{children}</div>;
}
