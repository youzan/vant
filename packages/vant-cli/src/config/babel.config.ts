import { ConfigAPI } from '@babel/core';

type PresetOption = {
  loose?: boolean;
};

module.exports = function (api?: ConfigAPI, options: PresetOption = {}) {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE, NODE_ENV } = process.env;
  const isTest = NODE_ENV === 'test';
  const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: useESModules ? false : 'commonjs',
          loose: options.loose,
        },
      ],
      '@babel/preset-typescript',
      require('../compiler/babel-preset-vue-ts'),
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          useESModules,
        },
      ],
      [
        'import',
        {
          libraryName: 'vant',
          libraryDirectory: useESModules ? 'es' : 'lib',
          style: true,
        },
        'vant',
      ],
      '@vue/babel-plugin-jsx',
      '@babel/plugin-transform-object-assign',
    ],
  };
};

export default module.exports;
