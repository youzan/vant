import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';
import { cpus } from 'os';

// const isCI = Boolean(process.env.GITHUB_ACTIONS);

console.log('cpu core', Math.max(cpus().length - 1, 1));

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
    experimentalVmWorkerMemoryLimit: 0.1,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
