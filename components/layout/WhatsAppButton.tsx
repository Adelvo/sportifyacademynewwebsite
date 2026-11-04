"use client";

import { usePathname } from "next/navigation";
import { ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import { WhatsAppIcon } from "../ui/Button";

export function WhatsAppButton() {
  const pathname = usePathname();
  return (
    <aside aria-label={ui.whatsappLabel}>
      <a
        href={whatsappUrlForPath(pathname)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.whatsappLabel}
        className="fixed end-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#0E7A40] text-white shadow-lg transition-transform hover:scale-105 sm:end-6 sm:bottom-6"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </aside>
  );
}
