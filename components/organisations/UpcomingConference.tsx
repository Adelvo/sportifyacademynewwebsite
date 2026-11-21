import { Photo } from "@/components/media/Photo";
import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { images, organisationsPage } from "@/content";
import { whatsappUrl } from "@/lib/links";

/** The Early Years PE Conference page, reached only from the "Workshops & Conferences" card on the "For Coaches" page: poster, details, prices and a WhatsApp registration button. */
export function UpcomingConference() {
  const c = organisationsPage.conference;
  return (
    <section
      id="early-years-pe-conference"
      aria-labelledby="early-years-pe-conference-title"
      className="bg-midnight py-16 font-[family-name:var(--font-hero)] text-white sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <Photo
              image={images.earlyYearsConference}
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 448px, 92vw"
              className="h-auto w-full rounded-2xl shadow-[0_24px_60px_rgb(0_0_0/0.35)] lg:sticky lg:top-28"
            />
          </Reveal>

          <Reveal delay={90} className="flex flex-col">
            <p className="w-fit rounded-full bg-electric-gradient px-4 py-1.5 text-sm font-semibold text-midnight">{c.eyebrow}</p>
            <h1 id="early-years-pe-conference-title" className="mt-5 font-[family-name:var(--font-hero)]! text-4xl font-bold tracking-tight sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-3 text-xl font-semibold text-electric">{c.subtitle}</p>
            <p className="mt-4 text-lg text-on-midnight-soft">{c.text}</p>

            <dl className="mt-7 grid gap-3 sm:grid-cols-3">
              {c.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="text-xs font-semibold tracking-wider text-electric uppercase">{fact.label}</dt>
                  <dd className="mt-1 font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-10 font-[family-name:var(--font-hero)]! text-xl font-bold">{c.exploreTitle}</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {c.explore.map((item, index) => (
                <li key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="flex items-center gap-3 font-semibold">
                    <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-lg bg-electric-gradient text-sm text-midnight">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-on-midnight-soft">{item.text}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-[family-name:var(--font-hero)]! text-xl font-bold">{c.audienceTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.audience.map((who) => (
                <li key={who} className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium">
                  {who}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-[family-name:var(--font-hero)]! text-xl font-bold">{c.pricesTitle}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {c.prices.map((option) => (
                <li
                  key={option.label}
                  className={`flex flex-col rounded-xl p-4 text-center ${option.highlight ? "bg-white text-midnight" : "border border-white/10 bg-white/5"}`}
                >
                  <p className="text-sm font-semibold tracking-wide uppercase">{option.label}</p>
                  {option.highlight && <p className="mx-auto mt-1 w-fit rounded-full bg-[#f9c846] px-3 py-0.5 text-xs font-bold text-midnight">{option.highlight}</p>}
                  <p className="mt-2 text-3xl font-bold">{option.price}</p>
                  <p className={`mt-1 text-sm ${option.highlight ? "text-ink-soft" : "text-on-midnight-soft"}`}>{option.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-[family-name:var(--font-hero)]! text-lg font-bold">{c.includedTitle}</h3>
                <ul className="mt-3 space-y-2">
                  {c.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-on-midnight-soft">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 size-5 shrink-0">
                        <circle cx="10" cy="10" r="10" fill="#00b8d9" />
                        <path d="M5.5 10.500l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-electric/40 bg-electric/10 p-4">
                <h3 className="font-[family-name:var(--font-hero)]! text-lg font-bold text-electric">{c.bonusTitle}</h3>
                <p className="mt-2">{c.bonus}</p>
              </div>
            </div>

            <p className="mt-8 text-on-midnight-soft">{c.schools}</p>
            <ExternalButton href={whatsappUrl(c.whatsappMessage)} className="mt-5 w-full gap-2 rounded-xl! sm:w-fit">
              <WhatsAppIcon />
              {c.action}
            </ExternalButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
