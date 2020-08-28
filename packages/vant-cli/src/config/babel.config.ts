import { ConfigAPI } from '@babel/core';

module.exports = function (api?: ConfigAPI) {
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
          loose: true,
          modules: useESModules ? false : 'commonjs',
        },
      ],
      '@babel/preset-typescript',
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
