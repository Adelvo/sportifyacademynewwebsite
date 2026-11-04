import { VideoSlot } from "@/components/media/VideoSlot";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { home } from "@/content";
import { FeatureIcon } from "./FeatureIcon";

const card = "rounded-2xl border border-line/50 bg-white shadow-[0_8px_24px_rgb(10_31_51/0.07)]";
const iconTile = "grid shrink-0 place-items-center rounded-xl bg-cyan/12";

/** Pale cyan arc in a corner of the section. Drawn for the top left; rotate it for the bottom right. */
function CornerArc({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 370 140" aria-hidden="true" className={`absolute w-56 fill-cyan/12 sm:w-72 lg:w-[23rem] ${className}`}>
      <path d="M0 110C100 100 200 50 240 0h130C300 80 150 140 0 140z" />
    </svg>
  );
}

export function WhySportify() {
  const { why } = home;
  return (
    <section className="relative overflow-hidden bg-[#f8fbfd] py-16 text-midnight sm:py-20">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[2fr_3fr] xl:gap-9">
          {/* The cyan shows only at two corners, where the gradient is not transparent. */}
          <div className="mx-auto w-full max-w-2xl rounded-[1.25rem] bg-[linear-gradient(135deg,var(--color-cyan),transparent_35%,transparent_75%,var(--color-cyan))] pt-1.5 pr-0.5 pb-0.5 pl-1.5 xl:max-w-none">
            <VideoSlot
              video={why.video}
              frameClassName="aspect-[7/5]"
              posterClassName="object-[20%_50%]"
              hideCaption
            />
          </div>

          <div>
            <svg viewBox="0 0 72 28" aria-hidden="true" className="mb-3 w-13 fill-cyan">
              <path d="M14 0h14L14 28H0zM36 0h14L36 28H22zM58 0h14L58 28H44z" />
            </svg>
            <h2 className="text-3xl sm:text-4xl xl:text-[2.75rem]">{why.title}</h2>
            <p className="mt-3 text-lg text-midnight-800">{why.text}</p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
              {why.stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`${card} flex items-center justify-between gap-1.5 p-3.5 ${
                    index < 3 ? "md:col-span-2" : "md:col-span-3 md:px-5"
                  } ${index === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div>
                    <p className="font-display text-[1.625rem] leading-tight font-extrabold text-[#0793a8]">{stat.value}</p>
                    <p className="mt-0.5 text-sm/tight font-semibold whitespace-pre-line">{stat.label}</p>
                  </div>
                  <span className={`${iconTile} size-11 text-[#0b7a8f]`}>
                    <FeatureIcon name={stat.icon} className="size-6.5" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {why.highlights.map((item) => (
            <li key={item.title} className={`${card} flex items-center gap-4 p-5`}>
              <span className={`${iconTile} size-14 text-midnight`}>
                <FeatureIcon name={item.icon} className="size-8" />
              </span>
              <span aria-hidden="true" className="w-px self-stretch bg-line" />
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-midnight-800">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <LinkButton href="/about" variant="midnight" className="px-12">
            {why.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5 text-cyan">
              <path d="M3 12h18M14 5l7 7-7 7" />
            </svg>
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
