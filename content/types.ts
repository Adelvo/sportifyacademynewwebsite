export interface FaqItem {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

export interface Partner {
  id: string;
  name: string;
  /** Path to the logo file in /public/partners once the client supplies it. */
  logo?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GoogleReview {
  id: string;
  name: string;
  /** The opening of the review, word for word. */
  text: string;
  /** Link to the full review on Google Maps. */
  url: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  role?: string;
  /** YouTube or Vimeo embed URL. The slot shows a TODO until this is set. */
  embedUrl?: string;
  poster: ImageAsset;
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export interface FieldDef {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  autoComplete?: string;
  options?: string[];
  defaultValue?: string;
  /** Full width on larger screens. */
  wide?: boolean;
}

export interface ConsentDef {
  name: string;
  label: string;
  required?: boolean;
}

export interface FormConfig {
  source: string;
  submitLabel: string;
  successTitle: string;
  successText: string;
  whatsappMessage: string;
  fields: FieldDef[];
  consents?: ConsentDef[];
  note?: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface LegalPage {
  meta: PageMeta;
  heading: string;
  sections: TitledText[];
}
