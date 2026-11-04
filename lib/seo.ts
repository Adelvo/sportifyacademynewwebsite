import type { Metadata } from "next";
import { site } from "@/content";
import type { PageMeta } from "@/content/types";

export const OG_IMAGE = "/og-image.png";

export function pageMetadata(meta: PageMeta, options?: { noindex?: boolean }): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.path },
    robots: options?.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_AE",
      title: meta.title,
      description: meta.description,
      url: meta.path,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: site.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}
