import type { Metadata } from "next";
import { BookButton } from "@/components/forms/BookButton";
import { ScoreRing } from "@/components/data-viz/ScoreRing";
import { MapEmbed } from "@/components/media/MapEmbed";
import { Photo } from "@/components/media/Photo";
import { PartnerMarquee } from "@/components/sections/PartnerLogos";
import { PageHero, Section, SectionHeading } from "@/components/ui/Section";
import { Txt } from "@/components/ui/Txt";
import { about, images, measures, ui } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(about.meta);

export default function AboutPage() {
  const { founder, method } = about;
  return (
    <>
      <PageHero {...about.hero} />

      <Section>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[2fr_3fr]">
          <Photo
            image={images.founder}
            sizes="(min-width: 768px) 40vw, 100vw"
            preload
            className="aspect-[4/5] w-full rounded-3xl"
          />
          <div>
            <p className="font-semibold text-ink-soft">{founder.title}</p>
            <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl">{founder.name}</h2>
            <p className="mt-2 text-xl font-bold">{founder.role}</p>
            <div className="mt-5 space-y-3 text-lg text-ink-soft">
              {founder.story.map((line) => (
                <p key={line}>
                  <Txt>{line}</Txt>
                </p>
              ))}
            </div>
            <h3 className="mt-8 text-2xl">{founder.credentialsTitle}</h3>
            <ul className="mt-3 space-y-2">
              {founder.credentials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-midnight" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="midnight">
        <SectionHeading title={method.title} text={method.text} tone="midnight" />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {measures.map((measure) => (
            <li key={measure.id} className="rounded-2xl bg-midnight-800 p-6">
              <div className="flex items-center gap-3">
                <ScoreRing value={measure.ring} size={44} className="shrink-0" />
                <h3 className="text-xl text-white">{measure.name}</h3>
              </div>
              <p className="mt-3 text-on-midnight-soft">
                <strong className="text-white">{method.whatLabel}</strong> {measure.what}
              </p>
              <p className="mt-1 text-on-midnight-soft">
                <strong className="text-white">{method.whyLabel}</strong> {measure.why}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-on-midnight-soft">{ui.illustrationNote}</p>
        <div className="mt-10 max-w-2xl rounded-2xl bg-electric-gradient p-6 text-midnight">
          <h3 className="text-2xl">{method.resultTitle}</h3>
          <p className="mt-2 text-lg">{method.resultText}</p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">{about.recognition.title}</h2>
            <p className="mt-4 text-lg text-ink-soft">{about.recognition.text}</p>
          </div>
          <Photo image={images.method} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-3xl" />
        </div>
      </Section>

      <Section tone="mist" className="py-14! sm:py-16!">
        <h2 className="mb-6 text-2xl sm:text-3xl">{about.partners.title}</h2>
        <PartnerMarquee />
      </Section>

      <Section>
        <SectionHeading title={about.centre.title} text={about.centre.text} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {images.centre.map((image) => (
            <li key={image.src}>
              <Photo image={image} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[10/7] w-full rounded-2xl" />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <MapEmbed />
        </div>
      </Section>

      <Section tone="midnight">
        <SectionHeading title={about.cta.title} text={about.cta.text} tone="midnight" />
        <BookButton className="w-full sm:w-auto">{ui.bookAssessment}</BookButton>
      </Section>
    </>
  );
}
