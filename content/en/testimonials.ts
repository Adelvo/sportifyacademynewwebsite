import type { VideoTestimonial } from "../types";
import { images } from "./images";

// Add each YouTube or Vimeo embed link to "embedUrl". The video then autoplays muted once
// scrolled into view (see AthleteStories). Keep autoplay=1 in the link or it won't autoplay.
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
