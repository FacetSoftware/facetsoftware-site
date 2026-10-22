# facetsoftware.co.za

Static site for Facet Software (Pty) Ltd, served by GitHub Pages at
https://facetsoftware.co.za. Plain HTML/CSS, no build step for the pages
themselves. DNS is on Cloudflare. **A push to `main` deploys.**

| Path | What |
|---|---|
| `/` | Company page (`index.html`) |
| `/deltalab/` | DeltaLab product page |
| `/deltalab/privacy/`, `/deltalab/support/`, `/deltalab/terms/` | **Generated** — see below |
| `/deltalab/invite/` | Referral invite page (`?code=K7P2QX`). Static, `noindex`, and never calls the referral server; it removes the code from the address bar on load. Its Google Play link must match `buildPlayLink()` in the DeltaLab repo (`src/utils/referral/inviteLink.ts`), so change both together. `ANALYTICS_TOKEN` in `invite.js` is empty: no analytics script loads (see the rule on third-party requests above). |
| `/.well-known/assetlinks.json` | Android App Links: lets DeltaLab open `/deltalab/invite` links directly. Holds the **Play app signing key**'s SHA-256, from Play Console → Protected with Play → Play Store protection → Protect app signing key. Add a fingerprint there if the signing key ever changes. |
| `site.css` | Shared stylesheet |
| `fonts/` | Self-hosted woff2 (SIL OFL 1.1, licences alongside). The site makes no third-party requests — keep it that way. |
| `img/og-*.png` | Link-preview cards (1200×630). Sources in `scripts/og/`; re-render with `node scripts/og/render.mjs ~/Dev/Lab` (borrows the Lab repo's puppeteer). |
| `img/` | DeltaLab icon and screenshots. The screenshots are fictional demo data from the Lab repo's `appstore/screenshots/`; never add a capture of a real patient. |

## Privacy policy and support page

The Markdown in the Lab repo (`docs/privacy-policy/`) is the source of truth.
After editing it, regenerate and commit the HTML here:

```bash
node scripts/build-legal.mjs ~/Dev/Lab
git diff        # read it — these are public, Apple-reviewed pages
```

The script is dependency-free and throws on Markdown it does not understand,
rather than publishing a mis-rendered page. Never edit the generated HTML.
