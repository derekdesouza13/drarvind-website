import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { waUrl, CLINIC, DOCTOR } from '../config/clinic'

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Clinic',    href: '#clinic' },
  { label: 'Results',   href: '#results' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contact',   href: '#appointment' },
]

const WA_URL = waUrl('default')

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('')

  /* ── Scroll tracking ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
    // Active section detection
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.getBoundingClientRect().top <= 120) {
        setActive(sections[i])
        return
      }
    }
    setActive('')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  /* ── Lock body when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isScrolled = scrolled || open

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.08)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#" aria-label="Dr. B Arvind – Home" className="flex items-center gap-3 min-w-0">
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm font-display transition-colors duration-300 ${
              isScrolled ? 'bg-blue-600' : 'bg-blue-500/90'
            }`}>
              {DOCTOR.initials}
            </div>
            <div className="min-w-0">
              <p className={`font-bold text-sm leading-tight font-display truncate transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>{DOCTOR.name}</p>
              <p className={`text-[11px] leading-tight truncate transition-colors duration-300 ${
                isScrolled ? 'text-slate-500' : 'text-blue-200'
              }`}>{DOCTOR.shortTitle}</p>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                  active === l.href.slice(1)
                    ? isScrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/10'
                    : isScrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                isScrolled
                  ? 'text-green-700 bg-green-50 hover:bg-green-100'
                  : 'text-green-300 hover:text-green-200 glass'
              }`}
            >
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
            <a
              href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ${
                isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/75 hover:text-white'
              }`}
            >
              <Phone size={14} />
              <span className="hidden xl:inline">{CLINIC.branches.nallagandla.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <a
              href="#appointment"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Book Appointment
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer Overlay ── */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer Panel ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-white shadow-2xl
                    transition-transform duration-300 ease-out flex flex-col
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm">BA</div>
            <div>
              <p className="font-bold text-sm text-slate-900 font-display">Dr. B Arvind</p>
              <p className="text-[11px] text-slate-500">Oral & Maxillofacial Oncosurgeon</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto p-4">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm transition-colors mb-1"
            >
              {l.label}
              <ChevronRight size={15} className="text-slate-300" />
            </a>
          ))}
        </nav>

        {/* Drawer footer CTAs */}
        <div className="p-4 border-t border-slate-100 space-y-3 pb-safe">
          <a
            href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <Phone size={15} /> {CLINIC.branches.nallagandla.phone}
          </a>
          <a
            href={WA_URL}
            target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp w-full py-3"
          >
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </a>
          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="btn-primary w-full py-3"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  )
}
