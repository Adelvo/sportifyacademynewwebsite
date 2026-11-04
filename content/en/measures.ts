import type { Measure, MeasureId } from "../types";

// Shown in "What we measure" on Home and in the method on About.
export const measures: Measure[] = [
  {
    id: "fitness",
    name: "Fitness",
    what: "Strength, speed and stamina.",
    why: "Every sport asks the body for something different.",
    ring: 82,
  },
  {
    id: "skills",
    name: "Skills",
    what: "How your child moves and controls the body.",
    why: "Skills show how a child learns and performs.",
    ring: 68,
  },
  {
    id: "psychology",
    name: "Psychology",
    what: "How your child thinks and reacts in sport.",
    why: "Sports need different mental strengths.",
    ring: 74,
  },
  {
    id: "anthropometry",
    name: "Anthropometry",
    what: "Body measurements, like height and limb length.",
    why: "Body shape can suit some sports more than others.",
    ring: 58,
  },
  {
    id: "posture",
    name: "Posture",
    what: "How your child stands and holds the body.",
    why: "Posture can show what to work on first.",
    ring: 64,
  },
  {
    id: "gait",
    name: "Gait & foot scan",
    what: "How your child walks and how the foot meets the ground.",
    why: "The feet carry the body in almost every sport.",
    ring: 71,
  },
  {
    id: "bodycomp",
    name: "Body composition",
    what: "The balance of muscle and fat in the body.",
    why: "It gives a clearer picture than weight alone.",
    ring: 53,
  },
  {
    id: "genetics",
    name: "Genetics",
    what: "A genetics test, available in premium packages.",
    why: "It adds another layer of information to the report.",
    ring: 88,
  },
  {
    id: "tgmd",
    name: "TGMD",
    what: "The Test of Gross Motor Development, for young children.",
    why: "It shows how basic movement skills are developing.",
    ring: 77,
  },
];

// Names for table rows, including rows that are not in the grid above.
export const measureNames: Record<MeasureId, string> = {
  tgmd: "TGMD (young children)",
  fitness: "Fitness",
  skills: "Skills",
  psychology: "Psychology",
  anthropometry: "Anthropometry",
  posture: "Posture",
  gait: "Gait / foot scan",
  bodycomp: "Body composition",
  genetics: "Genetics",
  diet: "Diet analysis",
  consultation: "Talent consultation",
  report: "Written talent report, same day",
};
