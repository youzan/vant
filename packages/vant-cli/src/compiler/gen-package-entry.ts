import { get } from 'lodash';
import { join } from 'path';
import {
  pascalize,
  getComponents,
  smartOutputFile,
  normalizePath,
} from '../common';
import { SRC_DIR, getPackageJson, getVantConfig } from '../common/constant';

type PathResolver = (path: string) => string;

function getPathByName(name: string, pathResolver?: PathResolver) {
  let path = join(SRC_DIR, name);
  if (pathResolver) {
    path = pathResolver(path);
  }
  return normalizePath(path);
}

function genImports(
  names: string[],
  pathResolver?: PathResolver,
  namedExport?: boolean
): string {
  return names
    .map((name) => {
      const pascalName = pascalize(name);
      const importName = namedExport ? `{ ${pascalName} }` : pascalName;
      const importPath = getPathByName(name, pathResolver);

      return `import ${importName} from '${importPath}';`;
    })
    .join('\n');
}

function genExports(
  names: string[],
  pathResolver?: PathResolver,
  namedExport?: boolean
): string {
  if (namedExport) {
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

export function genPackageEntry({
  outputPath,
  pathResolver,
}: {
  outputPath: string;
  pathResolver?: PathResolver;
}) {
  const names = getComponents();
  const vantConfig = getVantConfig();

  const namedExport = get(vantConfig, 'build.namedExport', false);
  const skipInstall = get(vantConfig, 'build.skipInstall', []).map(pascalize);

  const version = process.env.PACKAGE_VERSION || getPackageJson().version;

  const components = names.map(pascalize);
  const content = `${genImports(names, pathResolver, namedExport)}

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

${genExports(names, pathResolver, namedExport)}

export default {
  install,
  version
};
`;

  smartOutputFile(outputPath, content);
}
