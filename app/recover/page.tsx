import type { Metadata } from "next";
import { ProgrammeSection } from "@/components/home/ProgrammeSection";
import { home, images, recoverPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(recoverPage.meta);

export default function RecoverPage() {
  return <ProgrammeSection id="recover" section={home.recover} photos={images.recover} photoAspect="aspect-[6/7]" divided twoLineTitles headingLevel={1} />;
}
