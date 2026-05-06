import { useState, useCallback, memo } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {
  CheckCircle, Send, Calendar, Phone, User, Stethoscope,
  Clock, AlertCircle, Shield, Star, MapPin, ChevronRight,
  Loader2, Lock
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { submitAppointment } from '../lib/emailService'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { CLINIC, PRIMARY_PHONE, waUrl } from '../config/clinic'

/* ─── Constants ───────────────────────────────────────────── */
const TREATMENTS = [
  { value: 'oral-cancer-consult', label: 'Oral Cancer Consultation' },
  { value: 'oral-cancer-screen',  label: 'Oral Cancer Screening' },
  { value: 'biopsy-opinion',      label: 'Biopsy / Second Opinion' },
  { value: 'implants',            label: 'Dental Implants' },
  { value: 'wisdom-tooth',        label: 'Wisdom Tooth Removal' },
  { value: 'jaw-fracture',        label: 'Jaw Fracture' },
  { value: 'tmj',                 label: 'TMJ Disorder / Jaw Pain' },
  { value: 'root-canal',          label: 'Root Canal Treatment' },
  { value: 'checkup',             label: 'General Dental Checkup' },
  { value: 'other',               label: 'Other / Not Sure' },
]

const TIMES    = ['Morning (10 AM – 1 PM)', 'Afternoon (1 PM – 4 PM)', 'Evening (5 PM – 9 PM)']
const BRANCHES = [
  { value: 'nallagandla', label: 'Nallagandla (Main Branch)' },
  { value: 'manikonda',   label: 'Manikonda' },
  { value: 'flexible',    label: 'Either / Flexible' },
]

const INITIAL_FORM = { name: '', phone: '', treatment: '', time: '', branch: '', note: '' }

/* ─── Validators ──────────────────────────────────────────── */
function validate(form) {
  const e = {}
  const name = form.name.trim()
  if (!name || name.length < 2)        e.name = 'Please enter your full name (min 2 characters)'
  const phone = form.phone.replace(/[\s+\-()\u00A0]/g, '')
  if (!/^[6-9]\d{9}$/.test(phone))     e.phone = 'Enter a valid 10-digit Indian mobile number'
  if (!form.treatment)                  e.treatment = 'Please select a treatment or concern'
  return e
}

/* ─── Sub-components ──────────────────────────────────────── */
const Field = memo(({ label, required, error, hint, children }) => (
  <div>
    <label className="form-label">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    {hint && !error && <p className="text-slate-400 text-[11px] mt-1">{hint}</p>}
    {error && (
      <p className="flex items-center gap-1 text-red-500 text-[11px] mt-1.5">
        <AlertCircle size={11} className="flex-shrink-0" /> {error}
      </p>
    )}
  </div>
))

const IconInput = memo(({ icon, error, ...props }) => (
  <div className="relative">
    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
      {icon}
    </span>
    <input {...props} className={`form-input pl-10 ${error ? 'has-error' : ''}`} />
  </div>
))

/* ─── Success state ───────────────────────────────────────── */
function SuccessCard({ name, phone, onReset }) {
  return (
    <div className="text-center py-6 px-2">
      <div className="relative inline-flex mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg shadow-green-100/80">
          <CheckCircle size={38} className="text-green-600" />
        </div>
        <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Appointment Requested!</h3>
      <p className="text-slate-600 text-sm mb-1">
        Thank you, <strong className="text-slate-900">{name}</strong>! Your request has been received.
      </p>
      <p className="text-slate-400 text-sm mb-7">
        Our team will call <strong className="text-slate-700">{phone}</strong> within 1 hour to confirm your slot.
      </p>

      {/* Next steps */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-2xl p-5 mb-6 text-left">
        <p className="text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">What happens next</p>
        {[
          { step: 1, text: 'Our clinic team reviews your request' },
          { step: 2, text: 'You receive a call to confirm date & time' },
          { step: 3, text: 'WhatsApp reminder sent before your visit' },
          { step: 4, text: 'Meet Dr. Arvind at Dhriti Dental' },
        ].map(({ step, text }) => (
          <div key={step} className="flex items-start gap-3 mb-3 last:mb-0">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {step}
            </div>
            <span className="text-slate-700 text-sm">{text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a href={`tel:+91${CLINIC.branches.nallagandla.phoneRaw.slice(2)}`}
          className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-blue-300
                     text-slate-700 hover:text-blue-600 font-semibold py-3.5 rounded-xl transition-all text-sm">
          <Phone size={15} /> Call the Clinic
        </a>
        <a href={waUrl('appointment')} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600
                     text-white font-semibold py-3.5 rounded-xl transition-all text-sm shadow-md hover:shadow-green-500/25">
          <WhatsAppIcon size={17} /> WhatsApp Us
        </a>
      </div>

      <button onClick={onReset} className="mt-5 text-slate-400 hover:text-slate-600 text-xs transition-colors underline underline-offset-2">
        Submit another request
      </button>
    </div>
  )
}

/* ─── Main component ──────────────────────────────────────── */
export default function Appointment() {
  const ref = useScrollReveal()
  const [form,      setForm]      = useState(INITIAL_FORM)
  const [errors,    setErrors]    = useState({})
  const [touched,   setTouched]   = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: errs[name] }))
    }
  }, [form, touched])

  const handleBlur = useCallback((e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const errs = validate(form)
    setErrors(prev => ({ ...prev, [name]: errs[name] }))
  }, [form])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(form).map(k => [k, true]))
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      toast.error('Please fix the errors above', { icon: '⚠️' })
      return
    }

    setLoading(true)

    const loadingToast = toast.loading('Sending your appointment request…')
    try {
      const result = await submitAppointment(form)
      toast.dismiss(loadingToast)

      if (result.success) {
        toast.success(
          result.method === 'email'
            ? 'Appointment request sent! We\'ll call you soon.'
            : 'Request sent via WhatsApp! We\'ll confirm shortly.',
          { duration: 5000, icon: '🎉' }
        )
        setSubmitted(true)
      }
    } catch (err) {
      toast.dismiss(loadingToast)
      toast.error('Something went wrong. Please call us directly.', { duration: 6000 })
    } finally {
      setLoading(false)
    }
  }, [form])

  const handleReset = useCallback(() => {
    setSubmitted(false)
    setForm(INITIAL_FORM)
    setTouched({})
    setErrors({})
  }, [])

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#060f1e] relative overflow-hidden" ref={ref}>
      {/* Toast container */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: { borderRadius: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px' },
          success: { style: { background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' } },
          error:   { style: { background: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca' } },
        }}
      />

      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[90px]" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[70px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.022]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="appt-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#appt-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 section-reveal">
          <span className="section-label text-blue-400">Book Your Consultation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight mb-3">
            Take the First Step Toward Expert Care
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Fill the form below and our team at Dhriti Dental will confirm your appointment within 1 hour.
            Alternatively, call or WhatsApp us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ══ LEFT: Info + Trust ══ */}
          <div className="lg:col-span-2 space-y-6 section-reveal">
            {/* Assurance list */}
            {[
              { icon: <Calendar size={18}/>,    head: 'Confirmed within 1 Hour',    body: 'Our team calls you back quickly to confirm your slot' },
              { icon: <Stethoscope size={18}/>, head: 'Dr. Arvind Sees You Personally', body: 'No junior doctors — the specialist attends every consultation' },
              { icon: <Clock size={18}/>,       head: 'On-Time Appointments',       body: 'We respect your time — no long waiting room delays' },
              { icon: <Shield size={18}/>,      head: 'Zero-Pressure Guarantee',    body: 'Honest advice — no upselling, no unnecessary procedures' },
              { icon: <Lock size={18}/>,        head: 'Your Data is Private',       body: 'We never share your information with third parties' },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0">
                  {a.icon}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{a.head}</p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}

            {/* Branch info */}
            <div className="glass rounded-2xl p-5 space-y-4 mt-2">
              <p className="text-white text-sm font-bold">Clinic Locations</p>
              {Object.values(CLINIC.branches).map(b => (
                <div key={b.id} className="flex items-start gap-3">
                  <MapPin size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-slate-200 text-xs font-semibold truncate">{b.label}</p>
                    <a href={`tel:${b.phoneRaw}`} className="text-blue-400 hover:text-blue-300 text-xs transition-colors font-medium">
                      {b.phone}
                    </a>
                    <p className="text-slate-500 text-[11px] leading-tight mt-0.5">{b.hours.weekday}</p>
                    <p className="text-slate-600 text-[11px]">{b.hours.sunday}</p>
                  </div>
                </div>
              ))}

              {/* Quick-call buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <a href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all">
                  <Phone size={14} /> Call Nallagandla
                </a>
                <a href={waUrl('appointment')} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500/15 hover:bg-green-500/25 border border-green-500/30 text-green-400 hover:text-green-300 text-sm font-semibold py-2.5 rounded-xl transition-all">
                  <WhatsAppIcon size={15} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* ══ RIGHT: Form card ══ */}
          <div className="lg:col-span-3 section-reveal" style={{ transitionDelay: '0.12s' }}>
            <div className="bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 px-7 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-lg font-display">Book an Appointment</p>
                    <p className="text-blue-200 text-sm mt-0.5">Dhriti Dental · Hyderabad</p>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-end gap-1">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={13} fill="white" className="text-white" />)}
                    </div>
                    <p className="text-blue-200 text-[11px]">5.0 · 200+ reviews</p>
                  </div>
                </div>
                {/* Urgency bar */}
                <div className="mt-4 bg-blue-500/30 border border-blue-400/30 rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"/>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"/>
                  </span>
                  <p className="text-blue-100 text-xs font-medium">
                    <strong className="text-white">Limited slots available</strong> this week — book now to secure your consultation time.
                  </p>
                </div>
              </div>

              {/* Form body */}
              <div className="p-6 sm:p-8">
                {submitted ? (
                  <SuccessCard name={form.name} phone={form.phone} onReset={handleReset} />
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Your Name" required error={errors.name}>
                          <IconInput
                            icon={<User size={15}/>}
                            type="text" name="name" value={form.name}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Full name" error={!!errors.name}
                            autoComplete="name" autoCapitalize="words"
                          />
                        </Field>
                        <Field label="Phone Number" required error={errors.phone}
                          hint="Indian mobile number (10 digits)">
                          <IconInput
                            icon={<Phone size={15}/>}
                            type="tel" name="phone" value={form.phone}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="98765 43210" error={!!errors.phone}
                            autoComplete="tel" inputMode="tel"
                          />
                        </Field>
                      </div>

                      <Field label="Treatment / Concern" required error={errors.treatment}>
                        <select name="treatment" value={form.treatment}
                          onChange={handleChange} onBlur={handleBlur}
                          className={`form-input text-slate-700 ${errors.treatment ? 'has-error' : ''}`}>
                          <option value="">Select your treatment or concern…</option>
                          {TREATMENTS.map(t => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </Field>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Preferred Time">
                          <select name="time" value={form.time} onChange={handleChange}
                            className="form-input text-slate-700">
                            <option value="">Any time works</option>
                            {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </Field>
                        <Field label="Preferred Branch">
                          <select name="branch" value={form.branch} onChange={handleChange}
                            className="form-input text-slate-700">
                            <option value="">Either branch is fine</option>
                            {BRANCHES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                          </select>
                        </Field>
                      </div>

                      <Field label="Additional Notes" hint="E.g. existing reports, specific symptoms, referral doctor's name">
                        <textarea name="note" value={form.note} onChange={handleChange} rows={3}
                          placeholder="Tell us more about your concern — the more detail you share, the better we can prepare for your consultation."
                          className="form-input resize-none" />
                      </Field>

                      {/* Privacy note */}
                      <div className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                        <Lock size={13} className="text-slate-400 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-500 text-[11px] leading-relaxed">
                          Your information is <strong className="text-slate-700">100% private</strong> and is only used to confirm your appointment.
                          We never share or sell your data.
                        </p>
                      </div>

                      {/* Submit */}
                      <button type="submit" disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed
                                   text-white font-bold py-4 rounded-xl transition-all
                                   shadow-lg hover:shadow-xl hover:shadow-blue-500/20
                                   text-[15px] flex items-center justify-center gap-2.5
                                   active:scale-[0.99]">
                        {loading ? (
                          <><Loader2 size={18} className="animate-spin" /> Sending your request…</>
                        ) : (
                          <><Send size={17} /> Book My Appointment at Dhriti Dental <ChevronRight size={16} className="ml-auto opacity-60"/></>
                        )}
                      </button>

                      {/* Alt contact */}
                      <div className="flex items-center justify-center gap-3 pt-1">
                        <span className="text-slate-300 text-xs">or contact us directly:</span>
                        <a href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
                          className="text-blue-600 font-bold text-sm hover:underline">
                          {CLINIC.branches.nallagandla.phone}
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
