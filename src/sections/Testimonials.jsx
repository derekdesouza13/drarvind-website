import { Star, Quote } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Priya R.',
    location: 'Gachibowli, Hyderabad',
    rating: 5,
    treatment: 'Oral Cancer Surgery',
    text: "Dr. Arvind diagnosed my oral cancer early and performed the resection with incredible precision. He explained every step without overwhelming me. Today, I am cancer-free and back to normal life. I owe him so much.",
    avatar: 'PR',
    color: 'bg-red-100 text-red-700',
  },
  {
    name: 'Ramesh K.',
    location: 'Manikonda, Hyderabad',
    rating: 5,
    treatment: 'Dental Implants',
    text: "I had avoided dental treatment for years due to fear. Dr. Arvind and his team at Dhriti Dental made the entire implant process painless and stress-free. The result is beyond what I expected.",
    avatar: 'RK',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Sudha M.',
    location: 'Nallagandla, Hyderabad',
    rating: 5,
    treatment: 'TMJ Treatment',
    text: "I suffered from jaw pain for 3 years and saw multiple dentists with no improvement. Dr. Arvind correctly diagnosed my TMJ issue and within 2 months of treatment, the pain was gone. He's the real deal.",
    avatar: 'SM',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Mohammed A.',
    location: 'Hyderabad',
    rating: 5,
    treatment: 'Wisdom Tooth Surgery',
    text: "Expert surgeon, zero-pain experience. I was terrified of surgery, but Dr. Arvind made me comfortable throughout. Recovered in 3 days. Highly recommend to anyone with dental fears.",
    avatar: 'MA',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Kavitha D.',
    location: 'Kondapur, Hyderabad',
    rating: 5,
    treatment: 'Cancer Biopsy & Staging',
    text: "Dr. Arvind caught a potentially dangerous lesion during my routine screening. His calm, precise approach during the biopsy and his clear explanation of the next steps gave us immense confidence. Exceptional doctor.",
    avatar: 'KD',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Srinivas P.',
    location: 'Miyapur, Hyderabad',
    rating: 5,
    treatment: 'Jaw Fracture Surgery',
    text: "After a road accident, I needed emergency jaw surgery. Dr. Arvind's expertise at PACE Hospitals was outstanding. My bite is perfect again. I can't thank him enough for giving me my normal life back.",
    avatar: 'SP',
    color: 'bg-cyan-100 text-cyan-700',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">Trusted by Patients Across Hyderabad</h2>
          <div className="divider-line mx-auto" />
          <div className="flex items-center justify-center gap-4 mt-4">
            <Stars count={5} />
            <span className="text-slate-700 font-semibold text-sm">5.0 Rating</span>
            <span className="text-slate-400 text-sm">· 200+ Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="section-reveal bg-white rounded-2xl border border-slate-100 p-6 shadow-card card-hover flex flex-col" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.location}</div>
                  </div>
                </div>
                <Quote size={20} className="text-slate-200 flex-shrink-0" />
              </div>

              <div className="mb-3">
                <Stars count={t.rating} />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4 italic">"{t.text}"</p>

              <div className="mt-auto pt-3 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">
                  {t.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center section-reveal">
          <a href="#appointment" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg">
            Join Our Patients — Book Today
          </a>
        </div>
      </div>
    </section>
  )
}
