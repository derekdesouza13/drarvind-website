import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initAnalytics, attachLinkTracking } from './lib/analytics.js'

// ── Boot analytics before first render ──
initAnalytics()

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// ── Attach passive click tracking after mount ──
// requestIdleCallback keeps this off the critical path
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(attachLinkTracking, { timeout: 3000 })
} else {
  setTimeout(attachLinkTracking, 1000)
}
