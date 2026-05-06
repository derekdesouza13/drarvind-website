import { lazy, Suspense, memo } from 'react'
import Navbar    from './components/Navbar'
import StickyBar from './components/StickyBar'
import Footer    from './components/Footer'

// ── Above-fold: eager load ──
import Hero     from './sections/Hero'
import TrustBar from './sections/TrustBar'

// ── Below-fold: lazy load ──
const About           = lazy(() => import('./sections/About'))
const WhyChoose       = lazy(() => import('./sections/WhyChoose'))
const Expertise       = lazy(() => import('./sections/Expertise'))
const ConsultationPath= lazy(() => import('./sections/ConsultationPath'))
const Clinic          = lazy(() => import('./sections/Clinic'))
const Results         = lazy(() => import('./sections/Results'))
const Testimonials    = lazy(() => import('./sections/Testimonials'))
const Blog            = lazy(() => import('./sections/Blog'))
const SeoContent      = lazy(() => import('./sections/SeoContent'))
const FAQ             = lazy(() => import('./sections/FAQ'))
const Appointment     = lazy(() => import('./sections/Appointment'))
const FinalCTA        = lazy(() => import('./sections/FinalCTA'))

/** Minimal section skeleton shown while lazy chunk loads */
const SectionSkeleton = memo(function SectionSkeleton({ height = 'h-40' }) {
  return (
    <div className={`${height} bg-white flex items-center justify-center`} aria-hidden="true">
      <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  )
})

export default function App() {
  return (
    <div className="min-h-screen font-body antialiased">
      {/* ── Always visible ── */}
      <Navbar />

      <main>
        {/* ── Eager (above fold) ── */}
        <Hero />
        <TrustBar />

        {/* ── Lazy (below fold) — each has its own Suspense boundary ── */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-80" />}>
          <WhyChoose />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Expertise />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-80" />}>
          <ConsultationPath />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Clinic />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-80" />}>
          <Results />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-80" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <SeoContent />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-80" />}>
          <FAQ />
        </Suspense>

        {/* Primary lead-capture */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Appointment />
        </Suspense>

        {/* Final persuasion + contact */}
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Footer />

      {/* Mobile sticky bar + desktop WhatsApp FAB */}
      <StickyBar />

      {/* Bottom padding on mobile so sticky bar doesn't overlap content */}
      <div className="h-[72px] lg:hidden" aria-hidden="true" />
    </div>
  )
}
