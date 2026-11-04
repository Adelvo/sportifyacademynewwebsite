/** Small star label on a card photo, such as "Most popular". The parent must be positioned. */
export function CardBadge({ children }: { children: string }) {
  return (
    <p className="absolute start-3 top-3 flex items-center gap-1.5 rounded-full bg-[#00dafa] px-3 py-1 text-sm font-bold">
      <svg viewBox="0 0 20 20" aria-hidden="true" className="size-3.5 fill-current">
        <path d="M10 1l2.8 5.9 6.5.8-4.8 4.4 1.3 6.4L10 15.3l-5.8 3.2 1.3-6.4L.7 7.7l6.5-.8z" />
      </svg>
      {children}
    </p>
  );
}
