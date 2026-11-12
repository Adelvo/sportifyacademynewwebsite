/** Small line pictograms used across the Athlete page so each card and step reads at a glance. */

type IconProps = { className?: string; style?: React.CSSProperties };

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PersonIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
    </svg>
  );
}

export function PeopleIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <circle cx="9" cy="7.5" r="2.8" />
      <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="17" cy="8.5" r="2.2" />
      <path d="M15.3 14.3c2.5.4 4.2 2.4 4.2 5.2" />
    </svg>
  );
}

export function ForkKnifeIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11" />
      <path d="M16 3c-1.4 0-2.5 1.8-2.5 4s1.1 4 2.5 4v10" />
    </svg>
  );
}

export function HeartPulseIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M12 20.2S3.5 15 3.5 9.2A4.2 4.2 0 0 1 12 7.7a4.2 4.2 0 0 1 8.5 1.5c0 5.8-8.5 11-8.5 11Z" />
      <path d="M5.5 11h3l1.5-2.5L11.5 14l1.5-3h4.5" />
    </svg>
  );
}

export function ClipboardIcon({ className = "size-5", style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} {...strokeProps}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  );
}

export function ChatIcon({ className = "size-5", style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} {...strokeProps}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}

export function TargetIcon({ className = "size-5", style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="10" cy="14" r="7" />
      <circle cx="10" cy="14" r="3.5" />
      <circle cx="10" cy="14" r="0.7" fill="currentColor" stroke="none" />
      <path d="M13.5 10.5 20 4" strokeLinecap="round" />
      <path d="M15 4h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuestionIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.3 9.3a2.7 2.7 0 1 1 3.7 2.5c-.9.4-1 1-1 2.1" />
      <circle cx="12" cy="17" r="0.3" fill="currentColor" />
    </svg>
  );
}
