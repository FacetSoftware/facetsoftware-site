# facetsoftware.co.za

Static site for Facet Software (Pty) Ltd, served by GitHub Pages at
https://facetsoftware.co.za. Plain HTML/CSS, no build step for the pages
themselves. DNS is on Cloudflare. **A push to `main` deploys.**

| Path | What |
|---|---|
| `/` | Company page (`index.html`) |
| `/deltalab/` | DeltaLab product page |
| `/deltalab/privacy/`, `/deltalab/support/`, `/deltalab/terms/` | **Generated** — see below |
| `/deltalab/invite/` | Referral invite page (`?code=K7P2QX`). Static, `noindex`, and never calls the referral server; it removes the code from the address bar on load. Its Google Play link must match `buildPlayLink()` in the DeltaLab repo (`src/utils/referral/inviteLink.ts`), so change both together. `ANALYTICS_TOKEN` in `invite.js` turns on its Cloudflare Web Analytics visit counts (the exception to the rule on third-party requests above); empty it to switch them off. |
| `/.well-known/assetlinks.json` | Android App Links: lets DeltaLab open `/deltalab/invite` links directly. Holds the **Play app signing key**'s SHA-256, from Play Console → Protected with Play → Play Store protection → Protect app signing key. Add a fingerprint there if the signing key ever changes. |
| `/.well-known/apple-app-site-association` | iOS universal links: lets DeltaLab open `/deltalab/invite` links directly on iPhone. Lists the App ID `Y88AP2THKM.com.labloupe.app` (team ID + bundle ID). No file extension, no redirect; Apple's CDN fetches it, so after a change check `https://app-site-association.cdn-apple.com/a/v1/facetsoftware.co.za`. Needs an iOS build with `applinks:facetsoftware.co.za` (DeltaLab 1.2.4+). |
| `llms.txt`, `deltalab/index.md` | Plain-text versions for AI agents: a site summary with links, and a Markdown copy of the DeltaLab page (linked from it as `rel="alternate"`). **Update `deltalab/index.md` whenever the page's copy changes**, using the same wording. (Cloudflare's own Markdown for Agents conversion needs a Pro plan; this zone is Free.) |
| `robots.txt`, `sitemap.xml` | Crawl rules and the list of indexable pages. Add a new public page to the sitemap and bump a page's `<lastmod>` when its content changes; leave `noindex` pages (the invite page) out. |
| `site.css` | Shared stylesheet |
| `fonts/` | Self-hosted woff2 (SIL OFL 1.1, licences alongside). The site makes no third-party requests — keep it that way. One deliberate exception (owner decision, 2026-10-22): `/deltalab/invite/` loads Cloudflare Web Analytics (cookieless) after removing the referral code from the address; the DeltaLab privacy policy describes it under "Our website". |
| `img/og-*.png` | Link-preview cards (1200×630). Sources in `scripts/og/`; re-render with `node scripts/og/render.mjs ~/Dev/Lab` (borrows the Lab repo's puppeteer), or without puppeteer: `google-chrome-stable --headless=new --blink-settings=preferredColorScheme=1 --hide-scrollbars --window-size=1200,630 --screenshot=img/og-deltalab.png file://$PWD/scripts/og/deltalab.html`. Re-render after changing a screenshot the card shows. |
| `img/` | DeltaLab icon and screenshots. The screenshots are fictional demo data from the Lab repo's `appstore/screenshots/iphone-6.3/`, resized to 720 px wide WebP (`magick <png> -resize 720x -quality 82 -define webp:method=6 <webp>`); never add a capture of a real patient. |

## Privacy policy and support page

The Markdown in the Lab repo (`docs/privacy-policy/`) is the source of truth.
After editing it, regenerate and commit the HTML here:

```bash
node scripts/build-legal.mjs ~/Dev/Lab
git diff        # read it — these are public, Apple-reviewed pages
```

The script is dependency-free and throws on Markdown it does not understand,
rather than publishing a mis-rendered page. Never edit the generated HTML.
