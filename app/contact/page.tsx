import type { Metadata } from "next";
import { ConfigForm } from "@/components/forms/ConfigForm";
import { FormCard } from "@/components/forms/parts";
import { MapEmbed } from "@/components/media/MapEmbed";
import { OrgCards } from "@/components/sections/OrgCards";
import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { PageHero, Section, SectionHeading } from "@/components/ui/Section";
import { Txt } from "@/components/ui/Txt";
import { contactForm, contactPage, site, ui, whatsappMessages } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(contactPage.meta);

export default function ContactPage() {
  return (
    <>
      <PageHero {...contactPage.hero} />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">{contactPage.detailsTitle}</h2>
            <ExternalButton href={whatsappUrl(whatsappMessages["/contact"])} variant="whatsapp" className="mt-6">
              <WhatsAppIcon />
              {ui.whatsappButton}
            </ExternalButton>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="font-bold">{ui.address}</dt>
                <dd className="mt-1 text-ink-soft">
                  {site.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-bold">{ui.phone}</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneE164}`} className="font-semibold underline underline-offset-4">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold">{ui.email}</dt>
                <dd className="mt-1">
                  <Txt>{site.emailTodo}</Txt>
                </dd>
              </div>
              <div>
                <dt className="font-bold">{ui.openingHours}</dt>
                <dd className="mt-1">
                  <Txt>{site.hoursTodo}</Txt>
                </dd>
              </div>
            </dl>
            <div className="mt-8">
              <MapEmbed />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl sm:text-4xl">{contactPage.formTitle}</h2>
            <FormCard>
              <ConfigForm config={contactForm} />
            </FormCard>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading title={contactPage.orgTitle} tone="mist" />
        <OrgCards />
      </Section>
    </>
  );
}
