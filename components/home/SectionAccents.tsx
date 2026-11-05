/** Pale cyan arc in a corner of the section. Drawn for the top left; rotate it for the bottom right. */
export function CornerArc({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 370 140" aria-hidden="true" className={`absolute w-56 fill-cyan/12 sm:w-72 lg:w-[23rem] ${className}`}>
      <path d="M0 110C100 100 200 50 240 0h130C300 80 150 140 0 140z" />
    </svg>
  );
}

/** Three cyan slashes above a section heading. */
export function HeadingMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 28" aria-hidden="true" className={`w-13 fill-cyan ${className}`}>
      <path d="M14 0h14L14 28H0zM36 0h14L36 28H22zM58 0h14L58 28H44z" />
    </svg>
  );
}
