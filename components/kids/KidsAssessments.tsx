import { CornerArc, HeadingMark } from "@/components/home/SectionAccents";
import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { kids } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { InlineVideoPlayer } from "./InlineVideoPlayer";
import { KidsButton } from "./KidsButton";
import { KidsContainer } from "./KidsContainer";
import { KidsProcess } from "./KidsProcess";

/** "Find the right starting point": the intro video beside the two assessments and their framed process strip. */
export function KidsAssessments() {
  const { assessments } = kids;
  return (
    <section className="relative overflow-hidden bg-[#F4F7F9] py-[18px] sm:py-7">
      <CornerArc className="pointer-events-none start-0 top-0" />
      <KidsContainer className="relative">
        <Reveal>
          <h2 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2] md:grid md:grid-cols-[260px_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16">
            <span className="inline-flex shrink-0 items-center gap-3">
              <HeadingMark className="shrink-0" />
              {assessments.label}
            </span>
            <span className="font-normal">{assessments.title}</span>
          </h2>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-8 sm:mt-7 md:grid-cols-[260px_minmax(0,1fr)] md:items-center md:gap-x-12 lg:gap-x-16">
          <InlineVideoPlayer
            video={assessments.video}
            sizes="(min-width: 768px) 260px, 70vw"
            className="mx-auto aspect-[9/16] w-[220px] sm:w-[260px] md:w-full"
            unmuteButtonClassName="size-14"
          />

          <ul className="flex flex-col gap-6">
            {assessments.items.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`flex items-start gap-4 border-b border-[#DCE5EB] pb-6 last:border-0 last:pb-0 ${index % 2 === 1 ? "ml-4 sm:ml-10 lg:ml-16" : ""}`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="w-fit rounded-full bg-[#fbbc05] px-3 py-1 text-[12px] font-bold tracking-wide text-[#081C2C]">{item.age}</p>
                    <h3 className="mt-2 text-[20px] leading-[1.3] font-bold">{item.name}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-base leading-[1.4] text-[#526271]">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#67D5E5]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <KidsButton href={whatsappUrl(item.whatsappMessage)}>
                        <WhatsAppIcon className="size-5" />
                        {item.cta}
                      </KidsButton>
                      {item.learnMoreUrl && (
                        <a
                          href={item.learnMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[15px] font-semibold text-cyan-deep underline-offset-4 hover:underline"
                        >
                          Learn more →
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <KidsProcess />
      </KidsContainer>
    </section>
  );
}
