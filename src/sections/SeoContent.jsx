import { CheckCircle, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CLINIC, PRIMARY_PHONE, DOCTOR, waUrl } from '../config/clinic'
import { trackCallClick } from '../lib/emailService'

const SEO_SECTIONS = [
  {
    id: 'oral-cancer',
    tag: 'Oral Cancer Treatment – Hyderabad',
    title: 'Oral Cancer Treatment in Hyderabad',
    subtitle: 'Expert Diagnosis. Margin-Clear Surgery. Better Survival Rates.',
    content: [
      `Oral cancer is among the most common cancers in India — and one of the most treatable when caught early. Stage I oral cancer has an 80%+ survival rate. At Stage IV, that figure falls below 20%. Specialist diagnosis and timely surgery are not optional; they are life-saving.`,
      `${DOCTOR.name} specialises in the complete surgical management of oral cavity cancers — from incisional biopsy and staging through to tumour resection with clear margins, neck dissection, and post-surgical reconstruction. His training at HCG Cancer Hospital and Clinical Surgical Fellowship at the Royal College of Surgeons, London ensures each patient receives globally benchmarked oncological care.`,
      `Unlike general dentists or ENT surgeons, Dr. Arvind is specifically trained in the complex anatomy of the oral cavity, mandible, and neck — giving patients the best possible oncological outcome while preserving function, speech, and appearance.`,
    ],
    benefits: [
      'Stage-appropriate surgical planning',
      'Margin-clear resections with histopathology confirmation',
      'Selective and radical neck dissection',
      'Post-resection reconstruction to restore function',
      'Coordination with oncologists at PACE Hospitals',
    ],
    cta: 'Book Oral Cancer Consultation',
    gradFrom: 'from-red-50',
    accentText: 'text-red-600',
    accentBg: 'bg-red-600',
  },
  {
    id: 'dental-implants',
    tag: 'Dental Implants – Hyderabad',
    title: 'Dental Implants in Hyderabad',
    subtitle: 'Specialist-Placed. Precision-Loaded. Built to Last 25+ Years.',
    content: [
      `Dental implants are the gold standard for replacing missing teeth — but their longevity depends entirely on surgical precision during placement. An implant placed without proper bone assessment fails. One placed with careful planning and specialist technique lasts decades.`,
      `At ${CLINIC.name}, Dr. Arvind performs implant surgery with the anatomical accuracy of a maxillofacial specialist trained in jaw bone architecture at the highest level. Every case begins with a CT-based bone assessment, surgical planning, and a realistic discussion of outcomes before any procedure begins.`,
      `Whether you need a single implant, multiple implants, or a full-arch restoration, every procedure is performed by Dr. Arvind personally — using internationally certified implant systems with proven long-term success data.`,
    ],
    benefits: [
      'Single implants, multiple implants, full arch reconstruction',
      'Bone grafting and sinus lift where required',
      'Immediate loading (same-day teeth) where eligible',
      'International implant systems — Nobel, Straumann, BioHorizons',
      'Long-term monitoring and maintenance protocol',
    ],
    cta: 'Book Implant Consultation',
    gradFrom: 'from-blue-50',
    accentText: 'text-blue-600',
    accentBg: 'bg-blue-600',
  },
  {
    id: 'maxillofacial',
    tag: 'Maxillofacial Surgery – Hyderabad',
    title: 'Maxillofacial Surgery Specialist — Hyderabad',
    subtitle: 'Jaw. Face. Neck. One Specialist. Comprehensive Surgical Care.',
    content: [
      `Oral and Maxillofacial Surgery is the specialty at the intersection of dentistry and medicine — managing conditions affecting the mouth, jaw, face, neck, and skull base. It is one of the most technically demanding surgical disciplines, requiring both dental and medical expertise.`,
      `${DOCTOR.name} completed his MDS in Oral & Maxillofacial Surgery from Kamineni Institute, followed by fellowships at RGUHS and HCG Cancer Hospital, and a Clinical Surgical Fellowship at the Royal College of Surgeons, London — giving him a training pedigree matched by very few surgeons in Hyderabad.`,
      `His practice at ${DOCTOR.hospital.name}, Hyderabad represents tertiary-level maxillofacial care. At ${CLINIC.name}, he makes the same expertise accessible in a comfortable, private setting for consultations, diagnosis, minor procedures, and ongoing care.`,
    ],
    benefits: [
      'Jaw fracture surgery and facial bone repair (ORIF)',
      'Orthognathic (corrective jaw) surgery referrals',
      'TMJ arthroscopy and open joint surgery',
      'Microvascular free flap reconstruction',
      'Oral precancer management (OSMF, leukoplakia)',
    ],
    cta: 'Book Specialist Consultation',
    gradFrom: 'from-emerald-50',
    accentText: 'text-emerald-700',
    accentBg: 'bg-emerald-700',
  },
]

export default function SeoContent() {
  const ref = useScrollReveal()

  return (
    <section id="seo-content" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14 section-reveal">
          <span className="section-label">In-Depth Information</span>
          <h2 className="section-title">Understanding Your Treatment Options</h2>
          <div className="divider-line mx-auto" />
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Accurate, specialist-written information about the conditions we treat —
            so you can make informed decisions with full confidence.
          </p>
        </div>

        <div className="space-y-8">
          {SEO_SECTIONS.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`section-reveal bg-gradient-to-br ${s.gradFrom} to-white rounded-3xl border border-slate-100 overflow-hidden`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              aria-label={s.title}
            >
              <div className="grid lg:grid-cols-5">

                {/* Main content */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <p className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-2 ${s.accentText}`}>
                    {s.tag}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-display">
                    {s.title}
                  </h2>
                  <p className="text-slate-500 text-sm font-medium mb-6 italic">{s.subtitle}</p>

                  <div className="space-y-4 mb-7">
                    {s.content.map((p, j) => (
                      <p key={j} className="text-slate-600 text-sm leading-relaxed">{p}</p>
                    ))}
                  </div>

                  <a
                    href="#appointment"
                    className={`inline-flex items-center gap-2 ${s.accentBg} hover:opacity-90
                               text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md text-sm`}
                    aria-label={s.cta}
                  >
                    {s.cta} <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>

                {/* Benefits sidebar */}
                <div className="lg:col-span-2 bg-white/70 border-t lg:border-t-0 lg:border-l border-slate-100 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-wide">
                      What's Included
                    </h3>
                    <ul className="space-y-3" aria-label={`Benefits of ${s.title}`}>
                      {s.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle size={15} className={`flex-shrink-0 mt-0.5 ${s.accentText}`} aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA card */}
                  <div className="mt-8 bg-slate-900 rounded-2xl p-5 text-center">
                    <p className="text-white font-bold text-sm mb-1">Talk to a Specialist</p>
                    <p className="text-slate-400 text-xs mb-4">
                      Consultation at {CLINIC.name}, Hyderabad
                    </p>
                    <a
                      href={`tel:${CLINIC.branches.nallagandla.phoneRaw}`}
                      onClick={() => trackCallClick(`seo-${s.id}`)}
                      className="block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 rounded-lg transition-all"
                      aria-label={`Call ${PRIMARY_PHONE}`}
                    >
                      📞 {PRIMARY_PHONE}
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
