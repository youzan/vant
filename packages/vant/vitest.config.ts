import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.[jt]s?(x)'],
      exclude: [
        'src/lazyload/vue-lazyload/**',
        '**/demo/**',
        '**/test/**',
        '**/lang/**',
      ],
      reporter: ['lcov', 'text-summary'],
      reportsDirectory: './test/coverage',
    },
    environment: 'jsdom',
    include: ['src/**/*.spec.[jt]s?(x)'],
    restoreMocks: true,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
