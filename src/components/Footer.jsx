import { memo } from 'react'
import { Phone, Mail, ExternalLink, Heart, ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { CLINIC, DOCTOR, waUrl, PRIMARY_PHONE } from '../config/clinic'

const QUICK_LINKS = [
  { label: 'About Dr. Arvind',           href: '#about' },
  { label: 'Expertise & Specializations', href: '#expertise' },
  { label: 'Dhriti Dental Clinic',        href: '#clinic' },
  { label: 'Patient Results',             href: '#results' },
  { label: 'Patient Testimonials',        href: '#testimonials' },
  { label: 'Frequently Asked Questions',  href: '#faq' },
  { label: 'Book an Appointment',         href: '#appointment' },
]

const SEO_LINKS = [
  { label: 'Oral Cancer Treatment – Hyderabad',   href: '#oral-cancer' },
  { label: 'Dental Implants – Hyderabad',         href: '#dental-implants' },
  { label: 'Maxillofacial Surgery – Hyderabad',   href: '#maxillofacial' },
  { label: 'TMJ Specialist – Hyderabad',          href: '#expertise' },
  { label: 'Jaw Fracture Surgery',                href: '#expertise' },
  { label: 'Oral Cancer Screening',               href: '#expertise' },
  { label: 'Wisdom Tooth Removal',                href: '#expertise' },
]

const Footer = memo(function Footer() {
  const year    = new Date().getFullYear()
  const wa      = waUrl('appointment')

  return (
    <footer
      className="bg-slate-950 text-slate-400"
      itemScope itemType="https://schema.org/Dentist"
      aria-label="Site footer"
    >
      {/* ── Top CTA strip ── */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-base">Ready to see a specialist?</p>
            <p className="text-blue-200 text-sm">Consultations available 6 days a week at Dhriti Dental.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#appointment"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-5 py-2.5 rounded-xl text-sm
                         transition-all hover:shadow-lg whitespace-nowrap">
              Book Appointment
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold
                         px-5 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap">
              <WhatsAppIcon size={15} /> WhatsApp Us
            </a>
            <a href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
              className="flex items-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold
                         px-5 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap">
              <Phone size={14} /> {CLINIC.branches.nallagandla.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold font-display text-sm flex-shrink-0">
                BA
              </div>
              <div>
                <p className="text-white font-bold font-display text-sm leading-tight" itemProp="name">
                  {DOCTOR.name}
                </p>
                <p className="text-slate-500 text-[11px]">{DOCTOR.shortTitle}</p>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed mb-5">
              Internationally trained specialist in oral cancer surgery and maxillofacial reconstruction.
              Available at Dhriti Dental Clinic and{' '}
              <a href={DOCTOR.hospital.url} target="_blank" rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors">
                PACE Hospitals
              </a>, Hyderabad.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['RCS London', 'MDS', 'HCG Fellow', 'RGUHS Fellow'].map(c => (
                <span key={c} className="text-[10px] font-medium bg-white/5 border border-white/10 text-slate-500 px-2.5 py-1 rounded-full">
                  {c}
                </span>
              ))}
            </div>

            <a href={`mailto:${CLINIC.email}`}
              className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors text-xs"
              itemProp="email">
              <Mail size={12} /> {CLINIC.email}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-slate-500 hover:text-slate-200 transition-colors text-xs flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic branches */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5">
              {CLINIC.name}
            </h3>
            <div className="space-y-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              {Object.values(CLINIC.branches).map(b => (
                <div key={b.id}>
                  <p className="text-white text-[11px] font-bold mb-1.5 flex items-center gap-1.5">
                    {b.label}
                    {b.isPrimary && (
                      <span className="bg-blue-600/30 text-blue-400 text-[9px] px-1.5 py-0.5 rounded font-semibold">MAIN</span>
                    )}
                  </p>
                  <p className="text-slate-600 text-[11px] mb-1" itemProp="streetAddress">{b.address}</p>
                  <a href={`tel:${b.phoneRaw}`}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors text-xs mb-1"
                    itemProp="telephone">
                    <Phone size={11} /> {b.phone}
                  </a>
                  <p className="text-slate-600 text-[11px]">{b.hours.weekday}</p>
                  <p className="text-slate-700 text-[11px]">{b.hours.sunday}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO / Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5">Specialist Services</h3>
            <ul className="space-y-2.5">
              {SEO_LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-slate-500 hover:text-slate-200 transition-colors text-xs flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Hospital card */}
            <div className="mt-6 border border-white/8 rounded-xl p-4">
              <p className="text-white text-[11px] font-bold mb-1">Hospital Association</p>
              <a href={DOCTOR.hospital.url} target="_blank" rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors mb-1">
                {DOCTOR.hospital.name} <ArrowUpRight size={11} />
              </a>
              <p className="text-slate-600 text-[11px]">{DOCTOR.hospital.desc}</p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px]">
          <p className="text-slate-600 text-center md:text-left">
            © {year} {DOCTOR.name} · {CLINIC.name} · All rights reserved.
          </p>
          {/* <p className="text-slate-700 flex items-center gap-1.5">
            Built with <Heart size={10} className="text-red-600/50" fill="currentColor" /> for better oral health in Hyderabad
          </p> */}
          <p className="text-slate-700 text-center md:text-right max-w-xs">
            Informational purposes only. Consult Dr. Arvind directly for medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
