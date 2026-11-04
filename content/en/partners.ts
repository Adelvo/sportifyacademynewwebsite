import type { Partner } from "../types";

// Names show as text until logo files are added: put the file in /public/partners and set "logo".
// [TODO: confirm with client: logo files and written permission to use them]
export const partners: Partner[] = [
  { id: "dsc", name: "Dubai Sports Council" },
  { id: "emirates", name: "Emirates Airline" },
  { id: "flydubai", name: "flydubai" },
  { id: "dmcc", name: "DMCC" },
  { id: "enbd", name: "Emirates NBD" },
  { id: "uae-boxing", name: "UAE Boxing Federation" },
  { id: "uae-archery", name: "UAE Archery Federation" },
  { id: "uae-sailing", name: "UAE Sailing Federation" },
  { id: "uae-karate", name: "UAE Karate Federation" },
  { id: "uae-tennis", name: "UAE Tennis Federation" },
  { id: "al-nasr", name: "Al Nasr" },
  { id: "al-wasl", name: "Al Wasl" },
  { id: "benfica", name: "Benfica" },
  { id: "besiktas", name: "Beşiktaş" },
];

export function partnersById(ids: string[]): Partner[] {
  return partners.filter((p) => ids.includes(p.id));
}
