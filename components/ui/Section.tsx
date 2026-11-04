import type { ReactNode } from "react";
import { Txt } from "./Txt";

export type Tone = "white" | "mist" | "midnight";

const tones: Record<Tone, string> = {
  white: "bg-white text-midnight",
  mist: "bg-mist text-midnight",
  midnight: "bg-midnight text-white",
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  text,
  tone = "white",
}: {
  title: string;
  text?: string;
  tone?: Tone;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {text && (
        <p className={`mt-4 text-lg ${tone === "midnight" ? "text-on-midnight-soft" : "text-ink-soft"}`}>
          <Txt>{text}</Txt>
        </p>
      )}
    </div>
  );
}

/** Short page header for pages without a full hero. */
export function PageHero({ eyebrow, headline, sub }: { eyebrow: string; headline: string; sub: string }) {
  return (
    <section className="bg-midnight py-16 text-white sm:py-24">
      <Container>
        <p className="mb-4 font-semibold text-electric-gradient">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{headline}</h1>
        <p className="mt-6 max-w-2xl text-lg text-on-midnight-soft">{sub}</p>
      </Container>
    </section>
  );
}
