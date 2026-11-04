import type { MetadataRoute } from "next";
import {
  about,
  clubs,
  companies,
  contactPage,
  cookiesPage,
  home,
  nurseries,
  organisationsPage,
  packagesPage,
  privacyPage,
  recoverPage,
  schools,
  site,
  termsPage,
  testPage,
  trainPage,
} from "@/content";

// /report is left out on purpose: it is only for parents who scan a QR code.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    home,
    testPage,
    trainPage,
    recoverPage,
    organisationsPage,
    packagesPage,
    schools,
    nurseries,
    companies,
    clubs,
    about,
    contactPage,
    privacyPage,
    termsPage,
    cookiesPage,
  ];
  return pages.map(({ meta }) => ({
    url: `${site.url}${meta.path === "/" ? "" : meta.path}`,
    lastModified: new Date(),
  }));
}
