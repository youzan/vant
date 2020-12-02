import hash from 'hash-sum';
import path from 'path';
import { parse, SFCBlock, compileTemplate } from '@vue/compiler-sfc';
import { remove, writeFileSync, readFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import { compileJs } from './compile-js';
import { compileStyle } from './compile-style';

const RENDER_FN = '__vue_render__';
const EXPORT = 'export default {';

// trim some unused code
function trim(code: string) {
  return code.replace(/\/\/\n/g, '').trim();
}

function getSfcStylePath(filePath: string, ext: string, index: number) {
  const number = index !== 0 ? `-${index + 1}` : '';
  return replaceExt(filePath, `-sfc${number}.${ext}`);
}

// inject render fn to script
function injectRender(script: string, render: string) {
  script = trim(script);

  render = render.replace('export function render', `function ${RENDER_FN}`);

  return script.replace(
    EXPORT,
    `${render}\n${EXPORT}\n  render: ${RENDER_FN},\n`
  );
}

function injectScopeId(script: string, scopeId: string) {
  return script.replace(EXPORT, `${EXPORT}\n  _scopeId: '${scopeId}',\n\n`);
}

function injectStyle(script: string, styles: SFCBlock[], filePath: string) {
  if (styles.length) {
    const imports = styles
      .map((style, index) => {
        const { base } = path.parse(getSfcStylePath(filePath, 'css', index));
        return `import './${base}';`;
      })
      .join('\n');

    return script.replace(EXPORT, `${imports}\n\n${EXPORT}`);
  }

  return script;
}

export function parseSfc(filename: string) {
  const source = readFileSync(filename, 'utf-8');
  const { descriptor } = parse(source, {
    filename,
  });

  return descriptor;
}

export async function compileSfc(filePath: string): Promise<any> {
  const tasks = [remove(filePath)];
  const source = readFileSync(filePath, 'utf-8');
  const descriptor = parseSfc(filePath);
  const { template, styles } = descriptor;

  const hasScoped = styles.some((s) => s.scoped);
  const scopeId = hasScoped ? `data-v-${hash(source)}` : '';

  // compile js part
  if (descriptor.script) {
    const lang = descriptor.script.lang || 'js';
    const scriptFilePath = replaceExt(filePath, `.${lang}`);

    tasks.push(
      new Promise((resolve, reject) => {
        let script = descriptor.script!.content;
        script = injectStyle(script, styles, filePath);

        if (template) {
          const render = compileTemplate({
            id: scopeId,
            source: template.content,
            filename: filePath,
          }).code;
          script = injectRender(script, render);
        }

        if (scopeId) {
          script = injectScopeId(script, scopeId);
        }

        writeFileSync(scriptFilePath, script);
        compileJs(scriptFilePath).then(resolve).catch(reject);
      })
    );
  }

  // compile style part
  tasks.push(
    ...styles.map((style, index: number) => {
      const cssFilePath = getSfcStylePath(filePath, style.lang || 'css', index);

      const styleSource = trim(style.content);

      // TODO support scoped
      // if (style.scoped) {
      //   styleSource = compileUtils.compileStyle({
      //     id: scopeId,
      //     scoped: true,
      //     source: styleSource,
      //     filename: cssFilePath,
      //     preprocessLang: style.lang,
      //   }).code;
      // }

      writeFileSync(cssFilePath, styleSource);

      return compileStyle(cssFilePath);
    })
  );

  return Promise.all(tasks);
}
