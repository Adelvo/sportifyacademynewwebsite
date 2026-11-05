"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Shows its content on every page except the homepage. */
export function NotOnHome({ children }: { children: ReactNode }) {
  return usePathname() === "/" ? null : children;
}
