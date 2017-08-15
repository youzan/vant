import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from 'zan-rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import componentsConfig from '../components.json';

const extensions = ['.js', '.vue'];

// 打包时排除 mixins、utils、其他组件
const utilsPath = path.resolve(__dirname, '../packages/utils/');
const mixinsPath = path.resolve(__dirname, '../packages/mixins/');
const external = [
  ...fs.readdirSync(utilsPath).map(item => path.resolve(utilsPath, item)),
  ...fs.readdirSync(mixinsPath).map(item => path.resolve(mixinsPath, item)),
  ...Object.keys(componentsConfig).map(component =>
    path.resolve(__dirname, '../packages', component, 'index.js')
  )
];

export default Object.keys(componentsConfig).map(component => {
  const config = {
    entry: componentsConfig[component],
    targets: [
      {
        dest: path.resolve(__dirname, `../lib/${component}/index.js`),
        format: 'cjs'
      }
    ],
    external: [
      'vue',
      'vue-lazyload',
      path.resolve(__dirname, '../packages/mixins/popup/index.js'),
      ...external
    ],
    plugins: [
      vue(),
      filesize(),
      commonjs({
        extensions
      }),
      resolve({
        main: true,
        jsnext: true,
        extensions
      }),
      alias({
        resolve: extensions,
        packages: path.resolve(__dirname, '../packages')
      })
    ]
  };

  // button 使用 jsx，需要借助 babel
  if (component === 'button') {
    config.plugins.unshift(babel({
      runtimeHelpers: true
    }));
  }

  return config;
});
