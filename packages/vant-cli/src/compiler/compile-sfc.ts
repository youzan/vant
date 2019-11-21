import * as compiler from 'vue-template-compiler';
import * as compileUtils from '@vue/component-compiler-utils';
import { parse } from 'path';
import { removeSync, writeFileSync, readFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import { compileJs } from './compile-js';
import { compileStyle } from './compile-style';

const RENDER_FN = '__vue_render__';
const STATIC_RENDER_FN = '__vue_staticRenderFns__';
const EXPORT = 'export default {';

// trim some unused code
function trim(code: string) {
  return code.replace(/\/\/\n/g, '').trim();
}

// inject render fn to script
function injectRender(script: string, render: string) {
  script = trim(script);

  render = render
    .replace('var render', `var ${RENDER_FN}`)
    .replace('var staticRenderFns', `var ${STATIC_RENDER_FN}`);

  return script.replace(
    EXPORT,
    `${render}\n${EXPORT}\n  render: ${RENDER_FN},\n\n  staticRenderFns: ${STATIC_RENDER_FN},\n`
  );
}

function injectStyle(
  script: string,
  styles: compileUtils.SFCBlock[],
  filePath: string
) {
  if (styles.length) {
    const imports = styles
      .map((style, index) => {
        const prefix = index !== 0 ? `-${index + 1}` : '';
        const { base } = parse(replaceExt(filePath, `${prefix}.css`));
        return `import './${base}';`;
      })
      .join('\n');

    return script.replace(EXPORT, `${imports}\n\n${EXPORT}`);
  }

  return script;
}

function compileTemplate(template: string) {
  const result = compileUtils.compileTemplate({
    compiler,
    source: template,
    isProduction: true
  } as any);

  return result.code;
}

export async function compileSfc(filePath: string) {
  const source = readFileSync(filePath, 'utf-8');
  const jsFilePath = replaceExt(filePath, '.js');

  const descriptor = compileUtils.parse({
    source,
    compiler,
    needMap: false
  } as any);

  const { template, styles } = descriptor;

  removeSync(filePath);

  // compile js part
  if (descriptor.script) {
    let script = descriptor.script.content;
    script = injectStyle(script, styles, filePath);

    if (template) {
      const render = compileTemplate(template.content);
      script = injectRender(script, render);
    }

    writeFileSync(jsFilePath, script);
    await compileJs(jsFilePath);
  }

  // compile style part
  await Promise.all(
    styles.map((style, index: number) => {
      const prefix = index !== 0 ? `-${index + 1}` : '';
      const ext = style.lang || 'css';
      const cssFilePath = replaceExt(filePath, `-sfc${prefix}.${ext}`);

      writeFileSync(cssFilePath, trim(style.content));

      return compileStyle(cssFilePath);
    })
  );
}
