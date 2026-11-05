import { defaultWhatsappMessage, site, whatsappMessages } from "@/content";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrlForPath(pathname: string): string {
  return whatsappUrl(whatsappMessages[pathname] ?? defaultWhatsappMessage);
}

/** Every "Our offers" button leads here: the offers panel on the homepage. */
export const OFFERS_ID = "offers";
export const OFFERS_HREF = `/#${OFFERS_ID}`;

export const TODO_PATTERN = /(\[TODO:[^\]]*\])/;

export function hasTodo(text: string): boolean {
  return TODO_PATTERN.test(text);
}
