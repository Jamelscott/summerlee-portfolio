import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import svgrPlugin from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base:'/summerlee-portfolio/',
  plugins: [react(),tailwindcss(), svgrPlugin()],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
