import Link from "next/link";
import type { FaqItem } from "@/content/types";
import { Txt } from "../ui/Txt";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="max-w-3xl divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex min-h-12 items-center justify-between gap-4 py-4 text-lg font-bold">
            {item.question}
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180">
              <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </summary>
          <div className="pb-5 text-ink-soft">
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
