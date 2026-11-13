import { Photo } from "@/components/media/Photo";
import { ExternalButton } from "@/components/ui/Button";
import { GoogleRatingBadge } from "@/components/ui/GoogleRating";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import type { Programmes } from "@/content/en/home";
import type { ImageAsset } from "@/content/types";
import { whatsappUrl } from "@/lib/links";
import { CardBadge } from "./CardBadge";
import { FeatureIcon } from "./FeatureIcon";
import { HomeHeading } from "./HomeHeading";
import { GROUP_ICONS } from "./offerGroups";
import { CornerArc } from "./SectionAccents";

type Card<Image extends string> = Programmes<Image>["cards"][number];

/** Splits cards into runs of consecutive cards sharing the same (possibly undefined) `group`. */
function groupCards<Image extends string>(cards: Card<Image>[]) {
  const groups: { label?: string; cards: Card<Image>[] }[] = [];
  for (const card of cards) {
    const current = groups[groups.length - 1];
    if (current && current.label === card.group) current.cards.push(card);
    else groups.push({ label: card.group, cards: [card] });
  }
  return groups;
}

/** A row of bookable programmes, such as "Train with us". On phones the row swipes sideways. */
export function ProgrammeSection<Image extends string>({
  id,
  section,
  photos,
  photoAspect,
  divided = false,
  twoLineTitles = false,
  headingLevel = 2,
  hideHeading = false,
  hideFeatures = false,
}: {
  /** Omit for a second ProgrammeSection continuing the same page section, so ids stay unique. */
  id?: string;
  section: Programmes<Image>;
  photos: Record<Image, ImageAsset>;
  /** Tailwind aspect class for the card photos. */
  photoAspect: string;
  /** Draw a line above each card's list. */
  divided?: boolean;
  /** Reserve two lines for each card's name from tablet width up, so cards with shorter names line up. */
  twoLineTitles?: boolean;
  /** 1 when this section is the main content of its own page. */
  headingLevel?: 1 | 2;
  /** Skip the title/text/rating row, for a second ProgrammeSection continuing the same page section. */
  hideHeading?: boolean;
  /** Skip the bottom feature row, for a ProgrammeSection continued by another one below it. */
  hideFeatures?: boolean;
}) {
  const groups = groupCards(section.cards);
  return (
    <section id={id} className="relative overflow-hidden bg-linear-to-b from-[#eef1f8] to-white pt-[18px] pb-16 font-[family-name:var(--font-hero)] text-[#0a1f33] sm:pt-7 sm:pb-24">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        {!hideHeading && (
          <Reveal className="mb-8 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <HomeHeading title={section.title} text={section.text} level={headingLevel} />
            <GoogleRatingBadge className="self-start sm:self-auto" />
          </Reveal>
        )}

        {groups.map((group, groupIndex) => {
          const icon = group.label ? GROUP_ICONS[group.label] : undefined;
          return (
            <div key={group.label ?? groupIndex} className={groupIndex > 0 ? "mt-10 sm:mt-14" : undefined}>
              {group.label && (
                <Reveal className="mb-5 flex items-center gap-3">
                  {icon && (
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-electric-gradient text-midnight">
                      <FeatureIcon name={icon} className="size-5" />
                    </span>
                  )}
                  <h2 className="font-[family-name:var(--font-hero)]! text-2xl tracking-tight sm:text-3xl">{group.label}</h2>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </Reveal>
              )}
              <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-6 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:gap-6">
                {group.cards.map((card, cardIndex) => (
                  <li key={card.id} className="w-[85%] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none">
                    <Reveal delay={cardIndex * 90} className="h-full">
                      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_10px_30px_rgb(10_31_51/0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgb(10_31_51/0.16)] focus-within:-translate-y-1.5 focus-within:shadow-[0_24px_48px_rgb(10_31_51/0.16)]">
                        <div className="relative overflow-hidden">
                          <Photo
                            image={photos[card.image]}
                            sizes="(min-width: 1200px) 350px, (min-width: 768px) 32vw, 85vw"
                            className={`${photoAspect} w-full transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none`}
                          />
                          {card.badge && <CardBadge>{card.badge}</CardBadge>}
                        </div>
                        <div aria-hidden="true" className="h-1 bg-electric-gradient" />
                        <div className="flex flex-1 flex-col p-5 lg:p-6">
                          <h3 className={`font-[family-name:var(--font-hero)]! text-2xl tracking-tight ${twoLineTitles ? "md:min-h-[2lh]" : ""}`}>{card.name}</h3>
                          {/* Keeps the space when a card has no tag, so the lists line up. */}
                          <div className="mt-2 min-h-7">
                            {card.tag && <p className="w-fit rounded-full bg-[#e6eaf2] px-3 py-1 text-sm font-medium">{card.tag}</p>}
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
                              aria-label={`${section.action}: ${card.name}`}
                              className="w-full rounded-xl!"
                            >
                              {section.action}
                            </ExternalButton>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {!hideFeatures && (
          <Reveal>
            <ul className="mt-6 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-line">
              {section.features.map((feature) => (
                <li key={feature.title} className="flex flex-col items-center gap-3 px-3 text-center font-semibold">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-cyan/12 text-[#0b7a8f]">
                    <FeatureIcon name={feature.icon} className="size-7" />
                  </span>
                  {feature.title}
                  {feature.text && <span className="-mt-2 text-sm font-medium text-ink-soft">{feature.text}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
