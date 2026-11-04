import { Photo } from "@/components/media/Photo";
import { ExternalButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import type { Programmes } from "@/content/en/home";
import type { ImageAsset } from "@/content/types";
import { whatsappUrl } from "@/lib/links";
import { CardBadge } from "./CardBadge";
import { FeatureIcon } from "./FeatureIcon";
import { HomeHeading } from "./HomeHeading";

/** A landing page row of bookable programmes, such as "Train with us". On phones the row swipes sideways. */
export function ProgrammeSection<Image extends string>({
  id,
  section,
  photos,
  photoAspect,
  divided = false,
}: {
  id: string;
  section: Programmes<Image>;
  photos: Record<Image, ImageAsset>;
  /** Tailwind aspect class for the card photos. */
  photoAspect: string;
  /** Draw a line above each card's list. */
  divided?: boolean;
}) {
  return (
    <section id={id} className="bg-linear-to-b from-[#eef1f8] to-white py-16 font-[family-name:var(--font-hero)] text-[#0a1f33] sm:py-24">
      <Container>
        <div className="mb-8 sm:mb-12">
          <HomeHeading title={section.title} text={section.text} />
        </div>

        <ul
          className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-6 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:gap-6"
        >
          {section.cards.map((card) => (
            <li key={card.id} className="w-[85%] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgb(10_31_51/0.1)] ring-[#00b8d9] transition-[scale,box-shadow] duration-200 focus-within:ring-2 hover:ring-2 motion-safe:hover:relative motion-safe:hover:z-10 motion-safe:hover:scale-[1.03]">
                <div className="relative">
                  <Photo
                    image={photos[card.image]}
                    sizes="(min-width: 1200px) 350px, (min-width: 768px) 32vw, 85vw"
                    className={`${photoAspect} w-full`}
                  />
                  {card.badge && <CardBadge>{card.badge}</CardBadge>}
                </div>
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <h3 className="font-[family-name:var(--font-hero)]! text-2xl tracking-tight md:min-h-[2lh]">{card.name}</h3>
                  {/* Keeps the space when a card has no ages, so the lists line up. */}
                  <div className="mt-2 min-h-7">
                    {card.ages && <p className="w-fit rounded-full bg-[#e6eaf2] px-3 py-1 text-sm font-medium">{card.ages}</p>}
                  </div>
                  <ul className={`mt-5 space-y-3 font-medium ${divided ? "border-t border-line pt-5" : ""}`}>
                    {card.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 size-5 shrink-0">
                          <circle cx="10" cy="10" r="10" fill="#00b8d9" />
                          <path d="M5.5 10.500l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <ExternalButton
                      href={whatsappUrl(card.whatsappMessage)}
                      variant="cyan"
                      aria-label={`${section.book}: ${card.name}`}
                      className="w-full rounded-xl!"
                    >
                      {section.book}
                    </ExternalButton>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-line">
          {section.features.map((feature) => (
            <li key={feature.title} className="flex flex-col items-center gap-3 px-3 text-center font-semibold">
              <FeatureIcon name={feature.icon} className="size-9" />
              {feature.title}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
