import Image from "next/image";
import { home, images, partners } from "@/content";
import type { Partner } from "@/content/types";
import { PhotoMarquee } from "./PhotoMarquee";

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex h-full w-56 flex-col items-center justify-center gap-4 rounded bg-white p-5 text-center text-midnight shadow-lg">
      {partner.logo ? (
        <>
          <span className="relative block h-24 w-full">
            <Image src={partner.logo} alt="" fill sizes="184px" className="object-contain" />
          </span>
          <span className="text-sm leading-snug font-medium">{partner.name}</span>
        </>
      ) : (
        <span className="text-lg leading-snug font-bold">{partner.name}</span>
      )}
    </div>
  );
}

/** All partners on a long team photo, in the same style as the Google reviews. */
export function PartnersBand() {
  return (
    <PhotoMarquee
      id="partners-title"
      title={home.partners.title}
      image={images.partnersBackground}
      items={partners}
      seconds={140}
      // Below lg the banner runs full width along the top, cropped from the masked athlete to the
      // girl (the logo is cut off), and fades into the dark section behind the cards.
      // From lg up it fills the section pinned left so the Sportify Academy logo stays in view, and
      // the cards dissolve before they reach it: they keep running underneath, just invisible.
      imageClassName="inset-x-0 top-0 aspect-[1612/724] w-full object-right lg:inset-0 lg:aspect-auto lg:size-full lg:object-left"
      overlayClassName="bg-[linear-gradient(to_bottom,rgb(10_31_51/0.35),rgb(10_31_51/0.35)_25vw,var(--color-midnight)_45vw)] lg:bg-none lg:bg-midnight/25"
      maskClassName="mask-[linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] lg:mask-[linear-gradient(to_right,transparent_30%,#000_42%,#000_92%,transparent)]"
      renderCard={(partner) => <PartnerCard partner={partner} />}
    />
  );
}
