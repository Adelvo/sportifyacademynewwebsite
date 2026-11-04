# TODO before launch

Every open item on the website is listed here. On the site, each one shows as an amber `[TODO: ...]` marker.
Run `npm run todos` to see every marker still left in `/content`, with file and line number.

## 1. Confirm with the client

### Packages and prices (`content/en/packages.ts`)
- [ ] **What each package includes.** Most cells in the comparison table show TODO. Only the AED 4,000 package has a full list. Ask for a package-by-package list. This is the biggest content gap.
- [ ] **Sports Elite Identification price and contents.** At AED 1,200 with genetics, it costs less than Sports Talent Identification at AED 1,500. Parents will ask why.
- [ ] **Which packages really include genetics.**
- [ ] **Full contents** of Physical Fitness and Genetics + Sports Elite.
- [ ] **Package helper rules.** These are a draft (`recommendPackage`). Example: age 4–8 always gives Fundamental Movement.
- [ ] **Age bands and minimum age.** 4–8, 9–12, 13–17 and 18+ are a draft. The only confirmed band is 4–8.

### Figures (`content/en/stats.ts`)
- [ ] **Which client figures are true.** Sources conflict: 30,000 clients vs 5,000+ children assessed; 235,000 tests vs 250,000-athlete database vs 11,800+ tests. The homepage stats band (`content/en/home.ts`) now shows +1,200 talents, +30,000 clients and +23,500 tests, as requested on 2026-11-04. Confirm the last two, especially 23,500 against the 235,000 above. Other pages use only "1,200+ talents discovered".

### Train and Recover sections (`content/en/home.ts`)
- [ ] **Training and recovery services.** These landing page sections were added on 2026-11-04 for the "Train with us" and "Recover & fix pain" cards. Their lists are a draft, adapted from the B2B pages. Confirm what is offered to families, for which ages, and at what price.
- [ ] **Who delivers recovery and pain treatment**, and whether they are licensed. See the health claims item in section 2.

### Parent FAQ (`content/en/faq.ts`)
- [ ] Minimum and maximum age for testing.
- [ ] Accuracy: evidence or scientific references.
- [ ] Club introductions: are they offered, and how do they work?

### B2B pages (`content/en/b2b/`)
- [ ] Prices after the free pilot, for all 4 segments.
- [ ] Time needed: schools, companies and clubs. (Nurseries: "one morning" comes from the brief.)
- [ ] Space needed, for all 4 segments.
- [ ] Data privacy and parental or employee consent process, for all 4 segments.
- [ ] Nursery services: only TGMD is confirmed.
- [ ] Nursery age: the nursery page says 3–6, but the young children's package says 4–8. Is TGMD offered from age 3?

### Contact details and About
- [ ] Email address (`content/en/site.ts`).
- [ ] Opening hours (`content/en/site.ts`).
- [ ] Social media URLs. No social links are on the site yet. Add them to `site.ts` and the footer.
- [ ] Dr. Karami's personal story and why he founded the academy (`content/en/about.ts`).
- [ ] Official names of the UAE federations (`content/en/partners.ts`).

### Draft wording to approve
Nothing here was in the brief as a fact. Please read and approve it:
- [ ] "What" and "why" lines for each measure (`content/en/measures.ts`).
- [ ] One-line service descriptions on the B2B pages (for example, "Height estimation: an estimate of how tall a student may grow").
- [ ] Form options: current sports, goals, organisation types (`content/en/packages.ts`, `content/en/b2b/`).
- [ ] Headings that imply a relationship: "Trusted by", "Companies we work with", "Clubs we work with".

## 2. For the client's lawyer
- [ ] Write the final Privacy Policy, Terms and Cookie Policy (`content/en/legal.ts`). The current text only says what each section should cover.
- [ ] Children's data, including genetics: storage, consent, retention, and sending data to n8n and WhatsApp.
- [ ] `/report` consent. The brief asked for one required box covering results and offers. It is built as two boxes: results (required) and offers (optional). Confirm this.
- [ ] Health and outcome claims, which may be regulated in UAE advertising. For example: "Fewer back and neck problems", and "Every child is built for one sport", and "Recover & fix pain".
- [ ] Written permission to use partner names and logos.
- [ ] Written consent for video testimonials and photos, especially of minors.

## 3. Files to replace
- [ ] **Photos:** 13 labelled placeholders in `public/placeholders/`. Keep the same file names, or change the paths and sizes in `content/en/images.ts`. Check each alt text still matches the photo.
- [ ] **Landing page card photos:** the 4 files in `public/paths/` look AI-generated. Some show third-party brand marks, such as Nike logos on the socks in `recover.webp`. Retouch these or replace the photos with real ones (`content/en/images.ts`).
- [ ] **Videos:** add the Olivia and Daraki embed links to `content/en/testimonials.ts`. The play button appears by itself.
- [ ] **Partner logos:** add files to `public/partners/` and set `logo` in `content/en/partners.ts`. Names show as text until then.
- [ ] **Site logo:** the header and footer use a text logo. `app/icon.svg` is a temporary favicon.
- [ ] **Open Graph image:** `public/og-image.png` is a simple generated image. Replace it with a branded one (1200 × 630).

## 4. Setup
- [ ] Set `NEXT_PUBLIC_FORM_WEBHOOK_URL` in Vercel, then redeploy. The value is built into the site, so a change needs a new deploy. Until it is set, every form shows an error with a WhatsApp option.
- [ ] In n8n, allow CORS requests from `https://sportify.academy` (POST, with the `Content-Type` header). The webhook must answer with a 2xx status, or forms show an error.
- [ ] In n8n, add rate limiting. The webhook URL is visible in browser code.
- [ ] Point the `sportify.academy` domain to Vercel.
- [ ] After real photos are in, run Lighthouse again. See the note in `README.md`.
- [ ] Add the Google Business Profile link if you want the rating to link to the reviews.
