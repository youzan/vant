import fse from 'fs-extra';
import path from 'node:path';
import hash from 'hash-sum';
import {
  parse,
  SFCBlock,
  compileTemplate,
  compileScript,
  compileStyle,
} from 'vue/compiler-sfc';
import { replaceExt } from '../common/index.js';

const { remove, readFileSync, outputFile } = fse;

const RENDER_FN = '__vue_render__';
const VUEIDS = '__vue_sfc__';
const EXPORT = 'export default';

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

  script += `\n${render}\n${VUEIDS}.render = ${RENDER_FN} \n`;

  return script;
}

function injectScopeId(script: string, scopeId: string) {
  script += `\n${VUEIDS}.__scopeId = '${scopeId}'`;
  return script;
}

function injectStyle(script: string, styles: SFCBlock[], filePath: string) {
  if (styles.length) {
    const imports = styles
      .map((style, index) => {
        const { base } = path.parse(getSfcStylePath(filePath, 'css', index));
        return `import './${base}';`;
      })
      .join('\n');

    script = `${imports}\n${script}`;

    return script;
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
  const scopeId = hasScoped ? hash(source) : '';
  const scopeKey = scopeId ? `data-v-${scopeId}` : '';

  // compile js part
  if (descriptor.script || descriptor.scriptSetup) {
    const lang =
      descriptor.script?.lang || descriptor.scriptSetup?.lang || 'js';
    const scriptFilePath = replaceExt(filePath, `.${lang}`);

    tasks.push(
      new Promise((resolve) => {
        let script = '';

        const { bindings, content } = compileScript(descriptor, {
          id: scopeKey,
        });

        script += content;
        script = injectStyle(script, styles, filePath);

        script = script.replace(EXPORT, `const ${VUEIDS} =`);

        if (template) {
          const render = compileTemplate({
            id: scopeKey,
            source: template.content,
            scoped: !!scopeKey,
            filename: filePath,
            compilerOptions: {
              scopeId: scopeKey,
              bindingMetadata: bindings,
            },
          }).code;

          script = injectRender(script, render);
        }

        if (scopeKey) {
          script = injectScopeId(script, scopeKey);
        }

        script += `\n${EXPORT} ${VUEIDS}`;

        // ts-nocheck should be placed on the first line
        // the generated render fn lacks type definitions
        if (lang === 'ts') {
          script = '// @ts-nocheck\n' + script;
        }

        outputFile(scriptFilePath, script).then(resolve);
      }),
    );
  }

  // compile style part
  tasks.push(
    ...styles.map(async (style, index: number) => {
      const cssFilePath = getSfcStylePath(filePath, style.lang || 'css', index);

      const styleSource = compileStyle({
        source: style.content,
        filename: path.basename(cssFilePath),
        scoped: style.scoped,
        id: scopeId,
      });

      return outputFile(cssFilePath, trim(styleSource.code));
    }),
  );

  return Promise.all(tasks);
}
