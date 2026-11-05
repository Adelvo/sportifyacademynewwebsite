"use client";

import { useId, useState, type FormEvent } from "react";
import { ui } from "@/content";
import type { FormConfig } from "@/content/types";
import { HONEYPOT_NAME, submitForm } from "@/lib/submit";
import { validateValue, withoutKey } from "@/lib/validate";
import { buttonClass } from "../ui/Button";
import { Consent, Field, Honeypot, PrivacyLine, SubmitError, SuccessPanel } from "./parts";

/** Used for the report form. The fields come from /content. */
export function ConfigForm({ config }: { config: FormConfig }) {
  const idPrefix = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nextErrors: Record<string, string> = {};
    const payload: Record<string, string | boolean> = {};
    for (const field of config.fields) {
      const value = String(formData.get(field.name) ?? "");
      const error = validateValue(field.type, value, field.required);
      if (error) nextErrors[field.name] = error;
      payload[field.name] = value.trim();
    }
    for (const consent of config.consents ?? []) {
      const checked = formData.get(consent.name) !== null;
      if (consent.required && !checked) nextErrors[consent.name] = ui.form.errors.consent;
      payload[consent.name] = checked;
    }

    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    const ok = await submitForm(config.source, payload, String(formData.get(HONEYPOT_NAME) ?? ""));
    setStatus(ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <SuccessPanel title={config.successTitle} text={config.successText} whatsappMessage={config.whatsappMessage} />
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onChange={(event) => {
        const name = (event.target as unknown as HTMLInputElement).name;
        if (errors[name]) setErrors((current) => withoutKey(current, name));
      }}
      className="space-y-5"
    >
      <Honeypot idPrefix={idPrefix} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {config.fields.map((field) => (
          <Field key={field.name} def={field} idPrefix={idPrefix} error={errors[field.name]} />
        ))}
      </div>
      {config.consents?.map((consent) => (
        <Consent
          key={consent.name}
          id={`${idPrefix}-${consent.name}`}
          name={consent.name}
          label={consent.label}
          required={consent.required}
          error={errors[consent.name]}
        />
      ))}
      <PrivacyLine note={config.note} />
      {status === "error" && (
        <SubmitError message={ui.form.errors.submit} whatsappMessage={config.whatsappMessage} />
      )}
      <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full sm:w-auto")}>
        {status === "sending" ? ui.form.sending : config.submitLabel}
      </button>
    </form>
  );
}
