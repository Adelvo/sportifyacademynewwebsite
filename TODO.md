# TODO before launch

Every open item on the website is listed here. On the site, each one shows as an amber `[TODO: ...]` marker.
Run `npm run todos` to see every marker still left in `/content`, with file and line number.

## 1. Confirm with the client

### Figures (`content/en/stats.ts`)
- [ ] **Which client figures are true.** Sources conflict: 30,000 clients vs 5,000+ children assessed; 235,000 tests vs 250,000-athlete database vs 11,800+ tests. The homepage stats, in the hero and again under the athlete videos (`content/en/home.ts`), now show +1,200 talents, +30,000 clients and +235,000 tests, as requested on 2026-11-04 and 2026-11-05. Confirm the last two. Other pages use only "1,200+ talents discovered". The "Why Sportify Academy" section on the homepage shows 18+ years, 30,000+ clients, 220,000+ data points, 1,200+ talents and 700+ championship medals. Confirm these too.

### "Hear from our athletes" section (`content/en/home.ts`)
- [ ] **Wording.** The line under the heading ("Real success stories from Sportify Academy athletes, in their own words.") is new and not confirmed. The "Success story" label comes from the video titles on YouTube.

### "Why Sportify Academy" section (`content/en/home.ts`)
- [ ] **Wording.** The text comes from the design and is not confirmed. It replaces the longer list, which also covered 5,000+ programmes, the national team fitness specialists and the founder's three karate titles. "Proven Results", "Proven athlete development" and "the help of AI" are claims: see the health claims item in section 2.

### "Test my child" section (`content/en/home.ts`)
- [ ] **Prices.** The cards show no prices, as requested on 2026-11-05, and have no button of their own. The only actions are the WhatsApp and Contact Us buttons under the cards. Add prices and booking when they are ready.
- [ ] **Card wording.** The bullet points are very short versions of the old website's text and are not confirmed. "Not sure which test fits you or your child?" is new wording too.

### Train and Recover sections (`content/en/home.ts`)
- [ ] **Train with us.** The programmes, ages and lists come from the design and are not confirmed. Also confirm the prices, and whether "Book" should stay a WhatsApp message. "Reduce risk of injury" and "Safe & Professional" are claims: see the health claims item in section 2.
- [ ] **Recover & fix pain.** The services, ages, lists and "Most popular" label come from the design and are not confirmed. The design gives no age for Sports Therapy & Recovery. Also confirm the prices, and whether "Book" should stay a WhatsApp message. "Reduce pain", "Safe Return to Sport" and the rehab wording are claims: see the health claims item in section 2.
- [ ] **Photos for Recover & fix pain.** The return-to-play photo shows Nike logos on the shoes and socks. On the other two, the logo on the athlete's shirt differs from the S logo, and on the sports therapy photo it has unreadable text.
- [ ] **Who delivers recovery and pain treatment**, and whether they are licensed. See the health claims item in section 2.

### "For organisations" section (`content/en/home.ts`)
- [ ] **Card wording.** The lists and labels come from the design and are not confirmed. "Certified coaches" and "Proven Results" are claims: see the health claims item in section 2.
- [ ] **Two feature lines were cut off in the design.** "Clear insights & measurable results" and "Higher performance & lasting impact" are guesses at the missing words.
- [ ] **Photo for Companies.** It is cut out of the design screenshot and is low resolution. Replace it with the original photo.
- [ ] **Photo for Schools.** It shows Nike logos and a different club crest instead of the S logo, and an image generator mark in the bottom corner of the original (cropped out here).

### Parent FAQ (`content/en/faq.ts`)
- [ ] Minimum and maximum age for testing.
- [ ] Accuracy: evidence or scientific references.
- [ ] Club introductions: are they offered, and how do they work?

### Contact details and About
- [ ] Email address. The site shows none now that the contact page is gone. Add one to the footer if wanted.
- [ ] Dr. Karami's personal story and why he founded the academy. It is not on the About page yet (`content/en/about.ts`).
- [ ] **Dr. Karami's photo on the About page** shows an Adidas logo on his shirt. Confirm this is fine, or supply one with the S logo.
- [ ] **"About Sportify Academy" section on the About page.** It repeats the homepage text, stats and highlights from "Why Sportify Academy": see that section above.
- [ ] Official names of the UAE federations (`content/en/partners.ts`).

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
- [ ] **Partner logos:** `public/partners/` holds crops from carousel screenshots, some with the carousel arrow on them (Sailing, Boxing, Hatta, FMAC, Al-Ittifaq). Replace them with the original files. Still needed: a logo for Dubai Sports Council, the name of the green arrow logo, and the full Kingdom logo (its white lettering is lost in the screenshot, so it is left out).
- [ ] **Site logo:** the header and footer use a text logo. `app/icon.svg` is a temporary favicon.
- [ ] **Open Graph image:** `public/og-image.png` is a simple generated image. Replace it with a branded one (1200 × 630).

## 4. Setup
- [ ] Set `NEXT_PUBLIC_FORM_WEBHOOK_URL` in Vercel, then redeploy. The value is built into the site, so a change needs a new deploy. Until it is set, every form shows an error with a WhatsApp option.
- [ ] In n8n, allow CORS requests from `https://sportify.academy` (POST, with the `Content-Type` header). The webhook must answer with a 2xx status, or forms show an error.
- [ ] In n8n, add rate limiting. The webhook URL is visible in browser code.
- [ ] Point the `sportify.academy` domain to Vercel.
- [ ] After real photos are in, run Lighthouse again. See the note in `README.md`.
- [ ] Add the Google Business Profile link if you want the rating to link to the reviews.
- [ ] **Google reviews on the homepage (`content/en/reviews.ts`).** Confirm the client is happy showing reviewers' names next to their words. The background (`public/reviews/gym-panorama.webp`) is blended from three smaller site photos, so replace it with a real wide photo of the centre (about 2800 × 900) when there is one.
- [ ] **Partners background (`public/partners-band/team-panorama.webp`).** Blended from three site photos. Replace it with a real wide team photo (about 3280 × 900) when there is one.
- [ ] **Autoplay video and privacy.** The "Why Sportify Academy?" video now loads from YouTube on scroll, without a click and without a consent step. Have the updated text on the cookies page and the need for consent checked.
- [ ] **"Why Sportify Academy?" video as our own file.** Get the MP4 (YouTube Studio has a download option for your own videos, or use the editor's original) and play it with a plain video tag. This removes YouTube's overlays for good, and with them the poster workaround in `components/media/VideoSlot.tsx`, the skipped opening seconds and the privacy question above. YouTube's API policies also don't allow covering the player, which the workaround does.
