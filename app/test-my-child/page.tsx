import type { Metadata } from "next";
import { KidsAssessments } from "@/components/kids/KidsAssessments";
import { KidsHero } from "@/components/kids/KidsHero";
import { KidsNutrition } from "@/components/kids/KidsNutrition";
import { KidsSupport } from "@/components/kids/KidsSupport";
import { testPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(testPage.meta);

/** The FAQ section for this page renders later, inside ClosingSections, between the partners band and the location block. */
export default function TestMyChildPage() {
  return (
    <>
      <KidsHero />
      <KidsAssessments />
      <KidsSupport />
      <KidsNutrition />
    </>
  );
}
