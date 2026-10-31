import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: [
        '**/.chrome*/**',
        '**/.git/**',
        '**/agentic-awesome-skills/**',
        '**/agent-search/**',
        '**/agent-skills/**',
        '**/get-shit-done/**',
        '**/open-design/**',
        '**/ui-ux-pro-max-skill/**',
        '**/Gravitas/**',
        '**/ponytail/**',
        '**/SuperGravity/**',
      ],
    },
  },
})
