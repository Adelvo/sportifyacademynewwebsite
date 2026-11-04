"use client";

import { useState } from "react";
import { ageBands, formatPrice, getPackage, goals, recommendPackage, ui } from "@/content";
import type { AgeBandId, GoalId } from "@/content/types";
import { BookButton } from "../forms/BookButton";
import { Txt } from "../ui/Txt";

function Choices<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
}: {
  name: string;
  legend: string;
  options: { id: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-bold">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex min-h-11 cursor-pointer items-center rounded-full border-2 border-white/30 px-4 py-2 font-semibold has-checked:border-cyan has-checked:bg-cyan has-checked:text-midnight has-focus-visible:ring-4 has-focus-visible:ring-white"
          >
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function PackageHelper() {
  const [age, setAge] = useState<AgeBandId | null>(null);
  const [goal, setGoal] = useState<GoalId | null>(null);
  const result = age && goal ? recommendPackage(age, goal) : null;
  const pack = result ? getPackage(result.primary) : null;
  const alternative = result?.alternative ? getPackage(result.alternative) : null;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Choices name="helper_age" legend={ui.helper.ageLegend} options={ageBands} value={age} onChange={setAge} />
        <Choices name="helper_goal" legend={ui.helper.goalLegend} options={goals} value={goal} onChange={setGoal} />
      </div>

      <div aria-live="polite" className="flex flex-col justify-center rounded-2xl bg-midnight-800 p-6">
        {pack && result ? (
          <>
            <p className="font-semibold text-electric-gradient">{ui.helper.resultLabel}</p>
            <p className="mt-1 font-display text-2xl font-extrabold">{pack.name}</p>
            <p className="mt-2 font-display text-3xl font-extrabold">{formatPrice(pack.price)}</p>
            <p className="mt-3 text-on-midnight-soft">{result.reason}</p>
            {alternative && (
              <p className="mt-2 text-on-midnight-soft">
                {ui.helper.alsoConsider} {alternative.name} ({formatPrice(alternative.price)})
              </p>
            )}
            <BookButton packageId={pack.id} className="mt-5 w-full sm:w-fit">
              {ui.bookThisPackage}
            </BookButton>
          </>
        ) : (
          <p className="text-lg text-on-midnight-soft">{ui.helper.prompt}</p>
        )}
        <p className="mt-4">
          <Txt>{ui.helper.draftNote}</Txt>
        </p>
      </div>
    </div>
  );
}
