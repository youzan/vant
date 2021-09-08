import glob from 'fast-glob';
import { join, parse } from 'path';
import { existsSync, readFileSync, readdirSync } from 'fs-extra';
import {
  pascalize,
  getVantConfig,
  smartOutputFile,
  normalizePath,
  isDev,
} from '../common';
import {
  SRC_DIR,
  DOCS_DIR,
  getPackageJson,
  VANT_CONFIG_FILE,
  SITE_DESKTOP_SHARED_FILE,
} from '../common/constant';

type DocumentItem = {
  name: string;
  path: string;
};

function formatName(component: string, lang?: string) {
  component = pascalize(component);

  if (lang) {
    return `${component}_${lang.replace('-', '_')}`;
  }

  return component;
}

/**
 * i18n mode:
 *   - action-sheet/README.md       => ActionSheet_EnUS
 *   - action-sheet/README.zh-CN.md => ActionSheet_ZhCN
 *
 * default mode:
 *   - action-sheet/README.md => ActionSheet
 */
function resolveDocuments(components: string[]): DocumentItem[] {
  const vantConfig = getVantConfig();
  const { locales, defaultLang } = vantConfig.site;

  const docs: DocumentItem[] = [];

  if (locales) {
    const langs = Object.keys(locales);
    langs.forEach((lang) => {
      const fileName = lang === defaultLang ? 'README.md' : `README.${lang}.md`;
      components.forEach((component) => {
        docs.push({
          name: formatName(component, lang),
          path: join(SRC_DIR, component, fileName),
        });
      });
    });
  } else {
    components.forEach((component) => {
      docs.push({
        name: formatName(component),
        path: join(SRC_DIR, component, 'README.md'),
      });
    });
  }

  const staticDocs = glob
    .sync(normalizePath(join(DOCS_DIR, '**/*.md')))
    .map((path) => {
      const pairs = parse(path).name.split('.');
      return {
        name: formatName(pairs[0], pairs[1] || defaultLang),
        path,
      };
    });

  return [...staticDocs, ...docs.filter((item) => existsSync(item.path))];
}

function genImportDocuments(items: DocumentItem[]) {
  return items
    .map((item) => {
      const path = normalizePath(item.path);
      if (isDev()) {
        return `const ${item.name} = () => import('${path}');`;
      }
      return `import ${item.name} from '${path}';`;
    })
    .join('\n');
}

function genExportDocuments(items: DocumentItem[]) {
  return `export const documents = {
  ${items.map((item) => item.name).join(',\n  ')}
};`;
}

function genVantConfigContent() {
  const content = readFileSync(VANT_CONFIG_FILE, 'utf-8');
  return content.replace('module.exports', 'const config');
}

function genExportConfig() {
  return 'export { config };';
}

function genExportVersion() {
  return `export const packageVersion = '${getPackageJson().version}';`;
}

export function genSiteDesktopShared() {
  const dirs = readdirSync(SRC_DIR);
  const documents = resolveDocuments(dirs);

  const code = `${genImportDocuments(documents)}

${genVantConfigContent()}

${genExportConfig()}
${genExportDocuments(documents)}
${genExportVersion()}
`;

  smartOutputFile(SITE_DESKTOP_SHARED_FILE, code);
}
