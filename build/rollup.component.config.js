import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from 'zan-rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import componentsConfig from '../components.json';

const extensions = ['.js', '.vue'];

export default Object.keys(componentsConfig).map(component => {
  return {
    entry: componentsConfig[component],
    targets: [
      {
        dest: path.resolve(__dirname, `../lib/${component}/index.js`),
        format: 'cjs'
      }
    ],
    external: ['vue', 'vue-lazyload'],
    plugins: [
      vue(),
      babel({
        externalHelpers: true
      }),
      resolve({
        main: true,
        jsnext: true,
        extensions
      }),
      commonjs({
        extensions
      }),
      alias({
        resolve: extensions,
        'src/mixins': path.resolve(__dirname, '../packages/common/mixins'),
        'src/utils': path.resolve(__dirname, '../packages/common/utils'),
        packages: path.resolve(__dirname, '../packages')
      }),
    ]
  };
});
