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
    <section id={id} className={`py-20 sm:py-24 ${tones[tone]} ${className}`}>
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
    <div className="mb-12 max-w-2xl sm:mb-14">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {text && (
        <p className={`mt-4 text-lg ${tone === "midnight" ? "text-on-midnight-soft" : "text-ink-soft"}`}>
          <Txt>{text}</Txt>
        </p>
      )}
    </div>
  );
}
