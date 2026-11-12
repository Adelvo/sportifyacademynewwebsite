"use client";

import { useRef, useState } from "react";
import { Photo } from "@/components/media/Photo";
import { ui } from "@/content";
import type { LocalVideo } from "@/content/types";

/**
 * A photo with a play button that opens its video in a modal <dialog>. The video file is only
 * mounted once the dialog is opened, and it is unmounted again on close, so it always stops
 * playing. Escape and the backdrop close it natively; a visible close button does the same.
 */
export function VideoModal({ video, className = "" }: { video: LocalVideo; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`relative overflow-hidden ${className}`}>
        <Photo image={video.poster} sizes="(min-width: 1024px) 33vw, 85vw" className="absolute inset-0 size-full" />
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            dialogRef.current?.showModal();
          }}
          aria-label={`${ui.video.play}: ${video.name}`}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid size-14 place-items-center rounded-full bg-cyan text-midnight shadow-lg transition-transform group-hover:scale-105 sm:size-16">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ms-1 size-6 sm:size-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-label={video.name}
        className="m-auto max-h-[90vh] w-[min(92vw,420px)] overflow-visible rounded-2xl bg-transparent p-0 backdrop:bg-midnight/80"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={ui.close}
            className="absolute -top-12 end-0 grid size-10 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:-end-12 sm:top-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-black">
            {open && (
              <video
                src={video.src}
                poster={video.poster.src}
                controls
                autoPlay
                playsInline
                preload="none"
                className="size-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
