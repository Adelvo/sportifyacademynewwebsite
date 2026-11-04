import { formatPrice, measureNames, packages, packagesPage, ui } from "@/content";
import { BookButton } from "../forms/BookButton";
import { TodoMark, Txt } from "../ui/Txt";

/** Shows only confirmed contents. Anything unconfirmed is marked TODO, never guessed. */
export function ComparisonTable() {
  const stickyCell = "sticky start-0 z-10 bg-white p-3 text-start";
  return (
    <>
      <p className="mb-2 text-sm text-ink-soft sm:hidden">{ui.table.scrollHint}</p>
      <div tabIndex={0} role="region" aria-label={ui.table.caption} className="relative overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <caption className="sr-only">{ui.table.caption}</caption>
          <thead>
            <tr className="border-b-2 border-midnight align-bottom">
              <th scope="col" className={`${stickyCell} w-44 font-bold`}>
                {ui.table.measure}
              </th>
              {packages.map((pack) => (
                <th key={pack.id} scope="col" className="w-32 p-3 text-center font-bold">
                  {pack.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <th scope="row" className={`${stickyCell} font-semibold`}>
                {ui.table.price}
              </th>
              {packages.map((pack) => (
                <td key={pack.id} className="p-3 text-center font-bold whitespace-nowrap">
                  {formatPrice(pack.price)}
                </td>
              ))}
            </tr>
            {packagesPage.tableRows.map((row) => (
              <tr key={row} className="border-b border-line">
                <th scope="row" className={`${stickyCell} font-semibold`}>
                  {measureNames[row]}
                </th>
                {packages.map((pack) => (
                  <td key={pack.id} className="p-3 text-center">
                    {pack.includes.includes(row) ? (
                      <span className="inline-grid size-7 place-items-center rounded-full bg-electric-gradient text-midnight">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="sr-only">{ui.table.included}</span>
                      </span>
                    ) : (
                      <TodoMark>{ui.table.todo}</TodoMark>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row" className={`${stickyCell} font-semibold`}>
                {ui.book}
              </th>
              {packages.map((pack) => (
                <td key={pack.id} className="p-3 text-center">
                  <BookButton packageId={pack.id} ariaLabel={`${ui.book}: ${pack.name}`} className="min-h-11! px-4! py-2! text-sm">
                    {ui.book}
                  </BookButton>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        <Txt>{ui.table.todoLegend}</Txt>
      </p>
    </>
  );
}
