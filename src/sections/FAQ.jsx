import { useState, useCallback, memo } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { waUrl, CLINIC, PRIMARY_PHONE, DOCTOR } from '../config/clinic'
import { trackWhatsAppClick, trackCallClick } from '../lib/emailService'

const FAQS = [
  {
    q: `What conditions does ${DOCTOR.name} treat at ${CLINIC.name}?`,
    a: `Dr. Arvind treats a comprehensive range of oral and maxillofacial conditions at Dhriti Dental — including oral cancer screening and biopsy, dental implants, wisdom tooth extraction, TMJ disorders, oral precancerous lesions (OSMF, leukoplakia), jaw cysts and tumours, and complex minor oral surgeries. Cases requiring hospitalisation — such as cancer resections and jaw reconstruction — are handled at PACE Hospitals, Hyderabad.`,
  },
  {
    q: 'How early should I see a specialist for a mouth sore or ulcer?',
    a: 'If a mouth sore or ulcer does not heal within 2 weeks, see a specialist immediately. This is the most actionable early warning sign of oral cancer. Early detection at Stage I gives an 80%+ survival rate — at Stage IV, it drops below 20%. Do not wait.',
  },
  {
    q: `Is ${DOCTOR.name} available for second opinions on oral cancer diagnoses?`,
    a: 'Yes. Dr. Arvind provides second opinions for patients who have received an oral cancer diagnosis or are uncertain about a recommended treatment plan. Please bring all previous reports, biopsy results, scans, and referral letters to the consultation. Second opinions are always handled with full confidentiality.',
  },
  {
    q: 'What is the difference between a general dentist and an oral & maxillofacial surgeon?',
    a: 'An Oral & Maxillofacial Surgeon (OMS) holds an MDS — a specialist postgraduate degree — with extensive surgical training beyond dentistry, covering the jaw, face, neck, and skull base. Dr. Arvind additionally holds a Clinical Surgical Fellowship from the Royal College of Surgeons, London — one of the world\'s most rigorous surgical accreditations. For complex conditions like oral cancer, jaw fractures, or bone-deficient implants, specialist-performed surgery produces significantly better clinical outcomes.',
  },
  {
    q: `What does a first consultation at ${CLINIC.name} involve?`,
    a: 'Your first visit includes a thorough clinical examination of your oral cavity, jaw, and neck; review of any existing reports or imaging; a clear explanation of your diagnosis; and an honest, pressure-free discussion of treatment options. We never rush consultations and always encourage questions. Most patients leave with complete clarity on their condition and next steps.',
  },
  {
    q: 'How painful is oral surgery? What should I expect during recovery?',
    a: 'Most oral surgeries are performed under local anaesthesia, with optional sedation for anxious patients. Post-operative discomfort is well-managed with prescribed medications. Minor surgeries have 2–5 day recovery windows; complex reconstructions may take 2–6 weeks. Dr. Arvind provides detailed written post-op instructions and is available for follow-up support throughout recovery.',
  },
  {
    q: 'Are dental implants painful? How long do they last?',
    a: 'Implant placement is done under local anaesthesia and is typically no more uncomfortable than a routine extraction. Post-surgical soreness usually resolves in 3–5 days. When placed with surgical precision in adequate bone, implants last 20–25+ years. Success rates for specialist-placed implants significantly exceed those placed by general practitioners — the surgeon\'s skill and planning are the most critical factors.',
  },
  {
    q: 'Does Dr. Arvind accept patients referred from other cities or states?',
    a: 'Yes. Dr. Arvind sees patients from across Telangana, Andhra Pradesh, and occasionally from other states and abroad for specialist second opinions and complex surgical care. Telemedicine pre-consultations can be arranged to review reports before scheduling an in-person visit. Please email us at dhritidentals@gmail.com to arrange.',
  },
]

const FAQItem = memo(function FAQItem({ q, a, isOpen, onToggle, index }) {
  const id = `faq-answer-${index}`

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen ? 'border-blue-200 bg-blue-50/40' : 'border-slate-100 bg-white'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-start justify-between gap-4 text-left px-6 py-5
                   hover:bg-slate-50/80 transition-colors focus-visible:ring-2
                   focus-visible:ring-blue-400 focus-visible:ring-inset"
      >
        <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
          {q}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`flex-shrink-0 mt-0.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
          }`}
        />
      </button>

      {isOpen && (
        <div id={id} role="region" aria-label={q}>
          <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-blue-100 pt-4">
            {a}
          </p>
        </div>
      )}
    </div>
  )
})

export default function FAQ() {
  const ref = useScrollReveal()
  const [openIdx, setOpenIdx] = useState(0)

  const handleToggle = useCallback((i) => {
    setOpenIdx(prev => prev === i ? -1 : i)
  }, [])

  return (
    <section id="faq" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider-line mx-auto" />
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Everything you should know before your first visit. If your question isn't here,
            call or WhatsApp us directly — we're happy to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-12" role="list" aria-label="Frequently asked questions">
          {FAQS.map((f, i) => (
            <div key={i} className="section-reveal" style={{ transitionDelay: `${i * 0.04}s` }} role="listitem">
              <FAQItem
                q={f.q}
                a={f.a}
                isOpen={openIdx === i}
                onToggle={() => handleToggle(i)}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="section-reveal text-center">
          <p className="text-slate-500 text-sm mb-5">Still have questions? Reach us directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
              onClick={() => trackCallClick('faq')}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white
                         font-semibold px-6 py-3.5 rounded-xl transition-all text-sm w-full sm:w-auto justify-center"
              aria-label={`Call ${CLINIC.branches.nallagandla.phone}`}
            >
              📞 {PRIMARY_PHONE}
            </a>
            <a
              href={waUrl('callback')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('faq')}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white
                         font-semibold px-6 py-3.5 rounded-xl transition-all text-sm w-full sm:w-auto justify-center"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
