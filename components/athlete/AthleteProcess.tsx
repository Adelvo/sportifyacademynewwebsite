import { Reveal } from "@/components/ui/Reveal";
import { athlete } from "@/content";

/** "01 Assessment → 02 Feedback → 03 Next steps": a narrow strip summarising the booking flow. */
export function AthleteProcess() {
  return (
    <Reveal className="mt-6 sm:mt-7">
      <ol className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-[14px] border border-[#DCE5EB] bg-[#F4F7F9] px-5 py-4 text-sm font-semibold sm:gap-x-6 sm:text-base">
        {athlete.process.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="text-[#007a99]">{String(index + 1).padStart(2, "0")}</span>
              {step}
            </span>
            {index < athlete.process.steps.length - 1 && (
              <svg viewBox="0 0 20 14" fill="none" stroke="#99ADB8" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="w-5 shrink-0">
                <path d="M1 7h18M13 1l6 6-6 6" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
