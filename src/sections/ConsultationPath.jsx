import { Building2, MapPin, Phone, Clock, Star, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { waUrl, CLINIC, DOCTOR } from '../config/clinic'
import { trackWhatsAppClick, trackCallClick } from '../lib/emailService'

const HOSPITAL_FEATURES = [
  'Complex oral cancer surgeries & neck dissection',
  'Multi-team cancer care coordination',
  'Advanced oncological infrastructure & ICU',
  'Post-surgical inpatient management',
  'Microvascular free flap reconstruction',
]

const CLINIC_FEATURES = [
  'Specialist consultation with Dr. Arvind directly',
  'Oral cancer screening, biopsy & staging',
  'Dental implants & minor oral surgery',
  'TMJ assessment and non-surgical management',
  'Second opinions on complex or unclear diagnoses',
]

export default function ConsultationPath() {
  const ref = useScrollReveal()
  const branch = CLINIC.branches.nallagandla

  return (
    <section id="consultation" className="py-20 bg-navy-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="text-blue-400 font-bold text-[11px] tracking-[0.18em] uppercase mb-3 block">
            Two Ways to See Dr. Arvind
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Choose Your Consultation Path
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you need complex surgical care at a tertiary hospital or an expert specialist
            consultation in a comfortable private clinic — Dr. Arvind is accessible both ways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          {/* ── Hospital track ── */}
          <div
            className="section-reveal bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            aria-label={`Hospital consultations at ${DOCTOR.hospital.name}`}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <Building2 size={13} aria-hidden="true" /> Advanced Surgical Care
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-display">{DOCTOR.hospital.name}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {DOCTOR.hospital.desc}. For patients needing cancer surgery, jaw reconstruction,
              or multi-disciplinary oncology management requiring hospitalisation.
            </p>

            <ul className="space-y-3 mb-7" aria-label="Hospital services">
              {HOSPITAL_FEATURES.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <Star size={13} className="text-purple-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/8 mb-6">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MapPin size={14} className="text-purple-400 flex-shrink-0" aria-hidden="true" />
                <span>{DOCTOR.hospital.name}, Hyderabad</span>
              </div>
              <p className="text-slate-500 text-xs mt-1 ml-5">Multi-disciplinary oncology & surgical wing</p>
            </div>

            <a
              href={DOCTOR.hospital.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-white/20 hover:border-white/40
                         text-white hover:bg-white/8 font-semibold py-3 rounded-xl transition-all text-sm"
              aria-label={`Visit ${DOCTOR.hospital.name} website`}
            >
              Visit {DOCTOR.hospital.name} <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* ── Clinic track — PRIMARY CTA ── */}
          <div
            className="section-reveal relative bg-blue-600 rounded-3xl p-8 shadow-2xl overflow-hidden"
            style={{ transitionDelay: '0.12s' }}
            aria-label={`Clinic consultations at ${CLINIC.name}`}
          >
            {/* BG glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 pointer-events-none" aria-hidden="true" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Star size={13} fill="currentColor" aria-hidden="true" /> Recommended for First Visit
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">{CLINIC.name}</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Dr. Arvind's personal practice — where internationally trained specialist expertise meets
                a warm, unhurried, patient-first environment. Most patients start their journey here.
              </p>

              <ul className="space-y-3 mb-7" aria-label="Clinic services">
                {CLINIC_FEATURES.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-white text-sm">
                    <Star size={13} className="text-yellow-300 flex-shrink-0" fill="currentColor" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Location summary */}
              <address className="not-italic bg-white/20 rounded-2xl p-4 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-white text-sm">
                  <MapPin size={14} className="text-blue-200 flex-shrink-0" aria-hidden="true" />
                  <span>Nallagandla &amp; Manikonda, Hyderabad</span>
                </div>
                <a
                  href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
                  onClick={() => trackCallClick('consultation-path')}
                  className="flex items-center gap-2 text-white hover:text-blue-100 text-sm transition-colors"
                  aria-label={`Call ${CLINIC.branches.nallagandla.phone}`}
                >
                  <Phone size={14} className="text-blue-200 flex-shrink-0" aria-hidden="true" />
                  {CLINIC.branches.nallagandla.phone} &nbsp;/&nbsp; {CLINIC.branches.manikonda.phone}
                </a>
                <div className="flex items-center gap-2 text-white text-sm">
                  <Clock size={14} className="text-blue-200 flex-shrink-0" aria-hidden="true" />
                  <span>Mon–Sat 10 AM–9 PM &nbsp;·&nbsp; Sun 11 AM–5 PM</span>
                </div>
              </address>

              {/* Primary CTA */}
              <a
                href="#appointment"
                className="w-full flex items-center justify-center gap-2 bg-white text-blue-700
                           hover:text-blue-800 font-bold py-4 rounded-xl transition-all text-sm
                           shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] mb-3"
                aria-label={`Book appointment at ${CLINIC.name}`}
              >
                Book Appointment at {CLINIC.name} <ArrowRight size={15} aria-hidden="true" />
              </a>

              <a
                href={waUrl('appointment')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('consultation-path')}
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400
                           text-white font-semibold py-3.5 rounded-xl transition-all text-sm"
                aria-label="Chat with clinic on WhatsApp"
              >
                <WhatsAppIcon size={16} aria-hidden="true" />
                Quick Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
