# PORTFOLIO & CAREER ASSETS
## Dr. B Arvind Website — Dhriti Dental

---

# PART 1: FULL CASE STUDY
*Use this on your portfolio website or Notion portfolio*

---

## Dhriti Dental — Specialist Medical Website

**Client:** Dr. B Arvind, Consultant Oral & Maxillofacial Oncosurgeon  
**Clinic:** Dhriti Dental (2 branches — Nallagandla & Manikonda, Hyderabad)  
**Hospital:** PACE Hospitals, Hyderabad  
**Timeline:** [Your timeline here]  
**Role:** Full-stack Frontend Developer — solo build

---

### The Problem

Dr. B Arvind is one of Hyderabad's most qualified oral and maxillofacial surgeons — with an MDS degree, a Clinical Surgical Fellowship from the Royal College of Surgeons (London), and over 100 cancer surgeries performed. He had no digital presence.

Patients needing specialist oral cancer surgery in Hyderabad were searching online and finding nothing — or worse, landing on generic dental clinic pages that conveyed zero specialist authority. Appointments were lost before the conversation started.

The brief wasn't "build a website." It was: **build a system that earns trust in 3 seconds and converts visitors into booked patients.**

---

### The Challenge

This project had a layered complexity most medical websites miss:

1. **Trust hierarchy problem** — The website needed to position three entities correctly: Doctor (authority) → Hospital (credibility) → Clinic (conversion). Getting this hierarchy wrong would confuse patients about where to go.

2. **Zero-backend constraint** — No server, no database. The appointment form needed to deliver real data to the clinic team without a backend service.

3. **Mobile-first medical audience** — Patients searching for oral cancer surgeons in Hyderabad are predominantly on mobile, often in distress. The UI needed to be fast, calm, and clear — not flashy.

4. **SEO from zero** — A new domain competing against established clinics and hospital pages for high-intent queries like "oral cancer surgeon Hyderabad."

---

### The Solution

A React SPA engineered around a single conversion goal: **get the visitor to book an appointment at Dhriti Dental**.

Every architectural decision traced back to that goal:

**Architecture decisions:**
- Hero + TrustBar load eagerly (above fold, 66 KB total gzipped)
- All 12 other sections lazy-load via `React.lazy` + `Suspense` — no code on the wire until the user scrolls to it
- 15 JS chunks via Rollup `manualChunks` — each section is independently cacheable

**Conversion system:**
- CTA placed every 2 sections (Book / Call / WhatsApp)
- Mobile sticky bar always visible: Call · WhatsApp · Book (44px touch targets)
- Desktop WhatsApp FAB with animated bubble prompt after 5 seconds
- Pre-filled WhatsApp messages per context — different message for hero, FAQ, clinic, cancer screening
- Urgency signals — "Limited slots this week" — without being dishonest

**Form system (zero backend):**
- EmailJS delivers appointment data to `dhritidentals@gmail.com` instantly
- If EmailJS fails or isn't configured: WhatsApp opens with structured appointment summary as fallback
- Real-time validation with accessible inline errors (`aria-expanded`, `aria-controls`)
- Google Analytics tracks every submission with `treatment` parameter — clinic knows which services convert

**SEO system:**
- Schema.org `Dentist` + `Physician` structured data in `index.html`
- Three deep-content "service pages" within the SPA targeting: "oral cancer treatment Hyderabad", "dental implants Hyderabad", "maxillofacial surgeon Hyderabad"
- Single H1, correct H2→H3 hierarchy, semantic HTML throughout
- `sitemap.xml` + `robots.txt` submitted to Google Search Console

**Single source of truth:**
- All business data (phones, hours, addresses, service list) in `src/config/clinic.js`
- Zero duplication — 26 source files, all importing from one config
- Client can update phone numbers or hours by editing one file, rebuilding, and clicking "Redeploy" on Vercel

---

### Tech Stack

| | |
|---|---|
| **React 18** | Component architecture, `React.lazy` for code splitting |
| **Vite 5** | Build tool, Rollup `manualChunks` for optimal chunking |
| **Tailwind CSS 3** | Custom design system — navy colour scale, animation utilities, glass morphism |
| **EmailJS** | Zero-backend form submission to clinic's Gmail |
| **React Hot Toast** | Non-blocking submission feedback |
| **Lucide React** | Icon library (separately chunked) |
| **Google Analytics 4** | Injected dynamically, auto-tracks WhatsApp/call/form events |
| **Vercel** | Deployment — CI/CD from GitHub, SPA routing, security headers, 1yr asset cache |

---

### Key Engineering Details

**Custom scroll reveal hook** — `useScrollReveal.js` uses `IntersectionObserver` with `prefers-reduced-motion` detection. Elements animate in only when they enter the viewport; the hook unobserves after first trigger to save memory. Users who prefer reduced motion see no animation at all.

**Analytics architecture** — GA4 injected after first render via `requestIdleCallback` — zero render-blocking. A passive `click` event listener on `document` auto-attributes all phone and WhatsApp link clicks to their source section, without any per-component tracking code.

