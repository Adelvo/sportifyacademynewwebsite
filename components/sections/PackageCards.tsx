import { formatPrice, packageGroups, packages, ui } from "@/content";
import type { Package } from "@/content/types";
import { BookButton } from "../forms/BookButton";
import { Txt } from "../ui/Txt";

function PackageCard({ pack }: { pack: Package }) {
  return (
    <article className={`flex h-full flex-col rounded-2xl border-2 bg-white p-6 ${pack.badge ? "border-midnight" : "border-line"}`}>
      {pack.badge && (
        <p className="mb-3 w-fit rounded-full bg-cyan px-3 py-1 text-sm font-bold text-midnight">{pack.badge}</p>
      )}
      <h4 className="font-display text-xl font-extrabold leading-tight">{pack.name}</h4>
      <p className="mt-3 font-display text-3xl font-extrabold">{formatPrice(pack.price)}</p>
      {pack.priceNote && (
        <p className="mt-1">
          <Txt>{pack.priceNote}</Txt>
        </p>
      )}
      <p className="mt-3 text-ink-soft">{pack.summary}</p>
      <ul className="mt-4 mb-6 space-y-2">
        {pack.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-midnight" />
            <span>
              <Txt>{item}</Txt>
            </span>
          </li>
        ))}
      </ul>
      <BookButton packageId={pack.id} className="mt-auto w-full" ariaLabel={`${ui.book}: ${pack.name}`}>
        {ui.book}
      </BookButton>
    </article>
  );
}

export function PackageGroups() {
  return (
    <div className="space-y-14">
      {packageGroups.map((group) => (
        <section key={group.id} aria-labelledby={`group-${group.id}`}>
          <h3 id={`group-${group.id}`} className="text-2xl sm:text-3xl">
            {group.name}
          </h3>
          <p className="mt-2 mb-6 text-lg text-ink-soft">{group.summary}</p>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {packages
              .filter((pack) => pack.group === group.id)
              .map((pack) => (
                <li key={pack.id}>
                  <PackageCard pack={pack} />
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
