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
  heroTeam: {
    src: "/hero/coaches-and-athlete.webp",
    width: 1320,
    height: 1089,
    alt: "Two Sportify Academy coaches standing with a young athlete who is holding a football",
  },
  heroStudio: { src: "/hero/studio-wall.webp", width: 1672, height: 941, alt: "" },
  heroGym: { src: "/hero/studio-gym.webp", width: 292, height: 206, alt: "" },
  // Photos on the four landing page cards.
  paths: {
    kids: { src: "/paths/test-my-child.webp", width: 1122, height: 1402, alt: "A coach with a tablet crouching beside a boy who is ready to start an agility test" },
    athlete: { src: "/paths/train-with-us.webp", width: 1122, height: 1402, alt: "A girl sprinting past low yellow hurdles while a coach watches in the background" },
    adult: { src: "/paths/adult.webp", width: 1122, height: 1402, alt: "" },
    coaches: { src: "/paths/for-organisations.webp", width: 1122, height: 1402, alt: "A coach presenting to a seated group, in front of a screen with a rising bar chart" },
  },
  // Posters for the videos on the "Test my child" cards: the videos' vertical YouTube thumbnails.
  tests: {
    talentIdentification: { src: "/tests/talent-identification.webp", width: 576, height: 1024, alt: "A smiling young girl reaching forward along a bench during a flexibility test" },
    fundamentalMultiSports: { src: "/tests/fundamental-multi-sports.webp", width: 479, height: 848, alt: "A Sportify Academy coach talking to the camera, with the words Every Child on screen" },
    physicalFitness: { src: "/tests/physical-fitness.webp", width: 464, height: 832, alt: "Three people, one in a UAE triathlon suit, standing in front of the Sportify Academy logo" },
    postureBodyGait: { src: "/tests/posture-body-gait.webp", width: 576, height: 1024, alt: "A woman standing on a round scanner in front of a body posture analysis banner" },
    nutritionPlan: { src: "/tests/nutrition-plan.webp", width: 576, height: 1024, alt: "" },
  },
  // Photos on the "Train with us" cards.
  train: {
    generalAssessment: { src: "/train/general-assessment.webp", width: 1000, height: 750, alt: "" },
    specificAssessment: { src: "/train/specific-assessment.webp", width: 1000, height: 750, alt: "" },
    oneOnOne: { src: "/train/one-on-one.webp", width: 1000, height: 750, alt: "" },
    semiPrivate: { src: "/train/semi-private.webp", width: 1000, height: 750, alt: "" },
    nutritionPlan: { src: "/train/nutrition-plan.webp", width: 1000, height: 750, alt: "" },
    physicalTherapy: { src: "/train/physical-therapy.webp", width: 1000, height: 750, alt: "" },
  },
  // Photos on the "Adult Programmes" cards.
  adult: {
    bodyAnalysis: { src: "/adult/body-analysis.webp", width: 1000, height: 750, alt: "" },
    bodyComposition: { src: "/adult/body-composition.webp", width: 1000, height: 750, alt: "" },
    bodyPosture: { src: "/adult/body-posture.webp", width: 1000, height: 750, alt: "" },
    longevity: { src: "/adult/longevity-assessment.webp", width: 1000, height: 750, alt: "" },
    physicalTherapy: { src: "/adult/physical-therapy.webp", width: 1000, height: 750, alt: "" },
    oneOnOne: { src: "/adult/one-on-one.webp", width: 1000, height: 750, alt: "" },
    semiPrivate: { src: "/adult/semi-private.webp", width: 1000, height: 750, alt: "" },
  },
  session: img("test-session", 1200, 800, "A child during a test session with a Sportify Academy coach"),
  founder: { src: "/about/dr-sajad-karami.webp", width: 768, height: 1152, alt: "Portrait of Dr. Sajad Karami, Founder and Director of Sportify Academy" },
  // Photos on the "For Coaches" cards.
  organisations: {
    workshop: { src: "/organisations/workshop.webp", width: 1000, height: 750, alt: "" },
    conferences: { src: "/organisations/conferences.webp", width: 1000, height: 750, alt: "" },
    cpd: { src: "/organisations/cpd.webp", width: 1000, height: 750, alt: "" },
  },
  // Long gym photo behind the Google reviews, blended from three photos used elsewhere on the site.
  reviewsBackground: { src: "/reviews/gym-panorama.webp", width: 2800, height: 900, alt: "" },
  // Long team photo behind the partners, blended from three photos used elsewhere on the site.
  partnersBackground: { src: "/partners-band/team-panorama.webp", width: 3280, height: 900, alt: "" },
  // Video posters: frames taken from the YouTube videos.
  videoAbout: { src: "/videos/about-sportify.webp", width: 1280, height: 720, alt: "An athlete in a blue bib jumping on a test platform while Sportify Academy staff record the results" },
  videoOlivia: { src: "/videos/olivia.webp", width: 1280, height: 720, alt: "Olivia in her karate uniform, smiling and holding up a gold medal" },
  videoMohammad: { src: "/videos/mohammad.webp", width: 1280, height: 720, alt: "Mohammad dribbling a basketball while tapping a light on a reaction wall" },
};
