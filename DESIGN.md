---
name: Facet Software
description: The Ward Notebook. Warm paper, ink and a serif voice for clinical software, with real objects laid on the page.
colors:
  paper: "#F7F6F1"
  ink: "#15201B"
  muted: "#5C6660"
  rule: "#D9D8CF"
  ward-green: "#1F6B52"
  night-paper: "#101512"
  night-ink: "#ECEAE2"
  night-muted: "#9BA39D"
  night-rule: "#2A322D"
  ward-mint: "#7FD1B0"
  note-paper: "#FBFAF4"
  note-margin: "#E7A3A0"
  app-surface: "#E8EBEA"
  app-teal: "#336F6C"
  flag-high: "#DC2626"
  flag-low: "#2563EB"
typography:
  display:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(44px, 7.4vw, 94px)"
    fontWeight: 400
    lineHeight: 1.01
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(36px, 4.6vw, 56px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 500
rounded:
  note: "10px"
  icon: "12px"
  card: "16px"
  panel: "24px"
  device: "38px"
  pill: "999px"
spacing:
  gutter: "32px"
  gutter-phone: "20px"
  column-gap: "56px"
  section: "72px"
  section-phone: "52px"
  page-max: "1080px"
components:
  text-link:
    textColor: "{colors.ink}"
  store-badge:
    height: "48px"
  device-frame:
    backgroundColor: "{colors.app-surface}"
    rounded: "{rounded.device}"
    width: "310px"
  chase-note:
    backgroundColor: "{colors.note-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.note}"
    width: "330px"
  step-card:
    backgroundColor: "{colors.app-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    height: "300px"
  app-card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  assurance-tick:
    backgroundColor: "{colors.ward-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "22px"
---

# Design System: Facet Software

## Overview

**Creative North Star: "The Ward Notebook"**

The site reads like a well-kept notebook on a ward: warm paper, dark ink, a serif voice for what matters and plain sans for everything else. Pages are quiet and editorial. Hairline rules separate sections, and type does the work that boxes and colour do on most product sites. Against that calm page, real objects sit on top: the phone showing DeltaLab, a ruled paper to-do list with a red margin line, the app's own cards. They're the only things that lift off the page.

The site serves the Facet company page and the DeltaLab product pages, and it follows the visitor's system theme. By day it's paper and ink; at night it inverts to a deep green-black with mint in place of the green. Clinical colour (red high, blue low) appears only inside depictions of the app, never as decoration.

**Key Characteristics:**
- A warm paper ground with near-black green ink; one accent, Ward Green.
- A Newsreader serif for headlines, with one italic accent word in Ward Green; IBM Plex Sans for reading; IBM Plex Mono for labels and data.
- A flat page with hairline rules; only real objects cast shadows.
- Light and dark from `prefers-color-scheme`, with no toggle.
- Self-hosted fonts and no third-party requests.

## Colors

A two-colour world of paper and ink with one green, inverted for night; the clinical colours belong to the app, not the page.

### Primary
- **Ward Green** (`ward-green`): links' underline, the italic accent word in headlines, assurance ticks, focus rings and text selection. By night it becomes **Ward Mint** (`ward-mint`).

### Neutral
- **Ward Paper** (`paper`): the page background by day.
- **Chart Ink** (`ink`): headlines, body text, and the frame around device screenshots by day.
- **Pencil Grey** (`muted`): secondary text, captions, labels and footer.
- **Hairline** (`rule`): section dividers, list separators, and the 1px ring round app icons.
- **Night Shift** (`night-paper`), **Night Ink** (`night-ink`), **Night Pencil** (`night-muted`), **Night Hairline** (`night-rule`): the same roles in the dark theme.

### Object colours (fixed in both themes)
- **Note Paper** (`note-paper`) with **Margin Red** (`note-margin`): the ruled to-do note. It's a physical object, so it stays light at night.
- **App Surface** (`app-surface`), **App Teal** (`app-teal`), **Flag High** (`flag-high`), **Flag Low** (`flag-low`): used only in drawings of DeltaLab's own screens, matching the app.

### Named Rules
**The One Green Rule.** Ward Green is the page's only accent. It marks links, one word per headline, ticks and focus. Never use it for large fills or backgrounds.

**The Flags Belong to the App Rule.** Red and blue mean high and low results. They appear only inside screenshots and drawings of the app, never as page decoration, so the clinical meaning stays intact.

## Typography

**Display Font:** Newsreader (with Georgia, Times New Roman)
**Body Font:** IBM Plex Sans (with the system sans)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, Menlo)

**Character:** A literary serif that sounds considered, against a clear, technical sans that reads easily on a phone; the mono is the lab's voice, for labels and values.

### Hierarchy
- **Display** (400, clamp 44–94px, line-height 1.01, −0.025em): one per page, the hero headline. Balanced wrapping and at most about 11.5em wide.
- **Headline** (400, clamp 36–56px, line-height 1.02, −0.02em): section headings. Sections on the DeltaLab page use 34–76px variants of the same face.
- **Title** (500, 23px, line-height 1.25): question headings in FAQs and sub-headings in legal documents.
- **Lede** (400, 20px, line-height 1.55): the paragraph under a headline. Keep it to about 34em.
- **Body** (400, 17px, line-height 1.65): reading text, about 36em per line.
- **Label** (500, 12px, 0.08em tracking, uppercase): small mono labels such as "For iPhone and Android" and the footer.
- **Data** (500 mono, 12–20px): lab values, codes and hospital numbers inside app drawings.

