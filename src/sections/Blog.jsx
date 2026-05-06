import { ArrowRight, Clock, Tag } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const posts = [
  {
    tag: 'Oral Cancer',
    title: 'Early Signs of Oral Cancer You Should Never Ignore',
    excerpt: 'White patches, red sores, unexplained ulcers that don\'t heal in 2 weeks — these could be early warning signs. A specialist can tell you in one visit. Learn what to watch for.',
    readTime: '4 min read',
    color: 'bg-red-50 text-red-700',
    icon: '🔴',
    href: '#oral-cancer',
  },
  {
    tag: 'Dental Implants',
    title: 'Dental Implant Cost in Hyderabad — What Factors Matter Most',
    excerpt: 'The cost of an implant depends on bone quality, implant brand, and the surgeon\'s expertise. Here\'s a transparent breakdown to help you plan your treatment without surprises.',
    readTime: '5 min read',
    color: 'bg-blue-50 text-blue-700',
    icon: '💡',
    href: '#dental-implants',
  },
  {
    tag: 'Patient Guide',
    title: 'How to Choose the Right Dental Surgeon for Your Case',
    excerpt: 'Not all dental procedures should be done by a general dentist. Some require a specialist. Here\'s a practical guide to knowing when you need an oral surgeon — and how to find the right one.',
    readTime: '3 min read',
    color: 'bg-emerald-50 text-emerald-700',
    icon: '🏥',
    href: '#about',
  },
  {
    tag: 'Surgery Guide',
    title: 'What to Expect Before, During, and After Oral Surgery',
    excerpt: 'Preparing for oral surgery doesn\'t have to be stressful. This step-by-step guide walks you through what happens at each stage — so you can feel confident walking into the OT.',
    readTime: '6 min read',
    color: 'bg-amber-50 text-amber-700',
    icon: '📋',
    href: '#faq',
  },
]

export default function Blog() {
  const ref = useScrollReveal()

  return (
    <section id="blog" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="section-reveal">
            <span className="section-label">Patient Resources</span>
            <h2 className="section-title mb-0">Insights from Dr. Arvind</h2>
          </div>
          <div className="section-reveal">
            <a href="#blog" className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 transition-colors">
              View all articles <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((p, i) => (
            <a key={i} href={p.href}
              className="section-reveal bg-white border border-slate-100 rounded-2xl overflow-hidden card-hover shadow-card flex flex-col group"
              style={{ transitionDelay: `${i * 0.07}s` }}>
              {/* Thumbnail placeholder */}
              <div className="h-36 bg-slate-100 flex items-center justify-center text-4xl">
                {p.icon}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.color}`}>{p.tag}</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1"><Clock size={11} /> {p.readTime}</span>
                </div>
                <h3 className="font-bold text-navy-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors font-display">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-3">{p.excerpt}</p>
                <span className="text-blue-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
