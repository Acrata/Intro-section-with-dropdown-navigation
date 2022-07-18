// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import { defineConfig } from 'vitest/config'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
})
