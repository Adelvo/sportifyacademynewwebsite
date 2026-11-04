import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { HomeHero } from "@/components/home/HomeHero";
import { PathCards } from "@/components/home/PathCards";
import { ServiceSection } from "@/components/home/ServiceSection";
import { TestPackages } from "@/components/home/TestPackages";
import { Photo } from "@/components/media/Photo";
import { VideoSlot } from "@/components/media/VideoSlot";
import { Faq } from "@/components/sections/Faq";
import { FormPanel } from "@/components/sections/FormPanel";
import { OrgCards } from "@/components/sections/OrgCards";
import { PartnerMarquee } from "@/components/sections/PartnerLogos";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { home, homeFaq, images, stats, testimonials } from "@/content";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(home.meta);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HomeHero />
      <PathCards />

      <TestPackages />

      <ServiceSection id="train" tone="mist" service={home.train} />
      <ServiceSection id="recover" tone="white" service={home.recover} />

      <Section id="results" tone="mist">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">{home.testimonials.title}</h2>
          <p className="flex items-center gap-3">
            <span className="font-display text-4xl font-extrabold">{stats.rating.value}</span>
            <span className="text-ink-soft">{home.testimonials.ratingText}</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((video) => (
            <VideoSlot key={video.id} video={video} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[2fr_3fr]">
          <Photo image={images.founder} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] w-full rounded-3xl" />
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">{home.founder.title}</h2>
            <p className="mt-4 text-xl font-bold">
              {home.founder.name}, {home.founder.role}
            </p>
            <ul className="mt-5 space-y-2 text-lg text-ink-soft">
              {home.founder.credentials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-midnight" />
                  {item}
                </li>
              ))}
            </ul>
            <LinkButton href="/about" variant="outlineDark" className="mt-7">
              {home.founder.cta}
            </LinkButton>
          </div>
        </div>
      </Section>

      <Section tone="mist" className="py-14! sm:py-16!">
        <h2 className="mb-6 text-2xl sm:text-3xl">{home.partners.title}</h2>
        <PartnerMarquee />
      </Section>

      <Section id="organisations" tone="midnight">
        <SectionHeading title={home.organisations.title} text={home.organisations.text} tone="midnight" />
        <OrgCards dark />
      </Section>

      <Section>
        <SectionHeading title={home.faq.title} />
        <Faq items={homeFaq} />
      </Section>

      <FormPanel id="book" title={home.final.title} text={home.final.text}>
        <BookingForm source="booking-home" />
      </FormPanel>
    </>
  );
}
