import type { ImageAsset, LocalVideo } from "../types";
import { images } from "./images";

interface AssessmentCard {
  id: string;
  name: string;
  tag?: string;
  points: string[];
  cta: string;
  whatsappMessage: string;
}

interface TrainingCard {
  id: string;
  name: string;
  points: string[];
  cta: string;
  whatsappMessage: string;
  image?: ImageAsset;
}

interface SupportPanel {
  id: string;
  tone: "cyan" | "mist";
  name: string;
  text: string;
  cta: string;
  whatsappMessage: string;
}

/** Content for the Adult page (app/adult). Keeps the current adult offers, built with the same structure as the Athlete and Kids pages. */
export const adult = {
  hero: {
    headline: "Understand your body.",
    text: "Assessments and coaching to help you move, train and recover better.",
  },
  assessments: {
    label: "For Adults",
    title: "Start with the right assessment",
    video: {
      id: "longevity-40",
      name: "Discover our approach to adult training",
      src: "/videos/longevity-40.mp4",
      poster: images.adult.longevityVideoPoster,
    } satisfies LocalVideo,
    items: [
      {
        id: "physical-assessment",
        name: "Physical Assessment",
        points: [
          "Body Analysis: full-body composition scan",
          "Body Composition: muscle & fat percentage",
          "Body Posture: full posture scan & imbalance check",
        ],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the Physical Assessment (Body Analysis, Body Composition and Body Posture). Could I please get some more information?",
      },
      {
        id: "longevity",
        name: "Longevity Assessment",
        tag: "AGES 40+",
        points: ["Long-term health & mobility check", "Personalised longevity plan", "Ongoing progress tracking"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the Longevity Assessment. Could I please get some more information?",
      },
    ] satisfies AssessmentCard[] as AssessmentCard[],
    help: {
      text: "Not sure which assessment fits your goals?",
      cta: "Message us",
      whatsappMessage: "Hi Sportify Academy, could you help me choose the right adult assessment?",
    },
  },
  process: {
    steps: ["Assessment", "Feedback", "Next steps"],
  },
  training: {
    title: "Train with us",
    text: "Find the right format for your goals.",
    items: [
      {
        id: "one-on-one",
        name: "1:1 Training",
        points: ["Fully personalised sessions", "Dedicated coach", "Flexible scheduling"],
        image: {
          src: "/adult/one-on-one-coaching.webp",
          width: 992,
          height: 1586,
          alt: "A Sportify Academy trainer guiding a woman during an individual training session",
        },
        cta: "Book this training",
        whatsappMessage: "Hey! I am interested in One-on-One Personal Training. Could I please get some more information?",
      },
      {
        id: "semi-private",
        name: "Semi-Private Training",
        points: ["Small-group coaching", "Shared motivation, individual attention", "Cost-effective personal coaching"],
        image: {
          src: "/adult/semi-private-coaching.webp",
          width: 1024,
          height: 1536,
          alt: "A Sportify Academy trainer supervising two adults exercising with resistance bands",
        },
        cta: "Book this training",
        whatsappMessage: "Hey! I am interested in Semi-Private Training. Could I please get some more information?",
      },
    ] satisfies TrainingCard[] as TrainingCard[],
  },
  support: {
    title: "Recover and move better",
    items: [
      {
        id: "nutrition",
        tone: "cyan",
        name: "Nutrition Plan",
        text: "Personalised nutrition guidance to support your training and recovery.",
        cta: "Ask about nutrition",
        whatsappMessage: "Hey! I am interested in the Nutrition Plan. Could I please get some more information?",
      },
      {
        id: "physical-therapy",
        tone: "mist",
        name: "Physical Therapy",
        text: "Injury assessment and treatment, guided rehab exercises and a safe return to activity.",
        cta: "Ask about physical therapy",
        whatsappMessage: "Hey! I am interested in Physical Therapy. Could I please get some more information?",
      },
    ] satisfies SupportPanel[] as SupportPanel[],
  },
  faq: {
    title: "Questions before you start",
    items: [
      {
        question: "Which assessment should I choose?",
        answer:
          "The Physical Assessment covers Body Analysis, Body Composition and Body Posture in one session, for a full baseline of your health and fitness. The Longevity Assessment (ages 40+) looks at long-term mobility and health. Message our team if you need help choosing.",
      },
      {
        question: "Can I book training after my assessment?",
        answer: "Our team can discuss One-on-One or Semi-Private Training with you based on your goals and assessment feedback.",
      },
    ],
  },
};
