import type { Metadata } from "next";
import { ProgrammeSection } from "@/components/home/ProgrammeSection";
import { home, images, trainPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(trainPage.meta);

export default function TrainWithUsPage() {
  return <ProgrammeSection id="train" section={home.train} photos={images.train} photoAspect="aspect-[4/3]" twoLineTitles headingLevel={1} />;
}
