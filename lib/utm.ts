const KEY = "sportify_utm";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type UtmData = Partial<Record<(typeof PARAMS)[number], string>>;

/** Saves UTMs from the landing URL for this visit. The first set seen is kept. */
export function captureUtm(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const found: UtmData = {};
    for (const name of PARAMS) {
      const value = params.get(name);
      if (value) found[name] = value;
    }
    if (Object.keys(found).length > 0) sessionStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    // Storage can be blocked in private modes. Forms still work without UTMs.
  }
}

export function readUtm(): UtmData {
  const params = new URLSearchParams(window.location.search);
  const current: UtmData = {};
  for (const name of PARAMS) {
    const value = params.get(name);
    if (value) current[name] = value;
  }
  try {
    const saved = sessionStorage.getItem(KEY);
    return saved ? { ...current, ...(JSON.parse(saved) as UtmData) } : current;
  } catch {
    return current;
  }
}
