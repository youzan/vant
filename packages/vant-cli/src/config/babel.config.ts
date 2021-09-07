import { ConfigAPI } from '@babel/core';

type PresetOption = {
  loose?: boolean;
  enableObjectSlots?: boolean;
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
        require.resolve('@babel/preset-env'),
        {
          modules: useESModules ? false : 'commonjs',
          loose: options.loose,
        },
      ],
      require.resolve('@babel/preset-typescript'),
      require('../compiler/babel-preset-vue-ts'),
    ],
    plugins: [
      [
        require.resolve('@vue/babel-plugin-jsx'),
        {
          enableObjectSlots: options.enableObjectSlots,
        },
      ],
    ],
  };
};

export default module.exports;
