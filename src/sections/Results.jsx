import { useScrollReveal } from '../hooks/useScrollReveal'

const cases = [
  {
    tag: 'Oral Cancer Surgery',
    title: 'Stage II Buccal Mucosal Carcinoma',
    desc: 'Complete resection with clear margins followed by reconstruction. Patient is now cancer-free with near-normal speech and swallowing function.',
    before: 'Painful ulcer, difficulty speaking and eating',
    after: 'Cancer-free, restored function, improved quality of life',
    duration: '8-month journey',
    color: 'border-red-200 bg-red-50',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    tag: 'Implant Surgery',
    title: 'Full Upper Arch Reconstruction',
    desc: 'Complete upper jaw implant restoration for patient with advanced tooth loss and bone resorption. Immediate loading protocol used.',
    before: 'Missing multiple teeth, difficulty eating',
    after: 'Full smile restored, eating normally, high confidence',
    duration: '6-month treatment',
    color: 'border-blue-200 bg-blue-50',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    tag: 'Jaw Fracture',
    title: 'Complex Mandibular Fracture',
    desc: 'RTA case — severe jaw fracture requiring open reduction and internal fixation with titanium plates. Precise anatomical reduction achieved.',
    before: 'Misaligned jaw, inability to bite, severe pain',
    after: 'Normal bite restored, full jaw function, minimal scarring',
    duration: '3-month recovery',
    color: 'border-amber-200 bg-amber-50',
    tagColor: 'bg-amber-100 text-amber-700',
  },
]

export default function Results() {
  const ref = useScrollReveal()

  return (
    <section id="results" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="section-label">Clinical Outcomes</span>
          <h2 className="section-title">Surgical Transformations — Real Patient Results</h2>
          <div className="divider-line mx-auto" />
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Every case is unique. These examples reflect the quality of care and outcomes patients experience under Dr. Arvind's surgical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((c, i) => (
            <div key={i} className={`section-reveal rounded-3xl overflow-hidden border-2 ${c.color} card-hover`} style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Image placeholders */}
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-slate-300 flex flex-col items-center justify-center p-3 text-center border-r border-white">
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-slate-500 text-xs font-medium">Before</div>
                </div>
                <div className="aspect-square bg-slate-200 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-2xl mb-1">✨</div>
                  <div className="text-slate-500 text-xs font-medium">After</div>
                </div>
              </div>

              <div className="p-6">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.tagColor} mb-3 inline-block`}>{c.tag}</span>
                <h3 className="font-bold text-navy-900 mb-2 font-display">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{c.desc}</p>

                <div className="space-y-2 border-t border-slate-200 pt-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 font-bold text-xs mt-0.5 flex-shrink-0">BEFORE</span>
                    <span className="text-slate-600 text-xs">{c.before}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 font-bold text-xs mt-0.5 flex-shrink-0">AFTER</span>
                    <span className="text-slate-600 text-xs">{c.after}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                    <span>⏱</span> {c.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal bg-navy-900 rounded-3xl p-8 md:p-12 text-center">
          <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Ready to Begin?</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">Your outcome matters as much to us as it does to you.</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8">
            Schedule a consultation at Dhriti Dental and get an honest, specialist assessment of your condition — with no pressure and no upselling.
          </p>
          <a href="#appointment" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30">
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
