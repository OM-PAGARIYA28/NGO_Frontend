import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    proxy: {
      // Proxy for /contactform
      '/contactform': {
        target: 'https://ngo-backend-om-pagariyas-projects.vercel.app',
        changeOrigin: true, // Change the origin of the host header to the target URL
        secure: true, // Use HTTPS
        rewrite: (path) => path.replace(/^\/contactform/, '/contactform'), // Rewrite URL if needed
      },
    },
  },
});
