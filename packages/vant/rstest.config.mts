import { defineConfig, type ProjectConfig } from '@rstest/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue } from '@rsbuild/plugin-vue';
import vueJsxCompiler from 'vue-jsx-vapor/rsbuild';

const commonConfig: (ssr: boolean) => ProjectConfig = (ssr) => ({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    vueJsxCompiler({
      interop: true,
      compiler: {
        runtimeModuleName: ssr ? 'vue-jsx-vapor' : undefined, // for SSR tests
      },
    }),
    pluginVue(),
  ],
  globals: true,
  restoreMocks: true,
  tools: {
    rspack: {
      module: {
        rules: [
          {
            // mark test setup files as having side effects to prevent them from being tree-shaken
            test: /test\/.*\.ts$/,
            sideEffects: true,
          },
        ],
      },
    },
  },
});

export default defineConfig({
  coverage: {
    provider: 'istanbul',
    include: ['src/**/*.[jt]s?(x)'],
    exclude: [
      'src/lazyload/vue-lazyload/**',
      '**/demo/**',
      '**/test/**',
      '**/lang/**',
    ],
    reporters: ['lcov', 'text-summary'],
    reportsDirectory: './test/coverage',
  },
  projects: [
    {
      extends: commonConfig(false),
      name: 'client',
      testEnvironment: 'jsdom',
      include: ['src/**/*.spec.[jt]s?(x)'],
      exclude: ['src/**/*/ssr.spec.[jt]s?(x)', 'src/**/*/*-ssr.spec.[jt]s?(x)'],
    },
    {
      extends: commonConfig(true),
      name: 'ssr',
      testEnvironment: 'node',
      include: ['src/**/*/ssr.spec.[jt]s?(x)', 'src/**/*/*-ssr.spec.[jt]s?(x)'],
    },
  ],
});
