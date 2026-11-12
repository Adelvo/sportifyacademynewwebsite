import type { Metadata } from "next";
import { KidsAssessments } from "@/components/kids/KidsAssessments";
import { KidsClosing } from "@/components/kids/KidsClosing";
import { KidsFaqSection } from "@/components/kids/KidsFaqSection";
import { KidsHero } from "@/components/kids/KidsHero";
import { KidsNutrition } from "@/components/kids/KidsNutrition";
import { KidsProcess } from "@/components/kids/KidsProcess";
import { KidsSupport } from "@/components/kids/KidsSupport";
import { testPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(testPage.meta);

export default function TestMyChildPage() {
  return (
    <>
      <KidsHero />
      <KidsAssessments />
      <KidsProcess />
      <KidsSupport />
      <KidsNutrition />
      <KidsFaqSection />
      <KidsClosing />
    </>
  );
}
