import { HeadingMark } from "./SectionAccents";

/** Section heading with three cyan slashes. Use level 1 when the section is the main content of its own page. */
export function HomeHeading({ title, text, level = 2 }: { title: string; text?: string; level?: 1 | 2 }) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4">
      <HeadingMark className="shrink-0" />
      <Heading className="font-[family-name:var(--font-hero)]! text-[clamp(16px,4.4vw,24px)] font-bold leading-[1.15] tracking-normal sm:text-[clamp(18px,2.5vw,32px)]">{title}</Heading>
      {text && <p className="col-start-2 mt-2 text-lg font-medium">{text}</p>}
    </div>
  );
}
