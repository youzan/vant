import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';

const isCI = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  test: {
    globals: true,
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
    singleThread: isCI,
    // disable experimentalVmThreads on CI because it causes OOM
    experimentalVmThreads: !isCI,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
