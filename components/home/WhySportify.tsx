import { VideoSlot } from "@/components/media/VideoSlot";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { home } from "@/content";
import { FeatureIcon } from "./FeatureIcon";
import { OffersButton } from "./OffersLink";
import { CornerArc, HeadingMark } from "./SectionAccents";

const card = "rounded-2xl border border-line/50 bg-white shadow-[0_8px_24px_rgb(10_31_51/0.07)]";
const iconTile = "grid shrink-0 place-items-center rounded-xl bg-cyan/12";

/** On the homepage with its defaults. The About page uses it too, with its own heading and no link to itself. */
export function WhySportify({
  as: Heading = "h2",
  title = home.why.title,
  storyLink = true,
}: {
  as?: "h1" | "h2";
  title?: string;
  storyLink?: boolean;
}) {
  const { why } = home;
  return (
    <section className="relative overflow-hidden bg-[#f8fbfd] py-20 text-midnight">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-10 xl:grid-cols-[2fr_3fr] xl:gap-9">
          {/* The cyan shows only at two corners, where the gradient is not transparent. */}
          <div className="mx-auto w-full max-w-2xl rounded-[1.25rem] bg-[linear-gradient(135deg,var(--color-cyan),transparent_35%,transparent_75%,var(--color-cyan))] pt-1.5 pr-0.5 pb-0.5 pl-1.5 xl:max-w-none">
            <VideoSlot video={why.video} hideCaption autoplayInView />
          </div>

          <div>
            <HeadingMark className="mb-3" />
            <Heading className="text-3xl sm:text-4xl xl:text-[2.75rem]">{title}</Heading>
            <p className="mt-4 text-lg text-midnight-800">{why.text}</p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-6 md:grid-cols-6">
              {why.stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`${card} flex items-center justify-between gap-1.5 p-3 min-[360px]:p-4 sm:p-3.5 ${
                    index < 3 ? "md:col-span-2" : "md:col-span-3 md:px-5"
                  } ${index === 4 ? "col-span-2" : ""}`}
                >
                  <div>
                    <p className="font-display text-[1.375rem] leading-tight sm:text-[1.625rem] font-extrabold text-[#0793a8]">{stat.value}</p>
                    <p className="mt-0.5 text-sm/tight font-semibold whitespace-pre-line">{stat.label}</p>
                  </div>
                  <span className={`${iconTile} size-11 text-[#0b7a8f] max-sm:hidden`}>
                    <FeatureIcon name={stat.icon} className="size-6.5" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-9 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {why.highlights.map((item) => (
            <li key={item.title} className={`${card} flex items-center gap-5 p-6 sm:gap-4 sm:p-5`}>
              <span className={`${iconTile} size-12 text-midnight sm:size-14`}>
                <FeatureIcon name={item.icon} className="size-8" />
              </span>
              <span aria-hidden="true" className="w-px self-stretch bg-line max-sm:hidden" />
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-midnight-800">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4 sm:mt-8 sm:gap-3">
          {storyLink && (
            <LinkButton href="/about" variant="midnight" className="w-full sm:w-80">
              {why.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5 text-cyan">
                <path d="M3 12h18M14 5l7 7-7 7" />
              </svg>
            </LinkButton>
          )}
          {/* Next to the story link, phones show only that one button. */}
          <OffersButton className={`w-full sm:w-80 ${storyLink ? "max-sm:hidden" : ""}`} />
        </div>
      </Container>
    </section>
  );
}