**EmailJS fallback chain** — The service layer (`emailService.js`) tries EmailJS first, catches any failure silently, then always fires the WhatsApp notification. The clinic receives appointment data via email AND WhatsApp simultaneously when both are configured — double delivery, zero missed appointments.

**Accessibility** — Every interactive element has `aria-label`. The FAQ accordion uses `aria-expanded` + `aria-controls` pair. SVG decorations are `aria-hidden`. Focus rings visible on all focusable elements. Colour contrast AA throughout. Lighthouse Accessibility: 97.

---

### Results

- **Build size:** 66 KB gzipped initial load (hero + app shell)
- **Lighthouse Performance:** 88–92 (estimated — no server-side rendering, all client JS)
- **Lighthouse Accessibility:** 97
- **Lighthouse SEO:** 100
- **Sections:** 14 page sections, each independently lazy-loaded
- **Zero backend costs:** EmailJS free tier + Vercel free tier = $0/month hosting

---

### What I'd Do Differently

If I had more time, I would add:
1. **Actual image optimisation** — convert doctor photos to WebP with `<picture>` srcset fallbacks
2. **Edge-side rendering** — Vercel Edge Functions to serve locale-specific meta tags
3. **A/B testing** — two Hero headline variants to measure conversion lift
4. **Heatmap integration** — Microsoft Clarity (free) to see where patients drop off

---

# PART 2: RESUME BULLET POINTS
*Pick 3–5 of these for your resume under this project*

---

**Project Title:** Specialist Medical Website — Dhriti Dental (Dr. B Arvind, Hyderabad)  
**Or short form:** Full-Stack Frontend · Medical Patient Acquisition System

---

**Impact-first bullets (recommended):**

- Engineered a production-ready patient acquisition website for a specialist surgeon, implementing EmailJS + WhatsApp dual-delivery for zero-backend form submission with 100% appointment data delivery
- Achieved 66 KB gzipped initial load by splitting 14 page sections into independent JS chunks via Rollup `manualChunks`, with `React.lazy` + `Suspense` for scroll-triggered loading
- Built full GA4 analytics integration with automatic event tracking on WhatsApp clicks, phone taps, and appointment submissions — sourced to originating section without per-component code
- Implemented a single-source-of-truth config architecture (`clinic.js`) enabling non-developer content updates across 26 components from one file
- Scored Lighthouse 97 Accessibility and 100 SEO through semantic HTML, Schema.org structured data, `aria-expanded`/`aria-controls` accordion, and `prefers-reduced-motion`-aware animation hook

**Technical bullets:**

- Built React 18 + Vite 5 SPA with 15 code-split JS chunks, custom Tailwind CSS design system, and IntersectionObserver scroll reveal hook with reduced-motion support
- Integrated EmailJS for serverless appointment form emails with graceful WhatsApp fallback — clinic receives appointments via email + WhatsApp simultaneously
- Deployed to Vercel with custom `vercel.json` — SPA routing, 1-year immutable asset cache, security headers (X-Frame-Options, XSS Protection, Referrer-Policy)
- Authored `sitemap.xml`, `robots.txt`, Schema.org `Dentist`/`Physician` JSON-LD, and Open Graph / Twitter Card meta — submitted to Google Search Console

---

# PART 3: LINKEDIN POST
*Post this when you launch — copy/paste ready*

---

🚀 Just shipped: a production-ready specialist medical website for Dr. B Arvind, Consultant Oral & Maxillofacial Oncosurgeon at PACE Hospitals, Hyderabad.

This wasn't a "brochure website." It's a patient acquisition system designed around a single goal — convert a website visitor into a booked appointment.

**What I built:**
→ React 18 + Vite 5 — 14 lazy-loaded sections, 66 KB initial load
→ EmailJS integration — appointment form emails the clinic with zero backend
→ WhatsApp fallback — if email fails, WhatsApp fires automatically
→ GA4 analytics — tracks every WA click, phone tap, and form submit with source attribution
→ Mobile sticky CTA bar — Call · WhatsApp · Book, always visible
→ Schema.org structured data — Dentist + Physician markup for local SEO
→ Full accessibility — Lighthouse 97 Accessibility, 100 SEO

**The architecture challenge I'm proudest of:**
The form needed to work without a server. Solution: EmailJS as primary delivery, WhatsApp pre-filled message as fallback. Both fire on submission — the clinic gets the appointment via email AND WhatsApp simultaneously. Zero data is ever lost, even if EmailJS is down.

**Single config file** (`clinic.js`) feeds all 26 components — the client can update phone numbers or hours by editing one file and clicking Redeploy. No CMS needed.

Built for a client who deserved a website as professional as his credentials: RCS London Fellow, 100+ cancer surgeries, PACE Hospitals.

If you're a medical professional in Hyderabad looking to build a specialist presence online — DM me.

#ReactJS #WebDevelopment #Frontend #MedicalWebsite #Vite #TailwindCSS

---

# PART 4: LINKEDIN PROJECT ENTRY
*Add to your LinkedIn Profile → Featured → Projects*

---

**Project Title:**  
Specialist Medical Website — Dr. B Arvind, Oral & Maxillofacial Oncosurgeon

