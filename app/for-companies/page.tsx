import type { Metadata } from "next";
import { B2BPage } from "@/components/b2b/B2BPage";
import { companies } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(companies.meta);

export default function CompaniesPage() {
  return <B2BPage content={companies} />;
}
