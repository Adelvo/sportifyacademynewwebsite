import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappUrl } from "@/lib/links";
import { KidsButton } from "./KidsButton";
import { QuestionIcon } from "./KidsIcons";

/** A prominent "not sure?" WhatsApp prompt, reused under both the assessments and the support list. */
export function KidsHelpBanner({
  text,
  cta,
  whatsappMessage,
  className = "",
}: {
  text: string;
  cta: string;
  whatsappMessage: string;
  className?: string;
}) {
  return (
    <Reveal
      className={`flex flex-col items-start gap-4 rounded-[14px] border-2 border-[#67D5E5] bg-[#67D5E5]/10 p-5 shadow-[0_4px_16px_rgba(103,213,229,0.25)] sm:flex-row sm:items-center sm:justify-between sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 animate-pulse place-items-center rounded-full bg-[#67D5E5] text-[#081C2C]">
          <QuestionIcon className="size-6" />
        </span>
        <p className="text-lg font-bold">{text}</p>
      </div>
      <KidsButton href={whatsappUrl(whatsappMessage)} className="w-full shrink-0 sm:w-auto">
        <WhatsAppIcon className="size-5" />
        {cta}
      </KidsButton>
    </Reveal>
  );
}
