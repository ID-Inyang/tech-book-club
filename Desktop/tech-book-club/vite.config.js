import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: { 
    extend: { 
      backgroundImage: { 
        'gradient-107': 'linear-gradient(107deg, #FF9A60 11.37%, #062630 61.84%)', 
      }, 
    }, 
  },
})



