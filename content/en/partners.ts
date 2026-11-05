import type { Partner } from "../types";

// Logos in /public/partners were cropped from screenshots of a logo carousel: replace them with the original files.
// A partner without "logo" shows its name as text.
// [TODO: confirm with client: original logo files and written permission to use them]
export const partners: Partner[] = [
  { id: "dsc", name: "Dubai Sports Council" },
  { id: "emirates", name: "Emirates Airline", logo: "/partners/emirates.webp" },
  { id: "flydubai", name: "flydubai", logo: "/partners/flydubai.webp" },
  { id: "dmcc", name: "DMCC", logo: "/partners/dmcc.webp" },
  { id: "enbd", name: "Emirates NBD", logo: "/partners/enbd.webp" },
  { id: "esaad", name: "esaad", logo: "/partners/esaad.webp" },
  { id: "fazaa", name: "Fazaa", logo: "/partners/fazaa.webp" },
  { id: "uae-boxing", name: "UAE Boxing Federation", logo: "/partners/uae-boxing.webp" },
  { id: "uae-archery", name: "UAE Archery Federation", logo: "/partners/uae-archery.webp" },
  { id: "uae-sailing", name: "UAE Sailing & Rowing Federation", logo: "/partners/uae-sailing.webp" },
  { id: "uae-karate", name: "UAE Karate Federation", logo: "/partners/uae-karate.webp" },
  { id: "uae-tennis", name: "UAE Tennis Federation", logo: "/partners/uae-tennis.webp" },
  { id: "uae-triathlon", name: "UAE Triathlon", logo: "/partners/uae-triathlon.webp" },
  { id: "al-nasr", name: "Al Nasr", logo: "/partners/al-nasr.webp" },
  { id: "al-wasl", name: "Al Wasl", logo: "/partners/al-wasl.webp" },
  { id: "benfica", name: "Benfica", logo: "/partners/benfica.webp" },
  { id: "besiktas", name: "Beşiktaş", logo: "/partners/besiktas.webp" },
  { id: "shabab-al-ahli", name: "Shabab Al Ahli", logo: "/partners/shabab-al-ahli.webp" },
  { id: "hatta", name: "Hatta Club", logo: "/partners/hatta.webp" },
  { id: "al-ittifaq", name: "Al-Ittifaq Football Club", logo: "/partners/al-ittifaq.webp" },
  { id: "fmac", name: "Fujairah Martial Arts Club", logo: "/partners/fmac.webp" },
  { id: "wpa", name: "World Padel Academy", logo: "/partners/wpa.webp" },
  { id: "padel-mania", name: "Padel Mania", logo: "/partners/padel-mania.webp" },
  { id: "ism-sports", name: "ISM Sports", logo: "/partners/ism-sports.webp" },
  { id: "aviation-pro", name: "Aviation Professionals Club", logo: "/partners/aviation-pro.webp" },
  // [TODO: confirm with client: the name of this partner (green arrow logo)]
  { id: "unnamed-partner", name: "Partner", logo: "/partners/unnamed-partner.webp" },
];
