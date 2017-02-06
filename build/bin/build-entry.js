var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';';
var ISNTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}});';
var MAIN_TEMPLATE = `{{include}}
import 'es6-promise/auto';
import axios from 'axios';
import foreach from 'lodash/foreach';
import filter from 'lodash/filter';
import find from 'lodash/find';
import map from 'lodash/map';
// zenui
import '../packages/zenui/src/index.pcss';

const install = function(Vue) {
  if (install.installed) return;

{{install}}
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '{{version}}',
  axios,
  _: {
    foreach,
    filter,
    find,
    map
  },
{{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if ([
      // directives
    'InfiniteScroll',
    'Lazyload',

      // services
    'MessageBox',
    'Toast',
    'Indicator'
  ].indexOf(componentName) === -1) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

