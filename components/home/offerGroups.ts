import type { FeatureIconName } from "./FeatureIcon";

/** Icon shown next to a card group's heading, keyed by the group's label. */
export const GROUP_ICONS: Partial<Record<string, FeatureIconName>> = {
  Assessments: "assessment",
  "Train With Us": "people",
  "Eat Better": "nutrition",
  Recover: "care",
  Mindset: "bars",
};
