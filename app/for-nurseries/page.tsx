import type { Metadata } from "next";
import { B2BPage } from "@/components/b2b/B2BPage";
import { nurseries } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(nurseries.meta);

export default function NurseriesPage() {
  return <B2BPage content={nurseries} />;
}
