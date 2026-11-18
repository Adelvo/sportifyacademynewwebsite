import type { ImageAsset } from "../types";

// PLACEHOLDERS. Replace the files in /public/placeholders with real photos.
// Keep the same file names, or change "src" and the sizes here. Check that each alt text
// still describes the final photo.
const img = (name: string, width: number, height: number, alt: string): ImageAsset => ({
  src: `/placeholders/${name}.webp`,
  width,
  height,
  alt,
});

export const images = {
  // Homepage hero: a Sportify Academy coach in a black shirt standing between a teenage boy holding a
  // football and a girl holding a volleyball, in the blue Sportify Academy studio.
  heroBanner: {
    src: "/hero/team-banner-7.webp",
    width: 1946,
    height: 808,
    alt: "A Sportify Academy coach standing between a teenage boy holding a football and a girl holding a volleyball in the blue Sportify Academy studio",
  },
  // The same hero photo, pre-blurred. Fades in over the sharp photo as the visitor scrolls from
  // the title to "Our Offers", so the cards sit on a calm, out-of-focus studio.
  heroBannerBlur: {
    src: "/hero/team-banner-7-blur.webp",
    width: 1920,
    height: 797,
    alt: "",
  },
  // Photos on the four landing page cards.
  paths: {
    kids: { src: "/paths/kids-agility-run.webp", width: 1448, height: 1086, alt: "A boy mid-stride during an agility drill at the Sportify Academy studio" },
    athlete: { src: "/organisations/workshop-coaches.webp", width: 1000, height: 750, alt: "A coach talking tactics with a huddled youth football team on the pitch" },
    adult: { src: "/paths/adult.webp", width: 1122, height: 1402, alt: "" },
    coaches: { src: "/paths/coaches-dubai-sports-council.webp", width: 1622, height: 742, alt: "A Sportify Academy speaker presenting to coaches and officials at the Dubai Sports Council, with the Sportify Academy logo on the screen" },
  },
  // Photos and video posters for the Kids page, taken in the Sportify Academy studio.
  kids: {
    heroPoster: {
      src: "/kids/hero-video-poster.webp",
      width: 1080,
      height: 1920,
      alt: "A Sportify Academy coach talking to camera, holding a basketball, in the blue training studio",
    },
    fundamentalMultisports: {
      src: "/kids/fundamental-multisports.webp",
      width: 1672,
      height: 941,
      alt: "A young girl balancing on one leg on a small disc during a fundamental movement exercise",
    },
    specializedFitness: {
      src: "/kids/specialized-fitness.webp",
      width: 1672,
      height: 941,
      alt: "A boy moving quickly along a coordination ladder during a fitness assessment",
    },
    motorSkills: {
      src: "/kids/motor-skills.webp",
      width: 1672,
      height: 941,
      alt: "A young boy walking along a low balance beam with his arms out",
    },
    multisportClass: {
      src: "/kids/multisport-class.webp",
      width: 1672,
      height: 941,
      alt: "A smiling girl holding a blue and white ball during a multisport class",
    },
    talentIdentification: {
      src: "/kids/talent-identification.webp",
      width: 1672,
      height: 941,
      alt: "A boy sprinting between two cones in front of a motion-tracking camera on a tripod",
    },
    nutritionPlan: {
      src: "/kids/nutrition-plan.webp",
      width: 1672,
      height: 941,
      alt: "An open lunchbox with a sandwich, cucumber and strawberries, next to a glass of water, yoghurt with banana and blueberries, an apple and a banana",
    },
  },
  // Photos on the "Train with us" cards.
  train: {
    generalAssessment: { src: "/train/general-assessment.webp", width: 1000, height: 750, alt: "" },
    specificAssessment: { src: "/train/specific-assessment.webp", width: 1000, height: 750, alt: "" },
    oneOnOne: { src: "/train/one-on-one.webp", width: 1000, height: 750, alt: "" },
    semiPrivate: { src: "/train/semi-private.webp", width: 1000, height: 750, alt: "" },
    // TODO: Group Training and Sports Psychology are placeholder photos until the real images arrive.
    homeTraining: { src: "/train/home-training-portrait.webp", width: 902, height: 1743, alt: "A Sportify Academy coach guiding a teenage athlete through a squat on a mat in his living room" },
    groupTraining: { src: "/train/athlete-semi-private.webp", width: 1440, height: 810, alt: "A Sportify Academy coach leading a group training session" },
    sportsPsychology: { src: "/train/general-assessment.webp", width: 1000, height: 750, alt: "A Sportify Academy coach talking with an athlete about mindset and focus" },
    nutritionPlan: { src: "/train/nutrition-plan.webp", width: 1600, height: 900, alt: "Three meal-prep containers of rice, corn, cucumber, tomato and lentils" },
    physicalTherapy: { src: "/train/physical-therapy-knee.webp", width: 1600, height: 900, alt: "A physical therapist assessing a client's knee mobility on a treatment table" },
    // Athlete page only: knee control on a step, guided by a physiotherapist.
    athletePhysicalTherapy: { src: "/train/physical-therapy-step.webp", width: 1600, height: 900, alt: "A physical therapist checking an athlete's knee alignment during a step-down exercise" },
    // The real YouTube thumbnail for the Athlete page's football assessment video (sn179z2l1Hw).
    footballAssessmentPoster: {
      src: "/train/football-assessment-poster.webp",
      width: 1280,
      height: 720,
      alt: "A Sportify Academy coach standing with young footballers in front of a microphone during a filmed assessment session",
    },
    // Wide studio banner behind "Training built around your goals".
    trainingBanner: {
      src: "/train/training-banner.webp",
      width: 2172,
      height: 724,
      alt: "Sportify Academy coaches training athletes on the health-score kiosk and cable machines in the studio",
    },
  },
  // Photos on the "Adult Programmes" cards.
  adult: {
    bodyAnalysis: { src: "/adult/body-analysis.webp", width: 1000, height: 750, alt: "" },
    bodyComposition: { src: "/adult/body-composition.webp", width: 1000, height: 750, alt: "" },
    bodyPosture: { src: "/adult/body-posture.webp", width: 1000, height: 750, alt: "" },
    longevity: { src: "/adult/longevity-assessment.webp", width: 1000, height: 750, alt: "" },
    physicalTherapy: { src: "/adult/physical-therapy-knee.webp", width: 1000, height: 750, alt: "" },
    oneOnOne: { src: "/adult/one-on-one.webp", width: 1000, height: 750, alt: "" },
    semiPrivate: { src: "/adult/semi-private.webp", width: 1000, height: 750, alt: "" },
    // TODO: Group Training is a placeholder photo until the real image arrives.
    homeTraining: { src: "/adult/home-training-portrait.webp", width: 902, height: 1743, alt: "A Sportify Academy coach guiding a man through a squat on a mat in his living room" },
    groupTraining: { src: "/adult/semi-private.webp", width: 1000, height: 750, alt: "A Sportify Academy coach leading an adult group training session" },
    // Poster frame for the "Longevity 40+" section video, taken from the clip itself.
    longevityVideoPoster: {
      src: "/adult/longevity-video-poster.webp",
      width: 1080,
      height: 1920,
      alt: "A Sportify Academy coach standing in front of a live posture-analysis screen in the studio",
    },
  },
  session: img("test-session", 1200, 800, "A child during a test session with a Sportify Academy coach"),
  founder: { src: "/about/dr-sajad-karami.webp", width: 768, height: 1152, alt: "Portrait of Dr. Sajad Karami, Founder and Director of Sportify Academy" },
  founderGallery: [
    { src: "/about/founder/01-workshop.webp", width: 1183, height: 1329, alt: "Dr. Sajad Karami guiding a group during a practical workshop" },
    { src: "/about/founder/02-beach.webp", width: 1146, height: 1372, alt: "Dr. Sajad Karami demonstrating flexibility on the beach" },
    { src: "/about/founder/03-karate.webp", width: 1104, height: 1425, alt: "Dr. Sajad Karami demonstrating a karate punch outdoors" },
    { src: "/about/founder/04-award.webp", width: 1114, height: 1412, alt: "Dr. Sajad Karami and a guest holding a framed award at Sportify Academy" },
    { src: "/about/founder/05-football.webp", width: 1426, height: 1103, alt: "Dr. Sajad Karami coaching young footballers on a football pitch" },
    { src: "/about/founder/06-coaching.webp", width: 1022, height: 1539, alt: "Dr. Sajad Karami during an indoor coaching session" },
    { src: "/about/founder/07-speaker.webp", width: 1082, height: 1454, alt: "Dr. Sajad Karami speaking with a microphone at the Dubai Sports Council" },
  ],
  expertTeam: { src: "/about/expert-team-karate.png", width: 434, height: 560, alt: "Dr. Sajad Karami demonstrating a karate punch outdoors" },
  dataDriven: { src: "/about/data-driven-posture.png", width: 1081, height: 1455, alt: "A tablet displaying posture analysis during a Sportify Academy assessment" },
  provenResults: { src: "/about/proven-results-medal.png", width: 1222, height: 1287, alt: "A smiling young karate athlete holding a gold medal" },
  // Photos on the "For Coaches" cards.
  organisations: {
    workshop: { src: "/organisations/workshop-coaches.webp", width: 1000, height: 750, alt: "A coach talking tactics with a huddled youth football team on the pitch" },
    conferences: { src: "/organisations/conferences-coaches.webp", width: 1000, height: 750, alt: "A speaker on stage presenting to a seated audience at a conference" },
    cpd: { src: "/organisations/coach-certifications.webp", width: 1000, height: 750, alt: "Logos of NASM, EREPS (European Register of Exercise Professionals), REPs UAE and Motor Skill Learning Academy Switzerland" },
  },
  // Poster for the upcoming Early Years PE Conference on the "For Coaches" page.
  earlyYearsConference: {
    src: "/organisations/early-years-pe-conference-2027.webp",
    width: 853,
    height: 1280,
    alt: "Early Years PE Conference poster: 30 & 31 January 2027 in Dubai, hosted by Sportify Academy with Motor Skill Learning Academy Switzerland, showing four children running through an obstacle course in front of the Dubai skyline",
  },
  // Photo behind the Google reviews: body composition analysis and training equipment.
  reviewsBackground: { src: "/reviews/google-reviews-banner.webp", width: 1851, height: 850, alt: "" },
  // Long Sportify Academy banner behind the partners: logo on the left, athletes on the right.
  partnersBackground: { src: "/partners/partners-banner.webp", width: 2172, height: 724, alt: "" },
  // Video posters: frames taken from the YouTube videos.
  videoAbout: { src: "/videos/about-sportify.webp", width: 1280, height: 720, alt: "An athlete in a blue bib jumping on a test platform while Sportify Academy staff record the results" },
  videoOlivia: { src: "/videos/olivia.webp", width: 1280, height: 720, alt: "Olivia in her karate uniform, smiling and holding up a gold medal" },
  videoMohammad: { src: "/videos/mohammad.webp", width: 1280, height: 720, alt: "Mohammad dribbling a basketball while tapping a light on a reaction wall" },
};
