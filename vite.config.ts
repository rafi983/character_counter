import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-api\.com\/.*/, // Cache API responses if needed
            handler: 'NetworkFirst', // Try network first, then fallback to cache
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50, // Keep only 50 API responses
                maxAgeSeconds: 24 * 60 * 60 // Cache for 1 day
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, // Cache images
            handler: 'CacheFirst', // Serve from cache first
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60 // Cache for 30 days
              }
            }
          },
          {
            urlPattern: /.*\.js$/, // Cache JavaScript files
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'js-cache'
            }
          },
          {
            urlPattern: /.*\.css$/, // Cache CSS files
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'css-cache'
            }
          }
        ]
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'maskable_icon_x192.png'
      ],
      manifest: {
        name: 'Character Counter',
        short_name: 'CharCount',
        start_url: '/',
        theme_color: '#c27cf8',
        background_color: '#d29efa',
        scope: '/',
        display: 'standalone',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        description:
          'A powerful text analysis tool built with React and TypeScript. Paste your text to instantly see the total character count (excluding spaces), set a custom character limit, and get detailed stats including word count, sentence count, and letter density.',
        screenshots: [
          {
            src: '/light_mode.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: '/dark_mode.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: '/light_mode_mobile.png',
            sizes: '540x361',
            type: 'image/png',
            form_factor: 'narrow'
          },
          {
            src: '/dark_mode_mobile.png',
            sizes: '540x361',
            type: 'image/png',
            form_factor: 'narrow'
          }
        ]
      }
    })
  ],
  server: {
    host: true,
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '/src/tests/setupTests.ts'
  }
});
