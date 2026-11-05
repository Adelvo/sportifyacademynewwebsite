import Link from "next/link";
import type { FaqItem } from "@/content/types";
import { Txt } from "../ui/Txt";

const variants = {
  list: {
    wrap: "max-w-3xl divide-y divide-line border-y border-line",
    item: "group",
    summary: "py-4",
    tile: "shrink-0",
    answer: "pb-5",
  },
  /** Centred white cards, for the landing page. */
  cards: {
    wrap: "mx-auto max-w-3xl space-y-4 sm:space-y-3",
    item: "group rounded-2xl border border-line/50 bg-white shadow-[0_8px_24px_rgb(10_31_51/0.07)] transition-colors open:border-cyan",
    summary: "px-5 py-5 sm:px-6 sm:py-4",
    tile: "grid size-9 shrink-0 place-items-center rounded-xl bg-cyan/12 text-[#0b7a8f]",
    answer: "px-5 pb-5 sm:px-6",
  },
};

export function Faq({ items, variant = "list" }: { items: FaqItem[]; variant?: keyof typeof variants }) {
  const style = variants[variant];
  return (
    <div className={style.wrap}>
      {items.map((item) => (
        <details key={item.question} className={style.item}>
          <summary className={`flex min-h-12 items-center justify-between gap-4 font-bold sm:text-lg ${style.summary}`}>
            {item.question}
            <span className={style.tile}>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 transition-transform group-open:rotate-180">
                <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </span>
          </summary>
          <div className={`text-ink-soft ${style.answer}`}>
            <p>
              <Txt>{item.answer}</Txt>
            </p>
            {item.link && (
              <Link href={item.link.href} className="mt-2 inline-block font-bold text-midnight underline underline-offset-4">
                {item.link.label}
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
