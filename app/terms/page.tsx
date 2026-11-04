import type { Metadata } from "next";
import { LegalTemplate } from "@/components/sections/LegalTemplate";
import { termsPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(termsPage.meta);

export default function TermsPage() {
  return <LegalTemplate page={termsPage} />;
}
