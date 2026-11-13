import { Faq } from "@/components/sections/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { adult } from "@/content";
import { AdultContainer } from "./AdultContainer";

/** "Questions before you start": the Adult-specific FAQ items, answers opening in place. */
export function AdultFaqSection() {
  return (
    <section className="bg-[#F4F7F9] py-9 sm:py-12">
      <AdultContainer>
        <Reveal as="div">
          <h2 className="mb-6 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2] sm:mb-7">{adult.faq.title}</h2>
          <Faq items={adult.faq.items} variant="kids" />
        </Reveal>
      </AdultContainer>
    </section>
  );
}
