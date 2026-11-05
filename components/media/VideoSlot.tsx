"use client";

import { useEffect, useRef, useState } from "react";
import { ui } from "@/content";
import type { VideoTestimonial } from "@/content/types";
import { Txt } from "../ui/Txt";
import { Photo } from "./Photo";

/**
 * The same YouTube link, muted, without YouTube's controls and able to take commands from this page.
 * It loops, because YouTube would otherwise show its grid of suggested videos at the end.
 */
function autoplayUrl(embedUrl: string) {
  const url = new URL(embedUrl);
  const videoId = url.pathname.split("/").pop() ?? "";
  const params = { mute: "1", playsinline: "1", enablejsapi: "1", controls: "0", disablekb: "1", fs: "0", iv_load_policy: "3", loop: "1", playlist: videoId };
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

function sendCommand(player: HTMLIFrameElement | null, embedUrl: string, func: string, args: unknown[] = []) {
  player?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), new URL(embedUrl).origin);
}

/** How long YouTube's own title and controls stay on the video each time it starts playing. */
const YOUTUBE_OVERLAY_MS = 4500;
/** Without any playback after this long, autoplay is blocked: go back to the play button. */
const AUTOPLAY_TIMEOUT_MS = 15000;
const PLAYER_PLAYING = 1;
const PLAYER_PAUSED = 2;
const PLAYER_BUFFERING = 3;

const controlButton = "grid size-11 place-items-center rounded-full bg-midnight/75 text-white transition-colors hover:bg-midnight";

/**
 * Loads the video player after a click. Until a link is set, it shows a TODO.
 *
 * With "autoplayInView" it also plays by itself, muted. YouTube shows its title and controls for some
 * seconds every time the video starts, resumes, jumps or loops, and has no setting to stop that. So the
 * poster covers the player for those seconds, and the player starts one screen early and keeps running
 * off screen, so that it is already clear on arrival. A layer over the player keeps them from returning
 * on hover, which leaves our own pause and sound buttons. Reduced-motion users keep the play button.
 * Only for YouTube links. See TODO.md: a video file of our own would make all of this unnecessary.
 */
export function VideoSlot({
  video,
  frameClassName = "aspect-video",
  posterClassName = "",
  hideCaption = false,
  autoplayInView = false,
}: {
  video: VideoTestimonial;
  frameClassName?: string;
  posterClassName?: string;
  hideCaption?: boolean;
  autoplayInView?: boolean;
}) {
  const [playing, setPlaying] = useState<"no" | "clicked" | "auto">("no");
  const [paused, setPaused] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [covered, setCovered] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const { embedUrl } = video;

  useEffect(() => {
    const frame = frameRef.current;
    if (!autoplayInView || !embedUrl || !frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let started = false;
    let lastState: number | undefined;
    let lastTime = 0;
    let handshake: number | undefined;
    let timeout: number | undefined;
    let uncover: number | undefined;

    function cover() {
      window.clearTimeout(uncover);
      setCovered(true);
      uncover = window.setTimeout(() => setCovered(false), YOUTUBE_OVERLAY_MS);
    }

    // The player reports its state and time only after being told that this page is listening.
    function onMessage(event: MessageEvent) {
      if (event.source !== playerRef.current?.contentWindow || typeof event.data !== "string") return;
      let info: { playerState?: unknown; currentTime?: unknown } | undefined;
      try {
        info = JSON.parse(event.data).info;
      } catch {
        return;
      }
      if (!info) return;
      window.clearInterval(handshake);

      const { playerState: state, currentTime: time } = info;
      if (typeof time === "number") {
        // The video has looped back to the start.
        if (time < lastTime - 1) cover();
        lastTime = time;
      }
      if (typeof state !== "number" || state === PLAYER_BUFFERING) return;
      // The browser can also pause it, so the pause button follows the player.
      if (state === PLAYER_PLAYING || state === PLAYER_PAUSED) setPaused(state === PLAYER_PAUSED);
      if (state === PLAYER_PLAYING && lastState !== PLAYER_PLAYING) {
        started = true;
        cover();
      } else if (state !== PLAYER_PLAYING) {
        window.clearTimeout(uncover);
      }
      lastState = state;
    }

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        nearObserver.disconnect();
        setPlaying("auto");
        window.addEventListener("message", onMessage);
        handshake = window.setInterval(() => {
          playerRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: 1, channel: "widget" }), new URL(embedUrl).origin);
        }, 500);
        timeout = window.setTimeout(() => {
          if (started) return;
          window.clearInterval(handshake);
          viewObserver.disconnect();
          setPlaying("no");
        }, AUTOPLAY_TIMEOUT_MS);
      },
      { rootMargin: "100% 0px" },
    );
    // It keeps playing off screen, but never makes sound there.
    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return;
        sendCommand(playerRef.current, embedUrl, "mute");
        setSoundOn(false);
      },
      { threshold: 0.5 },
    );
    nearObserver.observe(frame);
    viewObserver.observe(frame);

    return () => {
      nearObserver.disconnect();
      viewObserver.disconnect();
      window.removeEventListener("message", onMessage);
      window.clearInterval(handshake);
      window.clearTimeout(timeout);
      window.clearTimeout(uncover);
    };
  }, [autoplayInView, embedUrl]);

  function togglePaused() {
    if (!embedUrl) return;
    const next = !paused;
    setPaused(next);
    sendCommand(playerRef.current, embedUrl, next ? "pauseVideo" : "playVideo");
  }

  function toggleSound() {
    if (!embedUrl) return;
    const next = !soundOn;
    setSoundOn(next);
    sendCommand(playerRef.current, embedUrl, next ? "unMute" : "mute");
  }

  const title = video.role ? `${video.name}, ${video.role}` : video.name;

  return (
    <figure>
      <div ref={frameRef} className={`relative overflow-hidden rounded-2xl bg-midnight-800 ${frameClassName}`}>
        {playing !== "no" && embedUrl && (
          <iframe
            ref={playerRef}
            src={playing === "auto" ? autoplayUrl(embedUrl) : embedUrl}
            title={title}
            tabIndex={playing === "auto" ? -1 : undefined}
            className="absolute inset-0 size-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
        {playing === "auto" && <div aria-hidden="true" className="absolute inset-0" />}
        {(playing === "no" || (playing === "auto" && covered)) && (
          <Photo
            image={video.poster}
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`absolute inset-0 size-full ${posterClassName}`}
          />
        )}
        {playing === "no" && embedUrl && (
          <button
            type="button"
            onClick={() => setPlaying("clicked")}
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
        {playing === "auto" && (
          <div className="absolute end-3 bottom-3 flex gap-2">
            <button type="button" onClick={togglePaused} aria-label={paused ? ui.video.resume : ui.video.pause} className={controlButton}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
                <path d={paused ? "M8 5v14l11-7z" : "M7 5h4v14H7zM13 5h4v14h-4z"} />
              </svg>
            </button>
            <button type="button" onClick={toggleSound} aria-label={soundOn ? ui.video.soundOff : ui.video.soundOn} className={controlButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
                <path fill="currentColor" d="M11 5 6 9H3v6h3l5 4z" />
                <path d={soundOn ? "M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" : "m16 9.5 5 5M21 9.5l-5 5"} />
              </svg>
            </button>
          </div>
        )}
      </div>
      {!hideCaption && (
        <figcaption className="mt-3">
          <span className="block font-bold">{video.name}</span>
          {video.role && <span className="block text-ink-soft">{video.role}</span>}
          {!embedUrl && (
            <span className="mt-1 block">
              <Txt>{ui.video.todo}</Txt>
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
