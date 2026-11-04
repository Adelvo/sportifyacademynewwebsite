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
    test: { src: "/paths/test-my-child.webp", width: 1122, height: 1402, alt: "A coach with a tablet crouching beside a boy who is ready to start an agility test" },
    train: { src: "/paths/train-with-us.webp", width: 1122, height: 1402, alt: "A girl sprinting past low yellow hurdles while a coach watches in the background" },
    recover: { src: "/paths/recover.webp", width: 1122, height: 1402, alt: "A therapist in gloves holding the bent leg of a young athlete lying on a treatment table" },
    organisations: { src: "/paths/for-organisations.webp", width: 1122, height: 1402, alt: "A coach presenting to a seated group, in front of a screen with a rising bar chart" },
  },
  // Photos on the "Test my child" cards.
  tests: {
    kids: { src: "/tests/kids-movement.webp", width: 1086, height: 679, alt: "A coach kneeling beside a young boy who is reaching for a cone during a movement test" },
    talent: { src: "/tests/sport-talent.webp", width: 1122, height: 701, alt: "A girl sprinting during a test while a coach watches in the background" },
    elite: { src: "/tests/elite-dna.webp", width: 1086, height: 679, alt: "A teenage athlete with folded arms in a laboratory, next to a screen showing a DNA helix" },
  },
  // Photos on the "Train with us" cards.
  train: {
    strength: { src: "/train/strength.webp", width: 646, height: 485, alt: "A coach watching a boy lift a kettlebell in the gym" },
    sport: { src: "/train/sport-specific.webp", width: 645, height: 484, alt: "A girl running through yellow hurdles on an indoor training pitch" },
    performance: { src: "/train/performance.webp", width: 643, height: 482, alt: "A teenage boy dribbling a football between cones on an indoor pitch" },
  },
  // Photos on the "Recover & fix pain" cards.
  recover: {
    assessment: { src: "/recover/pain-assessment.webp", width: 800, height: 1000, alt: "A therapist supporting the raised leg of a girl who is lying on a mat and pulling on a resistance band" },
    therapy: { src: "/recover/sports-therapy.webp", width: 800, height: 1000, alt: "A therapist in gloves examining the bent knee of a teenage boy lying on a treatment table" },
    returnToPlay: { src: "/recover/return-to-play.webp", width: 800, height: 1000, alt: "A coach with a tablet watching a teenage boy step up onto a box between training cones" },
  },
  session: img("test-session", 1200, 800, "A child during a test session with a Sportify Academy coach"),
  founder: img("founder-portrait", 800, 1000, "Portrait of Dr. Sajad Karami, Founder and Director of Sportify Academy"),
  method: img("method-measurement", 1200, 800, "A coach measuring a child's posture"),
  centre: [
    img("centre-1", 1000, 700, "Reception at the Sportify Academy centre in Dubai"),
    img("centre-2", 1000, 700, "Testing area at the Sportify Academy centre"),
    img("centre-3", 1000, 700, "Gym floor at the Sportify Academy centre"),
  ],
  schools: img("b2b-schools", 1200, 800, "Students taking part in a school Talent Day"),
  nurseries: img("b2b-nurseries", 1200, 800, "Young children doing a motor-skills check at a nursery"),
  companies: img("b2b-companies", 1200, 800, "An employee having a posture check at the office"),
  clubs: img("b2b-clubs", 1200, 800, "A sports team during a fitness test"),
  // Video posters: frames taken from the YouTube videos.
  videoOlivia: { src: "/videos/olivia.webp", width: 1280, height: 720, alt: "Olivia in her karate uniform, smiling and holding up a gold medal" },
  videoMohammad: { src: "/videos/mohammad.webp", width: 1280, height: 720, alt: "Mohammad dribbling a basketball while tapping a light on a reaction wall" },
};
