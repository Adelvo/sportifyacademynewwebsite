import type { VideoTestimonial } from "../types";
import { images } from "./images";

// Add each YouTube or Vimeo embed link to "embedUrl". The play button then appears.
// Example: https://www.youtube-nocookie.com/embed/VIDEO_ID
export const testimonials: VideoTestimonial[] = [
  { id: "olivia", name: "Olivia", role: "Karate athlete", poster: images.videoOlivia },
  { id: "daraki", name: "Daraki", role: "Basketball player", poster: images.videoDaraki },
];
