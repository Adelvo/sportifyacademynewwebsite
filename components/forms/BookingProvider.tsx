"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { ui } from "@/content";
import type { PackageId } from "@/content/types";
import { BookingForm } from "./BookingForm";

const BookingContext = createContext<(packageId?: PackageId) => void>(() => {});

export const useOpenBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [session, setSession] = useState<{ id: number; packageId?: PackageId }>({ id: 0 });

  const open = useCallback((packageId?: PackageId) => {
    setSession((current) => ({ id: current.id + 1, packageId }));
    dialogRef.current?.showModal();
  }, []);

  const value = useMemo(() => open, [open]);
  const page = pathname === "/" ? "home" : pathname.replace(/^\//, "");

  return (
    <BookingContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        aria-label={ui.bookAssessment}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-dvh w-full max-w-xl overflow-y-auto bg-white p-0 text-midnight sm:rounded-3xl"
      >
        <div className="p-5 sm:p-8">
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              aria-label={ui.close}
              onClick={() => dialogRef.current?.close()}
              className="grid size-11 place-items-center rounded-full hover:bg-mist"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          {session.id > 0 && (
            <BookingForm key={session.id} source={`booking-${page}`} initialPackage={session.packageId} />
          )}
        </div>
      </dialog>
    </BookingContext.Provider>
  );
}
