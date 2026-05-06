import { CheckCircle, GraduationCap, Briefcase, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImg from '../assets/doctor-clinic.webp'

const credentials = [
  { icon: <GraduationCap size={18} className="text-blue-600" />, title: 'BDS & MDS', sub: 'Kamineni Institute of Dental Sciences' },
  { icon: <GraduationCap size={18} className="text-blue-600" />, title: 'Fellowship – RGUHS', sub: 'Rajiv Gandhi University of Health Sciences' },
  { icon: <GraduationCap size={18} className="text-amber-600" />, title: 'Clinical Surgical Fellowship', sub: 'Royal College of Surgeons (RCS), London' },
  { icon: <GraduationCap size={18} className="text-purple-600" />, title: 'Fellowship – Oncology', sub: 'HCG Cancer Hospital' },
  { icon: <Briefcase size={18} className="text-emerald-600" />, title: 'Consultant Surgeon', sub: 'PACE Hospitals, Hyderabad' },
]

const values = [
  'Honest, evidence-based clinical decisions',
  'No unnecessary procedures — ever',
  'Fear-free consultations',
  'Outcomes that speak for themselves',
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Image + Timeline */}
          <div className="section-reveal">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-slate-700 aspect-[4/5] flex items-center justify-center shadow-2xl">
               <img
  src={aboutImg}
  alt="Dr. Arvind at Dhriti Dental Clinic"
  className="w-full h-full object-cover"
/>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 md:right-0 lg:-right-6 bg-white rounded-2xl shadow-xl p-5 w-52 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Heart size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-sm">Patient First</div>
                    <div className="text-slate-500 text-xs">Always</div>
                  </div>
                </div>
                <div className="text-slate-600 text-xs leading-relaxed">
                  Ethical care, honest communication, zero pressure.
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="section-reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="section-label">Meet the Specialist</span>
            <h2 className="section-title">Dr. B Arvind — A Surgeon Who Puts People Before Procedures</h2>
            <div className="divider-line" />

            <p className="text-slate-600 leading-relaxed mb-5">
              Oral and maxillofacial surgery sits at the intersection of dentistry and medicine —
              and few surgeons master both with the precision Dr. Arvind brings.
              With over nine years of specialized practice and an international fellowship from the
              <strong className="text-navy-900"> Royal College of Surgeons, London</strong>, he has become
              one of Hyderabad's most trusted names in oral cancer surgery and complex facial reconstruction.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              At <strong className="text-navy-900">PACE Hospitals</strong>, Dr. Arvind handles the region's most complex oncological
              surgical cases. At <strong className="text-blue-600">Dhriti Dental</strong>, his private clinic, he brings the same
              expertise into a comfortable, patient-friendly environment where no one is rushed,
              no case is too small, and every patient leaves better informed than when they arrived.
            </p>

            {/* Core values */}
            <div className="bg-blue-50 rounded-2xl p-5 mb-8 border border-blue-100">
              <h4 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wide">His Practice Philosophy</h4>
              <ul className="space-y-2">
                {values.map((v, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle size={15} className="text-blue-600 flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* Credentials timeline */}
            <h4 className="font-bold text-navy-900 mb-4 text-sm uppercase tracking-wide">Qualifications & Training</h4>
            <div className="space-y-3">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100 mt-0.5">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{c.title}</div>
                    <div className="text-slate-500 text-xs">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#appointment" className="btn-primary bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
