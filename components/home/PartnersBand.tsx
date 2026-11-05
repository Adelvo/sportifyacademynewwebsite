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
      renderCard={(partner) => <PartnerCard partner={partner} />}
    />
  );
}
