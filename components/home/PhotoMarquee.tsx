import type { ReactNode } from "react";
import { Photo } from "@/components/media/Photo";
import type { ImageAsset } from "@/content/types";

/**
 * White cards on a long photo, under a big white heading. On phones the visitor swipes through
 * them. From the sm breakpoint they move by themselves and fade out at both edges of the section.
 * There they pause on hover and keyboard focus, and stay still for reduced-motion users.
 */
export function PhotoMarquee<T extends { id: string }>({
  id,
  title,
  image,
  items,
  seconds,
  renderCard,
  aside,
}: {
  id: string;
  title: string;
  /** Shown at the top right of the section, or under the heading on small screens. */
  aside?: ReactNode;
  image: ImageAsset;
  items: T[];
  /** Time for one full pass. Raise it when adding cards, so they keep the same speed. */
  seconds: number;
  /** "duplicate" is true for the second copy that makes the loop seamless. */
  renderCard: (item: T, duplicate: boolean) => ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="relative overflow-hidden bg-midnight py-20">
      <Photo image={image} sizes="100vw" className="absolute inset-0 size-full" />
      <span aria-hidden="true" className="absolute inset-0 bg-midnight/55" />
      <div className="relative">
        {/* The equal side columns keep the heading centred and stop it running under the aside. */}
        <div className={aside ? "flex flex-col items-center gap-5 lg:grid lg:grid-cols-[14rem_1fr_14rem] lg:items-start" : undefined}>
          <h2
            id={id}
            className="mx-auto max-w-4xl px-5 text-center text-3xl tracking-wide text-white uppercase [text-shadow:0_2px_16px_rgb(10_31_51/0.6)] sm:px-8 sm:text-4xl lg:col-start-2 lg:text-5xl"
          >
            {title}
          </h2>
          {aside ? <div className="lg:justify-self-end lg:pr-8">{aside}</div> : null}
        </div>
        <div className="mt-12 snap-x snap-mandatory scroll-px-5 overflow-x-auto [scrollbar-width:none] sm:mt-14 sm:snap-none sm:overflow-hidden sm:mask-[linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] sm:motion-reduce:mask-none">
          <div
            style={{ animationDuration: `${seconds}s` }}
            className="flex w-max gap-6 px-5 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] sm:pr-6 sm:pl-0 sm:motion-safe:animate-marquee sm:motion-reduce:w-full sm:motion-reduce:pr-0"
          >
            <ul className="flex gap-6 sm:motion-reduce:w-full sm:motion-reduce:flex-wrap sm:motion-reduce:justify-center sm:motion-reduce:px-5">
              {items.map((item) => (
                <li key={item.id} className="snap-start">{renderCard(item, false)}</li>
              ))}
            </ul>
            <ul aria-hidden="true" className="flex gap-6 max-sm:hidden sm:motion-reduce:hidden">
              {items.map((item) => (
                <li key={item.id}>{renderCard(item, true)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
