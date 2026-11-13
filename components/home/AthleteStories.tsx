import { VideoSlot } from "@/components/media/VideoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { home, testimonials } from "@/content";
import { OffersButton } from "./OffersLink";
import { CornerArc, HeadingMark } from "./SectionAccents";

/** "Hear from our athletes": the success story videos and the offers link. */
export function AthleteStories() {
  const { testimonials: section } = home;
  return (
    <section id="results" className="relative scroll-mt-[clamp(4.75rem,10svh,6.25rem)] overflow-hidden bg-[#f8fbfd] pt-[18px] pb-20 text-midnight sm:pt-7">
      <CornerArc className="start-0 top-0" />
      <CornerArc className="end-0 bottom-0 rotate-180" />

      <Container className="relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <HeadingMark className="shrink-0" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">{section.title}</h2>
          </div>
          <p className="mt-4 text-lg text-midnight-800">{section.text}</p>
        </Reveal>

        <ul className="mt-6 grid grid-cols-1 gap-8 sm:mt-7 md:grid-cols-2 md:gap-5 lg:gap-6">
          {testimonials.map((video, index) => (
            <Reveal key={video.id} as="li" delay={index * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgb(10_31_51/0.1)] ring-[#00b8d9] transition-[scale,box-shadow] duration-200 focus-within:ring-2 hover:ring-2 motion-safe:hover:relative motion-safe:hover:z-10 motion-safe:hover:scale-[1.02]">
                <VideoSlot video={video} hideCaption autoplayInView />
                <div aria-hidden="true" className="h-1 bg-electric-gradient" />

                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 p-5 lg:px-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl">{video.name}</h3>
                    {video.role && <p className="mt-1 font-medium text-ink-soft">{video.role}</p>}
                  </div>
                  <p className="rounded-full bg-cyan/12 px-3 py-1 text-sm font-semibold text-[#0b7a8f] max-sm:hidden">{section.label}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center sm:mt-8">
          <OffersButton className="w-full sm:w-80" />
        </Reveal>
      </Container>
    </section>
  );
}
