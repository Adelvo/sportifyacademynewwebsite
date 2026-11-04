"use client";

import Image from "next/image";
import { useState } from "react";
import { partners, ui } from "@/content";
import type { Partner } from "@/content/types";

function PartnerChip({ partner }: { partner: Partner }) {
  return (
    <span className="flex h-16 min-w-36 items-center justify-center rounded-xl border border-line bg-white px-5 text-center text-sm font-bold text-midnight">
      {partner.logo ? (
        <Image src={partner.logo} alt={partner.name} width={120} height={48} className="max-h-12 w-auto object-contain" />
      ) : (
        partner.name
      )}
    </span>
  );
}

export function PartnerList({ items }: { items: Partner[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((partner) => (
        <li key={partner.id}>
          <PartnerChip partner={partner} />
        </li>
      ))}
    </ul>
  );
}

/** Moving list of all partners. It can be paused, and it stays still for reduced-motion users. */
export function PartnerMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div>
      <div className="overflow-hidden">
        <div
          className={`flex w-max gap-3 hover:[animation-play-state:paused] motion-safe:animate-marquee motion-reduce:w-full motion-reduce:flex-wrap ${
            paused ? "[animation-play-state:paused]" : ""
          }`}
        >
          <ul className="flex gap-3 motion-reduce:flex-wrap">
            {partners.map((partner) => (
              <li key={partner.id}>
                <PartnerChip partner={partner} />
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="flex gap-3 motion-reduce:hidden">
            {partners.map((partner) => (
              <li key={partner.id}>
                <PartnerChip partner={partner} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        className="mt-4 min-h-11 text-sm font-semibold underline underline-offset-4 motion-reduce:hidden"
      >
        {paused ? ui.marqueePlay : ui.marqueePause}
      </button>
    </div>
  );
}
