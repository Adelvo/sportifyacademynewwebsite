"use client";

import { useState } from "react";
import { site, ui } from "@/content";
import { buttonClass } from "../ui/Button";

/** Loads Google Maps only after a click. This keeps pages fast and avoids Google cookies on load. */
export function MapEmbed() {
  const [show, setShow] = useState(false);
  const query = encodeURIComponent(site.address.mapQuery);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-midnight-800 sm:aspect-video">
        {show ? (
          <iframe
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            title={ui.map.title}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white">
            <p className="font-semibold">{site.address.lines[0]}</p>
            <button type="button" onClick={() => setShow(true)} className={buttonClass("primary")}>
              {ui.map.show}
            </button>
            <p className="text-sm text-on-midnight-soft">{ui.map.note}</p>
          </div>
        )}
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block font-semibold underline underline-offset-4"
      >
        {ui.map.open}
      </a>
    </div>
  );
}
