"use client";

import { useEffect, useRef, useState } from "react";

type SupportItem = {
  id: string;
  name: string;
  points: string[];
  learnMoreUrl?: string;
};

/**
 * One "Support beyond the assessment" card. Lights up in the accent colour once, in sequence
 * (via `index`), as soon as it scrolls into view, then lights up again on hover.
 */
export function KidsSupportCard({ item, index, className = "" }: { item: SupportItem; index: number; className?: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timeout = setTimeout(() => {
          setLit(true);
          timeout = setTimeout(() => setLit(false), 1200);
        }, index * 800);
      },
      { threshold: 0.3, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <li
      ref={ref}
      className={`rounded-[16px] border p-5 shadow-[0_4px_16px_rgba(8,28,44,0.04)] transition-colors duration-700 ease-out sm:p-6 ${lit ? "border-[#67D5E5] bg-[#EAFBFD]" : "border-[#DCE5EB] bg-white"} hover:border-[#67D5E5] hover:bg-[#EAFBFD] ${className}`}
    >
      <div>
        <h3 className="text-[20px] leading-[1.3] font-bold">{item.name}</h3>
        <ul className="mt-2 space-y-1.5">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-base leading-[1.4] text-[#526271]">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#67D5E5]" />
              {point}
            </li>
          ))}
        </ul>
        {item.learnMoreUrl && (
          <a
            href={item.learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold text-cyan-deep underline-offset-4 hover:underline"
          >
            Learn more →
          </a>
        )}
      </div>
    </li>
  );
}
