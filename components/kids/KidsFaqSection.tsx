import { Faq } from "@/components/sections/Faq";
import { kids } from "@/content";
import { KidsContainer } from "./KidsContainer";

/** "Questions parents ask": the two Kids-specific FAQ items, answers opening in place. */
export function KidsFaqSection() {
  return (
    <section className="bg-white py-[18px] sm:py-7">
      <KidsContainer>
        <h2 className="mb-6 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2] sm:mb-7">{kids.faq.title}</h2>
        <Faq items={kids.faq.items} variant="kids" />
      </KidsContainer>
    </section>
  );
}
