import { join, relative } from 'path';
import { existsSync, ensureDirSync, writeFileSync } from 'fs-extra';
import { pascalize, removeExt, getComponents } from '../common';
import { SRC_DIR, DIST_DIR, MOBILE_CONFIG_FILE } from '../common/constant';

function checkDemoExists(component: string) {
  const absolutePath = join(SRC_DIR, component, 'demo/index.vue');
  return existsSync(absolutePath);
}

function genImports(components: string[]) {
  return components
    .filter(component => checkDemoExists(component))
    .map(component => {
      const absolutePath = join(SRC_DIR, component, 'demo/index.vue');
      const relativePath = relative(DIST_DIR, absolutePath);

      return `import ${pascalize(component)} from '${removeExt(
        relativePath
      )}';`;
    })
    .join('\n');
}

function genExports(components: string[]) {
  return `export const demos = {\n  ${components
    .filter(component => checkDemoExists(component))
    .map(component => pascalize(component))
    .join(',\n  ')}\n};`;
}

function genCode(components: string[]) {
  return `${genImports(components)}\n\n${genExports(components)}\n`;
}

export function genMobileConfig() {
  const components = getComponents();
  const code = genCode(components);

  ensureDirSync(DIST_DIR);
  writeFileSync(MOBILE_CONFIG_FILE, code);
}
