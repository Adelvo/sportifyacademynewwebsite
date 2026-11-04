import { readUtm } from "./utm";

/** Hidden spam-trap field. People never see it, so only bots fill it in. */
export const HONEYPOT_NAME = "confirm_url";

/**
 * Sends a form to the n8n webhook as JSON, with source and UTM fields added.
 * Returns false when the form could not be delivered, so the UI never shows a false success.
 */
export async function submitForm(
  source: string,
  data: Record<string, string | boolean>,
  honeypot = "",
): Promise<boolean> {
  if (honeypot) return true; // Pretend success, and send nothing.

  const url = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL;
  if (!url) {
    console.error("NEXT_PUBLIC_FORM_WEBHOOK_URL is not set.");
    return false;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source,
        ...readUtm(),
        page: window.location.pathname,
        submitted_at: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(15000),
    });
    return response.ok;
  } catch {
    return false;
  }
}
