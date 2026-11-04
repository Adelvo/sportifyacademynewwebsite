import type { Metadata } from "next";
import { B2BPage } from "@/components/b2b/B2BPage";
import { clubs } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(clubs.meta);

export default function ClubsPage() {
  return <B2BPage content={clubs} />;
}
