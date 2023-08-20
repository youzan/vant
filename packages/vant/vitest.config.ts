import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';

// const isCI = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  test: {
    globals: true,
    coverage: {
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
    include: ['src/**/*.spec.[jt]s?(x)'],
    restoreMocks: true,
    // enable single thread in CI because it is faster
    // singleThread: isCI,
    // disable experimentalVmThreads on CI because it causes OOM
    experimentalVmThreads: true,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
