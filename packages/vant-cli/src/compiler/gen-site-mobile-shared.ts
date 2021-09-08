import { join } from 'path';
import { existsSync, readdirSync } from 'fs-extra';
import { SRC_DIR, SITE_MOBILE_SHARED_FILE } from '../common/constant';
import {
  pascalize,
  removeExt,
  decamelize,
  getVantConfig,
  smartOutputFile,
  normalizePath,
} from '../common';

type DemoItem = {
  name: string;
  path: string;
  component: string;
};

function genImports(demos: DemoItem[]) {
  return demos
    .map((item) => {
      const path = removeExt(normalizePath(item.path));
      return `const ${item.name} = () => import('${path}')`;
    })
    .join('\n');
}

function genExports(demos: DemoItem[]) {
  return `export const demos = {\n  ${demos
    .map((item) => item.name)
    .join(',\n  ')}\n};`;
}

function genConfig(demos: DemoItem[]) {
  const vantConfig = getVantConfig();
  const demoNames = demos.map((item) => decamelize(item.name));

  function demoFilter(nav: any[]) {
    return nav.filter((group) => {
      group.items = group.items.filter((item: any) =>
        demoNames.includes(item.path)
      );
      return group.items.length;
    });
  }

  const { nav, locales } = vantConfig.site;
  if (locales) {
    Object.keys(locales).forEach((lang: string) => {
      if (locales[lang].nav) {
        locales[lang].nav = demoFilter(locales[lang].nav);
      }
    });
  } else if (nav) {
    vantConfig.site.nav = demoFilter(nav);
  }

  return `export const config = ${JSON.stringify(vantConfig, null, 2)}`;
}

function genCode(components: string[]) {
  const demos = components
    .map((component) => ({
      component,
      name: pascalize(component),
      path: join(SRC_DIR, component, 'demo/index.vue'),
    }))
    .filter((item) => existsSync(item.path));

  return `import './package-style.less';
${genImports(demos)}

${genExports(demos)}
${genConfig(demos)}
`;
}

export function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
  const code = genCode(dirs);

  smartOutputFile(SITE_MOBILE_SHARED_FILE, code);
}
