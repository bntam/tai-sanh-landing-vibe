import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://phongkhamtaisanh.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  build: {
    // Inline small assets for better performance
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
      // Minify for production using esbuild (faster than terser)
      minify: 'esbuild',
    },
  },
});

