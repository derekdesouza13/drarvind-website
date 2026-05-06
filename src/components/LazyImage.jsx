import { useState, useRef, useEffect, memo } from 'react'

/**
 * LazyImage — drops in for <img> with:
 *  • IntersectionObserver lazy loading
 *  • Blur-up placeholder while loading
 *  • Graceful fallback UI if no src
 *  • Proper alt text for accessibility & SEO
 */
const LazyImage = memo(function LazyImage({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  fallback = null,
  aspectRatio = '4/3',
  objectFit = 'cover',
  priority = false,   // set true for hero/above-fold images
}) {
  const [loaded,  setLoaded]  = useState(false)
  const [inView,  setInView]  = useState(priority)
  const [errored, setErrored] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (priority || !imgRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    obs.observe(imgRef.current)
    return () => obs.disconnect()
  }, [priority])

  const showFallback = !src || errored

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-slate-100 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder shimmer */}
      {!loaded && !showFallback && (
        <div className={`absolute inset-0 shimmer-bar ${placeholderClassName}`} />
      )}

      {/* Actual image */}
      {inView && !showFallback && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`w-full h-full transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit }}
        />
      )}

      {/* Fallback placeholder */}
      {showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-4">
          {fallback || (
            <>
              <svg className="w-10 h-10 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium text-center">{alt || 'Image placeholder'}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
})

export default LazyImage
