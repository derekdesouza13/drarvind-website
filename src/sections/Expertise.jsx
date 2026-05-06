import { Activity, Zap, RotateCcw, Smile, Scissors, Target, Eye, AlertTriangle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const specialties = [
  {
    icon: <Target size={28} />,
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
    title: 'Oral Cancer Surgery',
    tag: 'Primary Specialty',
    desc: 'Complete surgical management of oral cavity cancers — from early-stage tumour resections to advanced cases requiring neck dissection. International-standard oncological protocols.',
    highlights: ['Tumour Resection', 'Neck Dissection', 'Cancer Staging', 'Post-op Rehabilitation'],
  },
  {
    icon: <RotateCcw size={28} />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    title: 'Maxillofacial Reconstruction',
    tag: 'Advanced Surgery',
    desc: 'Restoration of facial form and function after cancer surgery, trauma, or congenital defects — using microvascular free flaps and bone grafting techniques.',
    highlights: ['Free Flap Surgery', 'Bone Grafting', 'Jaw Reconstruction', 'Soft Tissue Repair'],
  },
  {
    icon: <Zap size={28} />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    title: 'TMJ & Facial Pain',
    tag: 'Conservative to Surgical',
    desc: 'Comprehensive management of temporomandibular joint disorders, jaw pain, and clicking — from conservative therapy to arthroscopic and open joint surgeries.',
    highlights: ['TMJ Arthroscopy', 'Jaw Joint Surgery', 'Pain Management', 'Bite Correction'],
  },
  {
    icon: <Activity size={28} />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    title: 'Maxillofacial Trauma',
    tag: 'Emergency & Elective',
    desc: 'Precise surgical repair of facial fractures — jaw, cheekbone, orbital, and nasal bones. Restored to anatomical accuracy for optimal function and aesthetics.',
    highlights: ['Jaw Fracture Repair', 'Orbital Fractures', 'Facial Plating', 'Soft Tissue Laceration'],
  },
  {
    icon: <Smile size={28} />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    title: 'Dental Implants',
    tag: 'Permanent Solution',
    desc: 'Surgical placement of dental implants for single or full-arch restoration. Precision osseointegration for a natural feel, strength, and longevity.',
    highlights: ['Single Implants', 'Full Arch Implants', 'Bone Grafting', 'Immediate Loading'],
  },
  {
    icon: <Eye size={28} />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    title: 'Biopsy & Diagnosis',
    tag: 'Early Detection Saves Lives',
    desc: 'Early oral cancer detection through incisional and excisional biopsies, tissue pathology coordination, and comprehensive oral mucosal examination.',
    highlights: ['Incisional Biopsy', 'Excisional Biopsy', 'Mucosal Screening', 'Cancer Staging'],
  },
  {
    icon: <Scissors size={28} />,
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-100',
    title: 'Minor Oral Surgery',
    tag: 'Specialist Precision',
    desc: 'Impacted wisdom teeth, complex extractions, cyst removal, apicoectomies — minor procedures performed with surgical-grade precision by a specialist.',
    highlights: ['Impacted Wisdom Teeth', 'Cyst Removal', 'Apicoectomy', 'Alveoloplasty'],
  },
  {
    icon: <AlertTriangle size={28} />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    title: 'Oral Precancer Management',
    tag: 'Prevention & Intervention',
    desc: 'Systematic management of oral submucous fibrosis, leukoplakia, erythroplakia — conditions that can progress to cancer if left untreated.',
    highlights: ['OSMF Management', 'Leukoplakia', 'Erythroplakia', 'Monitoring Protocol'],
  },
]

export default function Expertise() {
  const ref = useScrollReveal()

  return (
    <section id="expertise" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="section-label">Surgical Specializations</span>
          <h2 className="section-title">Expert Care Across Every Discipline</h2>
          <div className="divider-line mx-auto" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you need cancer surgery, facial reconstruction, or a second opinion —
            Dr. Arvind's expertise spans the full scope of oral and maxillofacial surgery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {specialties.map((s, i) => (
            <div key={i} className={`expertise-card border ${s.border} section-reveal`} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                {s.icon}
              </div>
              <div className={`text-xs font-semibold mb-1 ${s.color} uppercase tracking-wide`}>{s.tag}</div>
              <h3 className="font-bold text-navy-900 mb-2 font-display text-lg leading-snug">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1">
                {s.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-slate-600 flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${s.bg} border ${s.border} flex-shrink-0`} style={{ borderColor: 'currentColor' }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center section-reveal">
          <p className="text-slate-500 text-sm mb-4">Not sure which treatment you need? Start with a consultation.</p>
          <a href="#appointment" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg">
            Book a Specialist Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
