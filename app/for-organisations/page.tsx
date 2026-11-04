import type { Metadata } from "next";
import { ProgrammeSection } from "@/components/home/ProgrammeSection";
import { home, images, organisationsPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(organisationsPage.meta);

export default function ForOrganisationsPage() {
  return <ProgrammeSection id="organisations" section={home.organisations} photos={images.organisations} photoAspect="aspect-[4/3]" headingLevel={1} />;
}
