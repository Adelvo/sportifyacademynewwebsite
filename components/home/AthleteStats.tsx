"use client";

import { home } from "@/content";
import { CountUp, useCountUp } from "./CountUp";

/** The hero's figures again, as a band under the athlete videos. */
export function AthleteStats() {
  const { ref, progress } = useCountUp<HTMLUListElement>();
  return (
    <ul ref={ref} className="mt-10 grid grid-cols-3 divide-x divide-white/15 rounded-2xl bg-linear-to-br from-midnight to-midnight-700 py-8 text-center text-white shadow-[0_10px_30px_rgb(10_31_51/0.18)] sm:mt-8 sm:py-8">
      {home.hero.stats.map((stat) => (
        <li key={stat.label} className="flex flex-col items-center gap-2 px-1.5 sm:gap-1.5 sm:px-6">
          <CountUp
            value={stat.value}
            progress={progress}
            className="font-display text-xl font-extrabold text-[#00dafa] tabular-nums max-[359px]:text-base sm:text-4xl lg:text-5xl"
          />
          <span className="text-xs font-medium text-balance sm:text-base">{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
