import { join } from 'path';
import { pascalize, getComponents, smartOutputFile } from '../common';
import { SRC_DIR, PACKAGE_JSON, PACKAGE_ENTRY_FILE } from '../common/constant';

const version = process.env.PACKAGE_VERSION || PACKAGE_JSON.version;

function genImports(components: string[]): string {
  return components
    .map(name => `import ${pascalize(name)} from '${join(SRC_DIR, name)}';`)
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
      Vue.use(item);
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

  smartOutputFile(PACKAGE_ENTRY_FILE, content);
}
