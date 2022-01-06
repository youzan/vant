const { transform: babelTransform } = require('@babel/core');
const { transformSync: esbuildTransformSync } = require('esbuild');

const isJsxFile = (path) => /\.(j|t)sx$/.test(path);
const isTsxFile = (path) => /\.tsx$/.test(path);

const transformJsx = (code, path) => {
  const babelResult = babelTransform(code, {
    filename: path,
    babelrc: false,
    presets: isTsxFile(path) ? ['@babel/preset-typescript'] : [],
    plugins: [['@vue/babel-plugin-jsx']],
  });
  return babelResult?.code || '';
};

const transformScript = (code) =>
  esbuildTransformSync(code, {
    target: 'es2016',
    format: 'cjs',
    loader: 'ts',
  }).code;

module.exports = {
  canInstrument: true,
  process(code, path) {
    if (isJsxFile(path)) {
      code = transformJsx(code, path);
    }
    return transformScript(code);
  },
};
