import { VideoSlot } from "@/components/media/VideoSlot";
import { buttonClass, ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { GoogleRatingBadge } from "@/components/ui/GoogleRating";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { home, ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import { FeatureIcon } from "./FeatureIcon";
import { HomeHeading } from "./HomeHeading";
import { GROUP_ICONS } from "./offerGroups";
import { CornerArc } from "./SectionAccents";

type TestCard = (typeof home.test.cards)[number];

/** Splits cards into runs of consecutive cards sharing the same (possibly undefined) `group`. */
function groupCards(cards: TestCard[]) {
  const groups: { label?: string; cards: TestCard[] }[] = [];
  for (const card of cards) {
    const current = groups[groups.length - 1];
    if (current && current.label === card.group) current.cards.push(card);
    else groups.push({ label: card.group, cards: [card] });
  }
  return groups;
}

function TestCardArticle({ card }: { card: TestCard }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_10px_30px_rgb(10_31_51/0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgb(10_31_51/0.16)] focus-within:-translate-y-1.5 focus-within:shadow-[0_24px_48px_rgb(10_31_51/0.16)]">
      {/* The videos are all vertical, so this frame shows them without black bars. The article clips the zoom on hover. */}
      <VideoSlot video={card.video} frameClassName="aspect-[9/16] rounded-none! transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" hideCaption />
      <div aria-hidden="true" className="h-1 bg-electric-gradient" />

      <div className="flex flex-1 flex-col p-5 lg:p-4 xl:p-5">
        <h3 className="font-[family-name:var(--font-hero)]! text-xl tracking-tight md:min-h-[2lh] lg:min-h-[3lh] xl:min-h-[2lh]">{card.name}</h3>
        {card.tag && <p className="mt-2 w-fit rounded-full bg-[#e6eaf2] px-3 py-1 text-sm font-medium">{card.tag}</p>}

        <ul className="mt-4 space-y-3 border-t border-line pt-4 text-[0.9375rem]/snug font-medium">
          {card.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-px size-5 shrink-0">
                <circle cx="10" cy="10" r="10" fill="#00b8d9" />
                <path d="M5.5 10.500l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** "Test my child": one card per assessment, with its video on top and the details under it, grouped into sections, then help with choosing. No prices yet. */
export function TestPackages({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const { test } = home;
  const groups = groupCards(test.cards);
  return (
    <section id="packages" className="relative overflow-hidden bg-linear-to-b from-[#eef1f8] to-white py-16 font-[family-name:var(--font-hero)] text-[#0a1f33] sm:py-24">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        <Reveal className="mb-8 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <HomeHeading title={test.title} text={test.text} level={headingLevel} />
          <GoogleRatingBadge className="self-start sm:self-auto" />
        </Reveal>

        {groups.map((group, index) => {
          const icon = group.label ? GROUP_ICONS[group.label] : undefined;
          return (
            <div key={group.label ?? index}>
              <div className={index > 0 ? "mt-10 sm:mt-14" : undefined}>
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
                <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-6 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-4 xl:gap-5">
                  {group.cards.map((card, cardIndex) => (
                    <li key={card.id} className="w-[85%] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none">
                      <Reveal delay={cardIndex * 90} className="h-full">
                        <TestCardArticle card={card} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The help box sits right after the assessments, before any other group such as Eat Better. */}
              {index === 0 && (
                <Reveal className="mt-4 flex flex-col gap-6 rounded-2xl bg-midnight p-6 text-white sm:p-8 md:mt-8 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="font-[family-name:var(--font-hero)]! text-2xl tracking-tight sm:text-3xl">{test.help.title}</h2>
                    <p className="mt-2 text-lg text-on-midnight-soft">{test.help.text}</p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <ExternalButton href={whatsappUrlForPath("/test-my-child")} variant="whatsapp">
                      <WhatsAppIcon className="size-6" />
                      {ui.whatsappButton}
                    </ExternalButton>
                    <a href="#location" className={buttonClass("outlineLight")}>
                      {test.contact}
                    </a>
                  </div>
                </Reveal>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
}
