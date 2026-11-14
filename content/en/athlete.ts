import { images } from "./images";
import type { ImageAsset } from "../types";

interface AssessmentCard {
  id: string;
  name: string;
  tag?: string;
  text: string;
  points: string[];
  cta: string;
  whatsappMessage: string;
}

interface TrainingCard {
  id: string;
  name: string;
  text: string;
  image: ImageAsset;
}

interface SupportPanel {
  id: string;
  tone: "cyan" | "mist";
  name: string;
  text: string;
  cta: string;
  whatsappMessage: string;
}

/** Content for the Athlete page (app/train-with-us). */
export const athlete = {
  hero: {
    headline: "Understand your performance.",
    text: "Assessments and training tailored to your sport and goals.",
    video: {
      id: "sn179z2l1Hw",
      name: "See a football assessment",
      embedUrl: "https://www.youtube-nocookie.com/embed/sn179z2l1Hw?autoplay=1&rel=0",
      poster: images.train.footballAssessmentPoster,
    },
  },
  assessments: {
    label: "For Athletes",
    title: "Start with the right assessment",
    items: [
      {
        id: "general-assessment",
        name: "General Physical Assessment",
        text: "A complete baseline check of your overall physical fitness.",
        points: [
          "Strength, speed, agility and endurance tested",
          "Mobility and movement quality screening",
          "A clear report with your results and next steps",
        ],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the General Physical Assessment. Could I please get some more information?",
      },
      {
        id: "specialized-assessment",
        name: "Specialized Physical Assessment",
        tag: "Specialized for your sport",
        text: "Benchmarked against the physical demands of your sport.",
        points: [
          "Sport-specific strength, speed and agility benchmarks",
          "Position-based movement and performance analysis",
          "A development plan built around your sport and goals",
        ],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the Specialized Physical Assessment. My sport is … Could I please get some more information?",
      },
    ] satisfies AssessmentCard[] as AssessmentCard[],
    help: {
      text: "Not sure which assessment fits your goals?",
      cta: "Message us",
      whatsappMessage: "Hi Sportify Academy, could you help me choose the right athlete assessment?",
    },
  },
  process: {
    steps: ["Assessment", "Feedback", "Next steps"],
  },
  training: {
    title: "Training built around your goals",
    text: "Find the right format for your next step.",
    items: [
      {
        id: "one-on-one",
        name: "1:1 Training",
        text: "Individual coaching focused on your goals.",
        image: {
          src: "/train/athlete-one-on-one-owner.webp",
          width: 1440,
          height: 810,
          alt: "A coach guiding an athlete during a one-on-one training session",
        },
      },
      {
        id: "semi-private",
        name: "Semi Private Training",
        text: "Train in a small group with focused coaching.",
        image: {
          src: "/train/athlete-semi-private-owner.webp",
          width: 1440,
          height: 810,
          alt: "A coach guiding three athletes through lunges during a small group training session",
        },
      },
    ] satisfies TrainingCard[] as TrainingCard[],
  },
  support: {
    title: "Support your training",
    items: [
      {
        id: "nutrition",
        tone: "cyan",
        name: "Nutrition Plan",
        text: "Personalised nutrition guidance to support your training and recovery.",
        cta: "Ask about nutrition",
        whatsappMessage: "Hey! I am interested in the Nutrition Plan for athletes. Could I please get some more information?",
      },
      {
        id: "physical-therapy",
        tone: "mist",
        name: "Physical Therapy",
        text: "Discuss your movement concerns and recovery needs with our team.",
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
          "A General Physical Assessment provides an overview of your physical fitness. A Specialized Physical Assessment focuses on the physical demands of your sport. Message our team if you need help choosing.",
      },
      {
        question: "Can I book training after my assessment?",
        answer: "Our team can discuss 1:1 Training or Semi Private Training with you based on your goals and assessment feedback.",
      },
    ],
  },
  closing: {
    title: "Find your next step in performance.",
    cta: "Message us",
    whatsappMessage: "Hi Sportify Academy, I would like to find my next step in performance.",
  },
};
