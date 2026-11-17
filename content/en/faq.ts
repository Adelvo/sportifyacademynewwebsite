import type { FaqItem } from "../types";

/** General questions, relevant to every visitor. Shown first on the homepage FAQ. */
export const homeFaq: FaqItem[] = [
  {
    question: "What ages do you work with?",
    answer:
      "We work with every age. Kids can start from age 4 (Fundamental Multisports Test, ages 4–7; Specialized Physical Fitness Assessment, ages 8+), and adults of any age can book a Physical Assessment. Our Longevity Assessment is built specifically for adults aged 40+.",
  },
  {
    question: "What happens during an assessment?",
    answer:
      "It is one session of about 90 minutes. Depending on the assessment you choose, we measure fitness, movement skills, body composition, posture and more.",
  },
  {
    question: "How accurate are your assessments?",
    answer:
      "Your report is based on measurements, not opinion: over 30 sport-specific, AI-supported tests, backed by our founder's 18 years of experience in talent identification. Sportify Academy is officially approved by the Dubai Sports Council.",
  },
  {
    question: "What happens after I book?",
    answer: "We will message you on WhatsApp within 24 hours to confirm your booking.",
  },
];

/** Extra questions, grouped by audience, shown under the general FAQ on the homepage. */
export const homeFaqGroups: { label: string; portrait?: string; items: FaqItem[] }[] = [
  {
    label: "Kids",
    portrait: "/faq/kids-portrait.webp",
    items: [
      {
        question: "Which assessment is right for my child?",
        answer:
          "The Fundamental Multisports Test is for ages 4–7. The Specialized Physical Fitness Assessment is for ages 8+. Message us and we'll help you choose.",
        link: { href: "/test-my-child", label: "See kids' assessments" },
      },
    ],
  },
  {
    label: "Athletes",
    portrait: "/faq/athletes-portrait.webp",
    items: [
      {
        question: "Which assessment should I choose?",
        answer:
          "A General Physical Assessment covers your overall fitness. A Specialized Physical Assessment benchmarks you against the demands of your sport. Message our team if you need help choosing.",
        link: { href: "/train-with-us", label: "See athlete assessments" },
      },
    ],
  },
  {
    label: "Adults",
    portrait: "/faq/adults-portrait.webp",
    items: [
      {
        question: "Which assessment should I choose?",
        answer:
          "The Physical Assessment covers Body Analysis, Body Composition and Body Posture in one session. The Longevity Assessment (ages 40+) focuses on long-term mobility and health.",
        link: { href: "/adult", label: "See adult assessments" },
      },
    ],
  },
  {
    label: "Coaches",
    portrait: "/faq/coaches-portrait.webp",
    items: [
      {
        question: "What professional development do you offer coaches?",
        answer:
          "Hands-on workshops and conferences with expert speakers, plus coach development with accredited points — in flexible formats for every coaching level. We also test schools and clubs directly.",
        link: { href: "/for-organisations", label: "See programmes for coaches" },
      },
    ],
  },
];

/** "Still have questions?" CTA shown under the homepage FAQ. */
export const homeFaqMore = {
  title: "Still have questions?",
  text: "Message our team on WhatsApp and we'll get back to you.",
  cta: "Message us on WhatsApp",
  whatsappMessage: "Hello Sportify Academy. I have a question that wasn't answered in the FAQ.",
};
