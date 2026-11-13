import type { LocalVideo } from "../types";
import { images } from "./images";

interface AssessmentCard {
  id: string;
  age: string;
  name: string;
  /** Short, simple bullet points: what this is for, written so a 10-year-old can follow it. */
  points: string[];
  cta: string;
  whatsappMessage: string;
}

interface SupportItem {
  id: string;
  name: string;
  /** Short, simple bullet points: what this is for, written so a 10-year-old can follow it. */
  points: string[];
}

/** Content for the Kids page (app/test-my-child). */
export const kids = {
  hero: {
    headline: "Understand your child's strength.",
    text: "Assessments and guidance for your child's development.",
  },
  assessments: {
    label: "For Kids",
    title: "Find the right starting point",
    video: {
      id: "kids-hero",
      name: "Sportify Academy Kids",
      src: "/videos/kids-hero.mp4",
      poster: images.kids.heroPoster,
    } satisfies LocalVideo,
    items: [
      {
        id: "fundamental-multisports-test",
        age: "AGES 4–7",
        name: "Fundamental Multisports Test",
        points: ["Checks how you balance, jump and run", "Shows your natural movement skills", "Helps coaches know where to start"],
        cta: "Book this assessment",
        whatsappMessage: "Hi Sportify Academy, I'd like to book the Fundamental Multisports Test for my child.",
      },
      {
        id: "specialized-physical-fitness-assessment",
        age: "AGES 8+",
        name: "Specialized Physical Fitness Assessment",
        points: ["Tests your speed, strength and fitness", "Shows what sport might suit you", "Helps coaches build your training plan"],
        cta: "Book this assessment",
        whatsappMessage: "Hi Sportify Academy, I'd like to book the Specialized Physical Fitness Assessment for my child.",
      },
    ] satisfies AssessmentCard[] as AssessmentCard[],
    help: {
      text: "Not sure which assessment fits your child?",
      cta: "Message us",
      whatsappMessage: "Hi Sportify Academy, I need help choosing the right assessment for my child.",
    },
  },
  process: {
    steps: ["Assessment", "Feedback", "Personal recommendations"],
  },
  support: {
    title: "Support beyond the assessment",
    text: "Find the next step with guidance from our team.",
    video: {
      id: "kids-talent-identification",
      name: "Talent Identification",
      src: "/videos/kids-talent-identification.mp4",
      poster: images.kids.talentIdentification,
    } satisfies LocalVideo,
    items: [
      {
        id: "motor-skills",
        name: "Motor Skills and Fundamental Movement",
        points: ["Helps you balance and move better", "Makes your body stronger", "Fun exercises, not boring drills"],
      },
      {
        id: "multisport-class",
        name: "Multisport Class",
        points: ["Try different sports like football and basketball", "Find the sport you enjoy most", "Play and make new friends"],
      },
      {
        id: "talent-identification",
        name: "Talent Identification",
        points: ["Coaches watch you play and run", "They spot what you're naturally good at", "You get tips to help you improve"],
      },
    ] satisfies SupportItem[] as SupportItem[],
    help: {
      text: "Not sure what your child needs?",
      cta: "Message us",
      whatsappMessage: "Hi Sportify Academy, I'm not sure which programme would suit my child best - could you help?",
    },
  },
  nutrition: {
    label: "KIDS NUTRITION PLAN",
    title: "Fuel their growth. Support their play.",
    text: "A personalised nutrition plan to support your child's growth, energy and active lifestyle.",
    cta: "Ask about nutrition",
    whatsappMessage: "Hi Sportify Academy, I'd like to ask about the Kids Nutrition Plan.",
  },
  faq: {
    title: "Questions parents ask",
    items: [
      {
        question: "Which assessment is right for my child?",
        answer:
          "The Fundamental Multisports Test is for ages 4–7. The Specialized Physical Fitness Assessment is for ages 8+. Our team can help you choose the right starting point.",
      },
      {
        question: "What happens after the assessment?",
        answer: "Our team explains the results and recommends suitable next steps based on your child's needs.",
      },
    ],
  },
};
