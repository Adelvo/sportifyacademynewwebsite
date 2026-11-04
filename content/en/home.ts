import type { FeatureIconName } from "@/components/home/FeatureIcon";
import type { PackageId } from "../types";

interface Feature {
  icon: FeatureIconName;
  title: string;
  text?: string;
}

interface ProgrammeCard<Image extends string> {
  id: string;
  image: Image;
  name: string;
  ages?: string;
  badge?: string;
  checklist: string[];
  whatsappMessage: string;
}

export interface Programmes<Image extends string> {
  title: string;
  text: string;
  book: string;
  cards: ProgrammeCard<Image>[];
  features: Feature[];
}

type TrainPhoto = "strength" | "sport" | "performance";
type RecoverPhoto = "assessment" | "therapy" | "returnToPlay";

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
    label: "What are you looking for?",
    items: [
      { id: "packages", image: "test", lines: ["Test my", "child"] },
      { id: "train", image: "train", lines: ["Train", "with us"] },
      { id: "recover", image: "recover", lines: ["Recover &", "fix pain"] },
      { id: "organisations", image: "organisations", lines: ["For", "organisations"] },
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
    book: "Book",
    cards: [
      {
        id: "strength",
        image: "strength",
        name: "Strength & Conditioning",
        ages: "Ages 10+",
        checklist: ["Build strength & power", "Improve speed & endurance", "Reduce risk of injury"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Strength & Conditioning.",
      },
      {
        id: "sport",
        image: "sport",
        name: "Sport-Specific Training",
        ages: "Ages 8+",
        checklist: ["Individual technical coaching", "Position-specific development", "For football, tennis, swimming & more"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Sport-Specific Training.",
      },
      {
        id: "performance",
        image: "performance",
        name: "Performance Academy",
        ages: "Ages 12+",
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
    book: "Book",
    cards: [
      {
        id: "assessment",
        image: "assessment",
        name: "Pain & Movement Assessment",
        ages: "Ages 8+",
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
        ages: "Ages 10+",
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
  founder: {
    title: "Led by a world champion and scientist",
    name: "Dr. Sajad Karami",
    role: "Founder & Director",
    credentials: [
      "Three-time World Karate Champion",
      "PhD in physical education and sport biomechanics",
      "University professor",
      "Former Karate national team coach",
      "18 years of experience in talent identification",
    ],
    cta: "Read our story",
  },
  partners: { title: "Trusted by" },
  organisations: {
    title: "Schools, nurseries, companies and clubs",
    text: "We also work with organisations. Each one can start with a free pilot.",
  },
  faq: { title: "Questions parents ask" },
  final: {
    title: "Find your child's best sport.",
    text: "Answer a few short questions. We will message you on WhatsApp within 24 hours.",
  },
};
