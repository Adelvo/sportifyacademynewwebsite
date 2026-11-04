import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { HomeHero } from "@/components/home/HomeHero";
import { PathCards } from "@/components/home/PathCards";
import { ServiceSection } from "@/components/home/ServiceSection";
import { Photo } from "@/components/media/Photo";
import { VideoSlot } from "@/components/media/VideoSlot";
import { Faq } from "@/components/sections/Faq";
import { FormPanel } from "@/components/sections/FormPanel";
import { MeasureGrid } from "@/components/sections/MeasureGrid";
import { OrgCards } from "@/components/sections/OrgCards";
import { PartnerMarquee } from "@/components/sections/PartnerLogos";
import { BookButton } from "@/components/forms/BookButton";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  formatPrice,
  home,
  homeFaq,
  images,
  packageGroups,
  packages,
  stats,
  testimonials,
} from "@/content";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(home.meta);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HomeHero />
      <PathCards />

      <Section>
        <SectionHeading title={home.pain.title} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.pain.items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line p-6">
              <span aria-hidden="true" className="mb-4 block h-1 w-10 rounded-full bg-electric-gradient" />
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how-it-works" tone="mist">
        <SectionHeading title={home.how.title} tone="mist" />
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {home.how.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-white p-6">
              <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-midnight font-display text-xl font-extrabold text-electric">
                {index + 1}
              </span>
              <h3 className="mt-4 text-2xl">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <BookButton className="mt-8 w-full sm:w-auto">{home.how.cta}</BookButton>
      </Section>

      <Section tone="midnight">
        <SectionHeading title={home.measure.title} text={home.measure.text} tone="midnight" />
        <MeasureGrid />
      </Section>

      <Section id="packages">
        <SectionHeading title={home.packages.title} text={home.packages.text} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {packageGroups.map((group) => {
            const items = packages.filter((pack) => pack.group === group.id);
            const lowest = Math.min(...items.map((pack) => pack.price));
            return (
              <li key={group.id} className="flex flex-col rounded-2xl border-2 border-line p-6">
                <h3 className="text-2xl">{group.name}</h3>
                <p className="mt-2 text-ink-soft">{group.summary}</p>
                <p className="mt-4 font-semibold">
                  {home.packages.from}{" "}
                  <span className="font-display text-2xl font-extrabold">{formatPrice(lowest)}</span>
                </p>
                <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                  {items.map((pack) => (
                    <li key={pack.id}>{pack.name}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <LinkButton href="/assessments" className="mt-8 w-full sm:w-auto">
          {home.packages.cta}
        </LinkButton>
      </Section>

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
