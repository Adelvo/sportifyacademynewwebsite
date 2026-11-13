import type { Metadata } from "next";
import { AdultAssessments } from "@/components/adult/AdultAssessments";
import { AdultFaqSection } from "@/components/adult/AdultFaqSection";
import { AdultHero } from "@/components/adult/AdultHero";
import { AdultSupport } from "@/components/adult/AdultSupport";
import { AdultTraining } from "@/components/adult/AdultTraining";
import { adultPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(adultPage.meta);

export default function AdultPage() {
  return (
    <>
      <AdultHero />
      <AdultAssessments />
      <AdultTraining />
      <AdultSupport />
      <AdultFaqSection />
    </>
  );
}
