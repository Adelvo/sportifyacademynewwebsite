"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ageBands,
  bookingForm,
  currentSports,
  formatPrice,
  getPackage,
  goals,
  packages,
  recommendPackage,
  ui,
} from "@/content";
import type { AgeBandId, FieldDef, GoalId, PackageId } from "@/content/types";
import { HONEYPOT_NAME, submitForm } from "@/lib/submit";
import { validateValue, withoutKey } from "@/lib/validate";
import { buttonClass } from "../ui/Button";
import { Txt } from "../ui/Txt";
import { Consent, Field, FieldError, Honeypot, PrivacyLine, SubmitError, SuccessPanel } from "./parts";

const TOTAL_STEPS = 5;
const NOT_SURE = "not-sure";
const { steps: copy, fields: labels } = bookingForm;

const detailFields: FieldDef[] = [
  { name: "parent_name", label: labels.parentName, type: "text", required: true, autoComplete: "name" },
  { name: "child_first_name", label: labels.childName, type: "text", required: true },
  { name: "whatsapp", label: labels.whatsapp, type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: labels.email, type: "email", required: true, autoComplete: "email" },
];

function ChoiceList({
  name,
  legend,
  hint,
  headingRef,
  options,
  value,
  onChange,
  error,
  errorId,
}: {
  name: string;
  legend: string;
  hint?: string;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  options: { id: string; label: string; detail?: string; badge?: string }[];
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  errorId: string;
}) {
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="mb-1 w-full">
        <h2 ref={headingRef} tabIndex={-1} className="text-2xl outline-none focus-visible:shadow-none sm:text-3xl">
          {legend}
        </h2>
      </legend>
      {hint && (
        <p className="mt-2">
          <Txt>{hint}</Txt>
        </p>
      )}
      <div className="mt-5 grid grid-cols-1 gap-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-line px-4 py-3 font-semibold has-checked:border-midnight has-checked:bg-electric/15 has-focus-visible:ring-4 has-focus-visible:ring-midnight"
          >
            <span className="flex items-center gap-3">
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={value === option.id}
                onChange={() => onChange(option.id)}
                className="size-5 shrink-0 accent-midnight focus-visible:shadow-none focus-visible:outline-none"
              />
              <span>
                {option.label}
                {option.badge && (
                  <span className="ms-2 inline-block rounded-full bg-midnight px-2 py-0.5 text-xs font-bold text-white">
                    {option.badge}
                  </span>
                )}
              </span>
            </span>
            {option.detail && <span className="shrink-0 font-bold">{option.detail}</span>}
          </label>
        ))}
      </div>
      <FieldError id={errorId}>{error}</FieldError>
    </fieldset>
  );
}

