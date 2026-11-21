import type { Metadata } from "next";
import { UpcomingConference } from "@/components/organisations/UpcomingConference";
import { organisationsPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(organisationsPage.conference.meta);

// Not in the navigation: visitors reach it from the "Workshops & Conferences" card on /for-organisations.
export default function EarlyYearsConferencePage() {
  return <UpcomingConference />;
}
