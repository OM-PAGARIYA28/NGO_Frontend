/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: "./postcss.config.js",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            // Proxy for /contactform
            "/contactform": {
                target: "https://ngo-backend-om-pagariyas-projects.vercel.app",
                changeOrigin: true, // Change the origin of the host header to the target URL
                secure: true, // Use HTTPS
                rewrite: (path) => path.replace(/^\/contactform/, "/contactform"), // Rewrite URL if needed
            },
        },
    },
});
