"use client";

import { useEffect, useRef, useState } from "react";
import { home } from "@/content";
import styles from "./hero.module.css";

const DURATION_MS = 2000;
const format = (value: number) => `+${new Intl.NumberFormat("en-US").format(value)}`;

/** Counts from 0 to `progress` 1. Screen readers and search engines get the final figure as plain text. */
function Stat({ value, label, progress }: { value: number; label: string; progress: number }) {
  return (
    <li className={styles.stat}>
      <span className={styles.statValue}>
        <span className="sr-only">{format(value)}</span>
        {/* The hidden final figure holds the width, so the row doesn't move while counting. */}
        <span aria-hidden="true" className={styles.statGhost}>
          {format(value)}
        </span>
        <span aria-hidden="true" className={styles.statCount}>
          {format(Math.round(value * progress))}
        </span>
      </span>
      <span className={styles.statLabel}>{label}</span>
    </li>
  );
}

export function HeroStats() {
  const rootRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setProgress(1);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION_MS);
          setProgress(1 - (1 - t) ** 3); // Ease out: fast start, gentle landing.
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ul ref={rootRef} className={styles.stats}>
      {home.hero.stats.map((stat) => (
        <Stat key={stat.label} value={stat.value} label={stat.label} progress={progress} />
      ))}
    </ul>
  );
}
