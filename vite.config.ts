import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        worker: 'src/worker.ts'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'worker' ? 'worker.js' : 'assets/[name]-[hash].js'
        }
      }
    }
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
