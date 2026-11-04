import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { notFoundPage } from "@/content";

export default function NotFound() {
  return (
    <Section tone="midnight">
      <h1 className="text-4xl sm:text-5xl">{notFoundPage.title}</h1>
      <p className="mt-4 mb-8 text-lg text-on-midnight-soft">{notFoundPage.text}</p>
      <LinkButton href="/">{notFoundPage.cta}</LinkButton>
    </Section>
  );
}
