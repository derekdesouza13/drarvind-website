import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Attach ref to a section container.
 * All children with class `section-reveal` or `reveal` inside
 * will be animated when they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const container = ref.current
    if (!container) return

    const selectors = '.section-reveal, .reveal'
    const elements  = container.querySelectorAll(selectors)

    if (prefersReduced) {
      // Skip animation, just show immediately
      elements.forEach(el => el.classList.add('visible'))
      return
    }

    const observerOpts = {
      threshold:  options.threshold  ?? 0.08,
      rootMargin: options.rootMargin ?? '0px 0px -32px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Unobserve after reveal to save resources
          observer.unobserve(entry.target)
        }
      })
    }, observerOpts)

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * useInView — simple single-element version
 */
export function useInView(options = {}) {
  const ref    = useRef(null)
  const seenRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !seenRef.current) {
        seenRef.current = true
        el.classList.add('visible')
        observer.disconnect()
      }
    }, { threshold: options.threshold ?? 0.15 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold])

  return ref
}
