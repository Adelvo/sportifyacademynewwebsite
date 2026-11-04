import type { Metadata } from "next";
import { LegalTemplate } from "@/components/sections/LegalTemplate";
import { cookiesPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(cookiesPage.meta);

export default function CookiesPage() {
  return <LegalTemplate page={cookiesPage} />;
}
