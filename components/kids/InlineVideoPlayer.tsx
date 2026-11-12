"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/media/Photo";
import { ui } from "@/content";
import type { LocalVideo } from "@/content/types";
import { SpeakerMutedIcon } from "./KidsIcons";

/**
 * Plays muted and inline as soon as it scrolls into view, no click and no sound needed. A
 * centred "unmute" button restarts it from the beginning with sound; from then on it's a normal
 * video with native controls. `playsInline` keeps it from taking over the screen in fullscreen.
 */
export function InlineVideoPlayer({
  video,
  sizes,
  className = "",
  unmuteButtonClassName = "size-12",
}: {
  video: LocalVideo;
  sizes: string;
  className?: string;
  unmuteButtonClassName?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [unmuted, setUnmuted] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) videoRef.current?.play().catch(() => {});
  }, [inView]);

  const handleUnmute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.muted = false;
    setUnmuted(true);
    el.play().catch(() => {});
  };

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden bg-black ${className}`}>
      <Photo image={video.poster} sizes={sizes} className="absolute inset-0 size-full" />

      {inView && (
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster.src}
          muted={!unmuted}
          controls={unmuted}
          playsInline
          preload="auto"
          className="absolute inset-0 size-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {!unmuted && (
        <button
          type="button"
          onClick={handleUnmute}
          aria-label={ui.video.soundOn}
          className="absolute inset-0 grid place-items-center"
        >
          <span
            className={`grid place-items-center rounded-full bg-white text-[#081C2C] shadow-md transition-transform hover:scale-105 ${unmuteButtonClassName}`}
          >
            <SpeakerMutedIcon className="size-5" />
          </span>
        </button>
      )}
    </div>
  );
}
