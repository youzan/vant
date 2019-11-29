import glob from 'fast-glob';
import { join, parse } from 'path';
import { existsSync, writeFileSync } from 'fs-extra';
import { pascalize, removeExt, getComponents } from '../common';
import {
  SRC_DIR,
  DOCS_DIR,
  CONFIG_FILE,
  DESKTOP_ENTRY_FILE
} from '../common/constant';

type DocumentItem = {
  name: string;
  path: string;
};

function resolveDocuments(components: string[]): DocumentItem[] {
  const componentDocs = components
    .filter(component => {
      const absolutePath = join(SRC_DIR, component, 'README.md');
      return existsSync(absolutePath);
    })
    .map(component => ({
      name: pascalize(component),
      path: join(SRC_DIR, component, 'README.md')
    }));

  const staticDocs = glob.sync(join(DOCS_DIR, '**/*.md')).map(path => ({
    name: pascalize(parse(path).name),
    path
  }));

  return [...componentDocs, ...staticDocs];
}

function genImportDocuments(items: DocumentItem[]) {
  return items
    .map(item => `import ${item.name} from '${item.path}';`)
    .join('\n');
}

function genExportDocuments(items: DocumentItem[]) {
  return `export const documents = {
  ${items.map(item => item.name).join(',\n  ')}
};`;
}

function genImportConfig() {
  return `import config from '${removeExt(CONFIG_FILE)}';`;
}

function genExportConfig() {
  return 'export { config };';
}

export function genDesktopEntry() {
  const components = getComponents();
  const documents = resolveDocuments(components);

  const code = `${genImportConfig()}
${genImportDocuments(documents)}

${genExportConfig()}
${genExportDocuments(documents)}
`;

  writeFileSync(DESKTOP_ENTRY_FILE, code);
}
