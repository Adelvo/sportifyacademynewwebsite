import { VideoSlot } from "@/components/media/VideoSlot";
import { buttonClass, ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { home, ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import { HomeHeading } from "./HomeHeading";

/** "Test my child": one card per assessment, with its video on top and the details under it, then help with choosing. No prices yet. */
export function TestPackages({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const { test } = home;
  return (
    <section id="packages" className="bg-linear-to-b from-[#eef1f8] to-white py-16 font-[family-name:var(--font-hero)] text-[#0a1f33] sm:py-24">
      <Container>
        <div className="mb-8 sm:mb-12">
          <HomeHeading title={test.title} text={test.text} level={headingLevel} />
        </div>

        <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-6 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {test.cards.map((card) => (
            <li key={card.id} className="w-[85%] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgb(10_31_51/0.1)] ring-[#00b8d9] transition-[scale,box-shadow] duration-200 focus-within:ring-2 hover:ring-2 motion-safe:hover:relative motion-safe:hover:z-10 motion-safe:hover:scale-[1.02]">
                {/* The videos are all vertical, so this frame shows them without black bars. */}
                <VideoSlot video={card.video} frameClassName="aspect-[9/16] rounded-none!" hideCaption />
                <div aria-hidden="true" className="h-1 bg-electric-gradient" />

                <div className="flex flex-1 flex-col p-5 lg:p-4 xl:p-5">
                  <h3 className="font-[family-name:var(--font-hero)]! text-xl tracking-tight md:min-h-[2lh] lg:min-h-[3lh] xl:min-h-[2lh]">{card.name}</h3>

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
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-6 rounded-2xl bg-midnight p-6 text-white sm:p-8 md:mt-8 lg:flex-row lg:items-center lg:justify-between">
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
        </div>
      </Container>
    </section>
  );
}
