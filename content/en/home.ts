import type { PackageId } from "../types";

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
  },
  train: {
    title: "Train with us",
    text: "Expert coaching for young athletes. [TODO: confirm with client: training programmes, ages, schedule and prices]",
    items: [
      { title: "Fitness training", text: "Training to get stronger, faster and fitter." },
      { title: "Motor-skills training", text: "Training to build basic movement skills." },
      { title: "Sport-specific conditioning", text: "Conditioning for the needs of your child's sport." },
    ],
    cta: "Ask about training",
    whatsappMessage: "Hello Sportify Academy. I would like to know more about training with you.",
  },
  recover: {
    title: "Recover & fix pain",
    text: "Help for young athletes with pain or poor posture. [TODO: confirm with client: recovery services, who delivers them and prices]",
    items: [
      { title: "Posture analysis", text: "See how your child stands and holds the body." },
      { title: "Corrective exercise", text: "Exercises chosen to improve posture." },
      { title: "Injury recovery", text: "[TODO: confirm with client: what this includes]" },
    ],
    cta: "Ask about recovery",
    whatsappMessage: "Hello Sportify Academy. I would like to know more about recovery and pain.",
  },
  testimonials: {
    title: "Hear from our athletes",
    ratingText: "Google rating from 62 reviews",
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
