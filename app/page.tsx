import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { AthleteStats } from "@/components/home/AthleteStats";
import { HomeHero } from "@/components/home/HomeHero";
import { PathCards } from "@/components/home/PathCards";
import { WhySportify } from "@/components/home/WhySportify";
import { MapEmbed } from "@/components/media/MapEmbed";
import { VideoSlot } from "@/components/media/VideoSlot";
import { Faq } from "@/components/sections/Faq";
import { FormPanel } from "@/components/sections/FormPanel";
import { PartnerMarquee } from "@/components/sections/PartnerLogos";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { home, homeFaq, site, testimonials } from "@/content";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(home.meta);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HomeHero />
      <PathCards />

      <Section id="results" tone="mist">
        <h2 className="mb-10 text-3xl sm:mb-14 sm:text-4xl lg:text-5xl">{home.testimonials.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((video) => (
            <VideoSlot key={video.id} video={video} />
          ))}
        </div>
        <AthleteStats />
      </Section>

      <WhySportify />

      <Section tone="mist" className="py-14! sm:py-16!">
        <h2 className="mb-6 text-center text-2xl sm:text-3xl">{home.partners.title}</h2>
        <PartnerMarquee />
      </Section>

      <Section>
        <SectionHeading title={home.faq.title} />
        <Faq items={homeFaq} />
      </Section>

      <FormPanel id="book" title={home.final.title} text={home.final.text}>
        <BookingForm source="booking-home" />
      </FormPanel>

      <Section id="location">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_3fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">{home.location.title}</h2>
            <address className="mt-5 text-lg text-ink-soft not-italic">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <MapEmbed />
        </div>
      </Section>
    </>
  );
}
