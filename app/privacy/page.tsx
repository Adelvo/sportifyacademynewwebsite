import type { Metadata } from "next";
import { LegalTemplate } from "@/components/sections/LegalTemplate";
import { privacyPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(privacyPage.meta);

export default function PrivacyPage() {
  return <LegalTemplate page={privacyPage} />;
}
