import { get } from 'lodash';
import { join } from 'path';
import { pascalize, getComponents, smartOutputFile } from '../common';
import { SRC_DIR, PACKAGE_JSON, getVantConfig } from '../common/constant';

const version = process.env.PACKAGE_VERSION || PACKAGE_JSON.version;

type Options = {
  outputPath: string;
  pathResolver?: Function;
};

function genImports(components: string[], options: Options): string {
  return components
    .map(name => {
      let path = join(SRC_DIR, name);
      if (options.pathResolver) {
        path = options.pathResolver(path);
      }

      return `import ${pascalize(name)} from '${path}';`;
    })
    .join('\n');
}

function genExports(names: string[]): string {
  return names.map(name => `${name}`).join(',\n  ');
}

export function genPackageEntry(options: Options) {
  const vantConfig = getVantConfig();
  const components = getComponents();
  const skipInstall = get(vantConfig, 'build.skipInstall', []);

  const names = components
    .filter(item => !skipInstall.includes(item))
    .map(item => pascalize(item));

  const content = `${genImports(components, options)}

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
}

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

  smartOutputFile(options.outputPath, content);
}
