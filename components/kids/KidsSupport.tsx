import { Photo } from "@/components/media/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { kids } from "@/content";
import { HomeHeading } from "../home/HomeHeading";
import { VideoModal } from "./VideoModal";

/**
 * "Support beyond the assessment": three equal cards, photo only, with no booking or contact CTA.
 * The Talent Identification card's photo doubles as the poster for its video, opened in a modal.
 */
export function KidsSupport() {
  const { support } = kids;
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <HomeHeading title={support.title} text={support.text} />
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 lg:gap-8">
          {support.items.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_10px_30px_rgb(10_31_51/0.08)]">
                  {item.video ? (
                    <VideoModal video={item.video} className="aspect-[16/9] w-full" />
                  ) : (
                    <Photo image={item.image} sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[16/9] w-full" />
                  )}
                  <div aria-hidden="true" className="h-1 bg-electric-gradient" />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-[family-name:var(--font-hero)]! text-xl tracking-tight sm:text-2xl md:min-h-[2.5lh]">{item.name}</h3>
                    <p className="mt-3 text-ink-soft">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
