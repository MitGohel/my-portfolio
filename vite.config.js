import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-portfolio/",   // 👈 Add this line (repo name)
  plugins: [react()],
})
