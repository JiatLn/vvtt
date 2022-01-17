import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

import PurgeIcons from 'vite-plugin-purge-icons';
import WindiCSS from 'vite-plugin-windicss';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    PurgeIcons({
      /* PurgeIcons Options */
      content: ['**/*.html', '**/*.js', '**/*.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
