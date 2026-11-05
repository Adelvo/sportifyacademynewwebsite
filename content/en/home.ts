import type { FeatureIconName } from "@/components/home/FeatureIcon";
import type { VideoTestimonial } from "../types";
import { images } from "./images";

interface Feature {
  icon: FeatureIconName;
  title: string;
  text?: string;
}

interface WhyStat {
  icon: FeatureIconName;
  value: string;
  label: string;
}

type ProgrammeCard<Image extends string> = {
  id: string;
  image: Image;
  name: string;
  /** The grey label under the name, such as "Ages 8+". */
  tag?: string;
  badge?: string;
  checklist: string[];
  whatsappMessage: string;
};

export interface Programmes<Image extends string> {
  title: string;
  text: string;
  /** The button label on every card. */
  action: string;
  cards: ProgrammeCard<Image>[];
  features: Feature[];
}

type TrainPhoto = "strength" | "sport" | "performance";
type RecoverPhoto = "assessment" | "therapy" | "returnToPlay";
type OrganisationPhoto = "schools" | "clubs" | "companies";

interface TestCard {
  id: string;
  name: string;
  video: VideoTestimonial;
  checklist: string[];
}

/** A YouTube video on a "Test my child" card. It starts on the visitor's click. */
function testVideo(videoId: string, name: string, poster: VideoTestimonial["poster"]): VideoTestimonial {
  return { id: videoId, name, embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`, poster };
}

export const home = {
  meta: {
    title: "Find Your Child's Best Sport | Sportify Academy Dubai",
    description:
      "Dubai's dedicated sports talent identification centre. Tests across 30+ sports. One 90-minute session. Written talent report the same day.",
    path: "/",
  },
  hero: {
    headlineLines: ["Discover Athletic", "Potential"],
    sub: "AI-powered assessments and expert coaching for young athletes.",
    stats: [
      { value: 1200, label: "Talents Discovered" },
      { value: 30000, label: "Clients" },
      { value: 235000, label: "Specialized Physical Tests Taken" },
    ],
  },
  paths: {
    title: "Our offers",
    items: [
      { href: "/test-my-child", image: "test", lines: ["Test my", "child"] },
      { href: "/train-with-us", image: "train", lines: ["Train", "with us"] },
      { href: "/recover", image: "recover", lines: ["Recover &", "fix pain"] },
      { href: "/for-organisations", image: "organisations", lines: ["For", "organisations"] },
    ] as const,
  },
  pain: {
    title: "Does this sound like your child?",
    items: [
      { title: "A new sport every season", text: "Your child tries one sport, then another. Nothing sticks." },
      { title: "Training hard, not improving", text: "The effort is there. The results are not." },
      { title: "\"Talented\", but no data", text: "A coach says your child has talent. Nobody can show you why." },
      { title: "The developmental window is closing", text: "Children grow fast. Time in the wrong sport is hard to get back." },
    ],
  },
  how: {
    title: "How it works",
    steps: [
      { title: "Book", text: "Choose a package and send the short form." },
      { title: "90-minute test", text: "Your child comes to our centre for one session of about 90 minutes." },
      { title: "Talent report, same day", text: "You get a written report with the 2–3 best sports and a development plan." },
    ],
    cta: "Book assessment",
  },
  measure: {
    title: "What we measure",
    text: "We look at the whole child. The tests depend on the package.",
  },
  test: {
    title: "Test my child",
    text: "Find the right assessment for your child",
    contact: "Contact Us",
    help: {
      title: "Not sure which test fits you or your child?",
      text: "No problem. Message us on WhatsApp and we'll help you choose.",
    },
    cards: [
      {
        id: "talent-identification",
        name: "Sports Talent Identification",
        video: testVideo("Ra_2hO5UDew", "Sports Talent Identification", images.tests.talentIdentification),
        checklist: [
          "Fitness & mindset",
          "Multi-sport skills",
          "Posture & nutrition",
        ],
      },
      {
        id: "fundamental-multi-sports",
        name: "Fundamental Multi Sports Tests",
        video: testVideo("lOfv-x0nXYs", "Fundamental Multi Sports Tests", images.tests.fundamentalMultiSports),
        checklist: [
          "Movement & ball skills",
          "Balance & strength",
          "Skills consultation",
        ],
      },
      {
        id: "physical-fitness",
        name: "Specialized Physical Fitness Assessment",
        video: testVideo("_eYmrPcCJh0", "Specialized Physical Fitness Assessment", images.tests.physicalFitness),
        checklist: [
          "Fitness assessment",
          "Body composition",
          "VO2 max analysis",
        ],
      },
      {
        id: "posture-body-gait",
        name: "Posture, Body Composition & Gait",
        video: testVideo("ytGnTGl6OdU", "Posture, Body Composition & Gait", images.tests.postureBodyGait),
        checklist: [
          "Posture scan",
          "Body composition",
          "Walking analysis",
        ],
      },
    ] satisfies TestCard[] as TestCard[],
  },
  train: {
    title: "Train with us",
    text: "Personalised coaching to build skills, performance and confidence.",
    action: "Book",
    cards: [
      {
        id: "strength",
        image: "strength",
        name: "Strength & Conditioning",
        tag: "Ages 10+",
        checklist: ["Build strength & power", "Improve speed & endurance", "Reduce risk of injury"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Strength & Conditioning.",
      },
      {
        id: "sport",
        image: "sport",
        name: "Sport-Specific Training",
        tag: "Ages 8+",
        checklist: ["Individual technical coaching", "Position-specific development", "For football, tennis, swimming & more"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Sport-Specific Training.",
      },
      {
        id: "performance",
        image: "performance",
        name: "Performance Academy",
        tag: "Ages 12+",
        checklist: ["Long-term athlete development", "Advanced training programmes", "Trackable performance progress"],
        whatsappMessage: "Hello Sportify Academy. I would like to book the Performance Academy.",
      },
    ] satisfies ProgrammeCard<TrainPhoto>[] as ProgrammeCard<TrainPhoto>[],
    features: [
      { icon: "calendar", title: "Individual Plans" },
      { icon: "bars", title: "Measurable Progress" },
      { icon: "people", title: "Expert Coaches" },
      { icon: "shield", title: "Safe & Professional" },
    ] satisfies Feature[] as Feature[],
  },
  recover: {
    title: "Recover & fix pain",
    text: "Expert recovery support to reduce pain, restore movement and get back to sport safely.",
    action: "Book",
    cards: [
      {
        id: "assessment",
        image: "assessment",
        name: "Pain & Movement Assessment",
        tag: "Ages 8+",
        checklist: ["Identify pain triggers", "Check mobility & movement patterns", "Clear next-step recommendations"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Pain & Movement Assessment.",
      },
      {
        id: "therapy",
        image: "therapy",
        name: "Sports Therapy & Recovery",
        badge: "Most popular",
        checklist: ["Guided rehab exercises", "Hands-on support", "Improve strength, stability & mobility"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Sports Therapy & Recovery.",
      },
      {
        id: "return-to-play",
        image: "returnToPlay",
        name: "Return to Play Rehab",
        tag: "Ages 10+",
        checklist: ["Progressive recovery plan", "Sport-specific return-to-play work", "Track progress safely"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Return to Play Rehab.",
      },
    ] satisfies ProgrammeCard<RecoverPhoto>[] as ProgrammeCard<RecoverPhoto>[],
    features: [
      { icon: "assessment", title: "Expert Assessment" },
      { icon: "care", title: "Personalised Recovery Plan" },
      { icon: "run", title: "Safe Return to Sport" },
      { icon: "bars", title: "Progress Tracking" },
    ] satisfies Feature[] as Feature[],
  },
  testimonials: {
    title: "Hear from our athletes",
    text: "Real success stories from Sportify Academy athletes, in their own words.",
    label: "Success story",
  },
  reviews: {
    title: "What our clients say on Google",
    rating: "4.9",
    ratingLabel: "Sportify Academy is rated 4.9 out of 5 on Google. Opens the listing on Google in a new tab",
    readMore: "Read more",
    opensOnGoogle: "opens the full review on Google in a new tab",
    stars: "Rated 5 out of 5 stars",
  },
  why: {
    title: "Why Sportify Academy?",
    text: "Proven athlete development and talent identification, backed by expertise, data, and a track record of champion success.",
    /** The line breaks in the labels are shown on the page. */
    stats: [
      { icon: "calendarPlain", value: "18+", label: "Years of\nExperience" },
      { icon: "team", value: "30,000+", label: "Clients" },
      { icon: "database", value: "220,000+", label: "Data\nPoints" },
      { icon: "crosshair", value: "1,200+", label: "Talents\nIdentified" },
      { icon: "medal", value: "700+", label: "Championship\nMedals" },
    ] satisfies WhyStat[] as WhyStat[],
    highlights: [
      { icon: "growth", title: "Data-Driven", text: "Identify and develop talent with cutting-edge solutions and the help of AI." },
      { icon: "team", title: "Expert Team", text: "Led by seasoned professionals with championship experience." },
      { icon: "trophy", title: "Proven Results", text: "A history of developing champions at national, Asian and world levels." },
    ] satisfies Feature[] as Feature[],
    video: {
      id: "about-sportify",
      name: "About Sportify Academy",
      embedUrl: "https://www.youtube-nocookie.com/embed/SxGDGpVDKIE?autoplay=1&rel=0",
      poster: images.videoAbout,
    },
    cta: "Read our story",
  },
  partners: { title: "Our Partners" },
  /** The last section of every page except the homepage. */
  closing: { title: "Ready to find your child's best sport?", text: "One session. Report the same day." },
  organisations: {
    title: "For organisations",
    text: "Tailored programmes for schools, clubs and companies.",
    action: "Enquire Now",
    cards: [
      {
        id: "schools",
        image: "schools",
        name: "For Schools",
        tag: "Student Programmes",
        checklist: ["Movement & fitness assessments", "Talent identification", "School sports programmes"],
        whatsappMessage: "Hello Sportify Academy. I am from a school and I would like to know more about your programmes.",
      },
      {
        id: "clubs",
        image: "clubs",
        name: "For Sports Clubs",
        tag: "Athlete Performance",
        checklist: ["Individual & team testing", "Performance analysis", "Athlete development programmes"],
        whatsappMessage: "Hello Sportify Academy. I am from a sports club and I would like to know more about your programmes.",
      },
      {
        id: "companies",
        image: "companies",
        name: "For Companies",
        tag: "Corporate Wellness",
        checklist: ["Employee fitness assessments", "Health & performance programmes", "Workshops & training sessions"],
        whatsappMessage: "Hello Sportify Academy. I am from a company and I would like to know more about your programmes.",
      },
    ] satisfies ProgrammeCard<OrganisationPhoto>[] as ProgrammeCard<OrganisationPhoto>[],
    features: [
      { icon: "people", title: "Expert Team", text: "Certified coaches & specialists" },
      { icon: "bars", title: "Data-Driven", text: "Clear insights & measurable results" },
      { icon: "target", title: "Tailored Programmes", text: "For schools, clubs & businesses" },
      { icon: "shield", title: "Proven Results", text: "Higher performance & lasting impact" },
    ] satisfies Feature[] as Feature[],
  },
  faq: { title: "Questions parents ask" },
  location: { title: "Where to find us" },
};
