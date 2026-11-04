import { useId } from "react";

/** Decorative ring. It shows no number, because it is not real data. */
export function ScoreRing({
  value,
  size = 56,
  trackClass = "text-midnight-700",
  className = "",
}: {
  value: number;
  size?: number;
  trackClass?: string;
  className?: string;
}) {
  const gradientId = useId();
  const stroke = 6;
  const radius = 20 - stroke / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className={`-rotate-90 ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-electric-from)" />
          <stop offset="1" stopColor="var(--color-electric-to)" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className={trackClass} />
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${(value / 100) * circumference} ${circumference}`}
      />
    </svg>
  );
}

/** Decorative bar. The label is a real measure; the fill is only a picture. */
export function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 text-sm font-medium">{label}</div>
      <div className="h-2 rounded-full bg-midnight-700" aria-hidden="true">
        <div className="h-2 rounded-full bg-electric-gradient" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