export function BookingForm({ source, initialPackage }: { source: string; initialPackage?: PackageId }) {
  const idPrefix = useId();
  const [step, setStep] = useState(1);
  const [age, setAge] = useState("");
  const [sport, setSport] = useState("");
  const [otherSport, setOtherSport] = useState("");
  const [goal, setGoal] = useState("");
  const [packageId, setPackageId] = useState<string>(initialPackage ?? "");
  const [details, setDetails] = useState<Record<string, string>>({ whatsapp: "+971 " });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastStep = useRef(1);

  // Move keyboard and screen reader users to the new question, only when the step changes.
  useEffect(() => {
    if (lastStep.current !== step) headingRef.current?.focus();
    lastStep.current = step;
  }, [step]);

  function validateStep(): boolean {
    const next: Record<string, string> = {};
    const choose = ui.form.errors.choose;
    if (step === 1 && !age) next.step = choose;
    if (step === 2 && !sport) next.step = choose;
    if (step === 2 && sport === "Other" && !otherSport.trim()) next.other_sport = ui.form.errors.required;
    if (step === 3 && !goal) next.step = choose;
    if (step === 4 && !packageId) next.step = choose;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (validateStep()) setStep((value) => value + 1);
  }

  function goBack() {
    setErrors({});
    setStep((value) => value - 1);
  }

  function onDetailChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setDetails((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => withoutKey(current, name));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    if (step < TOTAL_STEPS) {
      goNext();
      return;
    }

    const form = event.currentTarget;
    const next: Record<string, string> = {};
    for (const field of detailFields) {
      const error = validateValue(field.type, details[field.name] ?? "", field.required);
      if (error) next[field.name] = error;
    }
    if (!consent) next.consent = ui.form.errors.consent;
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    const chosen = packageId === NOT_SURE ? null : getPackage(packageId as PackageId);
    const ok = await submitForm(
      source,
      {
        age_band: age,
        current_sport: sport === "Other" ? otherSport.trim() : sport,
        goal,
        package: packageId,
        package_name: chosen?.name ?? copy.package.notSure,
        parent_name: details.parent_name.trim(),
        child_first_name: details.child_first_name.trim(),
        whatsapp: details.whatsapp.trim(),
        email: details.email.trim(),
        consent,
      },
      String(new FormData(form).get(HONEYPOT_NAME) ?? ""),
    );
    setStatus(ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <SuccessPanel
        title={bookingForm.successTitle}
        text={bookingForm.successText}
        whatsappMessage={bookingForm.whatsappMessage}
      />
    );
  }

  const recommended = age && goal ? recommendPackage(age as AgeBandId, goal as GoalId).primary : null;
  const stepErrorId = `${idPrefix}-step-error`;

  return (
    <form noValidate onSubmit={onSubmit}>
      <Honeypot idPrefix={idPrefix} />

      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold text-ink-soft">{ui.form.stepOf(step, TOTAL_STEPS)}</p>
        <div
          role="progressbar"
          aria-label={ui.form.stepOf(step, TOTAL_STEPS)}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-valuenow={step}
          className="h-2 overflow-hidden rounded-full bg-line"
        >
          <div className="h-full rounded-full bg-midnight transition-all" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
        </div>
      </div>

      {step === 1 && (
        <ChoiceList
          name="age_band"
          legend={copy.age.title}
          hint={copy.age.hint}
          headingRef={headingRef}
          options={ageBands}
          value={age}
          onChange={setAge}
          error={errors.step}
          errorId={stepErrorId}
        />
      )}

      {step === 2 && (
        <>
          <ChoiceList
            name="current_sport"
            legend={copy.sport.title}
            headingRef={headingRef}
            options={currentSports.map((name) => ({ id: name, label: name }))}
            value={sport}
            onChange={setSport}
            error={errors.step}
            errorId={stepErrorId}
          />
          {sport === "Other" && (
            <div className="mt-4">
              <Field
                def={{ name: "other_sport", label: copy.sport.otherLabel, type: "text", required: true }}
                idPrefix={idPrefix}
                error={errors.other_sport}
                value={otherSport}
                onChange={(event) => setOtherSport(event.target.value)}
              />
            </div>
          )}
        </>
      )}

      {step === 3 && (
        <ChoiceList
          name="goal"
          legend={copy.goal.title}
          headingRef={headingRef}
          options={goals}
          value={goal}
          onChange={setGoal}
          error={errors.step}
          errorId={stepErrorId}
        />
      )}

      {step === 4 && (
        <ChoiceList
          name="package"
          legend={copy.package.title}
          headingRef={headingRef}
          options={[
            ...packages.map((pack) => ({
              id: pack.id,
              label: pack.name,
              detail: formatPrice(pack.price),
              badge: pack.id === recommended ? copy.package.recommended : undefined,
            })),
            { id: NOT_SURE, label: copy.package.notSure },
          ]}
          value={packageId}
          onChange={setPackageId}
          error={errors.step}
          errorId={stepErrorId}
        />
      )}

      {step === 5 && (
        <div>
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl outline-none focus-visible:shadow-none sm:text-3xl">
            {copy.details.title}
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {detailFields.map((field) => (
              <Field
                key={field.name}
                def={field}
                idPrefix={idPrefix}
                error={errors[field.name]}
                value={details[field.name] ?? ""}
                onChange={onDetailChange}
              />
            ))}
          </div>
          <div className="mt-5 space-y-3">
            <Consent
              id={`${idPrefix}-consent`}
              name="consent"
              label={labels.consent}
              required
              error={errors.consent}
              checked={consent}
              onChange={(checked) => {
                setConsent(checked);
                if (errors.consent) setErrors((current) => withoutKey(current, "consent"));
              }}
            />
            <PrivacyLine />
          </div>
          {status === "error" && (
            <div className="mt-5">
              <SubmitError message={ui.form.errors.submit} whatsappMessage={bookingForm.whatsappMessage} />
            </div>
          )}
        </div>
      )}

      <div className="mt-7 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button type="button" onClick={goBack} className={buttonClass("outlineDark")}>
            {ui.form.back}
          </button>
        ) : (
          <span />
        )}
        <button type="submit" disabled={status === "sending"} className={buttonClass("midnight")}>
          {step < TOTAL_STEPS ? ui.form.next : status === "sending" ? ui.form.sending : bookingForm.submit}
        </button>
      </div>
    </form>
  );
}
