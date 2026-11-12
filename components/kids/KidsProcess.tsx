import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { kids } from "@/content";

/** Compact "01 Assessment → 02 Feedback → 03 Personal recommendations" strip. */
export function KidsProcess() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <Container>
        <Reveal>
          <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            {kids.process.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-3 sm:gap-4">
                <span className="flex min-w-0 items-center gap-3 rounded-full border border-line bg-mist px-5 py-3 font-bold">
                  <span className="shrink-0 text-cyan-deep">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </span>
                {index < kids.process.steps.length - 1 && (
                  <svg viewBox="0 0 26 18" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className="hidden w-6 shrink-0 text-cyan-deep sm:block">
                    <path d="M1 9h23M16.5 1.5 24 9l-7.5 7.5" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
