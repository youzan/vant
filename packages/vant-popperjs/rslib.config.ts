import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    { format: 'esm', syntax: ['Chrome 53'], dts: true },
    { format: 'cjs', syntax: ['Chrome 53'] },
  ],
  output: {
    target: 'web',
  },
});
