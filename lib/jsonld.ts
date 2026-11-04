import { site } from "@/content";
import type { FaqItem } from "@/content/types";
import { hasTodo } from "./links";
import { OG_IMAGE } from "./seo";

// No aggregateRating here: Google does not show stars for reviews a business publishes about itself.
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneE164,
  image: `${site.url}${OG_IMAGE}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressCountry: site.address.country,
  },
  founder: { "@type": "Person", name: "Dr. Sajad Karami", jobTitle: "Founder & Director" },
};

/** FAQPage data, using only answers that are confirmed. Returns null if none are. */
export function faqJsonLd(items: FaqItem[]) {
  const confirmed = items.filter((item) => !hasTodo(item.answer));
  if (confirmed.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: confirmed.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
