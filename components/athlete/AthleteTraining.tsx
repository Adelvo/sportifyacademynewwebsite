"use client";

import { Photo } from "@/components/media/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SequentialHighlightCard } from "@/components/ui/SequentialHighlightCard";
import { athlete } from "@/content";
import { AthleteContainer } from "./AthleteContainer";

/** "Training built around your goals": a clean dark gradient backdrop with soft cyan glows, four training formats in a 2×2 grid, no buttons or links. */
export function AthleteTraining() {
  const { training } = athlete;
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

      <AthleteContainer className="relative">
        <Reveal>
          <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">{training.title}</h2>
          <p className="mt-2 text-base leading-[1.55] text-white/75">{training.text}</p>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-6 sm:mt-7 md:grid-cols-2">
          {training.items.map((item, index) => (
            <SequentialHighlightCard
              key={item.id}
              index={index}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-white/15 bg-white/10 backdrop-blur-sm"
            >
              {(lit) => (
                <>
                  <Photo
                    image={item.image}
                    sizes="(min-width: 1120px) 528px, (min-width: 768px) calc((100vw - 64px) / 2), calc(100vw - 40px)"
                    className={`block aspect-[3/1] w-full ${item.imagePosition ?? "object-top"}`}
                  />
                  <div className={`flex-1 p-6 transition-colors duration-300 ease-out group-hover:bg-[#67D5E5] group-hover:text-[#081C2C] ${lit ? "bg-[#67D5E5] text-[#081C2C]" : ""}`}>
                    <h3 className="text-[20px] leading-[1.3] font-bold sm:text-[22px]">{item.name}</h3>
                    <p className={`mt-2 text-base leading-[1.55] transition-colors duration-300 ease-out group-hover:text-[#081C2C] ${lit ? "text-[#081C2C]" : "text-white/75"}`}>{item.text}</p>
                  </div>
                </>
              )}
            </SequentialHighlightCard>
          ))}
        </Reveal>
      </AthleteContainer>
    </section>
  );
}
