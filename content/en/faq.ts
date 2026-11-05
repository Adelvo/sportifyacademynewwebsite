import type { FaqItem } from "../types";

export const homeFaq: FaqItem[] = [
  {
    question: "What age can my child be tested?",
    answer:
      "We test children of different ages. The right test depends on your child's age. [TODO: confirm with client: minimum and maximum age]",
  },
  {
    question: "What happens during the test?",
    answer:
      "It is one session of about 90 minutes. We can measure fitness, skills, psychology, body measurements, posture, gait and body composition. The tests depend on the assessment you choose.",
  },
  {
    question: "How accurate is the assessment?",
    answer:
      "Your report is based on measurements, not on opinion. Our founder has 18 years of experience in talent identification. [TODO: confirm with client: accuracy evidence or scientific references]",
  },
  {
    question: "Which test should I choose?",
    answer: "It depends on your child's age and your goal. Message us on WhatsApp and we will help you choose.",
    link: { href: "/test-my-child", label: "See our tests" },
  },
  {
    question: "Can you introduce my child to a club?",
    answer: "[TODO: confirm with client: whether club introductions are offered, and how they work]",
  },
  {
    question: "What does the report contain?",
    answer:
      "You get a written talent report on the same day. It names the 2–3 sports that match your child best, and it includes a development plan.",
  },
  {
    question: "Do you test groups or schools?",
    answer:
      "Yes. We work with schools, nurseries, companies and clubs. One school programme tested 300+ students.",
    link: { href: "/for-organisations", label: "See our programmes for organisations" },
  },
  {
    question: "What happens after I book?",
    answer: "We will message you on WhatsApp within 24 hours about your booking.",
  },
];
