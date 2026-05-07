import { Phone, Clock, Mail, Heart, Shield, Users, Star, ArrowRight, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { CLINIC, waUrl } from '../config/clinic'
import { trackWhatsAppClick, trackCallClick } from '../lib/emailService'

const CLINIC_FEATURES = [
  {
    icon: <Heart size={20} className="text-rose-500" aria-hidden="true" />,
    title: 'Patient-First, Always',
    desc: 'No rushed consultations. No unnecessary procedures. Just honest, thoughtful specialist care.',
  },
  {
    icon: <Shield size={20} className="text-blue-600" aria-hidden="true" />,
    title: 'Specialist-Led Treatments',
    desc: 'Every procedure is performed or directly supervised by Dr. Arvind — never delegated to juniors.',
  },
  {
    icon: <Star size={20} className="text-amber-500" aria-hidden="true" />,
    title: 'Modern, Comfortable Space',
    desc: 'A calm, anxiety-free environment designed to make dental visits feel safe and stress-free.',
  },
  {
    icon: <Users size={20} className="text-emerald-500" aria-hidden="true" />,
    title: 'Transparent Pricing',
    desc: 'Clear cost communication before treatment begins. No surprises. EMI options available on request.',
  },
]

export default function Clinic() {
  const ref = useScrollReveal()

  return (
    <section id="clinic" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header + intro ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          <div className="section-reveal">
            <span className="section-label">Dr. Arvind's Personal Practice</span>
            <h2 className="section-title">
              {CLINIC.name} — Where Expertise Meets Care
            </h2>
            <div className="divider-line" />
            <p className="text-slate-600 leading-relaxed mb-4">
              {CLINIC.tagline} Founded on a simple belief — every patient deserves specialist-quality care
              in an environment that doesn't feel clinical or intimidating.
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              Whether you're coming in for a routine checkup or a complex surgical consultation,
              Dr. Arvind sees you personally — in a calm, modern clinic where questions are welcome
              and every decision is made at your pace.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#appointment"
                className="btn-primary py-3.5 px-6 text-sm"
                aria-label={`Book appointment at ${CLINIC.name}`}
              >
                Book Appointment <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href={waUrl('appointment')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('clinic-section')}
                className="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100
                           border border-green-200 text-green-700 font-semibold px-6 py-3.5
                           rounded-xl transition-all text-sm"
                aria-label="Chat with clinic on WhatsApp"
              >
                <WhatsAppIcon size={17} aria-hidden="true" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Clinic image placeholder */}
          <div className="section-reveal" style={{ transitionDelay: '0.12s' }}>
            <div
              className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100
                         aspect-[4/3] flex items-center justify-center border border-slate-200"
              role="img"
              aria-label={`${CLINIC.name} clinic interior`}
            >
              <div className="text-center text-slate-400 p-8" aria-hidden="true">
                <div className="text-5xl mb-3">🏥</div>
                <p className="font-medium text-slate-500 text-sm">{CLINIC.name} — Clinic Interior</p>
                <p className="text-slate-400 text-xs mt-1">Replace with real clinic photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CLINIC_FEATURES.map((f, i) => (
            <div
              key={i}
              className="section-reveal bg-slate-50 rounded-2xl p-6 border border-slate-100 card-hover"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Services tag cloud ── */}
        <div className="section-reveal bg-blue-50 rounded-3xl p-8 border border-blue-100 mb-16">
          <h3 className="font-bold text-slate-900 mb-5 font-display text-xl text-center">
            Treatments Available at {CLINIC.name}
          </h3>
          <ul className="flex flex-wrap gap-2 justify-center" aria-label="List of treatments">
            {CLINIC.services.map((s) => (
              <li key={s}>
                <span className="bg-white border border-blue-200 text-slate-800 text-xs font-medium px-3 py-1.5 rounded-full">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Branch cards ── */}
        <div id="locations" className="grid md:grid-cols-2 gap-6">
          {Object.values(CLINIC.branches).map((b, i) => (
            <div
              key={b.id}
              className={`section-reveal rounded-3xl p-8 border-2 ${
                b.isPrimary ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={`${b.label} branch details`}
            >
              {/* Branch header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{b.area}</p>
                  <h3 className="text-xl font-bold text-slate-900 font-display">{CLINIC.name} — {b.id.charAt(0).toUpperCase() + b.id.slice(1)}</h3>
                </div>
                {b.isPrimary && (
                  <span className="flex-shrink-0 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ml-2">
                    Main
                  </span>
                )}
              </div>

              {/* Photo placeholder */}
              <div
                className="rounded-2xl overflow-hidden bg-slate-200 aspect-video flex items-center justify-center mb-6"
                role="img"
                aria-label={`${b.label} clinic map`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5199812872143!2d78.30590347377228!3d17.473800100312697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93454fa319c7%3A0x3f89b5781693c697!2sDhriti%20Dental!5e1!3m2!1sen!2sin!4v1778085521470!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact info */}
              <address className="not-italic space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin size={16} className="text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b.address}</span>
                </div>

                <a
                  href={`tel:${b.phoneRaw}`}
                  onClick={() => trackCallClick(`clinic-${b.id}`)}
                  className="flex items-center gap-3 text-sm font-semibold text-blue-600
                             hover:text-blue-700 transition-colors"
                  aria-label={`Call ${b.label}: ${b.phone}`}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone size={14} className="text-blue-600" />
                  </div>
                  {b.phone}
                </a>

                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    <Clock size={14} className="text-slate-500" />
                  </div>
                  <div>
                    <p>{b.hours.weekday}</p>
                    <p className="text-slate-400 text-xs">{b.hours.sunday}</p>
                  </div>
                </div>

                <a
                  href={`mailto:${CLINIC.email}`}
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  aria-label={`Email ${CLINIC.email}`}
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail size={14} className="text-slate-500" />
                  </div>
                  {CLINIC.email}
                </a>
              </address>

              {/* Action buttons */}
              <div className="flex gap-3">
                <a
                  href={`tel:${b.phoneRaw}`}
                  onClick={() => trackCallClick(`clinic-card-${b.id}`)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold
                             py-3 rounded-xl transition-all text-center"
                  aria-label={`Call ${b.label} now`}
                >
                  Call Now
                </a>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-slate-300 hover:border-blue-400 text-slate-700
                             hover:text-blue-600 text-sm font-medium py-3 rounded-xl transition-all text-center"
                  aria-label={`Get directions to ${b.label}`}
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
