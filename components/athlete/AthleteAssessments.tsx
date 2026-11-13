import { CornerArc, HeadingMark } from "@/components/home/SectionAccents";
import { VideoSlot } from "@/components/media/VideoSlot";
import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { athlete } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { AthleteButton } from "./AthleteButton";
import { AthleteContainer } from "./AthleteContainer";
import { AthleteProcess } from "./AthleteProcess";

/** "Start with the right assessment": the intro video beside the two assessments and their framed process strip. */
export function AthleteAssessments() {
  const { assessments, hero } = athlete;
  return (
    <section className="relative overflow-hidden bg-white py-[18px] sm:py-7">
      <CornerArc className="pointer-events-none start-0 top-0" />
      <AthleteContainer className="relative">
        <Reveal>
          <h2 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-x-8">
            <span className="inline-flex shrink-0 items-center gap-3">
              <HeadingMark className="shrink-0" />
              {assessments.label}
            </span>
            <span className="font-display font-normal leading-[1.08] tracking-[-0.02em] text-balance">{assessments.title}</span>
          </h2>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-8 sm:mt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          <div className="md:mt-[42px]">
            <VideoSlot video={hero.video} frameClassName="aspect-video w-full" hideCaption autoplayInView />
          </div>

          <ul className="flex flex-col gap-6">
            {assessments.items.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`border-b border-[#DCE5EB] pb-6 last:border-0 last:pb-0 ${item.id === "specialized-assessment" ? "ml-4 sm:ml-10 lg:ml-16" : ""}`}
                >
                  <h3 className="mt-2 text-[20px] leading-[1.3] font-bold">{item.name}</h3>
                  {item.tag && (
                    <span className="mt-2 inline-flex items-center rounded-full bg-[#fbbc05] px-2.5 py-1 text-xs font-bold tracking-wide text-[#081C2C]">
                      {item.tag}
                    </span>
                  )}
                  <p className="mt-2 text-base leading-[1.55] text-[#526271]">{item.text}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-base leading-[1.4] text-[#526271]">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#67D5E5]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <AthleteButton href={whatsappUrl(item.whatsappMessage)} className="mt-4">
                    <WhatsAppIcon className="size-5" />
                    {item.cta}
                  </AthleteButton>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <AthleteProcess />
      </AthleteContainer>
    </section>
  );
}
