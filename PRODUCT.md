# Product

<!-- impeccable:product-schema 1 -->

The product record for facetsoftware.co.za: the Facet Software company page and the DeltaLab product pages. The DeltaLab app's own record is `PRODUCT.md` in the DeltaLab repo; this one covers how the website presents it.

## Platform

web

## Users

- **Junior doctors in South African public hospitals** (the primary audience): interns, community-service doctors and medical officers. They check NHLS lab results between patients on a ward round, standing, one-handed and short of time. They usually reach the site from a colleague's link, a WhatsApp group or a search, on their phone. The site's job is to get them to download DeltaLab.
- **Senior clinicians**: registrars and consultants, who recommend tools to their teams. They need to see quickly that the app is safe to recommend, especially on privacy, and that it is independent of the NHLS.
- **Hospital management**: managers, IT and procurement, who may be asked about it or approve it for a ward or hospital. They need the company facts, the privacy position and the legal pages.
- **App reviewers and partners**: Apple and Google reviewers and possible partners, checking that the company is real and that the privacy policy, terms and support pages exist.

## Product Purpose

DeltaLab is a native iPhone and Android app that shows NHLS lab results on the doctor's phone. The doctor signs in with the NHLS TrakCare portal login they already have, finds a patient by scanning a specimen barcode or searching, and sees results flagged against reference ranges. The website explains that in seconds, earns trust, and sends the doctor to the App Store or Google Play.

Success means doctors download the app, and a senior clinician or manager who checks the site finds what they need to trust it.

## Positioning

- The one job: **stop chasing bloods.** A doctor sees results as they arrive instead of phoning the lab or refreshing the portal.
- **Scan. Tap. Sorted.**: scan the specimen barcode on the tube, tap the patient, and the results open flagged.
- **Patient data never leaves the device.** Results travel only between the phone and the NHLS. Facet never sees them, and the app has no analytics, tracking, advertising or crash-reporting SDKs.
- It uses the doctor's own NHLS login, so there is no new account and it shows only what that login can already see.

## Operating Context

- Doctors use it on the ward, on a patchy mobile connection rather than hospital wi-fi. The app has been tested to cope with a weak connection. The site may say it is built for a weak signal; it does not name a network type or a speed.
- Ward rounds, handovers, night shifts, and culture results that turn positive after the patient was seen.
- The site is static HTML and CSS on GitHub Pages, behind Cloudflare. A push to `main` deploys.
- The legal pages (`/deltalab/privacy/`, `/support/`, `/terms/`) are generated from Markdown in the DeltaLab repo; they are not edited by hand.
- `/deltalab/invite/` is the referral invite page. It is `noindex`.

## Capabilities and Constraints

- Features the site may describe, as in the store listings:
  - search by name, hospital number, specimen ID or episode number
  - scan a specimen barcode
  - results with high and low flags, reference ranges and pending tests
  - a timeline across episodes
  - a ward-round list that flags new positive cultures
  - the Yours tab (recent results for tests you requested)
  - the official lab report PDF
  - a handover-sheet PDF
  - recently viewed patients
  - light and dark themes
- Pricing: free for five patients a day, resetting at midnight; reopening a patient the same day doesn't count again. An optional monthly or annual subscription removes the limit. Billing goes through the App Store or Google Play. Don't state prices: the stores show them in the viewer's currency.
- **The site makes no third-party requests.** Fonts are self-hosted. The one owner-approved exception is cookieless Cloudflare Web Analytics on the invite page.
- **Copy rules** (owner decisions):
  - Never call the app beta, alpha or a test.
  - Never claim it keeps you signed in or logs you back in automatically.
  - No comparisons with the NHLS or its portal.
  - No speed claims that haven't been measured.
  - No promises of future features.
- **Required statements** wherever the product is described at length:
  - DeltaLab is independent: not affiliated with, endorsed by or supported by the National Health Laboratory Service.
  - It needs the doctor's own valid NHLS portal account and an internet connection.
  - It is a viewer for laboratory data, not a diagnostic device; clinical decisions remain the doctor's.
- Screenshots and mock-ups use only the fictional demo cast (for example Naledi Mokoena, Silverleaf Regional Laboratory, `ZQ…` episode numbers) and say so on the page. Never a real patient, and never a lab MRN shown as a patient identifier.
- Store badges are the official, unmodified Apple and Google artwork, App Store first.

## Brand Commitments

- The product name is **DeltaLab**, one word. "LabLoupe" and "Delta Labs" are wrong. The load-bearing identifiers stay: bundle id `com.labloupe.app`, Expo slug `labloupe`.
- The company is **Facet Software (Pty) Ltd**, Johannesburg, reg. no. 2026/750377/07. Contact: hello@facetsoftware.co.za.
- Voice: plain, warm and clinical-literate, in the language of the ward (bloods, U&E, round, handover). Sentence case.
- Approved lines from the store creative:
  - "Stop chasing bloods."
  - "Lab results, sorted"
  - "Scan. Tap. Sorted."
  - "Know when a culture turns positive."
  - "See the change, not just the number."
  - "Your requests, already waiting."
  - "A handover sheet, filled in for you."
  - "Easy on the eyes at 3 a.m."
- Store listing copy (`appstore/LISTING.md` and `playstore/LISTING.md` in the DeltaLab repo) is the source for product claims.

## Evidence on Hand

- Fictional demo screenshots from the 14 Oct 2026 capture, in `img/deltalab-*.webp`. The PNG sources are in the DeltaLab repo under `appstore/screenshots/`.
- Store creative and captions in the DeltaLab repo under `appstore/creative/`.
- **No testimonials, user or download numbers, named hospitals, ratings or press exist.** Pages must not invent or imply any. Add proof only when the owner supplies it and approves the wording.

## Product Principles

1. **One job, said plainly.** Lead with the problem the doctor already has (chasing bloods), then show how the app removes it.
2. **Trust is part of the pitch.** Privacy, independence from the NHLS and "not a diagnostic device" stay visible, never hidden.
3. **Only true claims.** Every claim traces to the store listing, the app's behaviour or an owner decision.
4. **Phone first.** Most visitors arrive on a phone from a link, so the download is never more than a scroll away.

## Accessibility & Inclusion

- Text meets WCAG AA contrast in light and dark themes, and every link and badge has a visible keyboard focus.
- Motion respects `prefers-reduced-motion`.
- Screenshots carry descriptive alt text. Illustrative mock-ups are labelled images with a text alternative.
