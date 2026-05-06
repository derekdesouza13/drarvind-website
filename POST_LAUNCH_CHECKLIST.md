# POST-LAUNCH CHECKLIST
## Dr. Arvind Website — Go-Live Verification

**Date deployed:** _______________  
**Deployed by:** _______________  
**Live URL:** _______________

---

## ✅ SECTION 1 — CORE FUNCTIONALITY

### Appointment Form
- [ ] Fill form with test data → submit
- [ ] Confirm email arrives at `dhritidentals@gmail.com` within 60 seconds
- [ ] Confirm WhatsApp opens with correct appointment summary
- [ ] Confirm success state shows (green checkmark, next steps)
- [ ] Test form validation: submit empty → red error messages appear
- [ ] Test invalid phone (e.g., 5 digits) → "Enter a valid 10-digit number"

### Phone Numbers
- [ ] Nallagandla (+91-83310 03232) — click → dials correctly
- [ ] Manikonda (+91-79811 00921) — click → dials correctly
- [ ] Navbar "Call" link → dials correctly
- [ ] Clinic section "Call Now" buttons → correct branch dials

### WhatsApp
- [ ] Hero WA button → opens WA with hero message
- [ ] Sticky bar WA button → opens WA
- [ ] FAQ bottom WA button → opens WA with callback message
- [ ] Clinic section WA → opens WA with appointment message
- [ ] Desktop FAB (visible after scroll) → opens WA
- [ ] All messages are in English and sensible

### Navigation
- [ ] All nav links scroll to correct section (About, Expertise, Clinic, Results, FAQ, Contact)
- [ ] "Book Appointment" in navbar → scrolls to form
- [ ] Navbar active section highlighting works on scroll
- [ ] Logo → scrolls back to top

---

## ✅ SECTION 2 — MOBILE TESTING

Test on actual devices (not just browser resize):

**iOS Safari (iPhone)**
- [ ] Page loads in under 4 seconds on 4G
- [ ] Sticky bottom bar (Call · WA · Book) appears after scrolling 300px
- [ ] All tap targets are comfortable to tap (no fat-finger issues)
- [ ] Form keyboard doesn't push layout off screen
- [ ] Phone number tapping triggers native dialer
- [ ] WhatsApp tapping opens WhatsApp app

**Android Chrome**
- [ ] Same checks as iOS above
- [ ] WA FAB hidden correctly (only bottom bar shows)

---

## ✅ SECTION 3 — DESKTOP TESTING

- [ ] Layout correct at 1280px (most common laptop)
- [ ] Layout correct at 1920px (wide monitors)
- [ ] Floating credential badges visible in Hero (not overlapping)
- [ ] Desktop WA FAB appears after scrolling
- [ ] WA bubble/tooltip appears after 5 seconds
- [ ] Navbar background changes on scroll (transparent → white)

---

## ✅ SECTION 4 — ANALYTICS VERIFICATION

- [ ] Open live site in Chrome
- [ ] Open GA4 → Reports → Realtime
- [ ] Confirm your visit appears
- [ ] Click a WA button → check Realtime Events for `whatsapp_click`
- [ ] Click phone number → check for `call_click`
- [ ] Submit form → check for `appointment_submit` with `treatment` param
- [ ] Click "Book Appointment" CTA → check `appointment_cta_click`

---

## ✅ SECTION 5 — SEO VERIFICATION

- [ ] **Page title:** Browser tab reads "Dr. B Arvind | Oral & Maxillofacial Oncosurgeon – Hyderabad | Dhriti Dental"
- [ ] **Meta description:** View source → confirm description present
- [ ] **H1:** Only one on page (in Hero — "Dr. B Arvind")
- [ ] **Open Graph:** Test at opengraph.xyz → preview shows correct title/description
- [ ] **Schema:** Test at search.google.com/test/rich-results → Dentist detected
- [ ] **Sitemap:** Visit `yourdomain.com/sitemap.xml` → renders correctly
- [ ] **robots.txt:** Visit `yourdomain.com/robots.txt` → renders correctly
- [ ] **Canonical:** View source → canonical URL matches live domain

---

## ✅ SECTION 6 — PERFORMANCE (Optional)

Run Chrome Lighthouse (DevTools → Lighthouse → Analyze page load):

| Metric | Target | Actual |
|---|---|---|
| Performance | 85+ | _____ |
| Accessibility | 95+ | _____ |
| Best Practices | 95+ | _____ |
| SEO | 100 | _____ |

Key metrics:
- LCP (Largest Contentful Paint): target < 2.5s
- CLS (Cumulative Layout Shift): target < 0.1
- TBT (Total Blocking Time): target < 200ms

---

## ✅ SECTION 7 — CONTENT REVIEW

Read every section live and confirm:

- [ ] **Hero** — Doctor name, title, credentials correct
- [ ] **Trust Bar** — Stats correct (9+, 100+, etc.)
- [ ] **About** — Bio accurate, all qualifications listed
- [ ] **Expertise** — All 8 specialties described correctly
- [ ] **Consultation Path** — PACE hospital URL correct
- [ ] **Clinic** — Both branches: addresses, phones, hours correct
- [ ] **Testimonials** — All 6 reviews appropriate
- [ ] **FAQ** — 8 questions accurate to Dr. Arvind's practice
- [ ] **Appointment** — Form submits, success state shows
- [ ] **Footer** — Email, phones, hours correct

---

## ✅ SECTION 8 — HANDOFF TO CLIENT

- [ ] Share live URL with client
- [ ] Walk client through updating `clinic.js` for any future data changes
- [ ] Confirm client has EmailJS account access (email + password)
- [ ] Confirm client has Google Analytics access
- [ ] Confirm client has Vercel/Netlify access (can redeploy)
- [ ] Hand over this checklist as ongoing reference
- [ ] Explain: replace placeholder photos by uploading to `public/` + updating `Hero.jsx` and `About.jsx`

---

## SIGN-OFF

| Role | Name | Date | Signature |
|---|---|---|---|
| Developer | | | |
| Client | | | |

**Website accepted and approved for production use:** ☐
