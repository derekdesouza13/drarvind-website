import { Award, Star, Shield, ChevronDown, CheckCircle, Calendar, MapPin, GraduationCap } from 'lucide-react'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { waUrl, DOCTOR, CLINIC } from '../config/clinic'
import { trackWhatsAppClick, trackCallClick } from '../lib/emailService'

const TRUST_ITEMS = [
  { icon: <Award size={15} />,         label: `${DOCTOR.experience} Years Experience` },
  { icon: <Shield size={15} />,        label: `${DOCTOR.surgeries} Cancer Surgeries` },
  { icon: <GraduationCap size={15} />, label: 'RCS London Fellowship' },
  { icon: <CheckCircle size={15} />,   label: `${DOCTOR.hospital.name}, Hyderabad` },
]

const CREDENTIALS = [
  { abbr: 'RCS', sub: 'London',        bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200' },
  { abbr: 'HCG', sub: 'Oncology',      bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  { abbr: 'MDS', sub: 'Oral Surgery',  bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen hero-pattern overflow-hidden flex flex-col justify-center"
      aria-labelledby="hero-heading"
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/6 blur-[80px] translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[60px] -translate-x-1/4 translate-y-1/4" />

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Arc decoration */}
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="600" cy="0" r="400" stroke="white" strokeWidth="1"/>
          <circle cx="600" cy="0" r="280" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ══ LEFT COLUMN ══ */}
          <div>
            {/* Live specialist badge */}
            <div className="hero-1 inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"/>
              </span>
              <span className="text-blue-200 text-[11px] font-semibold tracking-[0.12em] uppercase">
                Specialist · Oral &amp; Maxillofacial Oncosurgeon
              </span>
            </div>

            {/* H1 — only one on the page */}
            <h1
              id="hero-heading"
              className="hero-2 text-[2.8rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-3 font-display"
            >
              {DOCTOR.name}
            </h1>

            <div className="hero-2 w-16 h-[3px] bg-blue-500 rounded-full mb-5" aria-hidden="true" />

            <p className="hero-3 text-xl sm:text-2xl lg:text-[1.45rem] font-medium leading-snug mb-3 font-display">
              <span className="text-blue-200">Precision Surgery.</span>{' '}
              <span className="text-white">Confident Outcomes.</span>
            </p>

            <p className="hero-3 text-slate-300 text-[15px] sm:text-base leading-relaxed mb-8 max-w-[480px]">
              Internationally trained specialist in oral cancer, maxillofacial reconstruction,
              and head &amp; neck surgery. Trusted by patients across Hyderabad for expert,
              compassionate care that never compromises on honesty.
            </p>

            {/* Trust grid */}
            <div className="hero-4 grid grid-cols-2 gap-x-5 gap-y-3 mb-8" aria-label="Key credentials">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-blue-400 flex-shrink-0 p-1.5 rounded-lg bg-blue-500/15" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-slate-200 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-5 flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href="#appointment"
                className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold px-7 py-4 rounded-xl
                           transition-all duration-200 shadow-xl shadow-blue-900/40 hover:shadow-blue-600/30
                           flex items-center justify-center gap-2 text-[15px]"
                aria-label="Book an appointment at Dhriti Dental"
              >
                <Calendar size={18} aria-hidden="true" />
                Book Appointment
              </a>

              <a
                href={waUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="flex items-center justify-center gap-2 border border-green-500/40 bg-green-500/15
                           hover:bg-green-500/25 text-green-300 hover:text-green-200 font-bold px-7 py-4
                           rounded-xl transition-all duration-200 text-[15px]"
                aria-label="Chat with Dhriti Dental team on WhatsApp"
              >
                <WhatsAppIcon size={20} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Micro-trust line */}
            <p className="hero-5 flex flex-wrap items-center gap-1.5 text-slate-400 text-xs">
              <MapPin size={12} className="text-blue-400" aria-hidden="true" />
              Consultations at{' '}
              <strong className="text-blue-400 font-semibold">{CLINIC.name}</strong>
              <span className="text-slate-600" aria-hidden="true">·</span>
              Nallagandla &amp; Manikonda
              <span className="text-slate-600" aria-hidden="true">·</span>
              Also at <strong className="text-blue-400 font-semibold">{DOCTOR.hospital.name}</strong>
            </p>
          </div>

          {/* ══ RIGHT COLUMN — Doctor image ══ */}
          <div className="relative hero-img" role="img" aria-label={`Portrait of ${DOCTOR.name}`}>
            {/* Glow halo */}
            <div
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-blue-900/10 blur-2xl scale-95 pointer-events-none"
              aria-hidden="true"
            />

            {/* Image card */}
            <div
              className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
              style={{ aspectRatio: '4/5' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/20 to-slate-900/80 z-10" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900" />

              {/* Photo placeholder */}
              <div className="relative z-20 h-full flex flex-col items-center justify-center p-8" aria-hidden="true">
                <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-4 shadow-xl">
                  <span className="text-4xl font-bold font-display text-white/60">{DOCTOR.initials}</span>
                </div>
                <p className="text-white/40 text-sm font-medium text-center">
                  Professional Portrait — {DOCTOR.name}
                </p>
                <p className="text-white/20 text-xs text-center mt-1">
                  Replace with high-resolution doctor photo (min 800×1000 px)
                </p>
              </div>

              {/* Name card overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
                <div className="glass rounded-2xl p-4">
                  <p className="text-white font-bold text-lg font-display leading-tight">{DOCTOR.name}</p>
                  <p className="text-blue-300 text-xs font-medium mt-0.5">
                    MDS · RCS London Fellow · {DOCTOR.hospital.name}, Hyderabad
                  </p>
                  <div className="flex gap-2 mt-3" aria-label="Qualifications">
                    {CREDENTIALS.map((c, i) => (
                      <div key={i} className={`${c.bg} ${c.border} border rounded-lg px-2.5 py-1.5 text-center`}>
                        <div className={`font-bold text-sm ${c.text}`}>{c.abbr}</div>
                        <div className="text-[9px] text-slate-500 leading-tight">{c.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges — hidden on small screens to avoid overflow */}
            <div className="absolute -left-5 top-14 pop-1 hidden md:block" aria-hidden="true">
              <div className="cred-badge flex items-center gap-3 pr-4 bg-white">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-none">{DOCTOR.surgeries}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Cancer Surgeries</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 top-1/3 pop-2 hidden md:block" aria-hidden="true">
              <div className="cred-badge flex items-center gap-3 pr-4 float-b">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-none">RCS</p>
                  <p className="text-slate-500 text-xs mt-0.5">London Fellow</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-28 pop-3 hidden md:block" aria-hidden="true">
              <div className="cred-badge flex items-center gap-3 pr-4 float-c">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star size={18} className="text-emerald-600" fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-none">{DOCTOR.experience} Yrs</p>
                  <p className="text-slate-500 text-xs mt-0.5">Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-14 lg:mt-16">
          <a
            href="#trust-bar"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Scroll to explore more"
          >
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">Explore</span>
            <ChevronDown size={18} className="animate-bounce mt-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
