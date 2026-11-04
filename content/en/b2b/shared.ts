import type { FaqItem, TitledText } from "../../types";

export const stepsTitle = "How it works for your organisation";

export function steps(pilotText: string, reportText: string, programmeText: string): TitledText[] {
  return [
    { title: "Call", text: "We talk for a short time about your goals and your group." },
    { title: "Pilot day", text: pilotText },
    { title: "Report", text: reportText },
    { title: "Programme", text: programmeText },
  ];
}

export const costFaq = (pilot: string): FaqItem => ({
  question: "How much does it cost?",
  answer: `${pilot} is free. [TODO: confirm with client: prices after the pilot]`,
});

export const spaceFaq: FaqItem = {
  question: "How much space do you need?",
  answer: "[TODO: confirm with client: space needed]",
};
