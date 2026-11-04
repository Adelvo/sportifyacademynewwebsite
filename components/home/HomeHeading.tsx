/** Landing page section heading with the cyan triangle. */
export function HomeHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <svg viewBox="0 0 24 28" aria-hidden="true" className="mt-1.5 w-6 shrink-0 fill-[#00dafa] sm:mt-2 sm:w-8 lg:mt-3">
        <path d="M0 0l24 14L0 28z" />
      </svg>
      <div>
        <h2 className="font-[family-name:var(--font-hero)]! text-3xl tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-2 text-lg font-medium">{text}</p>
      </div>
    </div>
  );
}
