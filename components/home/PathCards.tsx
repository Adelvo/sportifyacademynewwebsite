import Link from "next/link";
import { Photo } from "@/components/media/Photo";
import { Container } from "@/components/ui/Section";
import { home, images } from "@/content";

/** The four ways in, directly under the stats band. Each card opens its own page. */
export function PathCards() {
  return (
    <section aria-label={home.paths.label} className="bg-white py-8 sm:py-12">
      <Container>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5">
          {home.paths.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group @container relative flex aspect-[3/5] flex-col justify-end overflow-hidden rounded-2xl bg-[#0a1f33] text-white lg:rounded-3xl"
              >
                <Photo
                  image={images.paths[item.image]}
                  sizes="(min-width: 1200px) 270px, (min-width: 768px) 23vw, 46vw"
                  className="absolute inset-x-0 top-0 h-4/5 w-full transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span aria-hidden="true" className="absolute inset-x-0 top-[40%] h-[41%] bg-linear-to-b from-[#0a1f33]/0 to-[#0a1f33]" />
                <span className="relative flex items-end justify-between gap-[4cqw] p-[7cqw] font-[family-name:var(--font-hero)] leading-[1.08] font-bold">
                  <span className="min-w-0">
                    {item.lines.map((line) => (
                      <span key={line} className={`block ${line.length > 10 ? "text-[9.4cqw]" : "text-[12.5cqw]"}`}>
                        {line}{" "}
                      </span>
                    ))}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-[16cqw] shrink-0 place-items-center rounded-[3.5cqw] bg-[#00dafa] text-[#0a1f33] transition-colors group-hover:bg-[#4ae6fc]"
                  >
                    <svg viewBox="0 0 26 18" fill="none" stroke="currentColor" strokeWidth="3" className="w-[58%]">
                      <path d="M1 9h23M16.5 1.5 24 9l-7.5 7.5" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
