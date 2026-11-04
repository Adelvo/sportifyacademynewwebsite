import { legalNotice } from "@/content";
import type { LegalPage } from "@/content/types";
import { Section } from "../ui/Section";
import { Txt } from "../ui/Txt";

export function LegalTemplate({ page }: { page: LegalPage }) {
  return (
    <Section>
      <h1 className="text-4xl sm:text-5xl">{page.heading}</h1>
      <p className="mt-6 max-w-3xl rounded-xl border-2 border-amber-500 bg-amber-100 p-4 font-semibold text-amber-950">
        {legalNotice}
      </p>
      <div className="mt-10 max-w-3xl space-y-8">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            <p className="mt-2 text-ink-soft">
              <Txt>{section.text}</Txt>
            </p>
          </section>
        ))}
      </div>
    </Section>
  );
}
