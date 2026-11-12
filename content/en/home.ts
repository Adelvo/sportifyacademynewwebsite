import type { FeatureIconName } from "@/components/home/FeatureIcon";
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
  /** Groups consecutive cards with the same value under one sub-heading, such as "Assessments". */
  group?: string;
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

type TrainPhoto = "generalAssessment" | "specificAssessment" | "oneOnOne" | "semiPrivate" | "nutritionPlan" | "physicalTherapy";
type AdultPhoto = "bodyAnalysis" | "bodyComposition" | "bodyPosture" | "longevity" | "physicalTherapy" | "oneOnOne" | "semiPrivate";
type OrganisationPhoto = "workshop" | "conferences" | "cpd";

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
      { href: "/test-my-child", image: "kids", lines: ["Kids"] },
      { href: "/train-with-us", image: "athlete", lines: ["Athlete"] },
      { href: "/adult", image: "adult", lines: ["Adult"] },
      { href: "/for-organisations", image: "coaches", lines: ["Coaches"] },
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
  train: {
    title: "Athletes",
    text: "",
    action: "Book",
    cards: [
      {
        id: "general-assessment",
        image: "generalAssessment",
        name: "General Physical Assessment",
        group: "Assessments",
        checklist: ["Full-body movement screening", "Baseline fitness benchmarks", "Clear next-step recommendations"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a General Physical Assessment.",
      },
      {
        id: "specific-assessment",
        image: "specificAssessment",
        name: "Specific Physical Assessment",
        group: "Assessments",
        checklist: ["Sport-specific performance testing", "In-depth strength & conditioning data", "Tailored training recommendations"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Specific Physical Assessment.",
      },
      {
        id: "one-on-one",
        image: "oneOnOne",
        name: "One-on-One Training",
        group: "Train With Us",
        checklist: ["Fully personalised sessions", "Dedicated coach", "Flexible scheduling"],
        whatsappMessage: "Hello Sportify Academy. I would like to book One-on-One Personal Training.",
      },
      {
        id: "semi-private",
        image: "semiPrivate",
        name: "Semi-Private Training",
        group: "Train With Us",
        checklist: ["Small-group coaching", "Shared motivation, individual attention", "Cost-effective personal coaching"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Semi-Private Training.",
      },
      {
        id: "nutrition-plan",
        image: "nutritionPlan",
        name: "Nutrition Plan",
        group: "Eat Better",
        checklist: ["Personalised meal guidance", "Supports performance & recovery", "Ongoing adjustments"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Nutrition Plan.",
      },
      {
        id: "physical-therapy",
        image: "physicalTherapy",
        name: "Physical Therapy",
        group: "Recover",
        checklist: ["Injury assessment & treatment", "Guided rehab exercises", "Safe return to training"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Physical Therapy.",
      },
    ] satisfies ProgrammeCard<TrainPhoto>[] as ProgrammeCard<TrainPhoto>[],
    features: [
      { icon: "calendar", title: "Individual Plans" },
      { icon: "bars", title: "Measurable Progress" },
      { icon: "people", title: "Expert Coaches" },
      { icon: "shield", title: "Safe & Professional" },
    ] satisfies Feature[] as Feature[],
  },
  adult: {
    title: "Adult Programmes",
    text: "Assessments and coaching to help adults move, train and recover better.",
    action: "Book",
    cards: [
      {
        id: "body-analysis",
        image: "bodyAnalysis",
        name: "Body Analysis",
        group: "Assessments",
        checklist: ["Full-body composition scan", "Baseline health metrics", "Clear, actionable report"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Body Analysis.",
      },
      {
        id: "body-composition",
        image: "bodyComposition",
        name: "Body Composition",
        group: "Assessments",
        checklist: ["Muscle & fat percentage", "Track changes over time", "Personalised recommendations"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Body Composition assessment.",
      },
      {
        id: "body-posture",
        image: "bodyPosture",
        name: "Body Posture",
        group: "Assessments",
        checklist: ["Full posture scan", "Identify imbalances", "Corrective exercise guidance"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Body Posture assessment.",
      },
      {
        id: "longevity",
        image: "longevity",
        name: "Longevity Assessment",
        tag: "Ages 40+",
        group: "Assessments",
        checklist: ["Long-term health & mobility check", "Personalised longevity plan", "Ongoing progress tracking"],
        whatsappMessage: "Hello Sportify Academy. I would like to book a Longevity Assessment.",
      },
      {
        id: "one-on-one",
        image: "oneOnOne",
        name: "One-on-One Personal Training",
        group: "Train With Us",
        checklist: ["Fully personalised sessions", "Dedicated coach", "Flexible scheduling"],
        whatsappMessage: "Hello Sportify Academy. I would like to book One-on-One Personal Training.",
      },
      {
        id: "semi-private",
        image: "semiPrivate",
        name: "Semi-Private Training",
        group: "Train With Us",
        checklist: ["Small-group coaching", "Shared motivation, individual attention", "Cost-effective personal coaching"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Semi-Private Training.",
      },
      {
        id: "physical-therapy",
        image: "physicalTherapy",
        name: "Physical Therapy",
        group: "Recover",
        checklist: ["Injury assessment & treatment", "Guided rehab exercises", "Safe return to activity"],
        whatsappMessage: "Hello Sportify Academy. I would like to book Physical Therapy.",
      },
    ] satisfies ProgrammeCard<AdultPhoto>[] as ProgrammeCard<AdultPhoto>[],
    features: [
      { icon: "assessment", title: "Expert Assessment" },
      { icon: "care", title: "Personalised Plans" },
      { icon: "bars", title: "Progress Tracking" },
      { icon: "shield", title: "Safe & Professional" },
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
  organisations: {
    title: "For Coaches",
    text: "Professional development programmes for coaches.",
    action: "Enquire Now",
    cards: [
      {
        id: "workshop",
        image: "workshop",
        name: "Workshops",
        tag: "Hands-on Learning",
        checklist: ["Practical coaching sessions", "Latest training methods", "Certificate of attendance"],
        whatsappMessage: "Hello Sportify Academy. I would like to know more about your coaching workshops.",
      },
      {
        id: "conferences",
        image: "conferences",
        name: "Conferences",
        tag: "Industry Events",
        checklist: ["Expert speakers & panels", "Networking with coaches", "Latest research & trends"],
        whatsappMessage: "Hello Sportify Academy. I would like to know more about your coaching conferences.",
      },
      {
        id: "cpd",
        image: "cpd",
        name: "CPD",
        tag: "Continuing Education",
        checklist: ["Accredited CPD points", "Flexible learning formats", "Career progression support"],
        whatsappMessage: "Hello Sportify Academy. I would like to know more about CPD for coaches.",
      },
    ] satisfies ProgrammeCard<OrganisationPhoto>[] as ProgrammeCard<OrganisationPhoto>[],
    features: [
      { icon: "people", title: "Expert Team", text: "Certified coaches & specialists" },
      { icon: "bars", title: "Data-Driven", text: "Clear insights & measurable results" },
      { icon: "target", title: "Tailored Programmes", text: "For every coaching level" },
      { icon: "shield", title: "Proven Results", text: "Higher performance & lasting impact" },
    ] satisfies Feature[] as Feature[],
  },
  faq: { title: "Questions parents ask" },
  location: { title: "Where to find us" },
};
