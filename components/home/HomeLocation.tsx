import { MapFrame } from "@/components/media/MapEmbed";
import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { home, site, ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import { FeatureIcon } from "./FeatureIcon";
import { HeadingMark } from "./SectionAccents";

const iconTile = "grid size-11 shrink-0 place-items-center rounded-xl bg-cyan/12 text-cyan";

export function HomeLocation() {
  return (
    <section id="location" className="bg-white py-20 text-midnight sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center sm:mb-14">
          <HeadingMark className="mb-3" />
          <h2 className="text-3xl sm:text-4xl xl:text-[2.75rem]">{home.location.title}</h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line/50 shadow-[0_8px_24px_rgb(10_31_51/0.07)] lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col gap-8 bg-midnight p-7 text-white sm:gap-7 sm:p-9">
            <div className="flex items-start gap-4">
              <span className={iconTile}>
                <FeatureIcon name="pin" className="size-6" />
              </span>
              <div>
                <h3 className="text-lg">{ui.address}</h3>
                <address className="mt-2 text-on-midnight-soft not-italic">
                  {site.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className={iconTile}>
                <FeatureIcon name="phone" className="size-6" />
              </span>
              <div>
                <h3 className="text-lg">{ui.phone}</h3>
                <a href={`tel:${site.phoneE164}`} className="mt-2 inline-block text-on-midnight-soft hover:text-cyan">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <a href={whatsappUrlForPath("/")} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
              <span className={iconTile}>
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold group-hover:text-cyan">{ui.whatsappButton}</span>
                <span className="mt-2 block text-on-midnight-soft group-hover:text-cyan">{site.phoneDisplay}</span>
              </span>
            </a>

            <ExternalButton href={site.address.mapUrl} className="mt-auto w-full">
              {ui.map.open}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
                <path d="M3 12h18M14 5l7 7-7 7" />
              </svg>
            </ExternalButton>
          </div>

          <MapFrame className="min-h-80 lg:min-h-[28rem]" />
        </div>
      </Container>
    </section>
  );
}
