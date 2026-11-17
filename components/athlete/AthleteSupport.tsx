import { Photo } from "@/components/media/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/Button";
import { athlete, images } from "@/content";
import type { ImageAsset } from "@/content/types";
import { whatsappUrl } from "@/lib/links";
import { AthleteButton } from "./AthleteButton";
import { AthleteContainer } from "./AthleteContainer";
import { BrainIcon, ForkKnifeIcon, HeartPulseIcon } from "./AthleteIcons";

const supportIcons: Record<string, typeof ForkKnifeIcon> = {
  nutrition: ForkKnifeIcon,
  "physical-therapy": HeartPulseIcon,
  "sports-psychology": BrainIcon,
};

const supportImages: Record<string, ImageAsset> = {
  nutrition: images.kids.nutritionPlan,
  "physical-therapy": images.train.athletePhysicalTherapy,
  "sports-psychology": images.train.sportsPsychology,
};

const toneClasses: Record<string, string> = {
  cyan: "bg-[#E7F7FA]",
  mist: "bg-[#F4F7F9]",
};

/** "Support your training": three compact panels, Nutrition Plan, Physical Therapy and Sports Psychology, each led by a stock photo. */
export function AthleteSupport() {
  const { support } = athlete;
  return (
    <section className="bg-white py-9 sm:py-12">
      <AthleteContainer>
        <Reveal>
          <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">{support.title}</h2>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-6 sm:mt-7 md:grid-cols-2 lg:grid-cols-3">
          {support.items.map((item) => {
            const Icon = supportIcons[item.id];
            return (
              <div key={item.id} className="flex flex-col overflow-hidden rounded-[14px] border border-[#DCE5EB] bg-white">
                <Photo image={supportImages[item.id]} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="aspect-video w-full" />
                <div className={`flex flex-1 flex-col p-6 ${toneClasses[item.tone]}`}>
                  <span className="grid size-11 place-items-center rounded-full bg-white text-[#007a99]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-[20px] leading-[1.3] font-bold sm:text-[22px]">{item.name}</h3>
                  <p className="mt-2 flex-1 text-base leading-[1.55] text-[#526271]">{item.text}</p>
                  <AthleteButton href={whatsappUrl(item.whatsappMessage)} className="mt-5 w-full sm:w-auto">
                    <WhatsAppIcon className="size-5" />
                    {item.cta}
                  </AthleteButton>
                </div>
              </div>
            );
          })}
        </Reveal>
      </AthleteContainer>
    </section>
  );
}
