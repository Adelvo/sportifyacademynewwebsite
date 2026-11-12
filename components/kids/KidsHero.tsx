import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { kids } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { LocalVideoPlayer } from "./LocalVideoPlayer";

/** The top of the Kids page: headline and booking CTA on dark blue, the intro video beside it. */
export function KidsHero() {
  const { hero } = kids;
  return (
    <section className="bg-midnight py-14 text-white sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem]">
            <span className="block">{hero.headlineLines[0]}</span>
            <span className="block text-cyan">{hero.headlineLines[1]}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-on-midnight-soft">{hero.text}</p>
          <ExternalButton href={whatsappUrl(hero.whatsappMessage)} variant="whatsapp" className="mt-8">
            <WhatsAppIcon className="size-5" />
            {hero.cta}
          </ExternalButton>
        </div>

        <LocalVideoPlayer video={hero.video} className="mx-auto w-full max-w-sm" />
      </Container>
    </section>
  );
}
