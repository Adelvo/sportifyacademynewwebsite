export type PackageId =
  | "fundamental-movement"
  | "physical-fitness"
  | "sports-talent"
  | "sports-elite"
  | "genetics-elite"
  | "genetics-talent";

export type GroupId = "foundations" | "talent" | "premium";

export type MeasureId =
  | "tgmd"
  | "fitness"
  | "skills"
  | "psychology"
  | "anthropometry"
  | "posture"
  | "gait"
  | "bodycomp"
  | "genetics"
  | "diet"
  | "consultation"
  | "report";

export type AgeBandId = "4-8" | "9-12" | "13-17" | "18-plus";
export type GoalId = "best-sport" | "fitness" | "compete" | "complete";

export interface PackageGroup {
  id: GroupId;
  name: string;
  summary: string;
}

export interface Package {
  id: PackageId;
  group: GroupId;
  name: string;
  /** Price in AED. */
  price: number;
  /** Shown next to the price when the price or contents are unconfirmed. */
  priceNote?: string;
  badge?: string;
  summary: string;
  highlights: string[];
  /** Only what the client has confirmed. Everything else shows as a TODO in the table. */
  includes: MeasureId[];
}

export interface Option<T extends string = string> {
  id: T;
  label: string;
}

export interface Measure {
  id: MeasureId;
  name: string;
  what: string;
  why: string;
  /** Visual fill only (0-100). Not data. */
  ring: number;
}

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
