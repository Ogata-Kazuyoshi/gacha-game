import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {InlineConfig} from "vitest";
import {VitePWA} from "vite-plugin-pwa";

const testConfig: InlineConfig = {
  environment: 'jsdom',
  setupFiles: ['./test-setup.js'],
  globals: true,
  include: ['./src/**/*.test.{tsx,ts}'],
}

// https://vitejs.dev/config/
export default defineConfig({
  test: testConfig,
  plugins: [react(),
    VitePWA({
      strategies:'generateSW',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: null,
      // includeAssets: ['apple-touch-icon.png'],
      manifest: {
        "theme_color": " #000000",
        "background_color": "#ffffff",
        "display": "standalone",
        "orientation":"any",
        "start_url": "/",
        "name": "temp",
        "short_name": "temp",
        // "icons": [
        //   {
        //     "src": "/Icon192.png",
        //     "sizes": "192x192",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "/Icon256.png",
        //     "sizes": "256x256",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "/Icon384.png",
        //     "sizes": "384x384",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "/Icon512.png",
        //     "sizes": "512x512",
        //     "type": "image/png",
        //   }
        // ]
      },
      workbox: {
        navigateFallbackDenylist: [/^\/api/,/^\/login/,/^\/oauth2/],
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    }),
  ],
})
