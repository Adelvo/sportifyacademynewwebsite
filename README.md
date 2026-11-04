# Sportify Academy website

Next.js (App Router), TypeScript and Tailwind CSS. All pages are static. Deploy on Vercel.

## Commands

```
npm install
npm run dev           # local site at http://localhost:3000
npm run build         # production build
npm run lint
npm run typecheck
npm run todos         # list every [TODO: ...] marker left in /content
npm run placeholders  # recreate placeholder images (overwrites public/placeholders and og-image.png)
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_WEBHOOK_URL`.

## Editing content

All wording, prices, FAQs, partners and figures are in `/content/en`.

| To change | Edit |
|---|---|
| Packages, prices, helper rules | `content/en/packages.ts` |
| Figures | `content/en/stats.ts` |
| Parent FAQ | `content/en/faq.ts` |
| B2B pages | `content/en/b2b/*.ts` |
| Forms | `content/en/forms.ts` |
| WhatsApp messages per page | `content/en/whatsapp.ts` |
| Photos | `content/en/images.ts` and `public/placeholders/` (homepage hero: `public/hero/`) |
| Videos | `content/en/testimonials.ts` |
| Address, phone, menus | `content/en/site.ts` |

Any text written as `[TODO: ...]` shows as an amber marker on the page. Delete the marker when the fact is confirmed.
FAQ answers with a TODO are kept out of the FAQPage search data until then.

## Form data

Every form sends a JSON POST to the webhook. It includes the form fields, plus:

- `source`: `booking-home`, `booking-assessments` (and so on for each page), `schools`, `nurseries`, `companies`, `clubs`, `report-qr` or `contact`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, when present. UTMs from the landing page are kept for the whole visit.
- `page` and `submitted_at`

Forms show success only when the webhook answers with a 2xx status.

## Adding Arabic later

Add `content/ar` with the same shape as `content/en`, add locale routing, and set `lang` and `dir` from `lib/i18n.ts`.
Layouts already use logical CSS (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`).

## Performance note

Lighthouse scores were measured with very small placeholder images. Real photos are heavier.
`next/image` resizes them, but test again after replacing them. The B2B and About pages are the ones to watch, because a photo is their largest element on mobile.

If you replace a photo but keep its file name, your local site can keep showing the old one. Delete `.next/cache/images` and `.next/dev/cache/images`, then reload.
