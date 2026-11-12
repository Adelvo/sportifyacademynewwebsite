import type { Metadata } from "next";
import { AthleteAssessments } from "@/components/athlete/AthleteAssessments";
import { AthleteClosing } from "@/components/athlete/AthleteClosing";
import { AthleteFaqSection } from "@/components/athlete/AthleteFaqSection";
import { AthleteHero } from "@/components/athlete/AthleteHero";
import { AthleteSupport } from "@/components/athlete/AthleteSupport";
import { AthleteTraining } from "@/components/athlete/AthleteTraining";
import { trainPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(trainPage.meta);

export default function TrainWithUsPage() {
  return (
    <>
      <AthleteHero />
      <AthleteAssessments />
      <AthleteTraining />
      <AthleteSupport />
      <AthleteFaqSection />
      <AthleteClosing />
    </>
  );
}
