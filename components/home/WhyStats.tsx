"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./why-stats.module.css";

/** One colour sweep in reading order each time the row scrolls into view; subsequent interaction is hover only. */
export function WhyStats({
  stats,
  interactive = false,
}: {
  stats: { value: string; label: string }[];
  interactive?: boolean;
}) {
  const gridRef = useRef<HTMLUListElement>(null);
  const finishedCards = useRef(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !interactive || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.7) return;
        finishedCards.current = 0;
        setStarted(true);
      },
      { threshold: 0.7, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, [interactive]);

  return (
    <ul
      ref={gridRef}
      className={`mt-8 grid grid-cols-2 gap-3 sm:mt-6 md:grid-cols-6 ${interactive ? styles.interactive : ""} ${started ? styles.started : ""}`}
      onAnimationEnd={(event) => {
        if (!(event.target instanceof HTMLElement) || !event.target.classList.contains(styles.card)) return;
        finishedCards.current += 1;
        // Remove the animation classes after the sequence so it can replay on the next scroll-in.
        if (finishedCards.current === stats.length) setStarted(false);
      }}
    >
      {stats.map((stat, index) => (
        <li
          key={stat.label}
          className={`${styles.card} rounded-2xl border border-line/50 shadow-[0_8px_24px_rgb(10_31_51/0.07)] p-3 min-[360px]:p-4 sm:p-3.5 ${
            index < 3 ? "md:col-span-2" : "md:col-span-3 md:px-5"
          } ${index === 4 ? "col-span-2" : ""}`}
        >
          <p className={`${styles.value} font-display text-[1.375rem] leading-tight sm:text-[1.625rem] font-extrabold`}>{stat.value}</p>
          <p className="mt-0.5 text-sm/tight font-semibold whitespace-pre-line">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}
