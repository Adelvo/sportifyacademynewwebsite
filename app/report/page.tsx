import type { Metadata } from "next";
import { ConfigForm } from "@/components/forms/ConfigForm";
import { FormCard } from "@/components/forms/parts";
import { Section } from "@/components/ui/Section";
import { reportForm, reportPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

// Parents arrive from a QR code, so this page stays out of search results.
export const metadata: Metadata = pageMetadata(reportPage.meta, { noindex: true });

export default function ReportPage() {
  return (
    <Section tone="midnight" className="py-10! sm:py-16!">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl sm:text-5xl">{reportPage.headline}</h1>
        <p className="mt-4 mb-8 text-lg text-on-midnight-soft">{reportPage.text}</p>
        <FormCard>
          <ConfigForm config={reportForm} />
        </FormCard>
      </div>
    </Section>
  );
}
