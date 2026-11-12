import { Reveal } from "@/components/ui/Reveal";
import { kids } from "@/content";
import { InlineVideoPlayer } from "./InlineVideoPlayer";
import { BalanceIcon, BallIcon, CameraIcon } from "./KidsIcons";
import { KidsContainer } from "./KidsContainer";
import { KidsHelpBanner } from "./KidsHelpBanner";

const supportIcons: Record<string, typeof BalanceIcon> = {
  "motor-skills": BalanceIcon,
  "multisport-class": BallIcon,
  "talent-identification": CameraIcon,
};

/**
 * "Support beyond the assessment": one video on the left (plays inline on click, no modal, no
 * fullscreen takeover) next to a plain text list of the three programmes, then a WhatsApp prompt.
 */
export function KidsSupport() {
  const { support } = kids;
  return (
    <section className="bg-white pt-10 pb-[18px] sm:pt-16 sm:pb-7">
      <KidsContainer>
        <Reveal>
          <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">{support.title}</h2>
          <p className="mt-2 text-base leading-[1.55] text-[#526271]">{support.text}</p>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-8 sm:mt-7 md:grid-cols-[260px_minmax(0,1fr)] md:items-center">
          <InlineVideoPlayer
            video={support.video}
            sizes="(min-width: 768px) 260px, 70vw"
            className="mx-auto aspect-[9/16] w-[220px] rounded-[14px] sm:w-[260px] md:w-full"
            unmuteButtonClassName="size-14"
          />

          <ul className="flex flex-col gap-5">
            {support.items.map((item) => {
              const Icon = supportIcons[item.id];
              return (
                <li key={item.id} className="flex items-start gap-4 border-b border-[#DCE5EB] pb-5 last:border-0 last:pb-0">
                  {Icon && (
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#67D5E5]/15 text-[#007a99]">
                      <Icon className="size-5" />
                    </span>
                  )}
                  <div>
                    <h3 className="text-[20px] leading-[1.3] font-bold">{item.name}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-base leading-[1.4] text-[#526271]">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#67D5E5]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <KidsHelpBanner
          text={support.help.text}
          cta={support.help.cta}
          whatsappMessage={support.help.whatsappMessage}
          className="mt-6 sm:mt-7"
        />
      </KidsContainer>
    </section>
  );
}
