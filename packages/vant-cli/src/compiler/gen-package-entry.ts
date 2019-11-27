import { join, relative } from 'path';
import { writeFileSync } from 'fs-extra';
import { pascalize, getComponents } from '../common';
import {
  SRC_DIR,
  DIST_DIR,
  PACKAGE_JSON_FILE,
  PACKAGE_ENTRY_FILE
} from '../common/constant';

// eslint-disable-next-line
const packageJson = require(PACKAGE_JSON_FILE);
const version = process.env.PACKAGE_VERSION || packageJson.version;

function genImports(components: string[]): string {
  return components
    .map(name => {
      const relativePath = relative(DIST_DIR, join(SRC_DIR, name));
      return `import ${pascalize(name)} from '${relativePath}';`;
    })
    .join('\n');
}

function genExports(names: string[]): string {
  return names.map(name => `${name}`).join(',\n  ');
}

export function genPackageEntry() {
  const components = getComponents();
  const names = components.map(item => pascalize(item));

  const content = `${genImports(components)}

const version = '${version}';
const components = [
  ${names.join(',\n  ')}
];

function install(Vue) {
  components.forEach(item => {
    if (item.install) {
      Vue.use(Component);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${genExports(names)}
};

export default {
  install,
  version
};
`;

  writeFileSync(PACKAGE_ENTRY_FILE, content);
}
