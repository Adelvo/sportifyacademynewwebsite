import type { Comparison, ImageAsset, LocalVideo } from "../types";
import { images } from "./images";

interface AssessmentCard {
  id: string;
  name: string;
  tag?: string;
  points: string[];
  cta: string;
  whatsappMessage: string;
  /** Link to a more detailed Sportify Academy micro-site for this exact assessment, if one exists. */
  learnMoreUrl?: string;
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
        id: "body-analysis",
        name: "Body Analysis",
        points: ["Full-body composition scan", "Baseline health metrics", "Clear, actionable report"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in a Body Analysis. Could I please get some more information?",
      },
      {
        id: "body-composition",
        name: "Body Composition",
        points: ["Muscle & fat percentage", "Track changes over time", "Personalised recommendations"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in a Body Composition assessment. Could I please get some more information?",
      },
      {
        id: "corrective-exercise",
        name: "Corrective Exercise",
        points: ["Full posture scan & imbalance check", "A targeted corrective exercise plan", "Guided sessions to fix movement patterns"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in Corrective Exercise. Could I please get some more information?",
      },
      {
        id: "longevity",
        name: "Longevity Assessment",
        tag: "AGES 40+",
        points: ["Long-term health & mobility check", "Personalised longevity plan", "Ongoing progress tracking"],
        cta: "Book this assessment",
        whatsappMessage: "Hey! I am interested in the Longevity Assessment. Could I please get some more information?",
        learnMoreUrl: "https://longevity.sportify.academy",
      },
    ] satisfies AssessmentCard[] as AssessmentCard[],
    help: {
      text: "Not sure which assessment fits your goals?",
      cta: "Message us",
      whatsappMessage: "Hi Sportify Academy, could you help me choose the right adult assessment?",
    },
  },
  comparison: {
    title: "Two ways to look after your body",
    text: "There is a better way.",
    today: { title: "Waiting and hoping", subtitle: "What most adults do today" },
    sportify: { title: "Sportify", subtitle: "The scientific alternative" },
    rows: [
      {
        label: "Money",
        today: "Gym memberships that go unused",
        sportify: "A clear plan based on your body",
      },
      {
        label: "Pain",
        today: "Back and knee pain accepted as \"normal\"",
        sportify: "We find the cause and fix it",
      },
      {
        label: "Guidance",
        today: "Generic workouts that don't fit you",
        sportify: "Certified coaches guide every step",
      },
    ],
  } satisfies Comparison as Comparison,
  process: {
    steps: ["Assessment", "Feedback", "Next steps"],
  },
  training: {
    title: "Train with us",
    text: "Find the right format for your goals.",
    items: [
      {
        id: "personal-training",
        name: "Personal Training",
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
      {
        id: "home-training",
        name: "Home Training",
        points: ["Our coach comes to your home", "No commute, no gym needed", "Sessions built around your schedule"],
        image: images.adult.homeTraining,
        cta: "Book this training",
        whatsappMessage: "Hey! I am interested in Home Training. Could I please get some more information?",
      },
      {
        id: "group-training",
        name: "Group Training",
        points: ["Coached group sessions", "Train with friends, family or colleagues", "Fun, motivating and affordable"],
        image: images.adult.groupTraining,
        cta: "Book this training",
        whatsappMessage: "Hey! I am interested in Group Training. Could I please get some more information?",
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
          "Body Analysis and Body Composition give you a full baseline of your health and fitness. Corrective Exercise looks at your posture and movement patterns. The Longevity Assessment (ages 40+) looks at long-term mobility and health. Message our team if you need help choosing.",
      },
      {
        question: "Can I book training after my assessment?",
        answer: "Our team can discuss Personal Training, Semi-Private Training, Home Training or Group Training with you based on your goals and assessment feedback.",
      },
    ],
  },
};
