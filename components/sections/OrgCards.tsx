import Link from "next/link";
import { nav } from "@/content";

export function OrgCards() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {nav.organisations.map((item) => (
        <li key={item.href} className="h-full">
          <Link
            href={item.href}
            className="block h-full rounded-2xl border-2 border-line bg-white p-6 text-midnight transition-colors hover:border-midnight"
          >
            <span className="block font-display text-xl font-extrabold">{item.label}</span>
            <span className="mt-2 block text-ink-soft">{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
