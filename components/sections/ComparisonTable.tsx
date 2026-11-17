import { HeadingMark } from "@/components/home/SectionAccents";
import { Reveal } from "@/components/ui/Reveal";
import type { Comparison } from "@/content/types";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function CrossMark() {
  return (
    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#FDE8E8] text-[#D64545]">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" {...strokeProps}>
        <path d="M7 7l10 10M17 7 7 17" />
      </svg>
    </span>
  );
}

function CheckMark() {
  return (
    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan text-midnight">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" {...strokeProps}>
        <path d="M5 12.5 10 17.5 19 7" />
      </svg>
    </span>
  );
}

/** Tailwind needs literal class names, so the row placements for the desktop grid are listed out. */
const rowStart = ["md:row-start-2", "md:row-start-3", "md:row-start-4", "md:row-start-5", "md:row-start-6"];

/**
 * "Waiting and hoping" versus "Sportify": a three-column table on desktop (topic, today, Sportify)
 * where each column's background spans every row. On phones each row becomes its own small stack.
 */
export function ComparisonTable({ comparison }: { comparison: Comparison }) {
  const { title, text, today, sportify, rows } = comparison;
  const lastRow = ["md:row-end-3", "md:row-end-4", "md:row-end-5", "md:row-end-6", "md:row-end-7"][rows.length - 1];

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <Reveal>
          <h2 className="flex items-center gap-3 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">
            <HeadingMark className="shrink-0" />
            {title}
          </h2>
          <p className="mt-2 text-base leading-[1.55] text-[#526271]">{text}</p>
        </Reveal>

        <Reveal delay={90} className="mt-7 grid gap-3 md:grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-4 md:gap-y-0 lg:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Legend (phones only), since the column headers are hidden there. */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <div className="rounded-[12px] bg-[#F4F7F9] p-3">
              <p className="text-[11px] font-semibold tracking-wide text-[#526271] uppercase">{today.subtitle}</p>
              <p className="mt-0.5 text-[17px] font-bold leading-[1.25] text-[#526271]">{today.title}</p>
            </div>
            <div className="rounded-[12px] bg-midnight p-3">
              <p className="text-[11px] font-semibold tracking-wide text-cyan uppercase">{sportify.subtitle}</p>
              <p className="mt-0.5 text-[17px] font-bold leading-[1.25] text-white">{sportify.title}</p>
            </div>
          </div>

          {/* Column backgrounds (desktop only), drawn behind the cells. */}
          <div aria-hidden="true" className={`hidden rounded-[14px] bg-[#F4F7F9] md:col-start-2 md:row-start-1 md:block ${lastRow}`} />
          <div
            aria-hidden="true"
            className={`hidden rounded-[14px] bg-midnight shadow-[0_18px_40px_-18px_rgba(10,31,51,0.55)] md:col-start-3 md:row-start-1 md:block ${lastRow}`}
          />

          {/* Column headers (desktop only). */}
          <div className="relative hidden px-6 pt-6 pb-4 md:col-start-2 md:row-start-1 md:block">
            <p className="text-[13px] font-semibold tracking-wide text-[#526271] uppercase">{today.subtitle}</p>
            <p className="mt-1 text-[22px] font-bold leading-[1.25] text-[#526271]">{today.title}</p>
          </div>
          <div className="relative hidden px-6 pt-6 pb-4 md:col-start-3 md:row-start-1 md:block">
            <p className="text-[13px] font-semibold tracking-wide text-cyan uppercase">{sportify.subtitle}</p>
            <p className="mt-1 text-[22px] font-bold leading-[1.25] text-white">{sportify.title}</p>
          </div>

          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            const cellPad = `md:px-6 md:py-5 ${isLast ? "md:pb-7" : ""}`;
            return (
              <div key={row.label} className="contents">
                <p
                  className={`mt-4 text-[13px] font-bold tracking-wide text-cyan-deep uppercase ${index === 0 ? "mt-0" : ""} md:col-start-1 md:mt-0 md:flex md:items-center md:border-t md:border-[#DCE5EB] md:py-5 md:text-[15px] ${rowStart[index]}`}
                >
                  {row.label}
                </p>
                <div
                  className={`relative flex items-start gap-3 rounded-[12px] bg-[#F4F7F9] p-4 md:col-start-2 md:rounded-none md:bg-transparent ${cellPad} ${rowStart[index]}`}
                >
                  <CrossMark />
                  <p className="text-base leading-[1.5] text-[#526271]">
                    <span className="sr-only">{today.title}: </span>
                    {row.today}
                  </p>
                </div>
                <div
                  className={`relative flex items-start gap-3 rounded-[12px] bg-midnight p-4 md:col-start-3 md:rounded-none md:bg-transparent ${cellPad} ${rowStart[index]}`}
                >
                  <CheckMark />
                  <p className="text-base leading-[1.5] font-medium text-white">
                    <span className="sr-only">{sportify.title}: </span>
                    {row.sportify}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
