const paths = {
  pin: (
    <>
      <path d="M12 21.5s7.5-6.2 7.5-12a7.5 7.5 0 0 0-15 0c0 5.8 7.5 12 7.5 12z" />
      <circle cx="12" cy="9.5" r="2.7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  report: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M9 11h.01M12 11h4M9 15.5h.01M12 15.5h4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.8" />
    </>
  ),
  pathway: (
    <>
      <circle cx="6.5" cy="17.5" r="3" />
      <circle cx="17.5" cy="6.5" r="3" />
      <path d="M9 15.5l6-7" />
      <path d="M8.7 15.2c2.5-.4 3-1.2 3.3-3.2s.8-2.9 3.3-3.2" />
    </>
  ),
  people: (
    <>
      <circle cx="8.5" cy="8" r="3.5" />
      <circle cx="17" cy="8.5" r="2.8" />
      <path d="M2.5 20c0-3.6 2.6-6 6-6s6 2.4 6 6M16.5 14c3 0 5 2.2 5 5.2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 2.5V7M16 2.5V7M7.5 14h.01M12 14h.01M16.5 14h.01M7.5 17.5h.01M12 17.5h.01" />
    </>
  ),
  bars: (
    <>
      <rect x="3" y="13" width="4.5" height="8" rx="1" />
      <rect x="9.75" y="8" width="4.5" height="13" rx="1" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1" />
    </>
  ),
  assessment: (
    <>
      <rect x="4.5" y="4" width="15" height="17.5" rx="2.5" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M8.5 11l1.5 1.5 2.5-2.5M8.5 16.5l1.5 1.5 2.5-2.5" />
      <path d="M14.5 11.5h1.5M14.5 17h1.5" />
    </>
  ),
  care: (
    <>
      <path d="M13 2.8c-1-1.3-3.5-1.2-4.3.5-.8 1.8.6 3.4 4.3 6.2 3.7-2.8 5.1-4.4 4.3-6.2-.8-1.7-3.3-1.8-4.3-.5z" />
      <path d="M2.5 14.5l2.3-1.2c1.3-.6 2.6-.6 3.9 0l2.1 1h3.2c.9 0 1.5.6 1.5 1.3s-.6 1.3-1.5 1.3H10.5" />
      <path d="M15.8 15.9l3.7-2.1c.8-.4 1.6-.2 1.9.4s0 1.3-.7 1.8l-5.4 3.4c-1 .6-2 .8-3.2.7l-3.7-.4c-1-.1-1.8 0-2.7.4L3.5 21" />
    </>
  ),
  run: (
    <>
      <circle cx="16" cy="4.5" r="2" />
      <path d="M8.5 11l1.7-3 4.3-.5 2.5 3 3 1" />
      <path d="M14.5 7.5l-2 5.5 3.5 2.5-1 5.5" />
      <path d="M12.5 13l-1.5 3.5-4 1.5" />
      <path d="M2 9h3.5M1.5 13H5M3 17h1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5l8 3v6c0 5-3.3 8.6-8 10-4.7-1.4-8-5-8-10v-6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  calendarPlain: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 2.5V7M16 2.5V7" />
    </>
  ),
  team: (
    <>
      <circle cx="12" cy="7" r="3.2" />
      <circle cx="4.8" cy="10" r="2.2" />
      <circle cx="19.2" cy="10" r="2.2" />
      <path d="M6.5 20v-2.5c0-2.8 2.4-4.5 5.5-4.5s5.5 1.7 5.5 4.5V20" />
      <path d="M1.5 19v-1.5c0-1.7 1.2-2.9 3-3M22.5 19v-1.5c0-1.7-1.2-2.9-3-3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 10c0 1.7 3.6 3 8 3s8-1.3 8-3M4 14.5c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  crosshair: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </>
  ),
  medal: (
    <>
      <path d="M7 2.5h10l-2.5 7.2h-5zM7 2.5l3 7M17 2.5l-3 7" />
      <circle cx="12" cy="15.5" r="6" />
      <circle cx="12" cy="15.5" r="2" />
    </>
  ),
  growth: (
    <>
      <rect x="3" y="16" width="4" height="5" />
      <rect x="10" y="12.5" width="4" height="8.5" />
      <rect x="17" y="9" width="4" height="12" />
      <path d="M3 10.5C8 9.5 13 7 17.5 3M13.5 2.5h4.5V7" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 3h10v7a5 5 0 0 1-10 0z" />
      <path d="M7 5H3v2a4 4 0 0 0 4 4M17 5h4v2a4 4 0 0 1-4 4" />
      <path d="M12 15v4M7.5 21h9M9 21c0-1.3 1.2-2 3-2s3 .7 3 2" />
    </>
  ),
};

export type FeatureIconName = keyof typeof paths;

export function FeatureIcon({ name, className = "size-7" }: { name: FeatureIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
