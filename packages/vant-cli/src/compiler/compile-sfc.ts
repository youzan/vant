import fse from 'fs-extra';
import { parse as pathParse, join, relative, dirname, sep } from 'node:path';
import hash from 'hash-sum';
import { consola } from '../common/logger.js';
import {
  parse,
  SFCBlock,
  compileTemplate,
  compileScript,
  compileStyle,
} from 'vue/compiler-sfc';
import {
  replaceExt,
  getComponents,
  isSfc,
  normalizePath,
} from '../common/index.js';
import { CSS_LANG } from '../common/css.js';
import { getVantConfig, SRC_DIR, ROOT } from '../common/constant.js';
import { getDeps, fillExt } from './get-deps.js';

const { remove, readFileSync, outputFile, existsSync } = fse;

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

function injectStyle(
  script: string,
  styles: SFCBlock[],
  filePath: string,
  theme: boolean | 'css3'
) {
  // 如果有样式，并且不需要主题，则引入css
  if (styles.length && !theme) {
    const { base } = pathParse(replaceExt(filePath, `.css`));
    return `import './${base}';\n${script}`;
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

let cacheComponentPaths: null | string[] = null;

function getComponentPaths() {
  if (cacheComponentPaths) return cacheComponentPaths;
  cacheComponentPaths = getComponents().map(
    (component) => fillExt(join(SRC_DIR, component, 'index')).path
  );
  return cacheComponentPaths;
}

export async function compileSfc(filePath: string): Promise<any> {
  const tasks = [remove(filePath)];
  const source = readFileSync(filePath, 'utf-8');
  const descriptor = parseSfc(filePath);
  const vantConfig = getVantConfig();
  // css3 or boolean
  const theme = vantConfig.build?.css.theme || 'css3';

  const { template, styles } = descriptor;

  const hasScoped = styles.some((s) => s.scoped);
  const scopeId = hasScoped ? `data-v-${hash(source)}` : '';

  // compile js part
  if (descriptor.script || descriptor.scriptSetup) {
    const lang =
      descriptor.script?.lang || descriptor.scriptSetup?.lang || 'js';
    const scriptFilePath = replaceExt(filePath, `.${lang}`);

    tasks.push(
      new Promise((resolve) => {
        let script = '';

        let bindingMetadata;
        if (descriptor.scriptSetup) {
          const { bindings, content } = compileScript(descriptor, {
            id: scopeId,
          });
          script += content;
          bindingMetadata = bindings;
        } else {
          script += descriptor.script!.content;
        }

        script = injectStyle(script, styles, filePath, theme);
        script = script.replace(EXPORT, `const ${VUEIDS} =`);

        if (template) {
          const render = compileTemplate({
            id: scopeId,
            source: template.content,
            filename: filePath,
            compilerOptions: {
              bindingMetadata,
            },
          }).code;

          script = injectRender(script, render);
        }

        if (scopeId) {
          script = injectScopeId(script, scopeId);
        }

        script += `\n${EXPORT} ${VUEIDS}`;

        // ts-nocheck should be placed on the first line
        // the generated render fn lacks type definitions
        if (lang === 'ts') {
          script = '// @ts-nocheck\n' + script;
        }

        outputFile(scriptFilePath, script).then(resolve);
      })
    );
  }

  // compile style part
  tasks.push(
    new Promise((resolve, reject) => {
      const componentPaths = getComponentPaths();
      const sfcStyleDeps = getDeps(filePath)
        .filter((dep) => {
          if (!isSfc(dep)) return false;
          const relativePath = relative(ROOT, dep);
          const absoluteSrcPath = join(
            SRC_DIR,
            relativePath.slice(relativePath.indexOf(sep) + 1)
          );
          return !componentPaths.includes(absoluteSrcPath);
        })
        .map((key) => {
          const relativePath = normalizePath(
            relative(dirname(filePath), replaceExt(key, `.${CSS_LANG}`))
          );
          const importUrl = relativePath.startsWith('.')
            ? relativePath
            : `./${relativePath}`;
          return `@import "${importUrl}";`;
        })
        .join('\n');

      // 如果为true，则不进行compileStyle，这也意味着不支持scope\v-bind()等
      // 这种一般用于使用less等进行主题配置场景
      const needCompileStyle = theme !== true;
      const styleFiles = styles.map((style, index: number) => {
        const cssFilePath = getSfcStylePath(
          filePath,
          style.lang || 'css',
          index
        );

        let styleSource = trim(style.content);

        if (needCompileStyle) {
          styleSource = compileStyle({
            id: scopeId,
            scoped: style.scoped,
            source: styleSource,
            filename: cssFilePath,
            // @ts-ignore
            preprocessLang: style.lang,
          }).code;
        } else {
          const logError = (key: string) =>
            consola.error(
              `[${filePath}]: when vantConfig.build.css.theme is ${theme}, ${key} is unsupported`
            );
          if (styleSource.includes('v-bind(')) {
            logError('v-bind()');
          }
          if (style.scoped) {
            logError('scoped attr');
          }
          if (style.module) {
            logError('module attr');
          }
        }

        return styleSource;
      });
      const indexStylePath = replaceExt(filePath, `.${CSS_LANG}`);
      let indexStyleContent = existsSync(indexStylePath)
        ? readFileSync(indexStylePath, 'utf-8')
        : '';
      indexStyleContent += `\n${sfcStyleDeps}\n${styleFiles.join('\n')}`;
      outputFile(indexStylePath, trim(indexStyleContent)).then(resolve, reject);
    })
  );

  return Promise.all(tasks);
}
