import { get } from 'lodash';
import { join } from 'path';
import {
  pascalize,
  getComponents,
  smartOutputFile,
  normalizePath,
} from '../common';
import { SRC_DIR, getPackageJson, getVantConfig } from '../common/constant';

type Options = {
  outputPath: string;
  pathResolver?: Function;
};

function genImports(components: string[], options: Options): string {
  return components
    .map((name) => {
      let path = join(SRC_DIR, name);
      if (options.pathResolver) {
        path = options.pathResolver(path);
      }

      return `import ${pascalize(name)} from '${normalizePath(path)}';`;
    })
    .join('\n');
}

function genExports(names: string[]): string {
  return names.map((name) => `${name}`).join(',\n  ');
}

export function genPackageEntry(options: Options) {
  const names = getComponents();
  const vantConfig = getVantConfig();
  const skipInstall = get(vantConfig, 'build.skipInstall', []).map(pascalize);
  const version = process.env.PACKAGE_VERSION || getPackageJson().version;

  const components = names.map(pascalize);
  const content = `${genImports(names, options)}

const version = '${version}';

function install(app) {
  const components = [
    ${components.filter((item) => !skipInstall.includes(item)).join(',\n    ')}
  ];

  components.forEach(item => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export {
  install,
  version,
  ${genExports(components)}
};

export default {
  install,
  version
};
`;

  smartOutputFile(options.outputPath, content);
}
