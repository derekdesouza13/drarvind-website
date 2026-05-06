/**
 * Dhriti Dental — Appointment Submission Service
 * ─────────────────────────────────────────────────────────
 * Flow: EmailJS (primary) → WhatsApp (always secondary + fallback)
 *
 * SETUP (5 min):
 * 1. emailjs.com → free account → connect Gmail service
 * 2. Create template with vars: patient_name, patient_phone,
 *    treatment, preferred_time, branch, notes, submitted_at
 * 3. Add keys to .env.local (see .env.example)
 */

import emailjs from '@emailjs/browser'
import { PRIMARY_EMAIL, PRIMARY_PHONE_RAW } from '../config/clinic.js'

// ── Read env vars at module load ──────────────────────────
const SVC_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const TPL_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const PUB_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

const EMAIL_READY = SVC_ID && TPL_ID && PUB_KEY
  && !SVC_ID.startsWith('YOUR_')
  && !TPL_ID.startsWith('YOUR_')
  && !PUB_KEY.startsWith('YOUR_')

// ── Analytics helper (no-op if GA not loaded) ─────────────
function trackEvent(name, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params)
    }
  } catch (_) { /* silent */ }
}

/**
 * Main entry point — call this from the form onSubmit.
 *
 * @param {Object} data  { name, phone, treatment, time, branch, note }
 * @returns {{ success: boolean, method: 'email'|'whatsapp' }}
 */
export async function submitAppointment(data) {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day:  '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

  const payload = {
    patient_name:   data.name.trim(),
    patient_phone:  data.phone.trim(),
    treatment:      data.treatment,
    preferred_time: data.time   || 'No preference',
    branch:         data.branch || 'No preference',
    notes:          data.note?.trim() || 'None',
    submitted_at:   timestamp,
    reply_to:       PRIMARY_EMAIL,
  }

  // ── 1. Try EmailJS ──────────────────────────────────────
  if (EMAIL_READY) {
    try {
      await emailjs.send(SVC_ID, TPL_ID, payload, PUB_KEY)
      // Always also open WA so clinic gets instant notification
      openWhatsApp(data)
      trackEvent('appointment_submit', { method: 'email', treatment: data.treatment })
      return { success: true, method: 'email' }
    } catch (err) {
      console.error('[EmailJS]', err?.text || err)
      // Fall through to WA-only mode
    }
  }

  // ── 2. WhatsApp fallback (always works, zero config needed) ──
  openWhatsApp(data)
  trackEvent('appointment_submit', { method: 'whatsapp', treatment: data.treatment })
  return { success: true, method: 'whatsapp' }
}

/**
 * Opens WA in a new tab with a pre-filled structured message.
 * The clinic receives it instantly on their phone.
 */
export function openWhatsApp(data) {
  const lines = [
    '📋 *New Appointment Request – Dhriti Dental*',
    '',
    `👤 *Patient:* ${data.name.trim()}`,
    `📞 *Phone:*   ${data.phone.trim()}`,
    `🦷 *For:*     ${data.treatment}`,
    `⏰ *Time:*    ${data.time   || 'Any time'}`,
    `📍 *Branch:*  ${data.branch || 'Not specified'}`,
    data.note?.trim() ? `📝 *Notes:*   ${data.note.trim()}` : null,
    '',
    '_Sent from drbarvind.com_',
  ].filter(v => v !== null).join('\n')

  const url = `https://wa.me/${PRIMARY_PHONE_RAW}?text=${encodeURIComponent(lines)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

/** Standalone WA click tracker — call from any WA button */
export function trackWhatsAppClick(source = 'unknown') {
  trackEvent('whatsapp_click', { source })
}

/** Standalone call click tracker */
export function trackCallClick(source = 'unknown') {
  trackEvent('call_click', { source })
}
