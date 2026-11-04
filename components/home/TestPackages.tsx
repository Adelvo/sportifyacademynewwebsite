import { BookButton } from "@/components/forms/BookButton";
import { Photo } from "@/components/media/Photo";
import { Container } from "@/components/ui/Section";
import { formatPrice, getPackage, home, images } from "@/content";
import { ViewPackages } from "./ViewPackages";

/** "Test my child": the assessments on the landing page. Prices come from content/en/packages.ts. */
export function TestPackages() {
  const { test } = home;
  return (
    <section id="packages" className="bg-linear-to-b from-[#eef1f8] to-white py-16 font-[family-name:var(--font-hero)] text-[#0a1f33] sm:py-24">
      <Container>
        <div className="mb-10 flex items-start gap-4 sm:mb-14">
          <svg viewBox="0 0 24 28" aria-hidden="true" className="mt-1.5 w-6 shrink-0 fill-[#00dafa] sm:mt-2 sm:w-8 lg:mt-3">
            <path d="M0 0l24 14L0 28z" />
          </svg>
          <div>
            <h2 className="font-[family-name:var(--font-hero)]! text-3xl tracking-tight sm:text-4xl lg:text-5xl">{test.title}</h2>
            <p className="mt-2 text-lg font-medium">{test.text}</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {test.cards.map((card) => {
            const prices = (card.options ?? []).map((option) => getPackage(option.packageId).price);
            const price = card.bookPackage ? getPackage(card.bookPackage).price : Math.min(...prices);
            return (
              <li key={card.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgb(10_31_51/0.1)] ring-[#00b8d9] transition-[scale,box-shadow] duration-200 focus-within:ring-2 hover:ring-2 motion-safe:hover:relative motion-safe:hover:z-10 motion-safe:hover:scale-[1.03]">
                  <div className="relative">
                    <Photo
                      image={images.tests[card.image]}
                      sizes="(min-width: 1200px) 350px, (min-width: 768px) 32vw, 100vw"
                      className="aspect-[8/5] w-full"
                    />
                    {card.badge && (
                      <p className="absolute start-3 top-3 flex items-center gap-1.5 rounded-full bg-[#00dafa] px-3 py-1 text-sm font-bold">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="size-3.5 fill-current">
                          <path d="M10 1l2.8 5.9 6.5.8-4.8 4.4 1.3 6.4L10 15.3l-5.8 3.2 1.3-6.4L.7 7.7l6.5-.8z" />
                        </svg>
                        {card.badge}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 lg:p-6">
                    <h3 className="font-[family-name:var(--font-hero)]! text-2xl tracking-tight">{card.name}</h3>
                    <p className="mt-2 w-fit rounded-full bg-[#e6eaf2] px-3 py-1 text-sm font-medium">{card.ages}</p>

                    <div className="mt-4 border-b border-line pb-5">
                      {card.options && <p className="mb-1 text-sm font-medium text-ink-soft">{test.startingAt}</p>}
                      <p className="text-3xl font-bold whitespace-nowrap lg:text-4xl">{formatPrice(price)}</p>
                      {card.priceNote && <p className="mt-1 text-sm font-medium text-ink-soft">{card.priceNote}</p>}
                    </div>

                    <ul className="mt-5 space-y-3.5 font-medium">
                      {card.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg viewBox="0 0 20 20" fill="none" stroke="#00b8d9" strokeWidth="1.8" aria-hidden="true" className="mt-0.5 size-5 shrink-0">
                            <circle cx="10" cy="10" r="9" />
                            <path d="M6 10.5l2.8 2.8L14 7.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      {card.options ? (
                        <ViewPackages
                          title={card.name}
                          buttonLabel={test.viewPackages}
                          note={card.note}
                          choices={card.options.map((option) => ({
                            id: option.packageId,
                            label: option.label,
                            text: option.text,
                            price: formatPrice(getPackage(option.packageId).price),
                          }))}
                        />
                      ) : (
                        <BookButton
                          packageId={card.bookPackage}
                          variant="cyan"
                          ariaLabel={`${test.bookNow}: ${card.name}`}
                          className="w-full rounded-xl!"
                        >
                          {test.bookNow}
                        </BookButton>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
