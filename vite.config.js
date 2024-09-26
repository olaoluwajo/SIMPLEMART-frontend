import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Group all node_modules code into 'vendor' chunk
            return "vendor";
          }
          if (id.includes("path/to/large/module")) {
            return "largeModule";
          }
        },
      },
    },
  },
});
