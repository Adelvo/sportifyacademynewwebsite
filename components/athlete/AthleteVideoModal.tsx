"use client";

import { useRef, useState } from "react";
import { Photo } from "@/components/media/Photo";
import { ui } from "@/content";
import type { ImageAsset } from "@/content/types";

interface AthleteVideo {
  name: string;
  embedUrl: string;
  watchUrl: string;
  poster: ImageAsset;
  caption: string;
}

/**
 * A YouTube preview with a play button that opens an accessible modal <dialog>. The iframe is
 * only mounted once the dialog is opened (no autoplay on page load) and unmounted again on
 * close, so playback always stops. The native <dialog> traps focus and closes on Escape or a
 * backdrop click; closing also returns focus to the button that opened it. A "Watch on YouTube"
 * link is always offered as a fallback in case the embed is blocked.
 */
export function AthleteVideoModal({ video, className = "" }: { video: AthleteVideo; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className={`relative overflow-hidden rounded-[14px] ${className}`}>
        <Photo image={video.poster} sizes="(min-width: 1024px) 480px, 100vw" className="absolute inset-0 size-full" />
        <button
          type="button"
          ref={triggerRef}
          onClick={openModal}
          aria-label={`${ui.video.play}: ${video.name}`}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid size-12 place-items-center rounded-full bg-[#67D5E5] text-[#081C2C] shadow-lg transition-transform hover:scale-105">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ms-0.5 size-5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
        <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081C2C]/85 to-transparent px-4 pt-8 pb-3 text-sm font-semibold text-white">
          {video.caption}
        </p>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeModal();
        }}
        aria-label={video.name}
        className="m-auto w-[min(92vw,900px)] overflow-visible rounded-2xl bg-transparent p-0 backdrop:bg-[#081C2C]/80"
      >
        <div className="relative">
          <button
            type="button"
            onClick={closeModal}
            aria-label={ui.close}
            className="absolute -top-12 end-0 grid size-10 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:-end-12 sm:top-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="aspect-video overflow-hidden rounded-2xl bg-black">
            {open && (
              <iframe
                src={video.embedUrl}
                title={video.name}
                className="size-full"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            )}
          </div>
          <p className="mt-3 text-center text-sm text-white/80">
            <a href={video.watchUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Watch on YouTube
            </a>
          </p>
        </div>
      </dialog>
    </>
  );
}
