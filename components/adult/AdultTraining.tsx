"use client";

import { Photo } from "@/components/media/Photo";
import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SequentialHighlightCard } from "@/components/ui/SequentialHighlightCard";
import { adult } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { AdultButton } from "./AdultButton";
import { AdultContainer } from "./AdultContainer";

/** "Train with us": Athlete-style hover cards with the 1:1 photo to the right of its text. */
export function AdultTraining() {
  const { training } = adult;
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_90%_at_0%_0%,#0E2E42_0%,#081C2C_55%),radial-gradient(ellipse_90%_70%_at_100%_100%,#0B2A3A_0%,transparent_60%)] py-9 text-white sm:py-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-[360px] rounded-full bg-[#67D5E5]/15 blur-[90px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 size-[300px] rounded-full bg-[#67D5E5]/10 blur-[90px]"
      />

      <AdultContainer className="relative">
        <Reveal>
          <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">{training.title}</h2>
          <p className="mt-2 text-base leading-[1.55] text-white/75">{training.text}</p>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-6 sm:mt-7 md:grid-cols-2">
          {training.items.map((item, index) => (
            <SequentialHighlightCard
              key={item.id}
              index={index}
              className={`group overflow-hidden rounded-[14px] border border-white/15 bg-white/10 backdrop-blur-sm ${item.image ? "grid grid-cols-[minmax(0,1fr)_38%]" : "flex flex-col"}`}
            >
              {(lit) => (
                <>
                  <div
                    className={`flex min-w-0 flex-1 flex-col justify-center p-5 transition-colors duration-300 ease-out group-hover:bg-[#67D5E5] group-hover:text-[#081C2C] sm:p-6 ${lit ? "bg-[#67D5E5] text-[#081C2C]" : ""}`}
                  >
                    <h3 className="text-[20px] leading-[1.3] font-bold sm:text-[22px]">{item.name}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className={`flex items-start gap-2 text-base leading-[1.4] transition-colors duration-300 ease-out group-hover:text-[#081C2C] ${lit ? "text-[#081C2C]" : "text-white/75"}`}
                        >
                          <span className={`mt-2.5 size-1.5 shrink-0 rounded-full transition-colors duration-300 ease-out group-hover:bg-[#081C2C] ${lit ? "bg-[#081C2C]" : "bg-[#67D5E5]"}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <AdultButton href={whatsappUrl(item.whatsappMessage)} className="mt-5 w-full sm:w-auto">
                      <WhatsAppIcon className="size-5 shrink-0" />
                      {item.cta}
                    </AdultButton>
                  </div>
                  {item.image && (
                    <div className="relative min-h-[320px]">
                      <Photo
                        image={item.image}
                        sizes="(min-width: 1120px) 200px, (min-width: 768px) 19vw, 38vw"
                        className="absolute inset-0 size-full object-[60%_center]"
                      />
                    </div>
                  )}
                </>
              )}
            </SequentialHighlightCard>
          ))}
        </Reveal>
      </AdultContainer>
    </section>
  );
}
