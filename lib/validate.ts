import { ui } from "@/content";

const { errors } = ui.form;

/** Returns an error message, or null when the value is fine. */
export function validateValue(
  type: "text" | "email" | "tel" | "select" | "textarea",
  value: string,
  required?: boolean,
): string | null {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");

  // A phone field holding only the default country code counts as empty.
  const isEmpty = type === "tel" ? digits.length <= 3 && !/\d{4}/.test(digits) : trimmed === "";
  if (isEmpty) return required ? errors.required : null;

  if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) return errors.email;
  if (type === "tel" && (!/^\+?[\d\s()-]+$/.test(trimmed) || digits.length < 8 || digits.length > 15)) {
    return errors.phone;
  }
  return null;
}

/** Copy of an errors object with one field's error removed. */
export function withoutKey(errors: Record<string, string>, key: string): Record<string, string> {
  const next = { ...errors };
  delete next[key];
  return next;
}
