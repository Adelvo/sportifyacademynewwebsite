"use client";

import { useRef } from "react";
import { ui } from "@/content";
import type { PackageId } from "@/content/types";
import { useOpenBooking } from "../forms/BookingProvider";
import { buttonClass } from "../ui/Button";

export interface PackageChoice {
  id: PackageId;
  label: string;
  text?: string;
  price: string;
}

/** "View Packages": lists a card's packages in a dialog, so the visitor stays on the landing page. */
export function ViewPackages({
  title,
  buttonLabel,
  choices,
  note,
}: {
  title: string;
  buttonLabel: string;
  choices: PackageChoice[];
  note?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openBooking = useOpenBooking();

  return (
    <>
      <button
        type="button"
        aria-label={`${buttonLabel}: ${title}`}
        onClick={() => dialogRef.current?.showModal()}
        className={buttonClass("cyan", "w-full rounded-xl!")}
      >
        {buttonLabel}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-dvh w-full max-w-xl overflow-y-auto bg-white p-0 text-[#0a1f33] sm:rounded-3xl"
      >
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-[family-name:var(--font-hero)]! text-2xl tracking-tight sm:text-3xl">{title}</h3>
            <button
              type="button"
              aria-label={ui.close}
              onClick={() => dialogRef.current?.close()}
              className="grid size-11 shrink-0 place-items-center rounded-full hover:bg-mist"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <ul className="mt-5 divide-y divide-line">
            {choices.map((choice) => (
              <li key={choice.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold">{choice.label}</p>
                  <p className="mt-1 text-xl font-extrabold whitespace-nowrap">{choice.price}</p>
                  {choice.text && <p className="mt-1 text-sm font-medium">{choice.text}</p>}
                </div>
                <button
                  type="button"
                  aria-label={`${ui.book}: ${choice.label}`}
                  onClick={() => {
                    dialogRef.current?.close();
                    openBooking(choice.id);
                  }}
                  className={buttonClass("cyan", "shrink-0 rounded-xl!")}
                >
                  {ui.book}
                </button>
              </li>
            ))}
          </ul>

          {note && <p className="border-t border-line pt-4 text-sm font-medium">{note}</p>}
        </div>
      </dialog>
    </>
  );
}
