import { ExternalButton, WhatsAppIcon } from "@/components/ui/Button";
import { Section, SectionHeading, type Tone } from "@/components/ui/Section";
import { Txt } from "@/components/ui/Txt";
import { whatsappUrl } from "@/lib/links";

type Service = {
  title: string;
  text: string;
  items: { title: string; text: string }[];
  cta: string;
  whatsappMessage: string;
};

/** A service on the landing page: heading, what is offered, and a WhatsApp enquiry. */
export function ServiceSection({ id, tone, service }: { id: string; tone: Tone; service: Service }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={service.title} text={service.text} tone={tone} />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {service.items.map((item) => (
          <li key={item.title} className={`rounded-2xl p-6 ${tone === "mist" ? "bg-white" : "border border-line"}`}>
            <span aria-hidden="true" className="mb-4 block h-1 w-10 rounded-full bg-electric-gradient" />
            <h3 className="text-xl">{item.title}</h3>
            <p className="mt-2 text-ink-soft">
              <Txt>{item.text}</Txt>
            </p>
          </li>
        ))}
      </ul>
      <ExternalButton href={whatsappUrl(service.whatsappMessage)} variant="whatsapp" className="mt-8 w-full sm:w-auto">
        <WhatsAppIcon />
        {service.cta}
      </ExternalButton>
    </Section>
  );
}
