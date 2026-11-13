import type { Metadata } from "next";
import { FounderSlideshow } from "@/components/about/FounderSlideshow";
import { HeadingMark } from "@/components/home/SectionAccents";
import { WhySportify } from "@/components/home/WhySportify";
import { Container } from "@/components/ui/Section";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { about, images } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(about.meta);

export default function AboutPage() {
  const { founder } = about;
  return (
    <>
      <section className="bg-white pt-4 pb-16 text-midnight sm:pt-6 sm:pb-20">
        <Container>
          <div className="rounded-[14px] border border-[#DCE5EB] bg-[#F4F7F9] p-6 sm:p-8">
            <div className="mb-10 flex flex-col items-center text-center">
              <HeadingMark className="mb-3" />
              <h1 className="text-3xl sm:text-4xl xl:text-[2.75rem]">{founder.title}</h1>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] xl:gap-14">
              <FounderSlideshow slides={[images.founder, ...images.founderGallery]} />

              <div>
                <h3 className="text-3xl sm:text-4xl">{founder.name}</h3>
                <p className="mt-1 text-lg font-semibold text-[#0b7a8f]">{founder.role}</p>
                <div className="mt-5 space-y-3 text-lg text-midnight-800">
                  <p>{founder.intro}</p>
                  <ul className="list-disc space-y-2 pl-6 text-midnight marker:text-cyan">
                    {founder.achievements.map((achievement) => (
                      <li key={achievement}>
                        <strong className="font-bold">{achievement}</strong>
                      </li>
                    ))}
                  </ul>
                  {founder.story.map((line) => (
                    <p key={line}>
                      {line.split("**").map((part, index) =>
                        index % 2 === 1 ? (
                          <strong key={part} className="font-bold text-midnight">
                            {part}
                          </strong>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                  ))}
                </div>
                <a
                  href={founder.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-2 font-semibold transition-colors hover:border-[#0b7a8f] hover:text-[#0b7a8f]"
                >
                  <InstagramIcon className="size-5 text-[#0b7a8f]" />
                  {founder.instagram.handle}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhySportify as="h2" title={about.title} storyLink={false} headingAbove expertTeamImage={images.expertTeam} dataDrivenImage={images.dataDriven} provenResultsImage={images.provenResults} statsHover />
    </>
  );
}
