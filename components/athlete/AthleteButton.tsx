import type { ComponentProps } from "react";

/** The Athlete page's own WhatsApp CTA style: cyan background, midnight text, at least 44px tall. */
export function AthleteButton({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#67D5E5] px-6 text-[15px] font-semibold text-[#081C2C] transition-colors hover:bg-[#8EE3EF] ${className}`}
      {...props}
    />
  );
}
