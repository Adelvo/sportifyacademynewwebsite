/** Small line pictograms used across the Kids page so each card and step reads at a glance. */

type IconProps = { className?: string; style?: React.CSSProperties };

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SpeakerMutedIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16.5 9.5 20.5 13.5M20.5 9.5 16.5 13.5" />
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

export function BalanceIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M3 17h18" />
      <circle cx="9" cy="6.5" r="2" />
      <path d="M9 8.5v3.5l-3.5 5M9 12l3.5 5" />
    </svg>
  );
}

export function SpeedIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13 16 9" />
      <path d="M9 3h6" />
    </svg>
  );
}

export function BallIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16" />
      <path d="M6 7.5c2.5 2 7.5 2 10 0M6 16.5c2.5-2 7.5-2 10 0" />
    </svg>
  );
}

export function CameraIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" />
      <circle cx="12" cy="13" r="3.2" />
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

export function LeafIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15Z" />
      <path d="M5 19c3-3 6-6 10-10" />
    </svg>
  );
}

export function CheckIcon({ className = "size-5", style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} {...strokeProps}>
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  );
}
