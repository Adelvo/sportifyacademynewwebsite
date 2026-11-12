import { Photo } from "@/components/media/Photo";
import { WhatsAppIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images, kids } from "@/content";
import { whatsappUrl } from "@/lib/links";
import { KidsButton } from "./KidsButton";
import { KidsContainer } from "./KidsContainer";
import { LeafIcon } from "./KidsIcons";

/** A compact, light-turquoise panel for the Kids Nutrition Plan: photo beside the pitch and CTA. */
export function KidsNutrition() {
  const { nutrition } = kids;
  return (
    <section className="bg-white py-[18px] sm:py-7">
      <KidsContainer>
        <Reveal className="grid overflow-hidden rounded-[14px] bg-[#E7F7FA] p-7 md:grid-cols-[320px_minmax(0,1fr)] md:items-center md:gap-7">
          <Photo image={images.kids.nutritionPlan} sizes="(min-width: 768px) 320px, 100vw" className="aspect-[16/9] w-full rounded-[10px]" />
          <div className="mt-6 flex flex-col md:mt-0">
            <p className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#007a99]">
              <LeafIcon className="size-4" />
              {nutrition.label}
            </p>
            <h2 className="mt-2 text-[28px] sm:text-[30px] font-bold leading-[1.2]">{nutrition.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-[1.55] text-[#526271]">{nutrition.text}</p>
            <KidsButton href={whatsappUrl(nutrition.whatsappMessage)} className="mt-6">
              <WhatsAppIcon className="size-5" />
              {nutrition.cta}
            </KidsButton>
          </div>
        </Reveal>
      </KidsContainer>
    </section>
  );
}
