import type { ImageAsset, LocalVideo } from "../types";
import { images } from "./images";

interface AssessmentCard {
  id: string;
  age: string;
  name: string;
  text: string;
  image: ImageAsset;
  cta: string;
  whatsappMessage: string;
}

interface SupportCard {
  id: string;
  name: string;
  text: string;
  image: ImageAsset;
  /** Only the Talent Identification card has a video; the others are photo-only, with no CTA. */
  video?: LocalVideo;
}

/** Content for the Kids page (app/test-my-child). */
export const kids = {
  hero: {
    headlineLines: ["Understand their strengths.", "Support their next step."],
    text: "Assessments and guidance for your child's development.",
    cta: "Book an assessment",
    whatsappMessage: "Hi Sportify Academy, I'd like to book an assessment for my child.",
    video: {
      id: "kids-hero",
      name: "Sportify Academy Kids",
      src: "/videos/kids-hero.mp4",
      poster: images.kids.heroPoster,
    } satisfies LocalVideo,
    headerCta: "Message us",
    headerWhatsappMessage: "Hi Sportify Academy, I have a question about the Kids programmes.",
  },
  assessments: {
    title: "Find the right starting point",
    items: [
      {
        id: "fundamental-multisports-test",
        age: "AGES 4–7",
        name: "Fundamental Multisports Test",
        text: "Understand movement skills and development needs.",
        image: images.kids.fundamentalMultisports,
        cta: "Book this assessment",
        whatsappMessage: "Hi Sportify Academy, I'd like to book the Fundamental Multisports Test for my child.",
      },
      {
        id: "specialized-physical-fitness-assessment",
        age: "AGES 8+",
        name: "Specialized Physical Fitness Assessment",
        text: "Understand physical fitness and sport-specific development needs.",
        image: images.kids.specializedFitness,
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
    items: [
      {
        id: "motor-skills",
        name: "Motor Skills and Fundamental Movement Gross Motor",
        text: "Develop movement skills, balance and confidence.",
        image: images.kids.motorSkills,
      },
      {
        id: "multisport-class",
        name: "Multisport Class Gross Motor",
        text: "Build coordination and practise skills through varied sports.",
        image: images.kids.multisportClass,
      },
      {
        id: "talent-identification",
        name: "Talent Identification Gross Motor",
        text: "Understand your child's sporting strengths and potential.",
        image: images.kids.talentIdentification,
        video: {
          id: "kids-talent-identification",
          name: "Talent Identification Gross Motor",
          src: "/videos/kids-talent-identification.mp4",
          poster: images.kids.talentIdentification,
        },
      },
    ] satisfies SupportCard[] as SupportCard[],
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
  closing: {
    title: "Let's find your child's next step.",
    cta: "Message us",
    whatsappMessage: "Hi Sportify Academy, I'd like to discuss the right next step for my child.",
  },
};
