import { partnersById, ui } from "@/content";
import type { B2BContent } from "@/content/types";
import { faqJsonLd } from "@/lib/jsonld";
import { ConfigForm } from "../forms/ConfigForm";
import { Photo } from "../media/Photo";
import { Faq } from "../sections/Faq";
import { FormPanel } from "../sections/FormPanel";
import { PartnerList } from "../sections/PartnerLogos";
import { LinkButton } from "../ui/Button";
import { JsonLd } from "../ui/JsonLd";
import { Container, Section, SectionHeading } from "../ui/Section";
import { Txt } from "../ui/Txt";

const FORM_ID = "pilot-form";

export function B2BPage({ content }: { content: B2BContent }) {
  const { hero, pilot } = content;
  return (
    <>
      <JsonLd data={faqJsonLd(content.faq)} />

      <section className="bg-midnight py-14 text-white sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-electric-gradient">{hero.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl">{hero.headline}</h1>
            <p className="mt-6 text-lg text-on-midnight-soft">{hero.sub}</p>
            <LinkButton href={`#${FORM_ID}`} className="mt-8 w-full sm:w-auto">
              {hero.cta}
            </LinkButton>
          </div>
          <Photo
            image={hero.image}
            sizes="(min-width: 1024px) 50vw, 100vw"
            preload
            className="aspect-[3/2] w-full rounded-3xl"
          />
        </Container>
      </section>

      <section className="bg-electric-gradient py-10 text-midnight">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-wide">{pilot.label}</p>
            <h2 className="mt-1 text-3xl sm:text-4xl">{pilot.title}</h2>
            <p className="mt-2 text-lg">{pilot.text}</p>
          </div>
          <LinkButton href={`#${FORM_ID}`} variant="midnight" className="shrink-0">
            {hero.cta}
          </LinkButton>
        </Container>
      </section>

      <Section>
        <SectionHeading title={content.includedTitle} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.included.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line p-6">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-2 text-ink-soft">
                <Txt>{item.text}</Txt>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading title={content.stepsTitle} tone="mist" />
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-white p-6">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-midnight font-display font-extrabold text-electric">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title={content.proofTitle} />
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {content.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col rounded-2xl bg-midnight p-6 text-white">
              <dt className="order-2 mt-2 text-on-midnight-soft">{stat.label}</dt>
              <dd className="order-1 font-display text-4xl font-extrabold text-electric-gradient">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <PartnerList items={partnersById(content.partnerIds)} />
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading title={ui.questions} tone="mist" />
        <Faq items={content.faq} />
      </Section>

      <FormPanel id={FORM_ID} title={content.formTitle} text={content.formText}>
        <ConfigForm config={content.form} />
      </FormPanel>
    </>
  );
}
