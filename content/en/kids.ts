import type { Comparison, LocalVideo } from "../types";
import { images } from "./images";

interface AssessmentCard {
  id: string;
  age: string;
  name: string;
  /** Short, simple bullet points: what this is for, written so a 10-year-old can follow it. */
  points: string[];
  cta: string;
  whatsappMessage: string;
  /** Link to a more detailed Sportify Academy micro-site for this exact assessment, if one exists. */
  learnMoreUrl?: string;
}

interface SupportItem {
  id: string;
  name: string;
  /** Short, simple bullet points: what this is for, written so a 10-year-old can follow it. */
  points: string[];
  /** Link to a more detailed Sportify Academy micro-site for this exact programme, if one exists. */
  learnMoreUrl?: string;
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
        whatsappMessage: "Hey! I am interested in the Fundamental Multisports Test for my child. Could I please get some more information?",
      },
      {
        id: "talent-identification",
        age: "AGES 8–14",
        name: "Talent Identification",
        points: ["Coaches watch you play and run", "They spot what you're naturally good at", "You get tips to help you improve"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the Talent Identification assessment for my child. Could I please get some more information?",
        learnMoreUrl: "https://talent.sportify.academy",
      },
      {
        id: "specialized-physical-fitness-assessment",
        age: "AGES 8+",
        name: "Specialized Physical Fitness Assessment",
        points: ["Tests your speed, strength and fitness", "Shows what sport might suit you", "Helps coaches build your training plan"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the Specialized Physical Fitness Assessment for my child. Could I please get some more information?",
      },
    ] satisfies AssessmentCard[] as AssessmentCard[],
    help: {
      text: "Not sure which assessment fits your child?",
      cta: "Message us",
      whatsappMessage: "Hi Sportify Academy, I need help choosing the right assessment for my child.",
    },
  },
  comparison: {
    title: "Two ways to support your child",
    text: "There is a better way.",
    today: { title: "Waiting and hoping", subtitle: "What most families do today" },
    sportify: { title: "Sportify", subtitle: "The scientific alternative" },
    rows: [
      {
        label: "Money",
        today: "AED 10,000+ a year on sports that don't stick",
        sportify: "One test shows which sport fits",
      },
      {
        label: "Confidence",
        today: "Confidence drops with every PE class",
        sportify: "Certified coaches build skills and confidence",
      },
      {
        label: "Direction",
        today: "Picking sports by guesswork",
        sportify: "30+ tests and 18 years of experience",
      },
    ],
  } satisfies Comparison as Comparison,
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
        name: "Motor Skills and Fundamental Movement (TGMD)",
        points: ["Helps you balance and move better", "Makes your body stronger", "Fun exercises, not boring drills"],
        learnMoreUrl: "https://movement.sportify.academy",
      },
      {
        id: "multisport-class",
        name: "Multisport Class",
        points: ["Try different sports like football and basketball", "Find the sport you enjoy most", "Play and make new friends"],
      },
      {
        id: "sport-specific-training",
        name: "Sport Specific Training",
        points: ["Focused practice for the sport you love", "Builds the skills that sport needs most", "Coached by specialists in that sport"],
      },
      {
        id: "sports-psychology",
        name: "Sports Psychology",
        points: ["Helps you build confidence and focus", "Deal with nerves before a game", "Simple mental tricks that make sport more fun"],
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
    whatsappMessage: "Hey! I am interested in improving my kids nutrition. Could I please get some more information?",
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
