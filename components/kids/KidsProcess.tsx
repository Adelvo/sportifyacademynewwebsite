import { Reveal } from "@/components/ui/Reveal";
import { kids } from "@/content";
import { ChatIcon, CheckIcon, ClipboardIcon, TargetIcon } from "./KidsIcons";

const stepIcons = [ClipboardIcon, ChatIcon, TargetIcon];

/** Total loop length: one lap through every step, then it resets and starts again. */
const CYCLE_SECONDS = 7.5;

/**
 * "01 Assessment → 02 Feedback → 03 Personal recommendations" strip, rendered inline
 * inside KidsAssessments rather than as its own section, to keep it close to its neighbours.
 * Steps complete one at a time on a loop: each icon flips into a checkmark, the arrow after
 * it lights up to hand off to the next step, and once all three are done the loop resets.
 */
export function KidsProcess() {
  return (
    <Reveal className="mt-6 sm:mt-7">
      <style>{`
        @keyframes kids-step-fill-0 {
          0%, 13% { background-color: rgba(103, 213, 229, 0.15); }
          17%, 90% { background-color: #007a99; }
          95%, 100% { background-color: rgba(103, 213, 229, 0.15); }
        }
        @keyframes kids-step-fill-1 {
          0%, 37% { background-color: rgba(103, 213, 229, 0.15); }
          41%, 90% { background-color: #007a99; }
          95%, 100% { background-color: rgba(103, 213, 229, 0.15); }
        }
        @keyframes kids-step-fill-2 {
          0%, 61% { background-color: rgba(103, 213, 229, 0.15); }
          65%, 90% { background-color: #007a99; }
          95%, 100% { background-color: rgba(103, 213, 229, 0.15); }
        }
        @keyframes kids-icon-fade-0 {
          0%, 13% { opacity: 1; transform: scale(1); }
          17%, 100% { opacity: 0; transform: scale(0.6); }
        }
        @keyframes kids-icon-fade-1 {
          0%, 37% { opacity: 1; transform: scale(1); }
          41%, 100% { opacity: 0; transform: scale(0.6); }
        }
        @keyframes kids-icon-fade-2 {
          0%, 61% { opacity: 1; transform: scale(1); }
          65%, 100% { opacity: 0; transform: scale(0.6); }
        }
        @keyframes kids-check-pop-0 {
          0%, 13% { opacity: 0; transform: scale(0.4); }
          17% { opacity: 1; transform: scale(1.3); }
          21%, 90% { opacity: 1; transform: scale(1); }
          95%, 100% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes kids-check-pop-1 {
          0%, 37% { opacity: 0; transform: scale(0.4); }
          41% { opacity: 1; transform: scale(1.3); }
          45%, 90% { opacity: 1; transform: scale(1); }
          95%, 100% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes kids-check-pop-2 {
          0%, 61% { opacity: 0; transform: scale(0.4); }
          65% { opacity: 1; transform: scale(1.3); }
          69%, 90% { opacity: 1; transform: scale(1); }
          95%, 100% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes kids-arrow-advance-0 {
          0%, 13% { color: #C7D3DA; transform: translateX(0); }
          17%, 35% { color: #007a99; transform: translateX(4px); }
          39%, 90% { color: #C7D3DA; transform: translateX(0); }
          95%, 100% { color: #C7D3DA; transform: translateX(0); }
        }
        @keyframes kids-arrow-advance-1 {
          0%, 37% { color: #C7D3DA; transform: translateX(0); }
          41%, 59% { color: #007a99; transform: translateX(4px); }
          63%, 90% { color: #C7D3DA; transform: translateX(0); }
          95%, 100% { color: #C7D3DA; transform: translateX(0); }
        }
      `}</style>
      <div className="relative rounded-[18px] border border-[#DCE5EB] bg-white px-6 py-7 sm:px-10 sm:py-9">
        <ol className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-6 text-base font-semibold sm:gap-x-7 sm:text-lg">
          {kids.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li key={step} className="flex items-center gap-4 sm:gap-5">
                <span className="flex items-center gap-3 sm:gap-4">
                  <span
                    className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full sm:size-14"
                    style={{
                      backgroundColor: "rgba(103, 213, 229, 0.15)",
                      animation: `kids-step-fill-${index} ${CYCLE_SECONDS}s ease-in-out infinite`,
                    }}
                  >
                    <Icon
                      className="absolute size-5 text-[#007a99] sm:size-6"
                      style={{ animation: `kids-icon-fade-${index} ${CYCLE_SECONDS}s ease-in-out infinite` }}
                    />
                    <CheckIcon
                      className="absolute size-5 text-white opacity-0 sm:size-6"
                      style={{ animation: `kids-check-pop-${index} ${CYCLE_SECONDS}s ease-in-out infinite` }}
                    />
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#007a99]">{String(index + 1).padStart(2, "0")}</span>
                    {step}
                  </span>
                </span>
                {index < kids.process.steps.length - 1 && (
                  <svg
                    viewBox="0 0 26 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    aria-hidden="true"
                    className="w-8 shrink-0 sm:w-10"
                    style={{
                      color: "#C7D3DA",
                      animation: `kids-arrow-advance-${index} ${CYCLE_SECONDS}s ease-in-out infinite`,
                    }}
                  >
                    <path d="M1 9h23M16.5 1.5 24 9l-7.5 7.5" />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}
