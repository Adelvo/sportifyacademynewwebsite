"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/media/Photo";
import { VideoFrame } from "@/components/media/VideoFrame";
import { ui } from "@/content";
import type { LocalVideo } from "@/content/types";
import { SpeakerMutedIcon } from "./AdultIcons";

/**
 * Plays muted and inline as soon as it scrolls into view, no click and no sound needed. A
 * centred "unmute" button restarts it from the beginning with sound; from then on it's a normal
 * video with native controls. `playsInline` keeps it from taking over the screen in fullscreen.
 *
 * While still muted and autoplaying, it pauses once scrolled out of view and resumes on return,
 * so it isn't decoding in the background. Once unmuted, the visitor is in control and it's left alone.
 */
export function AdultInlineVideoPlayer({
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

  useEffect(() => {
    const el = wrapperRef.current;
    if (!inView || unmuted || !el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current?.play().catch(() => {});
        else videoRef.current?.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, unmuted]);

  const handleUnmute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.muted = false;
    setUnmuted(true);
    el.play().catch(() => {});
  };

  return (
    <VideoFrame ref={wrapperRef} className={className}>
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
    </VideoFrame>
  );
}
