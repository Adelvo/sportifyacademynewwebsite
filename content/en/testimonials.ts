import type { VideoTestimonial } from "../types";
import { images } from "./images";

// Add each YouTube or Vimeo embed link to "embedUrl". The play button then appears.
// The video starts on the visitor's click, so keep autoplay=1 or they must click twice.
export const testimonials: VideoTestimonial[] = [
  {
    id: "olivia",
    name: "Olivia",
    role: "Karate Champion",
    embedUrl: "https://www.youtube-nocookie.com/embed/PPvooKpOBEE?autoplay=1&rel=0",
    poster: images.videoOlivia,
  },
  {
    id: "mohammad",
    name: "Mohammad",
    role: "Al Nasr Basketball Player",
    embedUrl: "https://www.youtube-nocookie.com/embed/d-_BbE5pEkQ?autoplay=1&rel=0",
    poster: images.videoMohammad,
  },
];
