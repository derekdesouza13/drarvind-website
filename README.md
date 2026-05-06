# Dr. B Arvind — Specialist Medical Website

<div align="center">

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4.4-orange?style=flat-square)
![License](https://img.shields.io/badge/license-Private-red?style=flat-square)
![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)

**Production-ready patient acquisition website for Dr. B Arvind, Consultant Oral & Maxillofacial Oncosurgeon, Hyderabad.**

[Live Demo](https://drbarvind.com) · [Book Appointment](https://drbarvind.com/#appointment) · [Dhriti Dental Clinic](https://drbarvind.com/#clinic)

</div>

---

## Overview

This is a full-stack frontend patient acquisition system designed around a single goal: **convert visitors into booked patients** while establishing the doctor as a top-tier specialist.

Built for **Dr. B Arvind** (MDS, RCS London Fellow, PACE Hospitals) and his private clinic **Dhriti Dental**, the site functions simultaneously as:

- 🏆 A **personal brand platform** — authority-first, specialist positioning
- 📅 A **booking funnel** — every section drives toward appointment conversion
- 🔍 An **SEO content hub** — ranking for high-intent medical queries in Hyderabad
- 📱 A **mobile-first experience** — sticky CTAs, WhatsApp integration, tap-optimized

---

## Features

### Conversion & UX
- ✅ Appointment booking form with **real EmailJS submission** + WhatsApp fallback
- ✅ **Sticky mobile bottom bar** (Call · WhatsApp · Book) always visible
- ✅ **Desktop WhatsApp FAB** with animated bubble prompt
- ✅ CTA placed every 2 sections — Book Appointment, Call Now, WhatsApp
- ✅ Pre-filled WhatsApp messages per context (hero, FAQ, clinic, cancer screening)
- ✅ **Form validation** — real-time inline errors, accessible error messages
- ✅ **Success state** — next steps, confirmation, direct clinic links

### Performance
- ✅ **Lazy loading** — Hero + TrustBar eager; all 12 other sections load on scroll
- ✅ **Code splitting** — 15 individual JS chunks, smallest 3KB gzipped
- ✅ **66 KB initial load** (gzipped) — fast on mobile data
- ✅ `loading="lazy"` + `IntersectionObserver` on all images
- ✅ Asset caching headers — 1 year immutable for JS/CSS

### SEO & Discoverability
- ✅ Full `<head>` — title, description, keywords, canonical URL
- ✅ Open Graph + Twitter Card tags
- ✅ **Schema.org structured data** — `Dentist`, `Physician`, `PostalAddress`, `OpeningHoursSpecification`
- ✅ Semantic HTML — `<main>`, `<nav>`, `<footer>`, `<article>`, `<address>`
- ✅ Correct H1 → H2 → H3 hierarchy (single H1 on page)
- ✅ `sitemap.xml` + `robots.txt` in `/public`
- ✅ Deep SEO content sections for "oral cancer treatment Hyderabad", "dental implants Hyderabad", "maxillofacial surgeon Hyderabad"

### Accessibility
- ✅ All interactive elements have `aria-label`
- ✅ FAQ accordion uses `aria-expanded` + `aria-controls`
- ✅ Keyboard navigable — visible focus rings
- ✅ `prefers-reduced-motion` respected in scroll animations
- ✅ Color contrast AA compliant throughout
- ✅ Decorative SVGs marked `aria-hidden="true"`

### Analytics & Tracking
- ✅ **Google Analytics 4** — injected dynamically, zero render-blocking
- ✅ Auto-tracks: WhatsApp clicks, phone call taps, appointment CTA clicks, form submits
- ✅ Event-level tracking with source attribution (which section triggered the conversion)

### Developer Experience
- ✅ **Single config file** (`src/config/clinic.js`) — all business data in one place
- ✅ Shared components — `WhatsAppIcon`, `LazyImage` — no duplication
- ✅ Custom `useScrollReveal` hook — `prefers-reduced-motion` aware
- ✅ `vercel.json` + `netlify.toml` pre-configured
- ✅ `.env.example` with full documentation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 (custom design system) |
| Email | EmailJS (zero-backend form submission) |
| Notifications | React Hot Toast |
| Icons | Lucide React |
| Analytics | Google Analytics 4 (GA4) |
| Fonts | Google Fonts — Playfair Display + DM Sans |
| Deployment | Vercel (primary) / Netlify (alternative) |
| SEO | Schema.org, Open Graph, sitemap.xml |

---

## Project Structure

```
src/
├── config/
│   └── clinic.js              ← Single source of truth — all business data
├── lib/
│   ├── emailService.js        ← EmailJS + WhatsApp submission + GA event helpers
│   └── analytics.js           ← GA4 init, auto link tracking
├── components/
│   ├── Navbar.jsx             ← Scroll-aware, active section detection, mobile drawer
│   ├── Footer.jsx             ← Schema.org markup, full site links
│   ├── StickyBar.jsx          ← Mobile bottom bar + desktop WhatsApp FAB
│   ├── WhatsAppIcon.jsx       ← Shared SVG component (zero duplication)
│   └── LazyImage.jsx          ← IntersectionObserver lazy load + shimmer placeholder
├── sections/                  ← 14 page sections
│   ├── Hero.jsx               ← ★ Eager loaded — animated entrance, floating badges
│   ├── TrustBar.jsx           ← ★ Eager loaded — count-up stats, scrolling strip
│   ├── About.jsx              ← Doctor story, credentials timeline
│   ├── WhyChoose.jsx          ← Differentiation cards
│   ├── Expertise.jsx          ← 8 specialty cards
│   ├── ConsultationPath.jsx   ← Hospital vs Clinic dual funnel
│   ├── Clinic.jsx             ← Dhriti Dental — branch cards, hours, maps
│   ├── Results.jsx            ← Before/after case studies
│   ├── Testimonials.jsx       ← 6 patient reviews with star ratings
│   ├── Blog.jsx               ← SEO content preview cards
│   ├── SeoContent.jsx         ← Deep service pages for local SEO ranking
│   ├── FAQ.jsx                ← Accessible accordion, 8 questions
│   ├── Appointment.jsx        ← Form with EmailJS + WhatsApp + toast + success state
│   └── FinalCTA.jsx           ← Urgency-driven closing section with branch info
├── hooks/
│   └── useScrollReveal.js     ← IntersectionObserver scroll animations
├── App.jsx                    ← Lazy imports, Suspense boundaries, section order
├── main.jsx                   ← Entry point, analytics boot
└── index.css                  ← Design tokens, animations, utility classes
```

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/yourusername/drarvind-website.git
cd drarvind-website

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Edit .env.local — add EmailJS keys + GA ID (see Setup section)

# 4. Dev server
npm run dev
# → http://localhost:5173

# 5. Build for production
npm run build

# 6. Preview production build locally
npm run preview
```

---

## Environment Variables

Create `.env.local` from `.env.example`:

```env
# EmailJS — appointment form emails (emailjs.com, free tier)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx

# Google Analytics 4 (analytics.google.com)
VITE_GA_ID=G-XXXXXXXXXX

# Site URL
VITE_SITE_URL=https://drbarvind.com
```

> **Without EmailJS:** The form still works — it opens WhatsApp with the appointment summary pre-filled. Zero data is lost.

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel          # auto-detects Vite, follow prompts
```

Or connect GitHub repo at [vercel.com](https://vercel.com) — zero config needed (`vercel.json` handles everything).

Add environment variables in **Vercel Dashboard → Project → Settings → Environment Variables**.

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

Or drag `dist/` to [app.netlify.com](https://app.netlify.com). `netlify.toml` pre-configured.

---

## Updating Content

**All clinic data in one file:**

```js
// src/config/clinic.js
export const DOCTOR = { name: 'Dr. B Arvind', experience: '9+', ... }
export const CLINIC = {
  branches: {
    nallagandla: { phone: '+91-83310 03232', hours: { weekday: '...' } },
    manikonda:   { phone: '+91-79811 00921', ... }
  }
}
```

Edit `clinic.js` → rebuild → redeploy. All 14 sections update automatically.

---

## Build Output

```
Initial load (gzipped):
  react-vendor  43 KB   ← React runtime
  icons          5.8 KB  ← Lucide icons
  App shell     12.4 KB  ← Core app + Hero + TrustBar

Below-fold sections (lazy, load on scroll):
  Each section   1–5 KB  ← Only loaded when needed

Total initial:  ~66 KB gzipped
```

---

## License

Private — built for Dr. B Arvind / Dhriti Dental, Hyderabad.  
Not for redistribution or reuse without explicit permission.
