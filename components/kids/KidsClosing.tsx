import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { kids } from "@/content";
import { whatsappUrl } from "@/lib/links";

/** The Kids page's own closing CTA, directly under the FAQ. */
export function KidsClosing() {
  const { closing } = kids;
  return (
    <Section tone="midnight">
      <SectionHeading title={closing.title} tone="midnight" />
      <ExternalButton href={whatsappUrl(closing.whatsappMessage)} variant="whatsapp" className="w-full sm:w-auto">
        <WhatsAppIcon className="size-5" />
        {closing.cta}
      </ExternalButton>
    </Section>
  );
}
