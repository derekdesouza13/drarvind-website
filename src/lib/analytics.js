/**
 * Google Analytics 4 — lightweight integration
 * ─────────────────────────────────────────────
 * SETUP:
 * 1. Go to analytics.google.com
 * 2. Create property → Web → get your Measurement ID (G-XXXXXXXXXX)
 * 3. Add to .env.local:  VITE_GA_ID=G-XXXXXXXXXX
 * 4. Done — page views, WA clicks, calls, and form submits all tracked.
 */

const GA_ID = import.meta.env.VITE_GA_ID || ''

/** Inject GA script tag into <head> */
export function initAnalytics() {
  if (!GA_ID || typeof document === 'undefined') return

  // Avoid double-injecting
  if (document.querySelector(`script[data-ga="${GA_ID}"]`)) return

  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script1.setAttribute('data-ga', GA_ID)
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });
  `
  document.head.appendChild(script2)
}

/**
 * Track a custom GA4 event.
 * All events from emailService.js call this automatically.
 */
export function gtagEvent(eventName, params = {}) {
  if (typeof window?.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/**
 * Attach click tracking to all WhatsApp and Call links automatically.
 * Call once after DOM is ready.
 */
export function attachLinkTracking() {
  if (typeof document === 'undefined') return

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]')
    if (!link) return

    const href = link.getAttribute('href') || ''

    if (href.startsWith('tel:')) {
      gtagEvent('call_click', {
        phone_number: href.replace('tel:', ''),
        link_text: link.textContent?.trim()?.slice(0, 40),
      })
    }

    if (href.includes('wa.me') || href.includes('whatsapp')) {
      gtagEvent('whatsapp_click', {
        link_url: href.slice(0, 100),
        link_text: link.textContent?.trim()?.slice(0, 40),
      })
    }

    if (href === '#appointment') {
      gtagEvent('appointment_cta_click', {
        link_text: link.textContent?.trim()?.slice(0, 40),
      })
    }
  }, { passive: true })
}
