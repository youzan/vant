import path from 'path';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: path.join(__dirname, 'src', 'index.ts'),
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  plugins: [nodeResolve(), babel({ babelHelpers: 'runtime' })],
};
