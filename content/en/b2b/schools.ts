import type { B2BContent } from "../../types";
import { b2bForm } from "../forms";
import { images } from "../images";
import { stats } from "../stats";
import { costFaq, spaceFaq, steps, stepsTitle } from "./shared";

export const schools: B2BContent = {
  id: "schools",
  navLabel: "For Schools",
  navText: "Find the athletes in your school.",
  meta: {
    title: "School Talent Identification in Dubai | Sportify Academy",
    description:
      "Find the athletes in your school, without extra work for your PE team. Start with a free Talent Day: one class tested, plus a school report.",
    path: "/for-schools",
  },
  hero: {
    eyebrow: "For schools",
    headline: "Find the athletes in your school, without extra work for your PE team.",
    sub: "Your PE team is busy. Testing every student takes time. We run the tests and give you a clear report.",
    cta: "Book my free Talent Day",
    image: images.schools,
  },
  pilot: {
    label: "Free pilot",
    title: "Free Talent Day",
    text: "We test one class and give you a school report.",
  },
  includedTitle: "What's included",
  included: [
    { title: "Talent identification", text: "Find out which students have sports potential." },
    { title: "TGMD", text: "The Test of Gross Motor Development, for young children." },
    { title: "Posture analysis", text: "See how students stand and hold the body." },
    { title: "Height estimation", text: "An estimate of how tall a student may grow." },
    { title: "After-school fitness programme", text: "Fitness training for students after school." },
    { title: "Motor-skills training", text: "Training to build basic movement skills." },
  ],
  stepsTitle,
  steps: steps(
    "We run your free Talent Day and test one class.",
    "You get a clear school report.",
    "You decide which services fit your school.",
  ),
  proofTitle: "Results and recognition",
  stats: [stats.school, stats.talents, stats.rating],
  partnerIds: ["dsc"],
  faq: [
    costFaq("The Talent Day"),
    {
      question: "How much time does it take?",
      answer: "[TODO: confirm with client: time needed for one class]",
    },
    spaceFaq,
    {
      question: "How do you handle data privacy and parental consent?",
      answer: "[TODO: confirm with client: data privacy and parental consent process for schools]",
    },
  ],
  formTitle: "Book your free Talent Day",
  formText: "Tell us about your school. We will contact you.",
  form: b2bForm({
    source: "schools",
    types: ["Primary school", "Secondary school", "All-through school", "Other"],
    countLabel: "Number of students",
    submitLabel: "Request my free Talent Day",
    whatsappMessage: "Hello Sportify Academy. I just requested a free Talent Day for my school.",
  }),
};
