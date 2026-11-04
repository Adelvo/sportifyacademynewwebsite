"use client";

import { useState } from "react";
import { ui } from "@/content";
import type { VideoTestimonial } from "@/content/types";
import { Txt } from "../ui/Txt";
import { Photo } from "./Photo";

/** Loads the video player only after a click. Until a link is set, it shows a TODO. */
export function VideoSlot({
  video,
  frameClassName = "aspect-video",
  posterClassName = "",
  hideCaption = false,
}: {
  video: VideoTestimonial;
  frameClassName?: string;
  posterClassName?: string;
  hideCaption?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const title = video.role ? `${video.name}, ${video.role}` : video.name;

  return (
    <figure>
      <div className={`relative overflow-hidden rounded-2xl bg-midnight-800 ${frameClassName}`}>
        {playing && video.embedUrl ? (
          <iframe
            src={video.embedUrl}
            title={title}
            className="absolute inset-0 size-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Photo
              image={video.poster}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`absolute inset-0 size-full ${posterClassName}`}
            />
            {video.embedUrl && (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`${ui.video.play}: ${title}`}
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid size-16 place-items-center rounded-full bg-cyan text-midnight">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ms-1 size-7">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </>
        )}
      </div>
      {!hideCaption && (
        <figcaption className="mt-3">
          <span className="block font-bold">{video.name}</span>
          {video.role && <span className="block text-ink-soft">{video.role}</span>}
          {!video.embedUrl && (
            <span className="mt-1 block">
              <Txt>{ui.video.todo}</Txt>
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
