import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      // Faster JSX transform
      jsxRuntime: 'automatic',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Raise warning threshold (our sections are intentionally modular)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual code splitting for optimal caching
        manualChunks: {
          // React runtime — cached separately, changes rarely
          'react-vendor': ['react', 'react-dom'],
          // Icon library — large, cache separately
          'icons': ['lucide-react'],
          // EmailJS — only needed at form submission
          'emailjs': ['@emailjs/browser'],
          // Toast notifications
          'toast': ['react-hot-toast'],
        },
        // Consistent file naming with content hash for cache busting
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Modern targets — drops legacy polyfills
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],

    // Source maps in production (helps debugging, negligible perf impact)
    sourcemap: false,

    // Minification
    minify: 'esbuild',

    // CSS code splitting
    cssCodeSplit: true,

    // Inline assets below 4kb
    assetsInlineLimit: 4096,
  },

  // Dev server config
  server: {
    port: 5173,
    open: true,
    cors: true,
  },

  // Preview server config (for `vite preview`)
  preview: {
    port: 4173,
    open: true,
  },

  // Optimise deps on startup
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
