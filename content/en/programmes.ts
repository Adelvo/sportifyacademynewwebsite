// Page details for the four "ways in" on the landing page. The sections themselves are in home.ts.
export const testPage = {
  meta: {
    title: "Kids Assessments & Programmes | Sportify Academy Dubai",
    description: "Understand your child's strengths and support their next step. Assessments, movement classes and talent identification for kids in Dubai.",
    path: "/test-my-child",
  },
};

export const trainPage = {
  meta: {
    title: "Train With Us | Sportify Academy Dubai",
    description: "Physical assessments, personal, home and group training, nutrition plans, physical therapy and sports psychology for athletes in Dubai.",
    path: "/train-with-us",
  },
};

export const adultPage = {
  meta: {
    title: "Adult Programmes | Sportify Academy Dubai",
    description: "Body analysis, posture assessments, longevity testing and personal, home and group training for adults in Dubai.",
    path: "/adult",
  },
};

export const organisationsPage = {
  meta: {
    title: "For Coaches | Sportify Academy Dubai",
    description: "Workshops & conferences and coach development for coaches in Dubai.",
    path: "/for-organisations",
  },
  /** Upcoming event on its own page (/early-years-pe-conference), linked from the "Workshops & Conferences" card. */
  conference: {
    meta: {
      title: "Early Years PE Conference 2027 | Sportify Academy Dubai",
      description: "Early Years PE Conference on 30 & 31 January 2027 in Dubai, hosted by Sportify Academy with Motor Skill Learning Academy Switzerland. In person & online.",
      path: "/early-years-pe-conference",
    },
    eyebrow: "Upcoming conference · Third year in Dubai",
    title: "Early Years PE Conference",
    subtitle: "Stronger foundations. Brighter futures.",
    text: "For the third year in Dubai, Sportify Academy is hosting the Early Years PE Conference as the representative of Motor Skill Learning Academy Switzerland. Discover practical, science-based approaches to strengthening children's movement foundations.",
    facts: [
      { label: "Date", value: "30 & 31 January 2027" },
      { label: "Location", value: "Dubai, United Arab Emirates" },
      { label: "Format", value: "In person & online" },
    ],
    exploreTitle: "What you will explore",
    explore: [
      { title: "Motor skills & development", text: "Fundamental movement, coordination and progression in early childhood." },
      { title: "Assessment & observation", text: "Recognising strengths, developmental needs and useful movement indicators." },
      { title: "Practical PE approaches", text: "Activities, games and coaching strategies for engaging sessions." },
      { title: "Evidence-based teaching", text: "Turning research insights into confident school practice." },
    ],
    audienceTitle: "Who should attend",
    audience: ["Early years educators", "PE teachers & coaches", "School leaders", "Child development professionals"],
    pricesTitle: "Registration options",
    prices: [
      { label: "Early bird", price: "AED 990", note: "In person, until 30 Nov 2026", highlight: "Save AED 210" },
      { label: "Standard in person", price: "AED 1,200", note: "Per participant" },
      { label: "Online attendance", price: "AED 600", note: "Remote participation" },
    ],
    includedTitle: "What is included",
    included: ["Conference learning and speaker sessions", "Practical application and school-focused insights", "In-person lunch and refreshments"],
    bonusTitle: "Bonus for participants",
    bonus: "3 months of free access to educational resources on the Motor Skill Learning Academy Switzerland website.",
    schools: "Schools: enquire about group registrations and team participation. Individual educators and online attendees are welcome too.",
    action: "Register via WhatsApp",
    whatsappMessage: "Hey! I would like to register for the Early Years PE Conference on 30 & 31 January 2027. Could I please get some more information?",
  },
};
