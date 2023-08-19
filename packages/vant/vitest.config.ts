import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  test: {
    globals: true,
    threads: !process.env.GITHUB_ACTIONS,
    coverage: {
      enabled: true,
      include: ['src/**/*.[jt]s?(x)'],
      exclude: [
        'src/lazyload/vue-lazyload/**',
        '**/demo/**',
        '**/test/**',
        '**/lang/**',
      ],
      reporter: ['html', 'lcov', 'text-summary'],
      reportsDirectory: './test/coverage',
    },
    environment: 'jsdom',
    include: ['**/*.spec.[jt]s?(x)'],
    restoreMocks: true,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
