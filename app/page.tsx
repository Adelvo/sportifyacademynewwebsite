import type { Metadata } from "next";
import { AthleteStories } from "@/components/home/AthleteStories";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomeLocation } from "@/components/home/HomeLocation";
import { PartnersBand } from "@/components/home/PartnersBand";
import { PathCards } from "@/components/home/PathCards";
import { WhySportify } from "@/components/home/WhySportify";
import { JsonLd } from "@/components/ui/JsonLd";
import { home, homeFaq } from "@/content";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(home.meta);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HomeIntro>
        <HomeHero />
        <PathCards />
      </HomeIntro>

      <AthleteStories />

      <GoogleReviews />

      <WhySportify />

      <PartnersBand />

      <HomeFaq />

      <HomeLocation />
    </>
  );
}
