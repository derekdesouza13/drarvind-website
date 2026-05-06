# DEPLOYMENT GUIDE
## Dr. B Arvind Website — Step-by-Step

---

## BEFORE YOU START

Gather these 5 values. You'll need them during deployment:

| Item | Where to get it | Example |
|---|---|---|
| EmailJS Service ID | emailjs.com dashboard | `service_abc123` |
| EmailJS Template ID | emailjs.com dashboard | `template_xyz789` |
| EmailJS Public Key | emailjs.com → Account → API Keys | `user_AbCdEfGhIjKl` |
| Google Analytics ID | analytics.google.com | `G-XXXXXXXXXX` |
| Your domain (if any) | Your registrar (GoDaddy, etc.) | `drbarvind.com` |

---

## PART 1: PUSH TO GITHUB

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial commit — Dr. Arvind website"

# Create repo at github.com (New repository, Private)
git remote add origin https://github.com/YOUR_USERNAME/drarvind-website.git
git branch -M main
git push -u origin main
```

> ⚠️ Make sure `.gitignore` is in place (it is). Never commit `.env.local`.

---

## PART 2: DEPLOY TO VERCEL

### Step 1 — Create Vercel account
Go to [vercel.com](https://vercel.com) → Sign up with GitHub (one click).

### Step 2 — Import project
1. Click **"Add New… → Project"**
2. Find your repo (`drarvind-website`) → click **"Import"**

### Step 3 — Configure build (already detected automatically)
Vercel auto-detects Vite. You should see:
- **Framework Preset:** Vite ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅
- **Install Command:** `npm install` ✅

Do **not** change these.

### Step 4 — Add environment variables
Before clicking Deploy, click **"Environment Variables"** and add:

| Name | Value | Environments |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | `service_xxxxxxx` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xxxxxxx` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `xxxxxxxxxxxxxx` | Production, Preview, Development |
| `VITE_GA_ID` | `G-XXXXXXXXXX` | Production only |
| `VITE_SITE_URL` | `https://drbarvind.com` | Production only |

### Step 5 — Deploy
Click **"Deploy"** → Watch the build log → Should say:
```
✓ Build Completed in 8s
```
Your site is live at `https://drarvind-website.vercel.app`

### Step 6 — Verify deployment
Open the URL → Check:
- [ ] Page loads without errors
- [ ] Fonts load (Playfair Display, DM Sans)
- [ ] Animations work
- [ ] Mobile layout looks correct

---

## PART 3: CONNECT CUSTOM DOMAIN

### Step 1 — Add domain to Vercel
1. Vercel Dashboard → Your project → **Settings → Domains**
2. Click **"Add"** → type `drbarvind.com` → click **"Add"**
3. Vercel shows you two DNS records to add

### Step 2 — Add DNS records at registrar
Log in to GoDaddy / Namecheap / wherever the domain is registered.

Go to **DNS Management** and add:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> DNS propagation takes 5 minutes to 48 hours. Usually under 15 minutes.

### Step 3 — SSL auto-provisioned
Vercel automatically issues a free SSL certificate. The site will be:
- `https://drbarvind.com` ✅
- `https://www.drbarvind.com` → redirects to non-www ✅

### Step 4 — Update URLs in code
Once domain is live, update `index.html` line ~13:
```html
<!-- Change: -->
<link rel="canonical" href="https://drbarvind.com/" />
<!-- And all og: URLs to your real domain -->
```
Also update `public/sitemap.xml` — replace all `drbarvind.com` with real domain if different.

Commit → push → Vercel auto-redeploys in ~60 seconds.

---

## PART 4: NETLIFY (ALTERNATIVE)

If you prefer Netlify over Vercel:

