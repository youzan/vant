const sfc = require('vue/compiler-sfc');
const babel = require('@babel/core');
const esbuild = require('esbuild');
const nodePath = require('path');

const isJsxFile = (path) => /\.(j|t)sx$/.test(path);
const isTsxFile = (path) => /\.tsx$/.test(path);
const isVueFile = (path) => /\.vue$/.test(path);

const transformJsx = (code, path) => {
  const babelResult = babel.transformSync(code, {
    filename: path,
    babelrc: false,
    presets: isTsxFile(path) ? ['@babel/preset-typescript'] : [],
    plugins: [['@vue/babel-plugin-jsx']],
  });
  return babelResult?.code || '';
};

const transformSFC = (code, path) => {
  const parsedPath = nodePath.parse(path);
  const { descriptor, errors } = sfc.parse(code, {
    filename: parsedPath.base,
    sourceRoot: parsedPath.dir,
  });

  if (errors.length) {
    errors.forEach((error) => console.error(error));
    return '';
  }

  const output = [];
  let bindingMetadata = {};

  if (descriptor.script) {
    const content = descriptor.script.content.replace(
      'export default',
      'const script ='
    );
    output.push(content);
  } else if (descriptor.scriptSetup) {
    const result = sfc.compileScript(descriptor, {
      id: 'mock',
    });

    const content = result.content.replace('export default', 'const script =');
    output.push(content);

    if (result.bindings) {
      bindingMetadata = result.bindings;
    }
  } else {
    output.push(`const script = {};`);
  }

  if (descriptor.template) {
    const render = sfc.compileTemplate({
      id: 'mock',
      source: descriptor.template.content,
      filename: path,
      compilerOptions: {
        bindingMetadata,
      },
    }).code;
    output.push(render);
    output.push('script.render = render;');
  }

  output.push('export default script;');

  return output.join('\n');
};

const transformScript = (code) =>
  esbuild.transformSync(code, {
    target: 'es2016',
    format: 'cjs',
    loader: 'ts',
  }).code;

module.exports = {
  canInstrument: true,
  process(code, path) {
    if (isVueFile(path)) {
      code = transformSFC(code, path);
    }
    if (isJsxFile(path)) {
      code = transformJsx(code, path);
    }
    return {
      code: transformScript(code)
    };
  },
};
