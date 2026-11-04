import type { Metadata } from "next";
import { B2BPage } from "@/components/b2b/B2BPage";
import { schools } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(schools.meta);

export default function SchoolsPage() {
  return <B2BPage content={schools} />;
}
