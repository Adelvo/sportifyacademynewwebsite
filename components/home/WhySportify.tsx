import { Photo } from "@/components/media/Photo";
import { VideoSlot } from "@/components/media/VideoSlot";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { home } from "@/content";
import type { ImageAsset } from "@/content/types";
import { FeatureIcon } from "./FeatureIcon";
import { CornerArc, HeadingMark } from "./SectionAccents";
import { WhyStats } from "./WhyStats";

const card = "rounded-2xl border border-line/50 bg-white shadow-[0_8px_24px_rgb(10_31_51/0.07)]";
const iconTile = "grid shrink-0 place-items-center rounded-xl bg-cyan/12";

/** On the homepage with its defaults. The About page uses it too, with its own heading and no link to itself. */
export function WhySportify({
  as: Heading = "h2",
  title = home.why.title,
  storyLink = true,
  headingAbove = false,
  expertTeamImage,
  dataDrivenImage,
  provenResultsImage,
  statsHover = false,
}: {
  as?: "h1" | "h2";
  title?: string;
  storyLink?: boolean;
  headingAbove?: boolean;
  expertTeamImage?: ImageAsset;
  dataDrivenImage?: ImageAsset;
  provenResultsImage?: ImageAsset;
  statsHover?: boolean;
}) {
  const { why } = home;
  return (
    <section className={`relative overflow-hidden bg-[#f8fbfd] text-midnight ${headingAbove ? "pt-[18px] pb-20 sm:pt-7" : "py-20"}`}>
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        {headingAbove && (
          <Reveal className="flex items-center gap-4">
            <HeadingMark className="shrink-0" />
            <Heading className="text-3xl sm:text-4xl xl:text-[2.75rem]">{title}</Heading>
          </Reveal>
        )}

        <div className={`grid grid-cols-1 items-center gap-12 sm:gap-10 xl:grid-cols-[4fr_5fr] xl:gap-9 ${headingAbove ? "mt-6 sm:mt-7" : ""}`}>
          <Reveal className="mx-auto w-full max-w-3xl xl:max-w-none">
            <VideoSlot video={why.video} hideCaption autoplayInView />
          </Reveal>

          <Reveal delay={90}>
            {!headingAbove && (
              <>
                <HeadingMark className="mb-3" />
                <Heading className="text-3xl sm:text-4xl xl:text-[2.75rem]">{title}</Heading>
              </>
            )}
            <p className={`text-lg text-midnight-800 ${headingAbove ? "" : "mt-4"}`}>{why.text}</p>

            <WhyStats stats={why.stats} interactive={statsHover} />
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-9 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {why.highlights.map((item, index) => (
            <Reveal key={item.title} as="li" delay={index * 90} className={`${card} flex items-center gap-5 p-6 sm:gap-4 sm:p-5`}>
              <span className={`${iconTile} size-12 text-midnight sm:size-14`}>
                {dataDrivenImage && item.icon === "growth" ? (
                  <Photo image={dataDrivenImage} sizes="(min-width: 640px) 56px, 48px" className="size-full rounded-xl object-top" />
                ) : expertTeamImage && item.icon === "team" ? (
                  <Photo image={expertTeamImage} sizes="(min-width: 640px) 56px, 48px" className="size-full rounded-xl object-top" />
                ) : provenResultsImage && item.icon === "trophy" ? (
                  <Photo image={provenResultsImage} sizes="(min-width: 640px) 56px, 48px" className="size-full rounded-xl object-top" />
                ) : (
                  <FeatureIcon name={item.icon} className="size-8" />
                )}
              </span>
              <span aria-hidden="true" className="w-px self-stretch bg-line max-sm:hidden" />
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-midnight-800">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {storyLink && (
          <Reveal className="mt-12 flex flex-col items-center gap-4 sm:mt-8 sm:gap-3">
            <LinkButton href="/about" variant="midnight" className="w-full sm:w-80">
              {why.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5 text-cyan">
                <path d="M3 12h18M14 5l7 7-7 7" />
              </svg>
            </LinkButton>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
