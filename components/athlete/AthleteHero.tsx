import { WhatsAppIcon } from "@/components/ui/Button";
import { athlete } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { AthleteButton } from "./AthleteButton";
import { AthleteContainer } from "./AthleteContainer";
import { AthleteVideoModal } from "./AthleteVideoModal";

/** The top of the Athlete page: headline and WhatsApp CTA beside a compact football assessment video preview. */
export function AthleteHero() {
  const { hero } = athlete;
  return (
    <section className="bg-[#081C2C] py-10 text-white sm:py-12 lg:py-14">
      <AthleteContainer className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-10">
        <div className="min-w-0 max-w-[560px]">
          <h1 className="text-[clamp(34px,3.4vw,48px)] font-bold leading-[1.1]">
            <span className="block">{hero.headlineLines[0]}</span>
            <span className="block text-[#67D5E5]">{hero.headlineLines[1]}</span>
          </h1>
          <p className="mt-4 text-base leading-[1.55] text-white/75">{hero.text}</p>
          <AthleteButton href={whatsappUrl(hero.whatsappMessage)} className="mt-6">
            <WhatsAppIcon className="size-5" />
            {hero.cta}
          </AthleteButton>
        </div>

        <AthleteVideoModal video={hero.video} className="aspect-video w-full" />
      </AthleteContainer>
    </section>
  );
}
