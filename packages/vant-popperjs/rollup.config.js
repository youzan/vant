import path from 'path';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

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
  plugins: [
    babel({ babelHelpers: 'runtime', extensions: ['.js', '.ts'] }),
    nodeResolve(),
  ],
};
