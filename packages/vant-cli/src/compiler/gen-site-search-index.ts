import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getVantConfig } from '../common/index.js';
import { DOCS_DIR, SRC_DIR } from '../common/constant.js';

type SearchIndexItem = {
  lang: string;
  title: string;
  path: string;
  group: string;
  content: string;
};

function getDocumentPath(path: string, lang: string, defaultLang: string) {
  const componentDoc =
    lang === defaultLang
      ? join(SRC_DIR, path, 'README.md')
      : join(SRC_DIR, path, `README.${lang}.md`);

  if (existsSync(componentDoc)) {
    return componentDoc;
  }

  const staticDoc = join(DOCS_DIR, 'markdown', `${path}.${lang}.md`);
  if (existsSync(staticDoc)) {
    return staticDoc;
  }

  const fallbackStaticDoc = join(DOCS_DIR, 'markdown', `${path}.md`);
  if (existsSync(fallbackStaticDoc)) {
    return fallbackStaticDoc;
  }

  return '';
}

function stripMarkdown(content: string) {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[>#*_~|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function genSiteSearchIndex() {
  const vantConfig = getVantConfig();
  const { locales, defaultLang } = vantConfig.site;
  const index: SearchIndexItem[] = [];

  Object.keys(locales || {}).forEach((lang) => {
    const locale = locales[lang];
    const nav = locale.nav || [];

    nav.forEach(
      (group: {
        title: string;
        items: { path?: string; title?: string }[];
      }) => {
        group.items.forEach((item) => {
          if (!item.path || !item.title) {
            return;
          }

          const documentPath = getDocumentPath(item.path, lang, defaultLang);
          if (!documentPath) {
            return;
          }

          const source = readFileSync(documentPath, 'utf-8');
          const path =
            item.path === 'home' ? `/${lang}` : `/${lang}/${item.path}`;

          index.push({
            lang,
            title: item.title,
            path,
            group: group.title,
            content: stripMarkdown(`${item.title} ${group.title} ${source}`),
          });
        });
      },
    );
  });

  return `export const searchIndex = ${JSON.stringify(index)};`;
}
