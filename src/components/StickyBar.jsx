import { useState, useEffect, memo } from 'react'
import { Phone, Calendar, X, MessageCircle } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { waUrl, CLINIC } from '../config/clinic'

const WA_URL      = waUrl('appointment')
const PHONE_HREF  = `tel:${CLINIC.branches.nallagandla.phoneRaw}`
const PHONE_LABEL = CLINIC.branches.nallagandla.phone

const StickyBar = memo(function StickyBar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [showBubble,  setShowBubble]  = useState(false)
  const [bubbleSeen,  setBubbleSeen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    // Show WA bubble after 5s — only once per session
    const t = setTimeout(() => {
      if (!sessionStorage.getItem('wa-bubble-shown')) {
        setShowBubble(true)
        sessionStorage.setItem('wa-bubble-shown', '1')
      }
    }, 5000)
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(t) }
  }, [])

  const dismissBubble = () => { setShowBubble(false); setBubbleSeen(true) }

  return (
    <>
      {/* ════════════════════════════════════════
          MOBILE: bottom action bar
          Only shows after scrolling 300px
          ════════════════════════════════════════ */}
      <div
        role="navigation"
        aria-label="Quick contact"
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe
                    bg-white/95 backdrop-blur-md border-t border-slate-200
                    shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
                    transition-transform duration-300 ease-out
                    ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex gap-2 px-3 pt-2.5 pb-2 max-w-sm mx-auto">
          {/* Call */}
          <a href={PHONE_HREF}
            aria-label={`Call ${PHONE_LABEL}`}
            className="flex-1 flex flex-col items-center justify-center gap-0.5
                       bg-slate-900 hover:bg-slate-800 active:bg-black
                       text-white rounded-xl py-3 transition-colors">
            <Phone size={19} />
            <span className="text-[10px] font-bold tracking-wide mt-0.5">Call Now</span>
          </a>

          {/* WhatsApp */}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex-shrink-0 flex flex-col items-center justify-center gap-0.5
                       bg-green-500 hover:bg-green-400 active:bg-green-600
                       text-white rounded-xl px-5 transition-colors">
            <WhatsAppIcon size={21} />
            <span className="text-[10px] font-bold">WA</span>
          </a>

          {/* Book */}
          <a href="#appointment"
            aria-label="Book appointment"
            className="flex-1 flex flex-col items-center justify-center gap-0.5
                       bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                       text-white rounded-xl py-3 transition-colors">
            <Calendar size={19} />
            <span className="text-[10px] font-bold tracking-wide mt-0.5">Book</span>
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP: floating WhatsApp button + bubble
          ════════════════════════════════════════ */}
      <div
        className={`hidden lg:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-3
                    transition-all duration-300
                    ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
      >
        {/* Chat bubble */}
        {showBubble && (
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-64
                          animate-[fadeUp_0.4s_ease_both]">
            <button onClick={dismissBubble}
              className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-slate-200 hover:bg-slate-300
                         rounded-full flex items-center justify-center transition-colors"
              aria-label="Dismiss">
              <X size={12} />
            </button>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon size={18} />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-bold">Chat with us! 👋</p>
                <p className="text-slate-500 text-xs">We typically reply within minutes</p>
              </div>
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              onClick={dismissBubble}
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white
                         font-semibold text-sm py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md">
              Start a conversation →
            </a>
          </div>
        )}

        {/* FAB button */}
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          onClick={() => setShowBubble(false)}
          aria-label="Chat with Dr. Arvind's team on WhatsApp"
          className="wa-ring relative w-[60px] h-[60px] flex items-center justify-center
                     bg-green-500 hover:bg-green-400 active:scale-95 text-white
                     rounded-full shadow-xl shadow-green-500/35
                     transition-all duration-200 hover:scale-110">
          <WhatsAppIcon size={28} />
        </a>
      </div>
    </>
  )
})

export default StickyBar
