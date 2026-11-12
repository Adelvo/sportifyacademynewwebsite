"use client";

import { usePathname } from "next/navigation";
import { HomeLocation } from "@/components/home/HomeLocation";
import { PartnersBand } from "@/components/home/PartnersBand";
import { KidsFaqSection } from "@/components/kids/KidsFaqSection";
import { NotOnHome } from "./NotOnHome";

/**
 * The end of every page except the homepage, which has its own partners and location sections.
 * On the Kids page, its FAQ slots in here too, between the partners band and the location block.
 */
export function ClosingSections() {
  const pathname = usePathname();
  return (
    <NotOnHome>
      <PartnersBand />
      {pathname === "/test-my-child" && <KidsFaqSection />}
      <HomeLocation />
    </NotOnHome>
  );
}
