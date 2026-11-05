"use client";

import { useRef, type FocusEvent, type ReactNode } from "react";
import styles from "./hero.module.css";

/** Pins the hero and the offers while scrolling slides one out and the other in. The motion is all in CSS. */
export function HomeIntro({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Tabbing to a link in the panel that is off screen scrolls that panel into place.
  function revealFocused(event: FocusEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    const { left, right } = event.target.getBoundingClientRect();
    if (left >= 0 && right <= document.documentElement.clientWidth) return;
    const start = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: left > 0 ? start + track.offsetHeight - window.innerHeight : start });
  }

  return (
    <div ref={trackRef} className={styles.introTrack} onFocus={revealFocused}>
      <div className={styles.introStage}>
        <div className={styles.introRail}>{children}</div>
      </div>
    </div>
  );
}
