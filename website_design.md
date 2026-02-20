# Flying Agents — Website Design Document

## Company Overview

**Flying Agents** is a defense technology company that develops autonomous pods for FPV drones. These pods transform standard first-person-view drones into autonomous platforms, unlocking capabilities that go beyond manual piloting.

---

## Brand Identity

### Tone & Personality
- **Authoritative** — We are a defense company. The tone is confident, precise, and professional.
- **Minimal** — Let the technology speak. No clutter, no fluff.
- **Tactical** — Language is direct, short, and deliberate. Think briefing, not brochure.

### Color Palette

| Role        | Color                  | Hex       | Usage                                      |
|-------------|------------------------|-----------|---------------------------------------------|
| Primary BG  | Near-Black             | `#0A0A0A` | Page backgrounds, hero sections             |
| Surface     | Dark Gray              | `#141414` | Cards, navbar, footer, elevated surfaces    |
| Border      | Charcoal               | `#2A2A2A` | Subtle dividers, card borders               |
| Primary     | Amber / Warm Orange    | `#E8872A` | CTAs, accent highlights, status indicators  |
| Primary Hover | Bright Amber         | `#F5A623` | Button hover states                         |
| Text Primary| Off-White              | `#F0F0F0` | Headlines, body text                        |
| Text Secondary | Muted Gray          | `#8A8A8A` | Subtitles, captions, secondary info         |

> **Why amber?** The product image reveals a warm amber/orange glow from the lower sensor — this becomes the brand's signature accent color, tying the digital experience directly to the physical product.

### Logo

The company has a custom **wordmark logo** — "FLYINGAGENTS" rendered in a geometric, angular typeface with sharp polygon-based letterforms. Two variants exist:

| Variant | File | Fill | Stroke | Use On |
|---------|------|------|--------|--------|
| White   | `assets/FlyingAgents_Logo_white.svg` | `#f4f4f3` (off-white) | `#000` (black) | **Dark backgrounds** — navbar, hero, footer |
| Black   | `assets/FlyingAgents_Logo_black.svg` | `#000` (black) | `#f4f4f3` (off-white) | Light backgrounds (if ever needed) |

> **Primary usage:** The **white variant** is the default across the site since the entire page is dark. The black variant exists for documents, light-mode contexts, or partner/press materials.

> **No separate logomark.** The wordmark IS the logo. Keep it at a reasonable size in the navbar (~140–180px wide) and slightly larger in the footer.

### Typography

| Role       | Font                    | Weight      | Size (Desktop)   |
|------------|-------------------------|-------------|------------------|
| Headlines  | **Inter** (or Rajdhani) | 700 / Bold  | 48–72px          |
| Subheads   | Inter                   | 500 / Medium| 20–28px          |
| Body       | Inter                   | 400 / Regular| 16–18px         |
| Captions   | Inter                   | 400         | 13–14px          |
| Monospace  | JetBrains Mono          | 400         | 14px (specs/data)|

> Rajdhani is an alternative display font that gives a more tactical/military feel if desired. Note: the logo wordmark already has a strong geometric/angular character — the body font should complement it without competing. Inter's clean neutrality works well as a counterbalance.

---

## Home Page Design

### Structure (Top → Bottom)

```
┌─────────────────────────────────────────────┐
│  NAVBAR                                     │
├─────────────────────────────────────────────┤
│  HERO SECTION (full viewport)               │
│  Product image + headline + CTA             │
├─────────────────────────────────────────────┤
│  VALUE PROPOSITION STRIP                    │
│  3 key stats / facts in a row               │
├─────────────────────────────────────────────┤
│  PRODUCT OVERVIEW                           │
│  What is the pod? Image + description       │
├─────────────────────────────────────────────┤
│  CAPABILITIES SECTION                       │
│  Grid of autonomous features                │
├─────────────────────────────────────────────┤
│  HOW IT WORKS                               │
│  3-step visual flow                         │
├─────────────────────────────────────────────┤
│  CALL TO ACTION / CONTACT                   │
│  "Request a Demo" or "Get in Touch"         │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
└─────────────────────────────────────────────┘
```

