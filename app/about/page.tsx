import type { Metadata } from "next";
import { HeadingMark } from "@/components/home/SectionAccents";
import { WhySportify } from "@/components/home/WhySportify";
import { Photo } from "@/components/media/Photo";
import { Container } from "@/components/ui/Section";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { about, images } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(about.meta);

export default function AboutPage() {
  const { founder } = about;
  return (
    <>
      <WhySportify as="h1" title={about.title} storyLink={false} />

      <section className="bg-white py-16 text-midnight sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col items-center text-center">
            <HeadingMark className="mb-3" />
            <h2 className="text-3xl sm:text-4xl xl:text-[2.75rem]">{founder.title}</h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] xl:gap-14">
            {/* The cyan shows only at two corners, where the gradient is not transparent. */}
            <div className="mx-auto w-full max-w-lg rounded-[1.25rem] bg-[linear-gradient(135deg,var(--color-cyan),transparent_35%,transparent_75%,var(--color-cyan))] pt-1.5 pr-0.5 pb-0.5 pl-1.5">
              <Photo
                image={images.founder}
                sizes="(min-width: 1024px) 40vw, (min-width: 512px) 512px, 100vw"
                className="aspect-[4/5] w-full rounded-2xl object-top"
              />
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl">{founder.name}</h3>
              <p className="mt-1 text-lg font-semibold text-[#0b7a8f]">{founder.role}</p>
              <div className="mt-5 space-y-3 text-lg text-midnight-800">
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
        </Container>
      </section>
    </>
  );
}
