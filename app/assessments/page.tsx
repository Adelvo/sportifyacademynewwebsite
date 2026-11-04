import type { Metadata } from "next";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Faq } from "@/components/sections/Faq";
import { PackageGroups } from "@/components/sections/PackageCards";
import { PackageHelper } from "@/components/sections/PackageHelper";
import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero, Section, SectionHeading } from "@/components/ui/Section";
import { assessmentsFaq, packagesPage, ui } from "@/content";
import { faqJsonLd } from "@/lib/jsonld";
import { whatsappUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(packagesPage.meta);

export default function AssessmentsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(assessmentsFaq)} />
      <PageHero {...packagesPage.hero} />

      <Section id="helper" tone="midnight" className="border-t border-white/10">
        <SectionHeading title={packagesPage.helperTitle} text={packagesPage.helperText} tone="midnight" />
        <PackageHelper />
      </Section>

      <Section>
        <SectionHeading title={packagesPage.groupsTitle} />
        <PackageGroups />
      </Section>

      <Section tone="mist">
        <SectionHeading title={packagesPage.tableTitle} tone="mist" />
        <ComparisonTable />
      </Section>

      <Section>
        <SectionHeading title={packagesPage.faqTitle} />
        <Faq items={assessmentsFaq} />
      </Section>

      <Section tone="midnight">
        <SectionHeading title={packagesPage.ctaTitle} text={packagesPage.ctaText} tone="midnight" />
        <ExternalButton href={whatsappUrl(packagesPage.whatsappMessage)} variant="whatsapp">
          <WhatsAppIcon />
          {ui.whatsappButton}
        </ExternalButton>
      </Section>
    </>
  );
}
