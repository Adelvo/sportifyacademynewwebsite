"use client";

import { home } from "@/content";
import { CountUp, useCountUp } from "./CountUp";
import styles from "./hero.module.css";

export function HeroStats() {
  const { ref, progress } = useCountUp<HTMLUListElement>();
  return (
    <ul ref={ref} className={styles.stats}>
      {home.hero.stats.map((stat) => (
        <li key={stat.label} className={styles.stat}>
          <CountUp value={stat.value} progress={progress} className={styles.statValue} />
          <span className={styles.statLabel}>{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
