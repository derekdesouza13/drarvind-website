import { Globe, Award, Heart, Users, Zap, Shield } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  {
    icon: <Globe size={24} className="text-blue-600" />,
    bg: 'bg-blue-50',
    title: 'International Training',
    desc: 'Clinical Surgical Fellowship from the Royal College of Surgeons, London — one of the world\'s most prestigious surgical institutions. Dr. Arvind brings global standards to Hyderabad.',
  },
  {
    icon: <Award size={24} className="text-amber-600" />,
    bg: 'bg-amber-50',
    title: 'Proven Surgical Record',
    desc: 'Over 100 cancer surgeries performed with high success rates. This isn\'t a generalist who occasionally handles cancer cases — it\'s a specialist whose entire practice is built around it.',
  },
  {
    icon: <Heart size={24} className="text-rose-600" />,
    bg: 'bg-rose-50',
    title: 'Patient-First Philosophy',
    desc: 'No pressure. No unnecessary procedures. No rushed consultations. At Dhriti Dental, every patient receives undivided attention and honest, ethical recommendations.',
  },
  {
    icon: <Zap size={24} className="text-purple-600" />,
    bg: 'bg-purple-50',
    title: 'Tertiary Hospital Access',
    desc: 'For complex surgical cases, Dr. Arvind operates at PACE Hospitals — ensuring access to advanced ICU care, anaesthesia, and multidisciplinary oncology support.',
  },
  {
    icon: <Shield size={24} className="text-emerald-600" />,
    bg: 'bg-emerald-50',
    title: 'Holistic Cancer Care',
    desc: 'From early biopsy to neck dissection, reconstruction, and post-operative management — all surgical stages managed by the same specialist for continuity of care.',
  },
  {
    icon: <Users size={24} className="text-cyan-600" />,
    bg: 'bg-cyan-50',
    title: 'Accessible Expertise',
    desc: 'Two conveniently located clinics in Hyderabad — Nallagandla and Manikonda — with flexible timing to accommodate working patients and families.',
  },
]

export default function WhyChoose() {
  const ref = useScrollReveal()

  return (
    <section id="why" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="section-label">Why Dr. Arvind</span>
          <h2 className="section-title">Why Patients Choose a Specialist Over a General Dentist</h2>
          <div className="divider-line mx-auto" />
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            When your condition is complex — cancer, jaw surgery, implants in compromised bone —
            the quality of the surgeon matters as much as the procedure itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className={`section-reveal bg-white rounded-2xl p-7 border border-slate-100 shadow-card card-hover`} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-4`}>
                {r.icon}
              </div>
              <h3 className="font-bold text-navy-900 mb-2 font-display">{r.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center section-reveal">
          <a href="#appointment" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg">
            See Dr. Arvind at Dhriti Dental →
          </a>
        </div>
      </div>
    </section>
  )
}
