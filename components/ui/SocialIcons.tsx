export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d="M6 4.5h12a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5v-5a5 5 0 0 1 5-5Zm3.75 3.75v7.5L16.25 12Z" />
    </svg>
  );
}
