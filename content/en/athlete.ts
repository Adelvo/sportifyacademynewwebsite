import { images } from "./images";

interface AssessmentCard {
  id: string;
  image: (typeof images.train)["generalAssessment"];
  name: string;
  text: string;
  cta: string;
  whatsappMessage: string;
}

interface TrainingCard {
  id: string;
  name: string;
  text: string;
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
    headlineLines: ["Understand your performance.", "Train with purpose."],
    text: "Assessments and training tailored to your sport and goals.",
    cta: "Book an assessment",
    whatsappMessage: "Hi Sportify Academy, I would like to book an assessment.",
    headerCta: "Message us",
    headerWhatsappMessage: "Hi Sportify Academy, I have a question about the Athlete programmes.",
    video: {
      id: "sn179z2l1Hw",
      name: "See a football assessment",
      embedUrl: "https://www.youtube-nocookie.com/embed/sn179z2l1Hw?autoplay=1&rel=0",
      watchUrl: "https://www.youtube.com/watch?v=sn179z2l1Hw",
      poster: images.train.footballAssessmentPoster,
      caption: "See a football assessment",
    },
  },
  assessments: {
    title: "Start with the right assessment",
    items: [
      {
        id: "general-assessment",
        image: images.train.generalAssessment,
        name: "General Physical Assessment",
        text: "Understand your overall physical fitness and identify areas to develop.",
        cta: "Book this assessment",
        whatsappMessage: "Hi Sportify Academy, I would like to book a General Physical Assessment.",
      },
      {
        id: "specialized-assessment",
        image: images.train.specificAssessment,
        name: "Specialized Physical Assessment",
        text: "Understand your physical strengths and development needs for your sport.",
        cta: "Book this assessment",
        whatsappMessage: "Hi Sportify Academy, I would like to book a Specialized Physical Assessment. My sport is …",
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
      { id: "one-on-one", name: "1:1 Training", text: "Individual coaching focused on your goals." },
      { id: "semi-private", name: "Semi Private Training", text: "Train in a small group with focused coaching." },
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
        whatsappMessage: "Hi Sportify Academy, I would like to ask about the Nutrition Plan for athletes.",
      },
      {
        id: "physical-therapy",
        tone: "mist",
        name: "Physical Therapy",
        text: "Discuss your movement concerns and recovery needs with our team.",
        cta: "Ask about physical therapy",
        whatsappMessage: "Hi Sportify Academy, I would like to ask about Physical Therapy.",
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
