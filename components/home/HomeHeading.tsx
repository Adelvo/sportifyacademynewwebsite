/** Section heading with the cyan triangle. Use level 1 when the section is the main content of its own page. */
export function HomeHeading({ title, text, level = 2 }: { title: string; text: string; level?: 1 | 2 }) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className="flex items-start gap-4">
      <svg viewBox="0 0 24 28" aria-hidden="true" className="mt-1.5 w-6 shrink-0 fill-[#00dafa] sm:mt-2 sm:w-8 lg:mt-3">
        <path d="M0 0l24 14L0 28z" />
      </svg>
      <div>
        <Heading className="font-[family-name:var(--font-hero)]! text-3xl tracking-tight sm:text-4xl lg:text-5xl">{title}</Heading>
        <p className="mt-2 text-lg font-medium">{text}</p>
      </div>
    </div>
  );
}