### Named Rules
**The One Italic Word Rule.** A headline may set one word, usually the last, in Newsreader italic and Ward Green ("Stop chasing *bloods.*", "Your next round, *sorted.*"). Never a whole headline, never two words.

**The Mono Means Data Rule.** Plex Mono is for labels, codes and values, never for sentences or headings.

## Layout

A single centred column, up to 1080px wide, with 32px side gutters (20px on phones). Sections stack vertically, each opened by a hairline rule and given generous space (64–88px top and bottom, 52–64px on phones).

The section patterns are:
- **Hero:** copy on the left (about 1.15 parts), the phone on the right (about 0.85), 56px apart.
- **Story:** one claim beside one screen, the two halves 64px apart, with the sides alternating down the page.
- **Split:** the headline in the left column (0.9 parts) and the prose in the right (1.1 parts), 56px apart.
- **Three steps:** three equal cards in a row, 24px apart.

There is one breakpoint, at 760px. Below it every grid becomes a single column, the phone and cards are centred at about 72–78% width, and the chase note overlaps the phone's lower edge instead of reaching into the copy. Between 761 and 1099px the note stays inside the column gap.

## Elevation & Depth

The page is flat. Depth comes from hairline rules and from overlap. Shadows exist only on objects that would cast one in life, and they are always soft, offset downward and tinted with the ink's green-black, never grey.

### Shadow Vocabulary
- **Lifted object** (`box-shadow: 0 18px 40px -12px rgba(16,24,20,.45), 0 2px 6px rgba(16,24,20,.12)`): the paper note, laid over the phone.
- **Card on the page** (`box-shadow: 0 22px 44px -18px rgba(16,24,20,.45), 0 2px 6px rgba(16,24,20,.1)`): the Scan, Tap and Sorted cards.
- **App surface** (`box-shadow: 0 2px 8px rgba(6,20,18,.06)`): white cards inside app drawings, as the app draws them.
- **Hairline ring** (`box-shadow: 0 0 0 1px` Hairline): app icons, so their light tile holds its edge on paper.

### Named Rules
**The Flat Page, Lifted Objects Rule.** Never put a shadow on a section, a text block or a button. If it isn't a phone, a sheet of paper or a piece of the app, it sits flat.

## Shapes

Corners are rounded the way real objects are, and the page itself has none: sections, rules and text blocks are square-edged.
- Phones get a 38px radius with a 7px Chart Ink bezel (5px on smaller phones).
- Panels get 24px.
- App cards get 14–16px.
- The paper note gets 10px, and the app icon 12px.
- Pills (999px) are for small chips and the code read-out.
- Circles mark flags and ticks.

The note and the scanned tube tilt slightly (−2.5° and −4°); nothing else rotates.

## Components

### Text links
Quiet and underlined: ink-coloured text with a 1.5px Ward Green underline, offset 5px. On hover the text turns Ward Green. "Read more" links carry a green arrow after them, and back links one before.
- **Focus:** a 2px Ward Green outline, offset 4px.

### Store badges
The official Apple and Google artwork, unmodified, App Store first, both at a visible height of 48px. The Play badge's transparent margin is pulled back so the two line up. Its focus ring hugs the visible badge.

### Device frame
A screenshot inside a 7px Chart Ink bezel (a dark green-grey, #2F3934, by night) with a 38px radius, on App Surface while it loads. It's the page's main image unit, used one per story.

### Paper note (signature)
A Note Paper card with faint ruling every 52px, a Margin Red margin line, and a slight tilt. Each row has a Ward Green tick box, a struck-through job ("Chase U&E, bed 4") and a white result chip in mono. Where the browser supports scroll-driven animation, each line is struck as the note rises up the screen; elsewhere it animates once. With reduced motion it appears already finished.

### Step cards
Three 24px-radius panels at 300px tall, each under a serif step word ("Scan.", "Tap.", "Sorted."). They draw the app's real UI in its own colours: a dark camera view with mint corner brackets, then white patient and result cards on App Surface.

### Assurance list
Up to three short lines, each led by a 22px Ward Green circle with a paper-coloured tick. They go under a hero lede, for the reassurances a visitor needs before downloading.

### Navigation
A wordmark on the left and plain muted text links on the right, at 14px, above a hairline rule. On phones only the essential link stays.

### FAQ
Questions as Title-weight serif headings, with answers as body text below. Always fully visible, never collapsed, because some answers are required statements.

## Do's and Don'ts

### Do:
- **Do** keep the page flat and let only phones, paper and app drawings cast the soft green-black shadows listed above.
- **Do** use one italic Ward Green word per headline at most.
- **Do** keep red and blue for high and low results inside app depictions.
- **Do** use Plex Mono only for labels, codes and values.
- **Do** design both themes: every new colour needs a night value, unless it's a physical object (paper, the app) that stays fixed.
- **Do** give every animation a reduced-motion state that shows the finished result.
- **Do** self-host every font and asset.

### Don't:
- **Don't** add shadows, fills or borders to sections, text blocks or buttons.
- **Don't** introduce a second accent colour, gradients or gradient text.
- **Don't** set whole headlines in italic or in Ward Green.
- **Don't** restyle or recolour the official store badges.
- **Don't** load fonts, scripts or images from a third-party host.
- **Don't** show a real patient anywhere. Screenshots and drawings use the fictional demo cast only.
