import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/resources.github.io/',
  plugins: [react()],
})
