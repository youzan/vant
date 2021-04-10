import { get } from 'lodash';
import { join } from 'path';
import {
  pascalize,
  getComponents,
  smartOutputFile,
  normalizePath,
} from '../common';
import { SRC_DIR, getPackageJson, getVantConfig } from '../common/constant';

type ExportMode = 'exportAll' | 'exportDefault';
type Options = {
  outputPath: string;
  pathResolver?: (path: string) => string;
};

function getPathByName(name: string, pathResolver?: (path: string) => string) {
  let path = join(SRC_DIR, name);
  if (pathResolver) {
    path = pathResolver(path);
  }
  return normalizePath(path);
}

function genImports(names: string[], { pathResolver }: Options): string {
  return names
    .map(
      (name) =>
        `import ${pascalize(name)} from '${getPathByName(name, pathResolver)}';`
    )
    .join('\n');
}

function genExports(
  names: string[],
  { pathResolver }: Options,
  exportMode?: ExportMode
): string {
  if (exportMode === 'exportAll') {
    const exports = names
      .map((name) => `export * from '${getPathByName(name, pathResolver)}';`)
      .join('\n');

    return `
  export {
    install,
    version,
  };
  ${exports}
`;
  }

  return `
  export {
    install,
    version,
    ${names.map(pascalize).join(',\n  ')}
  };
  `;
}

export function genPackageEntry(options: Options) {
  const names = getComponents();
  const vantConfig = getVantConfig();

  const exportMode = get(vantConfig, 'build.exportMode');
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

${genExports(names, options, exportMode)}

export default {
  install,
  version
};
`;

  smartOutputFile(options.outputPath, content);
}
