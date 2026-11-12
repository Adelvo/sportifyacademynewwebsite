import { Faq } from "@/components/sections/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { athlete } from "@/content";
import { AthleteContainer } from "./AthleteContainer";

/** "Questions before you start": the two Athlete-specific FAQ items, answers opening in place. */
export function AthleteFaqSection() {
  return (
    <section className="bg-[#F4F7F9] py-9 sm:py-12">
      <AthleteContainer>
        <Reveal as="div">
          <h2 className="mb-6 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2] sm:mb-7">{athlete.faq.title}</h2>
          <Faq items={athlete.faq.items} variant="kids" />
        </Reveal>
      </AthleteContainer>
    </section>
  );
}
