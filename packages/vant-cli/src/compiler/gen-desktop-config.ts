import { join, relative } from 'path';
import { existsSync, writeFileSync } from 'fs-extra';
import { pascalize, removeExt, getComponents } from '../common';
import {
  SRC_DIR,
  CONFIG_FILE,
  DIST_DIR,
  DESKTOP_CONFIG_FILE
} from '../common/constant';

function checkDocumentExists(component: string) {
  const absolutePath = join(SRC_DIR, component, 'README.md');
  return existsSync(absolutePath);
}

function genImportDocuments(components: string[]) {
  return components
    .filter(component => checkDocumentExists(component))
    .map(component => {
      const absolutePath = join(SRC_DIR, component, 'README.md');
      const relativePath = relative(DIST_DIR, absolutePath);
      return `import ${pascalize(component)} from '${relativePath}';`;
    })
    .join('\n');
}

function genExportDocuments(components: string[]) {
  return `export const documents = {
  ${components
    .filter(component => checkDocumentExists(component))
    .map(component => pascalize(component))
    .join(',\n  ')}
};`;
}

function genImportConfig() {
  const configRelative = relative(DIST_DIR, CONFIG_FILE);
  return `import config from '${removeExt(configRelative)}';`;
}

function genExportConfig() {
  return 'export { config };';
}

export function genDesktopConfig() {
  const components = getComponents();
  const code = `${genImportConfig()}
${genImportDocuments(components)}

${genExportConfig()}
${genExportDocuments(components)}
`;

  writeFileSync(DESKTOP_CONFIG_FILE, code);
}
