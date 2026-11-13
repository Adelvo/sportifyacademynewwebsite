import { BrandLogo } from "@/components/ui/BrandLogo";
import { GoogleRatingBadge } from "@/components/ui/GoogleRating";
import { athlete } from "@/content";
import { AthleteContainer } from "./AthleteContainer";

/** Compact Athlete introduction with the Google rating directly below the brand mark. */
export function AthleteHero() {
  const { hero } = athlete;
  return (
    <section id="athlete-intro" className="bg-midnight py-3 text-white sm:py-3.5">
      <AthleteContainer className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_180px] sm:gap-6">
        <div className="min-w-0 text-center sm:text-left">
          <h1 className="text-[clamp(16px,4.4vw,24px)] font-bold leading-[1.15] tracking-normal whitespace-nowrap sm:text-[clamp(18px,2.5vw,32px)]">
            {hero.headline}
          </h1>
          <p className="mt-2 text-sm leading-[1.4] text-[#67D5E5] sm:text-base">{hero.text}</p>
        </div>

        <div className="mx-auto flex min-w-0 flex-col items-center justify-center gap-2">
          <BrandLogo variant="light" className="h-auto w-[140px] sm:w-[160px]" />
          <GoogleRatingBadge className="px-3! py-2! text-sm [&_svg]:size-5" />
        </div>
      </AthleteContainer>
    </section>
  );
}
