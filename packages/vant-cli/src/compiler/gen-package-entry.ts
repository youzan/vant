import { get } from 'lodash';
import { join } from 'path';
import { writeFileSync } from 'fs-extra';
import { pascalize, getComponents, replaceExt } from '../common';
import {
  CONFIG,
  SRC_DIR,
  PACKAGE_JSON_FILE,
  PACKAGE_ENTRY_FILE,
  PACKAGE_STYLE_FILE,
  STYPE_DEPS_JSON_FILE
} from '../common/constant';

// eslint-disable-next-line
const packageJson = require(PACKAGE_JSON_FILE);
// eslint-disable-next-line
const styleDepsJson = require(STYPE_DEPS_JSON_FILE);
const version = process.env.PACKAGE_VERSION || packageJson.version;

function genImports(components: string[]): string {
  return components
    .map(name => `import ${pascalize(name)} from '${join(SRC_DIR, name)}';`)
    .join('\n');
}

function genExports(names: string[]): string {
  return names.map(name => `${name}`).join(',\n  ');
}

function getStyleExt(): string {
  const preprocessor = get(CONFIG, 'build.css.preprocessor', 'less');

  if (preprocessor === 'sass') {
    return '.scss';
  }

  return `.${preprocessor}`;
}

function genStyleEntry() {
  const ext = getStyleExt();
  const content = styleDepsJson.sequence
    .map((name: string) => `@import "${join(SRC_DIR, `${name}/index${ext}`)}";`)
    .join('\n');

  writeFileSync(replaceExt(PACKAGE_STYLE_FILE, ext), content);
}

function genScriptEntry() {
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

export function genPackageEntry() {
  genStyleEntry();
  genScriptEntry();
}
