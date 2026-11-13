"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a card that lights up in the accent colour once, in sequence (via `index`), as soon as
 * it scrolls into view. Pass a render-prop child so the consumer can apply the lit state to
 * whichever inner element already carries the hover colours.
 */
export function SequentialHighlightCard({
  index,
  className = "",
  children,
}: {
  index: number;
  className?: string;
  children: (lit: boolean) => ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div ref={ref} className={className}>
      {children(lit)}
    </div>
  );
}
