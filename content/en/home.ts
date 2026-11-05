import type { FeatureIconName } from "@/components/home/FeatureIcon";
import type { PackageId } from "../types";
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
} & ({ whatsappMessage: string; href?: never } | { href: string; whatsappMessage?: never });

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
  image: "kids" | "talent" | "elite";
  name: string;
  ages: string;
  badge?: string;
  /** One package: the card shows its price and books it directly. */
  bookPackage?: PackageId;
  priceNote?: string;
  checklist: string[];
  /** Several packages: the card shows the lowest price and lists them under "View Packages". */
  options?: { packageId: PackageId; label: string; text?: string }[];
  /** Shown under the list in the "View Packages" dialog. */
  note?: string;
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
    cta: "Book an Assessment",
    stats: [
      { value: 1200, label: "Talents Discovered" },
      { value: 30000, label: "Clients" },
      { value: 23500, label: "Specialized Physical Tests Taken" },
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
    startingAt: "Starting at",
    bookNow: "Book Now",
    viewPackages: "View Packages",
    cards: [
      {
        id: "kids",
        image: "kids",
        name: "Kids Movement Test",
        ages: "Ages 4–8",
        bookPackage: "fundamental-movement",
        priceNote: "One-time assessment",
        checklist: ["Balance & coordination", "Speed & movement", "Parent report"],
      },
      {
        id: "talent",
        image: "talent",
        name: "Sport Talent Test",
        ages: "Ages 8+",
        badge: "Most popular",
        checklist: ["Fitness assessment", "Strength & endurance", "Full talent option"],
        options: [
          { packageId: "physical-fitness", label: "Fitness Test", text: "Strength, speed, endurance" },
          {
            packageId: "sports-talent",
            label: "Full Talent Test",
            text: "Fitness + skills + psychology → the 2–3 best sports for your child",
          },
        ],
      },
      {
        id: "elite",
        image: "elite",
        name: "Elite DNA Test",
        ages: "Ages 8+",
        checklist: ["DNA analysis", "Performance insights", "Premium package options"],
        options: [
          { packageId: "sports-elite", label: "Elite + DNA" },
          { packageId: "genetics-elite", label: "Elite Premium + DNA" },
          { packageId: "genetics-talent", label: "Complete (DNA + Full Talent Test)" },
        ],
        note: "Everything: DNA, psychology, body, posture, foot scan, diet analysis",
      },
    ] satisfies TestCard[] as TestCard[],
    features: [
      { icon: "report", title: "Detailed Reports", text: "Clear results" },
      { icon: "target", title: "Talent Insights", text: "Discover strengths" },
      { icon: "pathway", title: "Personalised Pathway", text: "Next steps" },
      { icon: "people", title: "Expert Consultation", text: "Parent guidance" },
    ] satisfies Feature[] as Feature[],
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
        href: "/for-schools",
      },
      {
        id: "clubs",
        image: "clubs",
        name: "For Sports Clubs",
        tag: "Athlete Performance",
        checklist: ["Individual & team testing", "Performance analysis", "Athlete development programmes"],
        href: "/for-clubs",
      },
      {
        id: "companies",
        image: "companies",
        name: "For Companies",
        tag: "Corporate Wellness",
        checklist: ["Employee fitness assessments", "Health & performance programmes", "Workshops & training sessions"],
        href: "/for-companies",
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
  final: {
    title: "Find your child's best sport.",
    text: "Answer a few short questions. We will message you on WhatsApp within 24 hours.",
  },
  location: { title: "Where to find us" },
};
