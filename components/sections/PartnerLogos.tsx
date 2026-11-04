import Image from "next/image";
import { partners } from "@/content";
import type { Partner } from "@/content/types";

function PartnerChip({ partner }: { partner: Partner }) {
  return (
    <span className="flex h-32 w-56 items-center justify-center rounded-xl border border-line bg-white px-4 py-3 text-center text-sm font-bold text-midnight">
      {partner.logo ? (
        <span className="relative block size-full">
          <Image src={partner.logo} alt={partner.name} fill sizes="192px" className="object-contain" />
        </span>
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

/** Moving list of all partners. It pauses on hover, and it stays still for reduced-motion users. */
export function PartnerMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-3 hover:[animation-play-state:paused] motion-safe:animate-marquee motion-reduce:w-full motion-reduce:flex-wrap">
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
  );
}
