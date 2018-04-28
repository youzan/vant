const Components = require('./get-components')();
const fs = require('fs');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const version = process.env.VERSION || require('../../package.json').version;
const tips = '// This file is auto gererated by build/bin/build-entry.js';

function buildVantEntry() {
  const uninstallComponents = [
    'Lazyload',
    'Waterfall'
  ];

  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`);
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const intallList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));
  const content = `${tips}
${importList.join('\n')}

const version = '${version}';
const components = [
  ${intallList.join(',\n  ')}
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

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

  fs.writeFileSync(path.join(__dirname, '../../packages/index.js'), content);
}

function buildDemoEntry() {
  const dir = path.join(__dirname, '../../docs/demos/views');
  const demos = fs.readdirSync(dir)
    .filter(name => ~name.indexOf('.vue'))
    .map(name => name.replace('.vue', ''))
    .map(name => `'${name}': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/${name}'), '${name}')), '${name}'))`);

  const content = `${tips}
import { asyncWrapper, componentWrapper } from './common';

export default {
  ${demos.join(',\n  ')}
};
`;
  fs.writeFileSync(path.join(dir, '../index.js'), content);
}

function buildDocsEntry() {
  const dir = path.join(__dirname, '../../docs/markdown');
  const cnDocs = fs.readdirSync(path.join(dir, 'zh-CN')).map(name => 'zh-CN/' + name);
  const enDocs = fs.readdirSync(path.join(dir, 'en-US')).map(name => 'en-US/' + name);
  const docs = [...cnDocs, ...enDocs]
    .filter(name => name.indexOf('.md') !== -1)
    .map(name => name.replace('.md', ''))
    .map(name => `'${name}': wrapper(r => require.ensure([], () => r(require('./${name}.md')), '${name}'))`);

  const content = `${tips}
import progress from 'nprogress';

function wrapper(component) {
  return function(r) {
    progress.start();
    component(r).then(() => {
      progress.done();
    }).catch(() => {
      progress.done();
    });
  };
}

export default {
  ${docs.join(',\n  ')}
};
`;
  fs.writeFileSync(path.join(dir, './index.js'), content);
}

buildVantEntry();
buildDemoEntry();
buildDocsEntry();
