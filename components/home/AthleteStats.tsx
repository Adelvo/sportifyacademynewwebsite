"use client";

import { home } from "@/content";
import { CountUp, useCountUp } from "./CountUp";

/** The hero's figures again, as a band under the athlete videos. */
export function AthleteStats() {
  const { ref, progress } = useCountUp<HTMLUListElement>();
  return (
    <ul ref={ref} className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-midnight px-3 py-6 text-center text-white sm:mt-10 sm:gap-6 sm:px-6 sm:py-8">
      {home.hero.stats.map((stat) => (
        <li key={stat.label} className="flex flex-col items-center gap-1.5">
          <CountUp
            value={stat.value}
            progress={progress}
            className="font-display text-xl font-extrabold text-[#00dafa] tabular-nums sm:text-4xl lg:text-5xl"
          />
          <span className="text-xs font-medium text-balance sm:text-base">{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
