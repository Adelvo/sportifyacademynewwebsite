import type { B2BContent } from "../../types";
import { b2bForm } from "../forms";
import { images } from "../images";
import { stats } from "../stats";
import { costFaq, spaceFaq, steps, stepsTitle } from "./shared";

export const clubs: B2BContent = {
  id: "clubs",
  navLabel: "For Clubs & Academies",
  navText: "Scout with data, not guesswork.",
  meta: {
    title: "Fitness Testing for Clubs & Academies in Dubai | Sportify Academy",
    description:
      "Scout with data, not guesswork. Fitness tests, posture analysis and sport-specific conditioning. Start with a free fitness test for one team.",
    path: "/for-clubs",
  },
  hero: {
    eyebrow: "For clubs & academies",
    headline: "Scout with data, not guesswork.",
    sub: "A good eye only goes so far. We test your players and give you clear data to work with.",
    cta: "Book my free team test",
    image: images.clubs,
  },
  pilot: {
    label: "Free pilot",
    title: "Free fitness test",
    text: "We test one team.",
  },
  includedTitle: "What's included",
  included: [
    { title: "Physical fitness assessment", text: "Test the fitness of your players." },
    { title: "Posture analysis", text: "See how each player stands and holds the body." },
    { title: "Sport-specific conditioning", text: "Conditioning for the needs of your sport." },
  ],
  stepsTitle,
  steps: steps(
    "We run a free fitness test for one team.",
    "You get a clear report.",
    "You decide which programme fits your club.",
  ),
  proofTitle: "Clubs we work with",
  stats: [stats.experience, stats.talents],
  partnerIds: ["al-nasr", "al-wasl", "benfica", "besiktas"],
  faq: [
    costFaq("The fitness test for one team"),
    { question: "How much time does it take?", answer: "[TODO: confirm with client: time needed for one team]" },
    spaceFaq,
    {
      question: "How do you handle data privacy and parental consent?",
      answer: "[TODO: confirm with client: data privacy and parental consent process for clubs]",
    },
  ],
  formTitle: "Book your free team test",
  formText: "Tell us about your club. We will contact you.",
  form: b2bForm({
    source: "clubs",
    types: ["Club", "Academy", "Federation", "Other"],
    countLabel: "Number of players",
    submitLabel: "Request my free team test",
    whatsappMessage: "Hello Sportify Academy. I just requested a free fitness test for my team.",
  }),
};
