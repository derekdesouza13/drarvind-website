import { useEffect, useRef, useState } from 'react'
import { Award, Users, Globe, Building2, Stethoscope, Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const STATS = [
  { icon: <Award     size={26} />, iconBg: 'bg-blue-100',   iconText: 'text-blue-600',   num: 9,    suffix: '+',  label: 'Years of Specialist Experience', sub: 'MDS + Int\'l Fellowships' },
  { icon: <Stethoscope size={26}/>, iconBg: 'bg-rose-100',  iconText: 'text-rose-600',   num: 100,  suffix: '+',  label: 'Cancer Surgeries',               sub: 'Oral & Maxillofacial' },
  { icon: <Globe     size={26} />, iconBg: 'bg-amber-100',  iconText: 'text-amber-600',  num: 2,    suffix: '',   label: 'International Fellowships',       sub: 'RCS London · HCG' },
  { icon: <Building2 size={26} />, iconBg: 'bg-purple-100', iconText: 'text-purple-600', num: 1,    suffix: '',   label: 'Tertiary Cancer Hospital',        sub: 'PACE Hospitals, Hyderabad' },
  { icon: <Users     size={26} />, iconBg: 'bg-teal-100',   iconText: 'text-teal-600',   num: 5000, suffix: '+',  label: 'Patients Treated',               sub: 'Across Hyderabad' },
]

const STRIP_ITEMS = [
  '🏥 PACE Hospitals, Hyderabad',
  '🎓 Royal College of Surgeons, London',
  '🔬 HCG Cancer Hospital Fellow',
  '📋 RGUHS Fellow',
  '🎓 Kamineni Institute – MDS & BDS',
  '✅ 100+ Cancer Surgeries',
  '⭐ 9+ Years Specialist Experience',
]

function CountUp({ target, suffix }) {
  const [count, setCount]   = useState(0)
  const ref     = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const dur = 1600
        const fps = 60
        const steps = (dur / 1000) * fps
        const inc = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += inc
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, 1000 / fps)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count >= 1000 ? count.toLocaleString() : count}{suffix}
    </span>
  )
}

export default function TrustBar() {
  const ref = useScrollReveal()

  return (
    <section id="trust-bar" className="bg-white border-b border-slate-100" ref={ref}>
      {/* ── Scrolling credentials strip ── */}
      <div className="bg-slate-900 overflow-hidden py-2.5">
        <div className="flex gap-10 animate-[scroll_25s_linear_infinite] whitespace-nowrap">
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, i) => (
            <span key={i} className="text-slate-400 text-[11px] font-medium tracking-wide flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-11 section-reveal">
            <span className="section-label">Track Record</span>
            <h2 className="section-title">A Record Built on Results &amp; Trust</h2>
            <div className="divider-line mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`section-reveal card-hover bg-white rounded-2xl p-6 border border-slate-100 text-center
                            shadow-[0_2px_16px_rgba(0,0,0,0.045)] flex flex-col items-center`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className={`${s.iconBg} ${s.iconText} w-13 h-13 rounded-xl flex items-center justify-center mb-4 p-3`}>
                  {s.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 leading-none mb-1 font-display">
                  <CountUp target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-slate-800 text-[13px] font-semibold leading-snug mb-0.5">{s.label}</div>
                <div className="text-slate-400 text-[11px]">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* ── Accreditation logos row ── */}
          <div className="section-reveal mt-11 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {[
              { label: 'PACE Hospitals', color: 'bg-blue-600',   initials: 'PH' },
              { label: 'RCS London',     color: 'bg-amber-600',  initials: 'RCS' },
              { label: 'HCG Cancer',     color: 'bg-purple-600', initials: 'HCG' },
              { label: 'RGUHS',          color: 'bg-teal-600',   initials: 'RGU' },
              { label: 'Kamineni Inst.', color: 'bg-rose-600',   initials: 'KI' },
            ].map((org, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                <div className={`${org.color} w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0`}>
                  {org.initials}
                </div>
                <span className="text-slate-600 text-xs font-semibold whitespace-nowrap">{org.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframe for the scrolling strip */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
