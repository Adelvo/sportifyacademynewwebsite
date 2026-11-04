"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

const DURATION_MS = 2000;
const format = (value: number) => `+${new Intl.NumberFormat("en-US").format(value)}`;

/** Goes from 0 to 1 once the element returned in `ref` scrolls into view. */
export function useCountUp<T extends Element>(): { ref: RefObject<T | null>; progress: number } {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = ref.current;
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

  return { ref, progress };
}

/** A counting figure. Screen readers and search engines get the final figure as plain text. */
export function CountUp({ value, progress, className = "" }: { value: number; progress: number; className?: string }) {
  return (
    <span className={`grid ${className}`}>
      <span className="sr-only">{format(value)}</span>
      {/* The hidden final figure holds the width, so the row doesn't move while counting. */}
      <span aria-hidden="true" className="invisible [grid-area:1/1]">
        {format(value)}
      </span>
      <span aria-hidden="true" className="[grid-area:1/1]">
        {format(Math.round(value * progress))}
      </span>
    </span>
  );
}
