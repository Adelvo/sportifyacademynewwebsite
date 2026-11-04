import type { B2BContent } from "../../types";
import { b2bForm } from "../forms";
import { images } from "../images";
import { stats } from "../stats";
import { costFaq, spaceFaq, steps, stepsTitle } from "./shared";

export const nurseries: B2BContent = {
  id: "nurseries",
  navLabel: "For Nurseries",
  navText: "Motor-skills screening, ages 3–6.",
  meta: {
    title: "Motor-Skills Screening for Nurseries in Dubai | Sportify Academy",
    description:
      "Motor-skills screening for ages 3–6, done at your nursery in one morning. Start with a free TGMD motor-skills check for one group.",
    path: "/for-nurseries",
  },
  hero: {
    eyebrow: "For nurseries · Ages 3–6",
    headline: "Motor-skills screening parents love, done at your nursery in one morning.",
    sub: "Parents want to know how their child is developing. We come to you and check motor skills with a recognised test.",
    cta: "Book my free motor-skills check",
    image: images.nurseries,
  },
  pilot: {
    label: "Free pilot",
    title: "Free TGMD motor-skills check",
    text: "We check one group at your nursery.",
  },
  includedTitle: "What's included",
  included: [
    { title: "TGMD motor-skills screening", text: "The Test of Gross Motor Development, done at your nursery." },
    { title: "Other nursery services", text: "[TODO: confirm with client: list of nursery services]" },
  ],
  stepsTitle,
  steps: steps(
    "We come to your nursery and check one group, free of charge.",
    "You get a clear report.",
    "You decide what fits your nursery.",
  ),
  proofTitle: "Why nurseries can trust us",
  stats: [stats.experience, stats.talents, stats.rating],
  partnerIds: ["dsc"],
  faq: [
    costFaq("The first motor-skills check"),
    { question: "How much time does it take?", answer: "The screening is done at your nursery in one morning." },
    spaceFaq,
    {
      question: "How do you handle data privacy and parental consent?",
      answer: "[TODO: confirm with client: data privacy and parental consent process for nurseries]",
    },
  ],
  formTitle: "Book your free motor-skills check",
  formText: "Tell us about your nursery. We will contact you.",
  form: b2bForm({
    source: "nurseries",
    types: ["Nursery", "Early learning centre", "Other"],
    countLabel: "Number of children",
    submitLabel: "Request my free check",
    whatsappMessage: "Hello Sportify Academy. I just requested a free motor-skills check for my nursery.",
  }),
};
