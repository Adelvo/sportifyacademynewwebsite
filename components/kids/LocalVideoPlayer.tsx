"use client";

import { useState } from "react";
import { Photo } from "@/components/media/Photo";
import { ui } from "@/content";
import type { LocalVideo } from "@/content/types";

/**
 * A self-hosted video, played inline in place of its poster. Nothing loads until the visitor
 * clicks: the <video> element (and its file) is only mounted after the click, and it never
 * autoplays. The frame keeps the video's own aspect ratio, so faces and captions are never cropped.
 */
export function LocalVideoPlayer({
  video,
  aspectClassName = "aspect-[9/16]",
  className = "",
}: {
  video: LocalVideo;
  aspectClassName?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-midnight-800 ${aspectClassName} ${className}`}>
      {playing ? (
        <video
          src={video.src}
          poster={video.poster.src}
          controls
          autoPlay
          playsInline
          preload="none"
          className="absolute inset-0 size-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <Photo image={video.poster} sizes="(min-width: 1024px) 45vw, 100vw" className="absolute inset-0 size-full" />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${ui.video.play}: ${video.name}`}
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-cyan text-midnight shadow-lg transition-transform hover:scale-105 sm:size-20">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ms-1 size-8 sm:size-9">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
