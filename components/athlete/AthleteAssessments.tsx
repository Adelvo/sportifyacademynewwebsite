import { Photo } from "@/components/media/Photo";
import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { athlete } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { AthleteButton } from "./AthleteButton";
import { AthleteContainer } from "./AthleteContainer";
import { AthleteHelpBanner } from "./AthleteHelpBanner";
import { AthleteProcess } from "./AthleteProcess";

/** "Start with the right assessment": two equal assessment cards, a WhatsApp help prompt, and the process strip. */
export function AthleteAssessments() {
  const { assessments } = athlete;
  return (
    <section className="bg-white py-9 sm:py-12">
      <AthleteContainer>
        <Reveal>
          <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">{assessments.title}</h2>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-6 sm:mt-7 md:grid-cols-2">
          {assessments.items.map((item) => (
            <div key={item.id} className="flex flex-col overflow-hidden rounded-[14px] border border-[#DCE5EB] bg-white">
              <Photo image={item.image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-video w-full" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[20px] leading-[1.3] font-bold sm:text-[22px]">{item.name}</h3>
                <p className="mt-2 flex-1 text-base leading-[1.55] text-[#526271]">{item.text}</p>
                <AthleteButton href={whatsappUrl(item.whatsappMessage)} className="mt-5 w-full sm:w-auto">
                  <WhatsAppIcon className="size-5" />
                  {item.cta}
                </AthleteButton>
              </div>
            </div>
          ))}
        </Reveal>

        <AthleteHelpBanner
          text={assessments.help.text}
          cta={assessments.help.cta}
          whatsappMessage={assessments.help.whatsappMessage}
          className="mt-6 sm:mt-7"
        />

        <AthleteProcess />
      </AthleteContainer>
    </section>
  );
}
