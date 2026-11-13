import { Reveal } from "@/components/ui/Reveal";
import { kids } from "@/content";
import { InlineVideoPlayer } from "./InlineVideoPlayer";
import { KidsContainer } from "./KidsContainer";
import { KidsHelpBanner } from "./KidsHelpBanner";
import { KidsSupportCard } from "./KidsSupportCard";

const supportOffsets: Record<string, string> = {
  "multisport-class": "ml-8 sm:ml-16 lg:ml-24",
  "talent-identification": "ml-16 sm:ml-32 lg:ml-48",
};

/**
 * "Support beyond the assessment": one video on the left (plays inline, muted, as soon as it
 * scrolls into view, no modal, no fullscreen takeover) next to three staggered, framed
 * programmes, then a WhatsApp prompt.
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
            className="mx-auto aspect-[9/16] w-[220px] sm:w-[260px] md:w-full"
            unmuteButtonClassName="size-14"
          />

          <ul className="flex flex-col gap-5">
            {support.items.map((item, index) => (
              <KidsSupportCard key={item.id} item={item} index={index} className={supportOffsets[item.id] ?? ""} />
            ))}
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
