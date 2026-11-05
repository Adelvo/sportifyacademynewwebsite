import { Faq } from "@/components/sections/Faq";
import { Container } from "@/components/ui/Section";
import { home, homeFaq } from "@/content";
import { CornerArc, HeadingMark } from "./SectionAccents";

export function HomeFaq() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbfd] py-20 text-midnight sm:py-24">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-14">
          <HeadingMark className="mb-3" />
          <h2 className="text-3xl sm:text-4xl xl:text-[2.75rem]">{home.faq.title}</h2>
        </div>
        <Faq items={homeFaq} variant="cards" />
      </Container>
    </section>
  );
}