---

### 1. Navbar

- **Position:** Fixed top, transparent over hero → solid `#141414` on scroll.
- **Left:** White SVG wordmark logo (`FlyingAgents_Logo_white.svg`), ~140–180px wide, vertically centered.
- **Right:** Nav links — `Product` · `Technology` · `About` · `Contact`
- **Far Right:** CTA button — `Request a Demo` (amber, small, pill-shaped).
- **Style:** Minimal height (~64px). No unnecessary decoration. Subtle bottom border `#2A2A2A` when solid.

---

### 2. Hero Section

> This is the most important section. It must feel cinematic and high-stakes.

- **Layout:** Full viewport height (`100vh`). Centered content.
- **Background:** The product image (`final_product_on_10inch_drone.png`) — positioned as a large, centered visual with the dark background naturally blending into the page's black.
- **Image Treatment:** The image's existing dark/dramatic studio lighting works perfectly. No overlay needed — the natural black background IS the page background.
- **Headline:**  
  ```
  AUTONOMOUS PODS
  FOR FPV DRONES
  ```
  Large, bold, uppercase. Positioned above or beside the product image.

- **Subtitle:**  
  ```
  Transforming manual drones into autonomous combat platforms.
  ```
  Muted gray, lighter weight. One line below the headline.

- **CTA Button:**  
  `Learn More` — amber background, dark text, rounded corners.  
  Optionally a secondary ghost button: `Watch Demo →`

- **Scroll Indicator:** A subtle animated chevron (↓) or thin line at the bottom center, hinting to scroll.

- **Motion:** 
  - Headline fades in from left (0.6s delay).
  - Subtitle fades in (0.9s delay).
  - Product image subtle scale-up from 0.95 → 1.0 on load.
  - Optional: very slow parallax drift on the product image as user scrolls.

---

### 3. Value Proposition Strip

- **Layout:** Horizontal row of 3 key metrics/statements on a slightly elevated surface (`#141414`).
- **Style:** Each item has a large amber number/icon + short descriptor.
- **Content examples:**

| Metric              | Descriptor                          |
|----------------------|-------------------------------------|
| `AUTONOMOUS`        | Full mission autonomy from takeoff to strike |
| `PLATFORM AGNOSTIC` | Compatible with standard FPV frames |
| `FIELD READY`       | Ruggedized for real-world deployment|

- **Dividers:** Thin vertical lines (`#2A2A2A`) between items.

---

### 4. Product Overview

- **Layout:** Two-column. Image left, text right (or reversed on mobile).
- **Image:** A second angle or close-up of the pod (can reuse/crop the hero image for now).
- **Heading:** `The Pod`
- **Body Text:** 2–3 short paragraphs explaining what the pod is, how it attaches to an FPV drone, and why it matters.
- **Bullet points** (with amber dot indicators):
  - Plug-and-play integration
  - Onboard AI processing
  - Real-time target acquisition
  - Lightweight, no flight performance compromise
- **Optional:** A small specs table (weight, dimensions, power draw).

---

### 5. Capabilities Section

- **Layout:** 2×2 or 3-column grid of feature cards.
- **Card style:** Dark surface (`#141414`), subtle border (`#2A2A2A`), rounded corners (8px).
- **Each card:**
  - Icon (line-style, amber) or small illustration.
  - Feature title (bold, white).
  - 1–2 sentence description (muted gray).
- **Capabilities to highlight:**
  - 🎯 **Autonomous Navigation** — GPS-denied flight path execution.
  - 👁️ **Target Recognition** — AI-driven object detection and classification.
  - 📡 **Beyond Line of Sight** — Operate without continuous pilot input.
  - 🔒 **Encrypted Comms** — Secure data link between pod and ground station.
  - ⚡ **Rapid Deployment** — Mount in under 60 seconds, no tools required.
  - 🧠 **Edge AI Processing** — All computation on-device, no cloud dependency.

