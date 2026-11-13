import Image from "next/image";
import { Faq } from "@/components/sections/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { home, homeFaq, homeFaqGroups } from "@/content";
import { CornerArc, HeadingMark } from "./SectionAccents";

export function HomeFaq() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbfd] py-20 text-midnight sm:py-24">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        <Reveal className="mb-12 flex flex-col items-center text-center sm:mb-14">
          <HeadingMark className="mb-3" />
          <h2 className="text-3xl sm:text-4xl xl:text-[2.75rem]">{home.faq.title}</h2>
        </Reveal>
        <Reveal delay={90}>
          <Faq items={homeFaq} variant="cards" />
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-16 flex max-w-3xl flex-col gap-8 sm:mt-20">
          {homeFaqGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-3 flex items-center gap-2">
                {group.portrait && (
                  <Image
                    src={group.portrait}
                    alt=""
                    width={24}
                    height={24}
                    sizes="24px"
                    className="size-6 shrink-0 rounded-full object-cover"
                  />
                )}
                <span className="inline-flex items-center rounded-full bg-cyan/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0b7a8f]">
                  {group.label}
                </span>
              </div>
              <Faq items={group.items} variant="kids" />
            </div>
          ))}
        </Reveal>

      </Container>
    </section>
  );
}
