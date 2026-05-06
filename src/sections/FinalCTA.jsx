import { memo } from 'react'
import { Calendar, Phone, ArrowRight, Clock, CheckCircle } from 'lucide-react'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { waUrl, PRIMARY_PHONE, CLINIC } from '../config/clinic'

const TRUST_POINTS = [
  'No waiting — confirmed slots within 1 hour',
  'No unnecessary procedures — ever',
  'Specialist sees you personally, not a junior',
  'Honest second opinions always welcome',
]

const FinalCTA = memo(function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-white" aria-label="Book your appointment">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-[#0c1a35] to-[#060f1e] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(6,15,30,0.5)]">

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-blue-900/25 blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-0">
            {/* Left column: copy */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/25 rounded-full px-3.5 py-1.5 mb-6 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"/>
                </span>
                <span className="text-green-400 text-[11px] font-semibold tracking-wide uppercase">Accepting New Patients</span>
              </div>

              <h2 className="text-3xl md:text-[2.4rem] font-bold text-white font-display leading-tight mb-4">
                Don't Let a Concern Become a Crisis.
                <span className="text-blue-400"> Act Now.</span>
              </h2>

              <p className="text-slate-400 text-[15px] leading-relaxed mb-7">
                Oral cancer caught at Stage I has an <strong className="text-white">80%+ survival rate.</strong>{' '}
                Caught at Stage IV, it drops below 20%. One consultation with Dr. Arvind could change everything.
              </p>

              {/* Trust points */}
              <ul className="space-y-2.5 mb-8">
                {TRUST_POINTS.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle size={15} className="text-blue-400 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Urgency */}
              <div className="flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/25 rounded-xl px-4 py-3 mb-8">
                <Clock size={15} className="text-amber-400 flex-shrink-0" />
                <p className="text-amber-200 text-xs font-medium">
                  <strong className="text-amber-300">Limited consultation slots this week.</strong>{' '}
                  Book now to avoid a 2–3 week wait.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#appointment"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95
                             text-white font-bold px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 text-[15px]">
                  <Calendar size={18} /> Book Appointment
                  <ArrowRight size={15} className="ml-auto opacity-70" />
                </a>
                <a href={waUrl('hero')} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 active:scale-95
                             text-white font-bold px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/25 text-[15px]">
                  <WhatsAppIcon size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right column: clinic quick info */}
            <div className="lg:border-l border-white/8 p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.15em] mb-6">Clinic Branches</p>

              <div className="space-y-6">
                {Object.values(CLINIC.branches).map(b => (
                  <div key={b.id} className="group">
                    <div className="flex items-center gap-2 mb-1">
                      {b.isPrimary && (
                        <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Main</span>
                      )}
                      <p className="text-white font-semibold text-sm">{b.label}</p>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">{b.address}</p>
                    <p className="text-slate-400 text-[11px]">{b.hours.weekday}</p>
                    <p className="text-slate-500 text-[11px]">{b.hours.sunday}</p>
                    <div className="flex gap-2 mt-3">
                      <a href={`tel:${b.phoneRaw}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300
                                   bg-blue-400/10 hover:bg-blue-400/20 px-3.5 py-2 rounded-lg transition-all">
                        <Phone size={12} /> {b.phone}
                      </a>
                      <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200
                                   bg-white/6 hover:bg-white/12 px-3.5 py-2 rounded-lg transition-all">
                        Directions →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="mt-8 pt-6 border-t border-white/8">
                <p className="text-slate-500 text-[11px] mb-1.5">Email us anytime</p>
                <a href={`mailto:${CLINIC.email}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  {CLINIC.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default FinalCTA
