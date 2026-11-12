import { BrandLogo } from "@/components/ui/BrandLogo";
import { kids } from "@/content";
import { KidsContainer } from "./KidsContainer";

/** The top of the Kids page: a slim headline bar on dark blue, the brand mark beside it. */
export function KidsHero() {
  const { hero } = kids;
  return (
    <section className="bg-midnight py-6 text-white sm:py-7">
      <KidsContainer className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
        <div className="min-w-0 max-w-[620px]">
          <h1 className="text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.15] tracking-normal">
            <span className="block">{hero.headlineLines[0]}</span>
            <span className="block text-[#67D5E5]">{hero.headlineLines[1]}</span>
          </h1>
          <p className="mt-3 text-base leading-[1.55] text-on-midnight-soft">{hero.text}</p>
        </div>

        <div className="mx-auto flex min-w-0 items-center justify-center">
          <BrandLogo variant="light" className="h-auto w-[140px] lg:w-[180px]" />
        </div>
      </KidsContainer>
    </section>
  );
}
