---
name: design
description: Visual design for the personal website. Read before building or changing the page.
---

## Direction: clean editorial

A calm, typographic page, like a well designed magazine profile. The type does the work. No cards, no stock icons, no gradients.

- Fonts: Geist for text and Geist Mono for small labels, from Google Fonts with a `<link>` tag (`https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap`).
- Colors, light: background `#FAFAF7`, text `#111111`, secondary text `#6B6B6B`, hairlines `#E6E6E1`. Dark: background `#0C0C0D`, text `#EDEDEA`, secondary `#8A8A86`, hairlines `#232325`. One accent, `#FF4F00`, used only for link hover and the focus ring.
- Hero: the name very large (`clamp(56px, 11vw, 128px)`, weight 500, letter-spacing `-0.04em`, line-height 0.95). Bio under it at 20 to 22 px, about 34ch wide, in the secondary color.
- Section labels ("Projects", "Contact") in Geist Mono, 12 px, uppercase, letter-spacing `0.08em`, secondary color.
- Projects are full-width rows split by 1 px hairlines, not cards: title on the left (22 px, weight 500), the sentence in the middle, and "View" on the right. On hover the row's title turns the accent color.
- The sample-projects note is one line of small secondary text under the Projects label.
- Contact: the email as a big link (32 to 40 px) and the GitHub link under it.
- Header: name initials or short name on the left, the theme button on the right as a small text pill ("Dark" / "Light") with a 1 px border.
- Max content width 1040 px, side padding 24 px on phones and 48 px on desktop. Big vertical space between sections (120 px on desktop, 72 px on phones).
- On load, fade the hero and sections up by 8 px over 300 ms, one after another. Respect `prefers-reduced-motion`.

States to screenshot: desktop light, desktop dark, phone light, phone dark, a project row on hover.

## Rules for every screen

- One clear visual direction, used everywhere. No default framework or browser look (no unstyled inputs, no default blue links, no stock Material purple).
- Sans-serif type only. Use a real type scale with a few sizes, not many. Large, confident headings; quiet secondary text.
- Mostly neutral colors plus one accent. Use color for meaning (selected, done, error), not decoration. No purple or pink.
- Even spacing on an 8 px grid. Generous margins. Line up edges.
- Every interactive element has hover (or pressed), focus and disabled states.
- Design the empty state, the error state and the full state, not just one.
- Small, quick motion (150 to 250 ms) when things appear, change or finish.
- Support light and dark appearance if the platform has it, and check both.

## Check before you open the pull request

1. Take screenshots of every screen and state in the list above.
2. Look at each one at full size. Fix anything that is misaligned, cramped, clipped, low contrast or looks unfinished.
3. Put the final screenshots in the pull request description.
