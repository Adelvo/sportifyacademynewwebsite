import { Reveal } from "@/components/ui/Reveal";
import { athlete } from "@/content";
import { AthleteContainer } from "./AthleteContainer";
import { PeopleIcon, PersonIcon } from "./AthleteIcons";

const trainingIcons: Record<string, typeof PersonIcon> = {
  "one-on-one": PersonIcon,
  "semi-private": PeopleIcon,
};

/** "Training built around your goals": exactly two training formats, no buttons or links. */
export function AthleteTraining() {
  const { training } = athlete;
  return (
    <section className="bg-[#F4F7F9] py-9 sm:py-12">
      <AthleteContainer>
        <Reveal>
          <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.2]">{training.title}</h2>
          <p className="mt-2 text-base leading-[1.55] text-[#526271]">{training.text}</p>
        </Reveal>

        <Reveal delay={90} className="mt-6 grid gap-6 sm:mt-7 md:grid-cols-2">
          {training.items.map((item) => {
            const Icon = trainingIcons[item.id];
            return (
              <div key={item.id} className="rounded-[14px] border border-[#DCE5EB] bg-white p-6">
                <span className="grid size-11 place-items-center rounded-full bg-[#67D5E5]/15 text-[#007a99]">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-[20px] leading-[1.3] font-bold sm:text-[22px]">{item.name}</h3>
                <p className="mt-2 text-base leading-[1.55] text-[#526271]">{item.text}</p>
              </div>
            );
          })}
        </Reveal>
      </AthleteContainer>
    </section>
  );
}
