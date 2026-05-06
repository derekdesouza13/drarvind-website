/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Navy scale — used throughout as primary dark colour ──
        navy: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5bbfc',
          400: '#7c96f6',
          500: '#5a6ef0',
          600: '#3d4fe5',
          700: '#2e3bc9',
          800: '#2530a4',
          900: '#0c1a35',   // ← main dark bg / text colour used in sections
          950: '#060d1f',   // ← deepest bg (hero, appointment)
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card':       '0 2px 16px rgba(0,0,0,0.05)',
        'card-hover': '0 20px 52px rgba(0,0,0,0.11)',
        'glow':       '0 0 32px rgba(59,130,246,0.18)',
        'glow-lg':    '0 0 56px rgba(59,130,246,0.22)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float':     'floatA 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fadeUp':    'fadeUp 0.6s ease-out both',
        'popIn':     'popIn  0.5s cubic-bezier(0.22,1,0.36,1) both',
        'scroll':    'scroll 30s linear infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%':   { transform: 'scale(0.7)', opacity: '0' },
          '65%':  { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
        scroll: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        'xs': '480px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
