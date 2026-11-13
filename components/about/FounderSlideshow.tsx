"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ImageAsset } from "@/content/types";
import styles from "./founder-slideshow.module.css";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribeToMotion = (callback: () => void) => {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;
const getServerReducedMotion = () => false;

export function FounderSlideshow({ slides }: { slides: ImageAsset[] }) {
  const frame = useRef<HTMLDivElement>(null);
  const loaded = useRef(new Set<number>());
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion, getServerReducedMotion);
  const isPaused = paused ?? reducedMotion;

  useEffect(() => {
    const element = frame.current;
    if (!element || isPaused || slides.length < 2) return;

    let inView = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const updatePlayback = () => {
      clearInterval(timer);
      if (!inView || document.hidden) return;
      timer = setInterval(() => {
        setActive((current) => {
          const next = (current + 1) % slides.length;
          return loaded.current.has(next) ? next : current;
        });
      }, 2500);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      updatePlayback();
    }, { threshold: 0.5 });

    observer.observe(element);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [isPaused, slides.length]);

  return (
    <div ref={frame} className={styles.frame} role="region" aria-label="Photos of our founder" aria-roledescription="carousel">
      <div className={styles.viewport}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={styles.slide}
            data-active={active === index}
            aria-hidden={active !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 375px) 334px, calc(100vw - 40px)"
              className={styles.photo}
              onLoad={() => { loaded.current.add(index); }}
            />
          </div>
        ))}
        <button
          type="button"
          className={styles.control}
          onClick={() => setPaused(!isPaused)}
          aria-label={isPaused ? "Play founder slideshow" : "Pause founder slideshow"}
          title={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            {isPaused ? <path d="m8 5 11 7-11 7Z" /> : <path d="M6 5h4v14H6zM14 5h4v14h-4z" />}
          </svg>
        </button>
      </div>
    </div>
  );
}
