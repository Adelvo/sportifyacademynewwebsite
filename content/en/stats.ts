import type { StatItem } from "../types";

// Only confirmed figures. Other figures from older sources conflict. See TODO.md.
export const stats = {
  talents: { value: "1,200+", label: "talents discovered" },
  rating: { value: "5.0", label: "Google rating from 62 reviews" },
  sports: { value: "30+", label: "sports tested" },
  session: { value: "90", label: "minutes, one session" },
  experience: { value: "18", label: "years in talent identification" },
  school: { value: "300+", label: "students tested in one school programme" },
} satisfies Record<string, StatItem>;

export const trustLine = [
  "Dubai Sports Council",
  "5.0 Google (62 reviews)",
  "1,200+ talents discovered",
];
