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
      { id: "how-it-works", image: "test", lines: ["Test my", "child"] },
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
  packages: {
    title: "Three clear groups",
    text: "Pick by your child's age and your goal.",
    from: "From",
    cta: "See all assessments and prices",
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