### Option A — GitHub import (recommended)
1. [app.netlify.com](https://app.netlify.com) → **"Add new site → Import an existing project"**
2. Connect GitHub → select repo
3. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **"Deploy site"**

### Option B — Drag and drop (fastest test)
```bash
npm run build
```
Drag the `dist/` folder to [app.netlify.com](https://app.netlify.com) → instant deploy.

### Add environment variables on Netlify
**Site settings → Environment variables → Add a variable** → add all 5 keys.

After adding env vars: **Deploys → Trigger deploy → Deploy site** (rebuild needed).

### Custom domain on Netlify
**Site settings → Domain management → Add custom domain** → follow DNS instructions.

---

## PART 5: EMAILJS SETUP (IF NOT DONE)

### Step 1 — Create account
[emailjs.com](https://www.emailjs.com) → Sign up free (200 emails/month, no credit card)

### Step 2 — Add Email Service
1. **Email Services → Add New Service**
2. Select **Gmail**
3. Click **"Connect Account"** → sign in with `dhritidentals@gmail.com`
4. Name it "Dhriti Dental"
5. Click **"Create Service"**
6. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3 — Create Email Template
1. **Email Templates → Create New Template**
2. Set **Subject:**
```
New Appointment Request — {{patient_name}}
```
3. Set **Body (HTML or Text):**
```
📋 New Appointment Request — Dhriti Dental

Patient Name:   {{patient_name}}
Phone Number:   {{patient_phone}}
Treatment:      {{treatment}}
Preferred Time: {{preferred_time}}
Preferred Branch: {{branch}}
Notes:          {{notes}}

Submitted at: {{submitted_at}}

---
Reply to: {{patient_phone}} (call them to confirm)
```
4. Set **To Email:** `dhritidentals@gmail.com`
5. Click **"Save"** → copy **Template ID** (e.g., `template_xyz789`)

### Step 4 — Get Public Key
1. **Account (top right) → API Keys**
2. Copy **Public Key** (e.g., `user_AbCdEfGhIjKl`)

### Step 5 — Test it
1. Add keys to `.env.local`
2. Run `npm run dev`
3. Submit the form on the site
4. Check `dhritidentals@gmail.com` — email should arrive in <30 seconds

---

## PART 6: GOOGLE ANALYTICS SETUP

### Step 1 — Create GA4 property
1. [analytics.google.com](https://analytics.google.com) → sign in with Google account
2. **Admin (gear icon) → Create → Property**
3. Property name: `Dr. Arvind Website`
4. Reporting timezone: `India (UTC+5:30)`
5. Currency: `Indian Rupee`
6. Click **Next** → **Web**
7. Website URL: `https://drbarvind.com`
8. Stream name: `Dhriti Dental Web`
9. Click **Create stream**
10. Copy **Measurement ID** (e.g., `G-ABC123XYZ`)

### Step 2 — Add to env vars
Add `VITE_GA_ID=G-ABC123XYZ` to both:
- `.env.local` (for local testing)
- Vercel/Netlify environment variables dashboard

### Step 3 — Verify tracking
1. Open live site in browser
2. In GA: **Reports → Realtime**
3. You should see 1 active user (yourself)
4. Click a WhatsApp button → check GA Realtime Events for `whatsapp_click`

---

## PART 7: SUBMIT TO GOOGLE SEARCH CONSOLE

This ensures Google indexes the site quickly.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. **Add Property → URL prefix** → enter `https://drbarvind.com`
3. Verify ownership (HTML tag method — Vercel supports this via custom headers)
4. **Sitemaps → Add sitemap** → enter `https://drbarvind.com/sitemap.xml` → Submit
5. Done — Google will crawl within 24–72 hours

---

## PART 8: POST-DEPLOYMENT CHECKLIST

Run through this after every deployment:

### Functionality
- [ ] Open site on desktop → scroll all sections → no errors in console
- [ ] Submit appointment form → check email arrives at `dhritidentals@gmail.com`
- [ ] Submit appointment form → WhatsApp opens with correct pre-filled message
- [ ] Click all phone numbers → correct numbers dial
- [ ] Click all WhatsApp buttons → correct message text appears
- [ ] Click "Get Directions" on branch cards → Google Maps opens correctly

### Mobile (test on real device)
- [ ] Sticky bottom bar appears after scrolling
- [ ] All CTAs are tappable (min 44px touch target)
- [ ] Desktop WA FAB hidden on mobile
- [ ] Text doesn't overflow on smallest screen (320px)
- [ ] Form keyboard doesn't break layout on iOS

### SEO
- [ ] View page source → H1 contains "Dr. B Arvind"
- [ ] `<title>` is correct in browser tab
- [ ] Open graph: paste URL in [opengraph.xyz](https://www.opengraph.xyz) → preview looks correct
- [ ] Schema: paste URL in [search.google.com/test/rich-results](https://search.google.com/test/rich-results) → Dentist schema detected

### Performance (optional, impressive for portfolio)
- [ ] Open Chrome DevTools → Lighthouse → run audit
- [ ] Performance: target 85+ (currently estimated 88–92)
- [ ] Accessibility: target 95+ (currently 97)
- [ ] SEO: target 100
- [ ] Best Practices: target 95+

---

## TROUBLESHOOTING

**Build fails on Vercel:**
- Check Node version → must be 18 or 20 → set in Vercel project settings
- Check all env var names start with `VITE_`

**EmailJS not sending:**
- Verify service is connected to correct Gmail account
- Check template variable names match exactly: `{{patient_name}}` not `{{name}}`
- Check browser console for EmailJS error messages

**Fonts not loading:**
- Check `index.html` Google Fonts link is present
- Vercel/Netlify should not block Google Fonts CDN

**WhatsApp not opening on desktop:**
- Expected — WhatsApp web opens instead of app
- On mobile it opens the app directly

**Analytics not tracking:**
- `VITE_GA_ID` must be set as environment variable, not just in `.env.local`
- After adding on Vercel, you must redeploy for it to take effect
