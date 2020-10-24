import { join } from 'path';
import { existsSync, readdirSync } from 'fs-extra';
import { SRC_DIR, SITE_MODILE_SHARED_FILE } from '../common/constant';
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

function genInstall() {
  return `import packageEntry from './package-entry';
import './package-style';
`;
}

function genImports(demos: DemoItem[]) {
  return demos
    .map(
      (item) =>
        `import ${item.name} from '${removeExt(normalizePath(item.path))}';`
    )
    .join('\n');
}

function genExports(demos: DemoItem[]) {
  return `export const demos = {\n  ${demos
    .map((item) => item.name)
    .join(',\n  ')}\n};`;
}

function getSetName(demos: DemoItem[]) {
  return demos
    .map((item) => `${item.name}.name = 'demo-${item.component}';`)
    .join('\n');
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

  return `${genInstall()}
${genImports(demos)}

export { packageEntry };

${getSetName(demos)}

${genExports(demos)}
${genConfig(demos)}
`;
}

export function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
  const code = genCode(dirs);

  smartOutputFile(SITE_MODILE_SHARED_FILE, code);
}