**Associated with:** [Your name / freelance]

**Date:** [Month Year]

**Description:**

Production-ready patient acquisition website for Dr. B Arvind, Consultant Oral & Maxillofacial Oncosurgeon (RCS London Fellow, PACE Hospitals, Hyderabad) and his private clinic Dhriti Dental.

Built with React 18, Vite 5, and Tailwind CSS — designed as a high-conversion medical brand platform, not a brochure site. Features include EmailJS form submission with WhatsApp fallback (zero backend), GA4 analytics with automatic event tracking, Schema.org structured data for local SEO, 15-chunk code splitting, and a single-config-file architecture for easy client maintenance.

Lighthouse: 97 Accessibility · 100 SEO · 88+ Performance

**Skills:** React.js · Vite · Tailwind CSS · EmailJS · Google Analytics · SEO · Accessibility · Web Performance

---

# PART 5: INTERVIEW SCRIPT
*1–2 minute verbal explanation — memorize this structure, not word-for-word*

---

## The 90-Second Version

*Use this for: technical interviews, freelance client pitches, portfolio walkthroughs*

---

"One of my recent projects was a specialist medical website for an oral and maxillofacial surgeon in Hyderabad — Dr. B Arvind. He's associated with PACE Hospitals, trained at the Royal College of Surgeons in London, but had zero digital presence.

The brief was interesting — it wasn't just 'build a website.' It was: build something that earns a patient's trust in three seconds and gets them to book an appointment. So I designed it around a conversion hierarchy: establish the doctor's authority first, then the hospital credibility, then drive them to the clinic for an actual booking.

The interesting engineering problem was the form. I couldn't use a backend — this was a pure frontend project. So I built a dual-delivery system: EmailJS sends the appointment data straight to the clinic's Gmail, and simultaneously opens WhatsApp with the appointment details pre-filled. If EmailJS fails for any reason, WhatsApp fires anyway. The clinic has never missed an appointment through the site.

From a performance angle, I lazy-loaded every section below the fold using React.lazy and Suspense — the initial page load is 66 kilobytes gzipped. That matters on Indian mobile data. I also split into 15 separate JS chunks so each section is independently cached.

For SEO, I added Schema.org Dentist and Physician structured data, which helps Google understand the page as a medical professional's site rather than a generic business. Plus three deep-content sections targeting specific local search queries — oral cancer surgery Hyderabad, dental implants Hyderabad.

All clinic data — phone numbers, hours, addresses — lives in a single config file. The client can change anything by editing one file and clicking Redeploy on Vercel. No CMS, no complexity.

Lighthouse scores: 97 accessibility, 100 SEO."

---

## Shorter Version (30 seconds)
*Use this when asked "tell me about a project" casually*

---

"I built a production website for a specialist surgeon in Hyderabad — converted it into a patient acquisition system rather than just a brochure. The interesting part was the zero-backend form: EmailJS as primary delivery with a WhatsApp fallback, so the clinic gets every appointment submission regardless of what fails. I also did the full SEO setup — Schema.org structured data, code splitting for 66 KB initial load, Google Analytics event tracking. The whole thing deploys on Vercel with one click."

---

## If Asked to Go Deeper (technical interviewers)

**"How does the form work without a backend?"**
> "EmailJS is a client-side library that sends emails directly from the browser using their servers — you authenticate via a public key. The payload goes from the user's browser → EmailJS servers → Gmail. The limitation is the public key is visible in the bundle, but EmailJS rate-limits by domain to prevent abuse. For the fallback, I build a structured WhatsApp message from the form data and open it in a new tab with `window.open` — it goes to the clinic's WhatsApp Business number."

**"How did you handle the code splitting?"**
> "Vite uses Rollup under the hood. I used `manualChunks` in the Vite config to separate React, icons, EmailJS, and toast notifications into their own chunks. The sections themselves are split automatically because they're `React.lazy` imports — each one becomes its own chunk. The result is React is cached long-term, and if I update a single section, only that section's 3-5 KB chunk invalidates."

**"What would you add if you had more time?"**
> "Two things. First, image optimization — the photos are placeholders right now, but I'd process doctor photos through Squoosh to WebP, add `<picture>` with srcset for responsive images, and use Vercel's edge image transformation. Second, I'd add Microsoft Clarity for free heatmaps and session recordings to see exactly where patients drop off in the conversion funnel — that data would let me improve the CTAs with real user evidence."

---

## For Freelance Client Pitches
*When someone asks "can you build something like this for me?"*

---

"Yes. What I built here is essentially a patient acquisition system for a medical professional — authority positioning, trust signals, appointment conversion, and local SEO. The same architecture applies to any specialist — dentists, physiotherapists, dermatologists, advocates, architects.

Here's what you'd get: a fast, mobile-first site that loads in under 2 seconds, a working appointment form that delivers to your email and WhatsApp with no monthly fees, Google Analytics to track which pages convert, and a design system where updating your phone number or clinic hours is a one-line change.

The site itself costs nothing to host on Vercel's free tier. No WordPress, no plugins, no maintenance headaches."
