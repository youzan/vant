import { join } from 'path';
import { existsSync, ensureDirSync, writeFileSync } from 'fs-extra';
import { decamelize, pascalize, removeExt, getComponents } from '../common';
import {
  CONFIG,
  SRC_DIR,
  DIST_DIR,
  SITE_MODILE_SHARED_FILE
} from '../common/constant';

type DemoItem = {
  name: string;
  path: string;
};

function genInstall() {
  return `import Vue from 'vue';
import PackageEntry from './package-entry';
import './package-style';

Vue.use(PackageEntry);
`;
}

function genImports(demos: DemoItem[]) {
  return demos
    .map(item => `import ${item.name} from '${removeExt(item.path)}';`)
    .join('\n');
}

function genExports(demos: DemoItem[]) {
  return `export const demos = {\n  ${demos
    .map(item => item.name)
    .join(',\n  ')}\n};`;
}

function genConfig(demos: DemoItem[]) {
  const demoNames = demos.map(item => decamelize(item.name, '-'));

  CONFIG.site.nav = CONFIG.site.nav.filter((group: any) => {
    group.items = group.items.filter((item: any) =>
      demoNames.includes(item.path)
    );
    return group.items.length;
  });

  return `export const config = ${JSON.stringify(CONFIG, null, 2)}`;
}

function genCode(components: string[]) {
  const demos = components
    .map(component => ({
      name: pascalize(component),
      path: join(SRC_DIR, component, 'demo/index.vue')
    }))
    .filter(item => existsSync(item.path));

  return `${genInstall()}\n${genImports(demos)}\n\n${genExports(
    demos
  )}\n${genConfig(demos)}\n`;
}

export function genSiteMobileShared() {
  const components = getComponents();
  const code = genCode(components);

  ensureDirSync(DIST_DIR);
  writeFileSync(SITE_MODILE_SHARED_FILE, code);
}
