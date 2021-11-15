import path from 'path';
import esbuild from 'rollup-plugin-esbuild';

export default {
  input: path.join(__dirname, 'src', 'index.ts'),
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
    },
  ],
  external: ['vue'],
  plugins: [esbuild()],
};
