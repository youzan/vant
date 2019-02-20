const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version;
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`;
const root = path.join(__dirname, '../');
const join = dir => path.join(root, dir);

function buildVantEntry() {
  const uninstallComponents = [
    'Locale',
    'Lazyload',
    'Waterfall'
  ];

  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`);
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const intallList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));
  const content = `${tips}
import { VueConstructor } from 'vue/types';
${importList.join('\n')}

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const version = '${version}';
const components = [
  ${intallList.join(',\n  ')}
];

const install = (Vue: VueConstructor) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;

  fs.writeFileSync(path.join(__dirname, '../packages/index.ts'), content);
}

function buildDemoEntry() {
  const dir = path.join(__dirname, '../packages');
  const demos = fs.readdirSync(dir)
    .filter(name => fs.existsSync(path.join(dir, `${name}/demo/index.vue`)))
    .map(name => `'${name}': () => wrapper(import('../../packages/${name}/demo'), '${name}')`);

  const content = `${tips}
import { wrapper } from './demo-common';

export default {
  ${demos.join(',\n  ')}
};
`;
  fs.writeFileSync(path.join(dir, '../docs/src/demo-entry.js'), content);
}

// generate webpack entry file for markdown docs
function buildDocsEntry() {
  const output = join('docs/src/docs-entry.js');
  const getName = fullPath => fullPath.replace(/\/(en|zh)/, '.$1').split('/').pop().replace('.md', '');
  const docs = glob
    .sync([
      join('docs/**/*.md'),
      join('packages/**/*.md'),
      '!**/node_modules/**'
    ])
    .map(fullPath => {
      const name = getName(fullPath);
      return `'${name}': () => import('${path.relative(join('docs/src'), fullPath).replace(/\\/g, '/')}')`;
    });

  const content = `${tips}
export default {
  ${docs.join(',\n  ')}
};
`;
  fs.writeFileSync(output, content);
}

buildVantEntry();
buildDemoEntry();
buildDocsEntry();
