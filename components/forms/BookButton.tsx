"use client";

import type { ReactNode } from "react";
import type { PackageId } from "@/content/types";
import { buttonClass, type ButtonVariant } from "../ui/Button";
import { useOpenBooking } from "./BookingProvider";

/** Opens the booking form, with a package already chosen if one is given. */
export function BookButton({
  packageId,
  variant = "primary",
  className = "",
  children,
  ariaLabel,
}: {
  packageId?: PackageId;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const openBooking = useOpenBooking();
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => openBooking(packageId)}
      className={buttonClass(variant, className)}
    >
      {children}
    </button>
  );
}
