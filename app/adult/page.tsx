import type { Metadata } from "next";
import { ProgrammeSection } from "@/components/home/ProgrammeSection";
import { adultPage, home, images } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(adultPage.meta);

export default function AdultPage() {
  return <ProgrammeSection id="adult" section={home.adult} photos={images.adult} photoAspect="aspect-[4/3]" twoLineTitles headingLevel={1} />;
}
