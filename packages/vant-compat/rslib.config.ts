import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    { format: 'esm', syntax: 'es6', dts: true },
    { format: 'cjs', syntax: 'es6' },
  ],
  output: {
    target: 'web',
    externals: ['vant'],
  },
});
