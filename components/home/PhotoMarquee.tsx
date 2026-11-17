import type { ReactNode } from "react";
import { Photo } from "@/components/media/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { ImageAsset } from "@/content/types";

/**
 * White cards on a long photo, under a big white heading. They move by themselves and fade out
 * at both edges of the section, pausing on hover and keyboard focus, and staying still for
 * reduced-motion users (who instead get the cards wrapped into a static grid).
 */
export function PhotoMarquee<T extends { id: string }>({
  id,
  title,
  image,
  items,
  seconds,
  renderCard,
  aside,
  imageClassName = "inset-0 size-full",
  overlayClassName = "bg-midnight/55",
  maskClassName = "mask-[linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]",
}: {
  /** Placement and crop of the (absolutely positioned) background photo. */
  imageClassName?: string;
  /** Tint over the photo that keeps the heading and cards readable. */
  overlayClassName?: string;
  /** Where the moving cards fade out. */
  maskClassName?: string;
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
      <Photo image={image} sizes="100vw" className={`absolute ${imageClassName}`} />
      <span aria-hidden="true" className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative">
        {/* The equal side columns keep the heading centred and stop it running under the aside. */}
        <Reveal as="div" className={aside ? "flex flex-col items-center gap-5 lg:grid lg:grid-cols-[14rem_1fr_14rem] lg:items-start" : undefined}>
          <h2
            id={id}
            className="mx-auto max-w-4xl px-5 text-center text-3xl tracking-wide text-white uppercase [text-shadow:0_2px_16px_rgb(10_31_51/0.6)] sm:px-8 sm:text-4xl lg:col-start-2 lg:text-5xl"
          >
            {title}
          </h2>
          {aside ? <div className="lg:justify-self-end lg:pr-8">{aside}</div> : null}
        </Reveal>
        <div className={`mt-12 overflow-hidden ${maskClassName} motion-reduce:mask-none sm:mt-14`}>
          <div
            style={{ animationDuration: `${seconds}s` }}
            className="flex w-max gap-6 pr-6 pl-0 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-safe:animate-marquee motion-reduce:w-full motion-reduce:pr-0"
          >
            <ul className="flex gap-6 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-5">
              {items.map((item) => (
                <li key={item.id}>{renderCard(item, false)}</li>
              ))}
            </ul>
            <ul aria-hidden="true" className="flex gap-6 motion-reduce:hidden">
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
