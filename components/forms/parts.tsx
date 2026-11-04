"use client";

import Link from "next/link";
import { useEffect, useRef, type ChangeEvent, type ReactNode } from "react";
import { ui } from "@/content";
import type { FieldDef } from "@/content/types";
import { whatsappUrl } from "@/lib/links";
import { HONEYPOT_NAME } from "@/lib/submit";
import { ExternalButton, WhatsAppIcon } from "../ui/Button";
import { Txt } from "../ui/Txt";

const controlClass =
  "mt-1 block min-h-12 w-full rounded-xl border-2 border-line bg-white px-4 py-2.5 text-base text-midnight placeholder:text-ink-soft aria-[invalid=true]:border-red-700";

export function FieldError({ id, children }: { id: string; children?: string | null }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-1 text-sm font-semibold text-red-700">
      {children}
    </p>
  );
}

export function Field({
  def,
  idPrefix,
  error,
  value,
  onChange,
}: {
  def: FieldDef;
  idPrefix: string;
  error?: string | null;
  /** Pass value and onChange to control the field. Otherwise it is uncontrolled. */
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}) {
  const id = `${idPrefix}-${def.name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: def.name,
    required: def.required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: controlClass,
    ...(onChange ? { value: value ?? "", onChange } : { defaultValue: def.defaultValue }),
  };

  return (
    <div className={def.wide ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="font-semibold">
        {def.label}
        {def.required && <span className="sr-only"> {ui.form.required}</span>}
      </label>
      {def.type === "textarea" ? (
        <textarea rows={4} {...shared} />
      ) : def.type === "select" ? (
        <select {...shared} defaultValue={onChange ? undefined : ""}>
          <option value="" disabled={def.required}>
            {ui.form.selectPrompt}
          </option>
          {def.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={def.type} autoComplete={def.autoComplete} {...shared} />
      )}
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

export function Consent({
  id,
  name,
  label,
  required,
  error,
  checked,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string | null;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3">
        <input
          id={id}
          name={name}
          type="checkbox"
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...(onChange ? { checked: !!checked, onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked) } : {})}
          className="mt-0.5 size-6 shrink-0 accent-midnight"
        />
        <span>{label}</span>
      </label>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

export function Honeypot({ idPrefix }: { idPrefix: string }) {
  return (
    <div aria-hidden="true" className="sr-only">
      <label htmlFor={`${idPrefix}-hp`}>{ui.honeypotLabel}</label>
      <input id={`${idPrefix}-hp`} name={HONEYPOT_NAME} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function SubmitError({ message, whatsappMessage }: { message: string; whatsappMessage: string }) {
  return (
    <div role="alert" className="rounded-xl border-2 border-red-700 bg-red-50 p-4 text-red-900">
      <p className="font-semibold">{message}</p>
      <a
        href={whatsappUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block font-bold underline underline-offset-4"
      >
        {ui.whatsappButton}
      </a>
    </div>
  );
}

export function PrivacyLine({ note }: { note?: string }) {
  return (
    <p className="text-sm text-ink-soft">
      {note && <>{note} </>}
      <Link href="/privacy" target="_blank" className="font-semibold underline underline-offset-4">
        {ui.form.privacyLink}
      </Link>
    </p>
  );
}

export function SuccessPanel({
  title,
  text,
  whatsappMessage,
}: {
  title: string;
  text: string;
  whatsappMessage: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div ref={ref} tabIndex={-1} role="status" className="py-6 text-center outline-none focus-visible:shadow-none">
      <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-electric-gradient text-midnight">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-8">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-lg">
        <Txt>{text}</Txt>
      </p>
      <ExternalButton href={whatsappUrl(whatsappMessage)} variant="whatsapp" className="mt-6">
        <WhatsAppIcon />
        {ui.whatsappButton}
      </ExternalButton>
    </div>
  );
}

export function FormCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl bg-white p-5 text-midnight shadow-xl ring-1 ring-black/5 sm:p-8 ${className}`}>{children}</div>;
}
