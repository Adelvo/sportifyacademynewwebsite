import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { AthleteStats } from "@/components/home/AthleteStats";
import { HomeHero } from "@/components/home/HomeHero";
import { PathCards } from "@/components/home/PathCards";
import { ProgrammeSection } from "@/components/home/ProgrammeSection";
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
import { home, homeFaq, images, testimonials } from "@/content";
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

      <ProgrammeSection id="train" section={home.train} photos={images.train} photoAspect="aspect-[4/3]" />
      <ProgrammeSection id="recover" section={home.recover} photos={images.recover} photoAspect="aspect-[6/7]" divided />

      <Section id="results" tone="mist">
        <h2 className="mb-10 text-3xl sm:mb-14 sm:text-4xl lg:text-5xl">{home.testimonials.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((video) => (
            <VideoSlot key={video.id} video={video} />
          ))}
        </div>
        <AthleteStats />
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
