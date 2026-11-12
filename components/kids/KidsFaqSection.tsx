import { Faq } from "@/components/sections/Faq";
import { Container } from "@/components/ui/Section";
import { kids } from "@/content";
import { HeadingMark } from "../home/SectionAccents";

/** "Questions parents ask": the two Kids-specific FAQ items, answers opening in place. */
export function KidsFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <HeadingMark className="mb-3" />
          <h2 className="text-3xl sm:text-4xl">{kids.faq.title}</h2>
        </div>
        <Faq items={kids.faq.items} variant="cards" />
      </Container>
    </section>
  );
}
