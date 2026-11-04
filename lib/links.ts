import { defaultWhatsappMessage, site, whatsappMessages } from "@/content";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrlForPath(pathname: string): string {
  return whatsappUrl(whatsappMessages[pathname] ?? defaultWhatsappMessage);
}

export const TODO_PATTERN = /(\[TODO:[^\]]*\])/;

export function hasTodo(text: string): boolean {
  return TODO_PATTERN.test(text);
}
