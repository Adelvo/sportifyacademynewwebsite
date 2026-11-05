import { HomeLocation } from "@/components/home/HomeLocation";
import { OffersButton } from "@/components/home/OffersLink";
import { PartnersBand } from "@/components/home/PartnersBand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { home } from "@/content";
import { NotOnHome } from "./NotOnHome";

/** The end of every page except the homepage, which has its own partners and location sections. */
export function ClosingSections() {
  return (
    <NotOnHome>
      <PartnersBand />
      <HomeLocation />
      <Section tone="midnight">
        <SectionHeading title={home.closing.title} text={home.closing.text} tone="midnight" />
        <OffersButton className="w-full sm:w-auto" />
      </Section>
    </NotOnHome>
  );
}
