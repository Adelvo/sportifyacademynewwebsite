import { measures, ui } from "@/content";
import { ScoreRing } from "../data-viz/ScoreRing";

export function MeasureGrid() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {measures.map((measure) => (
          <li key={measure.id} className="flex items-start gap-4 rounded-2xl bg-midnight-800 p-5">
            <ScoreRing value={measure.ring} className="shrink-0" />
            <div>
              <h3 className="text-lg text-white">{measure.name}</h3>
              <p className="mt-1 text-on-midnight-soft">{measure.what}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-on-midnight-soft">{ui.illustrationNote}</p>
    </>
  );
}
