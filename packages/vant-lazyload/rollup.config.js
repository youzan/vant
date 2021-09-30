import path from 'path';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: path.join(__dirname, 'src', 'index.js'),
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
  external: ['vue', '@vant/use'],
  plugins: [
    babel({ babelHelpers: 'bundled', extensions: ['.js', '.ts'] }),
    nodeResolve(),
  ],
};
