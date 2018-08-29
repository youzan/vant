module.exports = function(api) {
  const { BABEL_MODULE } = process.env;
  const useESModules = BABEL_MODULE !== 'commonjs';

  api.cache(false);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: BABEL_MODULE || false
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules
        }
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-object-assign'
    ]
  };
};
