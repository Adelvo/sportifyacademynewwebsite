import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { athlete } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { AthleteButton } from "./AthleteButton";
import { AthleteContainer } from "./AthleteContainer";

/** The Athlete page's own closing CTA: a compact navy contact bar, directly under the FAQ. */
export function AthleteClosing() {
  const { closing } = athlete;
  return (
    <section className="bg-[#081C2C] py-7 text-white sm:py-8">
      <Reveal as="div">
        <AthleteContainer className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[clamp(22px,2vw,28px)] font-bold leading-[1.2]">{closing.title}</h2>
          <AthleteButton href={whatsappUrl(closing.whatsappMessage)} className="w-full shrink-0 sm:w-auto">
            <WhatsAppIcon className="size-5" />
            {closing.cta}
          </AthleteButton>
        </AthleteContainer>
      </Reveal>
    </section>
  );
}
