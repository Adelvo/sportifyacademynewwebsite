import type { Metadata } from "next";
import { TestPackages } from "@/components/home/TestPackages";
import { testPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(testPage.meta);

export default function TestMyChildPage() {
  return <TestPackages headingLevel={1} />;
}
