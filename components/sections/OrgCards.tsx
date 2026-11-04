import Link from "next/link";
import { nav } from "@/content";

export function OrgCards({ dark = false }: { dark?: boolean }) {
  const card = dark
    ? "border-white/20 bg-midnight-800 text-white hover:border-orange"
    : "border-line bg-white text-midnight hover:border-midnight";
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {nav.organisations.map((item) => (
        <li key={item.href} className="h-full">
          <Link href={item.href} className={`block h-full rounded-2xl border-2 p-6 transition-colors ${card}`}>
            <span className="block font-display text-xl font-extrabold">{item.label}</span>
            <span className={`mt-2 block ${dark ? "text-on-midnight-soft" : "text-ink-soft"}`}>{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
