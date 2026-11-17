import type { Metadata } from "next";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { AdultAssessments } from "@/components/adult/AdultAssessments";
import { AdultFaqSection } from "@/components/adult/AdultFaqSection";
import { AdultHero } from "@/components/adult/AdultHero";
import { AdultSupport } from "@/components/adult/AdultSupport";
import { AdultTraining } from "@/components/adult/AdultTraining";
import { adult, adultPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(adultPage.meta);

export default function AdultPage() {
  return (
    <>
      <AdultHero />
      <AdultAssessments />
      <ComparisonTable comparison={adult.comparison} />
      <AdultTraining />
      <AdultSupport />
      <AdultFaqSection />
    </>
  );
}
