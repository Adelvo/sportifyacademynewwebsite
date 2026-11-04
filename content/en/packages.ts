import type { AgeBandId, GoalId, MeasureId, Option, Package, PackageGroup, PackageId } from "../types";

export const packageGroups: PackageGroup[] = [
  {
    id: "foundations",
    name: "Foundations",
    summary: "For young children, or for a clear picture of fitness.",
  },
  {
    id: "talent",
    name: "Talent Identification",
    summary: "Find the 2–3 sports that match your child best.",
  },
  {
    id: "premium",
    name: "Premium",
    summary: "Talent identification with a genetics test.",
  },
];

export const packages: Package[] = [
  {
    id: "fundamental-movement",
    group: "foundations",
    name: "Fundamental Movement Assessment",
    price: 650,
    summary: "For young children aged 4–8. It checks basic movement skills and looks at many sports.",
    highlights: ["Ages 4–8", "TGMD (Test of Gross Motor Development)", "Multi-sport"],
    includes: ["tgmd"],
  },
  {
    id: "physical-fitness",
    group: "foundations",
    name: "Physical Fitness Assessment",
    price: 550,
    summary: "A clear test of your child's physical fitness.",
    highlights: ["Physical fitness test", "[TODO: confirm with client: full contents]"],
    includes: ["fitness"],
  },
  {
    id: "sports-talent",
    group: "talent",
    name: "Sports Talent Identification",
    price: 1500,
    summary: "One session of about 90 minutes. A written report with your child's 2–3 best-matched sports.",
    highlights: ["2–3 best-matched sports", "Development plan", "Report the same day"],
    includes: ["report"],
  },
  {
    id: "sports-elite",
    group: "talent",
    name: "Sports Elite Identification",
    price: 1200,
    priceNote: "[TODO: confirm with client: price and contents]",
    summary: "Talent identification with genetics.",
    highlights: ["With genetics", "[TODO: confirm with client: full contents]"],
    includes: ["genetics", "report"],
  },
  {
    id: "genetics-elite",
    group: "premium",
    name: "Genetics + Sports Elite Identification",
    price: 3000,
    summary: "A genetics test together with Sports Elite Identification.",
    highlights: ["Genetics test", "Sports Elite Identification", "[TODO: confirm with client: full contents]"],
    includes: ["genetics", "report"],
  },
  {
    id: "genetics-talent",
    group: "premium",
    name: "Genetics + Sports Talent Identification",
    price: 4000,
    badge: "Most complete",
    summary: "Our most complete package.",
    highlights: [
      "Genetics",
      "Psychology",
      "Anthropometry",
      "Posture",
      "Foot scan",
      "Diet analysis",
      "Talent consultation",
    ],
    includes: ["genetics", "psychology", "anthropometry", "posture", "gait", "diet", "consultation", "report"],
  },
];

export const packagesPage = {
  meta: {
    title: "Assessments & Prices | Sportify Academy Dubai",
    description:
      "Compare Sportify Academy's sports assessments in Dubai. Prices from AED 550. Find the right package for your child's age and goal, then book online.",
    path: "/assessments",
  },
  hero: {
    eyebrow: "Assessments & prices",
    headline: "Choose the right assessment for your child.",
    sub: "Three clear groups. All prices are in AED. Book online in a few steps.",
  },
  helperTitle: "Which package is right for my child?",
  helperText: "Answer two questions. We will suggest a package.",
  groupsTitle: "All packages",
  tableTitle: "Compare packages",
  tableRows: ["tgmd", "fitness", "skills", "psychology", "anthropometry", "posture", "gait", "bodycomp", "genetics", "diet", "consultation", "report"] satisfies MeasureId[],
  faqTitle: "Questions about packages",
  ctaTitle: "Still not sure?",
  ctaText: "Message us on WhatsApp. We will help you choose.",
  whatsappMessage: "Hello Sportify Academy. I need help choosing a package for my child.",
};

export const ageBands: Option<AgeBandId>[] = [
  { id: "4-8", label: "4–8 years" },
  { id: "9-12", label: "9–12 years" },
  { id: "13-17", label: "13–17 years" },
  { id: "18-plus", label: "18 years or older" },
];

export const goals: Option<GoalId>[] = [
  { id: "best-sport", label: "Find my child's best sport" },
  { id: "fitness", label: "Check my child's fitness" },
  { id: "compete", label: "Compete at a higher level" },
  { id: "complete", label: "Get the most complete picture" },
];

export const currentSports = [
  "No sport yet",
  "Football",
  "Swimming",
  "Basketball",
  "Tennis",
  "Martial arts",
  "Gymnastics",
  "Athletics",
  "Other",
];

export interface Recommendation {
  primary: PackageId;
  alternative?: PackageId;
  reason: string;
}

// DRAFT RULES. [TODO: confirm with client: recommendation rules]
export function recommendPackage(age: AgeBandId, goal: GoalId): Recommendation {
  if (age === "4-8") {
    return {
      primary: "fundamental-movement",
      reason: "This assessment is made for children aged 4–8.",
    };
  }
  switch (goal) {
    case "fitness":
      return { primary: "physical-fitness", reason: "This package focuses on physical fitness." };
    case "best-sport":
      return {
        primary: "sports-talent",
        alternative: "genetics-talent",
        reason: "You get a report with the 2–3 sports that match your child best.",
      };
    case "compete":
      return {
        primary: "sports-elite",
        alternative: "genetics-elite",
        reason: "This package is our elite identification, with genetics.",
      };
    case "complete":
      return {
        primary: "genetics-talent",
        reason: "This is our most complete package.",
      };
  }
}

export function formatPrice(price: number): string {
  return `AED ${price.toLocaleString("en-US")}`;
}

export function getPackage(id: PackageId): Package {
  const found = packages.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown package: ${id}`);
  return found;
}
