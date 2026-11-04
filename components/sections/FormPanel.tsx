import type { ReactNode } from "react";
import { Section, type Tone } from "../ui/Section";
import { Txt } from "../ui/Txt";
import { FormCard } from "../forms/parts";

/** Section with a title on one side and a form card on the other. */
export function FormPanel({
  id,
  tone = "midnight",
  title,
  text,
  children,
}: {
  id?: string;
  tone?: Tone;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
          <p className={`mt-4 text-lg ${tone === "midnight" ? "text-on-midnight-soft" : "text-ink-soft"}`}>
            <Txt>{text}</Txt>
          </p>
        </div>
        <FormCard>{children}</FormCard>
      </div>
    </Section>
  );
}
