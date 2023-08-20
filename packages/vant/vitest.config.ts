import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';
import { cpus } from 'os';

// const isCI = Boolean(process.env.GITHUB_ACTIONS);

const core = Math.max(cpus().length - 1, 1);

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
    experimentalVmThreads: true,
    // limit the memory to avoid OOM
    experimentalVmWorkerMemoryLimit: 1 / (core * 2),
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
