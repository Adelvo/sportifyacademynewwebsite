"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ui } from "@/content";
import { OFFERS_HREF, OFFERS_ID } from "@/lib/links";
import { buttonClass } from "../ui/Button";

/** Leads to the offers panel on the homepage. */
export function OffersLink({ className, children }: { className: string; children: ReactNode }) {
  const pathname = usePathname();
  // On the homepage a plain link: unlike next/link, it scrolls again when the URL already ends in this hash.
  return pathname === "/" ? (
    <a href={`#${OFFERS_ID}`} className={className}>
      {children}
    </a>
  ) : (
    <Link href={OFFERS_HREF} className={className}>
      {children}
    </Link>
  );
}

export function OffersButton({ className = "" }: { className?: string }) {
  return (
    <OffersLink className={buttonClass("primary", className)}>
      {ui.ourOffers}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
        <path d="M3 12h18M14 5l7 7-7 7" />
      </svg>
    </OffersLink>
  );
}