> *Note: Adjust these capabilities to match your actual product features.*

---

### 6. How It Works

- **Layout:** Horizontal 3-step process with connecting lines.
- **Style:** Step number in large amber text, title in white, description in gray.
- **Steps:**

| Step | Title          | Description                                    |
|------|----------------|------------------------------------------------|
| 01   | **Mount**      | Attach the pod to any compatible FPV frame.    |
| 02   | **Configure**  | Set mission parameters via the ground station. |
| 03   | **Launch**     | The drone executes autonomously.               |

- **Visual:** A thin horizontal line connecting the three steps, with amber dots at each step. Animates on scroll (line draws itself, dots pulse in sequence).

---

### 7. Call to Action / Contact

- **Layout:** Full-width section, centered text.
- **Background:** Very subtle gradient from `#0A0A0A` to `#0E0E0E`, or a faint radial glow (amber, very low opacity) behind the CTA.
- **Heading:** `Ready to see it in action?`
- **Subtext:** `Get in touch with our team for a private demonstration.`
- **Button:** `Request a Demo` — large, amber, prominent.
- **Secondary:** `contact@flying-agents.com` text link below.

---

### 8. Footer

- **Background:** `#0A0A0A` with top border `#2A2A2A`.
- **Layout:** 3-column.
  - **Col 1:** White SVG wordmark logo (`FlyingAgents_Logo_white.svg`, slightly larger than navbar) + one-line tagline.
  - **Col 2:** Links — Product · Technology · About · Contact · Careers.
  - **Col 3:** Legal — Privacy Policy · Terms of Service.
- **Bottom bar:** `© 2026 Flying Agents. All rights reserved.` (small, muted gray).

---

## General Design Principles

1. **Black dominates.** At least 80% of the visible page should be black/near-black. Color is used surgically.
2. **The amber accent is rare.** Only CTAs, icons, active states, and key highlights use it. Never large amber areas.
3. **Whitespace is generous.** Sections breathe. Padding between sections: 120–160px desktop, 80px mobile.
4. **Text is sparse.** Headlines over paragraphs. Bullet points over essays. Every word earns its place.
5. **Images are cinematic.** Dark backgrounds, dramatic lighting, studio-quality. No stock photos.
6. **Animation is subtle.** Fade-ins on scroll, soft parallax, gentle hover lifts. Nothing flashy or playful.
7. **Mobile-first responsive.** Stacks gracefully. Hamburger menu on mobile. Hero image scales/repositions.

---

## Technical Stack (Recommended)

| Layer       | Technology        | Reason                                          |
|-------------|-------------------|-------------------------------------------------|
| Framework   | **Astro** or Next.js | Static-first, fast, SEO-friendly              |
| Styling     | **Tailwind CSS**  | Utility-first, fast iteration, dark theme native |
| Animations  | **Framer Motion** or AOS | Scroll-triggered animations                |
| Hosting     | **Vercel** or Cloudflare Pages | Fast CDN, easy deploys             |
| Font        | Google Fonts (Inter) | Free, performant, professional               |

---

## Assets Needed

- [x] Product hero image (`assets/final_product_on_10inch_drone.png`)
- [x] Logo — white variant for dark backgrounds (`assets/FlyingAgents_Logo_white.svg`)
- [x] Logo — black variant for light contexts (`assets/FlyingAgents_Logo_black.svg`)
- [ ] Additional product angles (optional, can crop hero for now)
- [ ] Capability icons (line-style icon set)
- [ ] Favicon (derived from logo letterforms or amber dot)
- [ ] Open Graph image for social sharing

---

## Next Steps

1. ✅ Finalize this design document.
2. 🔲 Set up the project (Astro + Tailwind).
3. 🔲 Build the home page — section by section.
4. 🔲 Add animations and polish.
5. 🔲 Responsive testing.
6. 🔲 Deploy to staging.
