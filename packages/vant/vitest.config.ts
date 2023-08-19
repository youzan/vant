import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: false,
      include: ['src/**/*.[jt]s?(x)'],
    },
    environment: 'jsdom',
    include: ['**/action-bar/**/*.spec.[jt]s?(x)'],
    restoreMocks: true,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
