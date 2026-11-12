import { Photo } from "@/components/media/Photo";
import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { kids } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { HomeHeading } from "../home/HomeHeading";

/** "Find the right starting point": the two assessment cards, then a WhatsApp help prompt. */
export function KidsAssessments() {
  const { assessments } = kids;
  return (
    <section className="bg-mist py-16 sm:py-24">
      <Container>
        <Reveal>
          <HomeHeading title={assessments.title} />
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8">
          {assessments.items.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 90} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_10px_30px_rgb(10_31_51/0.08)]">
                  <Photo image={item.image} sizes="(min-width: 768px) 46vw, 100vw" className="aspect-[16/9] w-full" />
                  <div aria-hidden="true" className="h-1 bg-electric-gradient" />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="w-fit rounded-full bg-[#e6eaf2] px-3 py-1 text-sm font-bold tracking-wide">{item.age}</p>
                    <h3 className="mt-3 font-[family-name:var(--font-hero)]! text-2xl tracking-tight sm:text-[1.75rem]">{item.name}</h3>
                    <p className="mt-3 text-ink-soft">{item.text}</p>
                    <div className="mt-auto pt-7">
                      <ExternalButton href={whatsappUrl(item.whatsappMessage)} variant="whatsapp" className="w-full">
                        <WhatsAppIcon className="size-5" />
                        {item.cta}
                      </ExternalButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-6 flex flex-col items-start gap-4 rounded-2xl bg-midnight p-6 text-white sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="text-lg font-bold">{assessments.help.text}</p>
          <ExternalButton href={whatsappUrl(assessments.help.whatsappMessage)} variant="whatsapp" className="w-full shrink-0 sm:w-auto">
            <WhatsAppIcon className="size-5" />
            {assessments.help.cta}
          </ExternalButton>
        </Reveal>
      </Container>
    </section>
  );
}
