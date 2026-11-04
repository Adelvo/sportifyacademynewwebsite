import type { B2BContent } from "../../types";
import { b2bForm } from "../forms";
import { images } from "../images";
import { stats } from "../stats";
import { costFaq, spaceFaq, steps, stepsTitle } from "./shared";

export const companies: B2BContent = {
  id: "companies",
  navLabel: "For Companies",
  navText: "Posture and corporate wellness.",
  meta: {
    title: "Corporate Wellness & Posture Checks in Dubai | Sportify Academy",
    description:
      "Corporate wellness for teams that sit all day. Start with a free posture check for 10 employees at your office in Dubai.",
    path: "/for-companies",
  },
  hero: {
    eyebrow: "For companies",
    headline: "Fewer back and neck problems for teams that sit all day.",
    sub: "Long hours at a desk are hard on the body. We check posture at your office and show your team what to do about it.",
    cta: "Book my free posture check",
    image: images.companies,
  },
  pilot: {
    label: "Free pilot",
    title: "Free posture check",
    text: "We check 10 employees at your office.",
  },
  includedTitle: "What's included",
  included: [
    { title: "Posture analysis", text: "See how each person stands and sits." },
    { title: "Corrective exercise", text: "Exercises chosen to improve posture." },
    { title: "Neck & shoulder programme", text: "A programme for the neck and shoulders." },
    { title: "Ergonomic workplace check", text: "We look at how your workplace is set up." },
  ],
  stepsTitle,
  steps: steps(
    "We come to your office and check 10 employees, free of charge.",
    "You get a clear report.",
    "You decide which programme fits your team.",
  ),
  proofTitle: "Companies we work with",
  stats: [stats.experience, stats.rating],
  partnerIds: ["emirates", "flydubai", "dmcc", "enbd"],
  faq: [
    costFaq("The posture check for 10 employees"),
    { question: "How much time does it take?", answer: "[TODO: confirm with client: time needed for 10 employees]" },
    spaceFaq,
    {
      question: "How do you handle data privacy and consent?",
      answer: "[TODO: confirm with client: data privacy and employee consent process]",
    },
  ],
  formTitle: "Book your free posture check",
  formText: "Tell us about your company. We will contact you.",
  form: b2bForm({
    source: "companies",
    types: ["Company", "Government entity", "Free zone", "Other"],
    countLabel: "Number of employees",
    submitLabel: "Request my free posture check",
    whatsappMessage: "Hello Sportify Academy. I just requested a free posture check for my company.",
  }),
};
