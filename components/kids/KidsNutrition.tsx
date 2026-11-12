import { Photo } from "@/components/media/Photo";
import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { images, kids } from "@/content";
import { whatsappUrl } from "@/lib/links";

/** A larger, light-turquoise panel for the Kids Nutrition Plan: photo beside the pitch and CTA. */
export function KidsNutrition() {
  const { nutrition } = kids;
  return (
    <section className="bg-mist py-16 sm:py-24">
      <Container>
        <Reveal className="grid overflow-hidden rounded-3xl bg-cyan/15 md:grid-cols-2 md:items-stretch">
          <Photo image={images.kids.nutritionPlan} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9] w-full md:aspect-auto md:h-full" />
          <div className="flex flex-col justify-center px-6 py-10 text-center sm:px-10 sm:py-12 md:px-12 md:text-start lg:px-16">
            <p className="text-sm font-bold tracking-widest text-cyan-deep">{nutrition.label}</p>
            <h2 className="mt-3 font-[family-name:var(--font-hero)]! text-3xl tracking-tight sm:text-4xl">{nutrition.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft md:mx-0">{nutrition.text}</p>
            <ExternalButton href={whatsappUrl(nutrition.whatsappMessage)} variant="whatsapp" className="mx-auto mt-8 md:mx-0">
              <WhatsAppIcon className="size-5" />
              {nutrition.cta}
            </ExternalButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
