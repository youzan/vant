import { join } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';
import fse from 'fs-extra';
import { getVantConfig } from '../common/index.js';
import { SRC_DIR, getPackageJson } from '../common/constant.js';
import {
  resolveDocuments,
  type DocumentItem,
} from './gen-site-desktop-shared.js';

type NavItem = {
  path?: string;
  title?: string;
};

type NavGroup = {
  title?: string;
  items?: NavItem[];
};

type LocaleConfig = {
  title?: string;
  subtitle?: string;
  description?: string;
  nav?: NavGroup[];
};

type Page = {
  path: string;
  title: string;
  url: string;
  content: string;
};

type Section = {
  title?: string;
  pages: Page[];
};

// matches site links like `#/en-US/button`, `/#/en-US/button#props`
// and `/vant/#/en-US/button`, but not external links like `https://...`
const SITE_LINK_REGEXP = /\]\([^)\s#:]*#\/([\w/-]+)(#[^)\s]*)?\)/g;

function getPublicPath() {
  const publicPath: string = getVantConfig().build?.site?.publicPath || '/';
  return publicPath.endsWith('/') ? publicPath : `${publicPath}/`;
}

function getPageUrl(component: string, lang?: string) {
  return `${getPublicPath()}${lang ? `${lang}/` : ''}${component}.md`;
}

// the site uses hash routes, which can't be fetched as markdown,
// so point them to the generated markdown files instead
function transformContent(content: string, langs: string[]) {
  return content
    .replace(SITE_LINK_REGEXP, (match, path: string, hash = '') => {
      const [first, ...rest] = path.split('/');

      if (langs.includes(first) && rest.length) {
        return `](${getPageUrl(rest.join('/'), first)}${hash})`;
      }

      return `](${getPageUrl(path)}${hash})`;
    })
    .trim();
}

function genLlmsTxt(
  config: LocaleConfig,
  sections: Section[],
  fullUrl: string,
) {
  const { name, version } = getPackageJson();
  const title = [config.title, config.subtitle?.trim()]
    .filter(Boolean)
    .join(' ');

  const lines = [`# ${title || name}`, ''];

  if (config.description) {
    lines.push(`> ${config.description}`, '');
  }

  lines.push(
    `This documentation is for ${name} v${version}. The full documentation is also available as a single file: [llms-full.txt](${fullUrl}).`,
    '',
  );

  sections.forEach((section) => {
    if (section.title) {
      lines.push(`## ${section.title}`, '');
    }

    section.pages.forEach((page) => {
      lines.push(`- [${page.title}](${page.url})`);
    });

    lines.push('');
  });

  return lines.join('\n');
}

function genLlmsFullTxt(sections: Section[]) {
  const pages = sections.flatMap((section) => section.pages);
  return `${pages.map((page) => page.content).join('\n\n---\n\n')}\n`;
}

function getSections(
  config: LocaleConfig,
  documents: DocumentItem[],
  langs: string[],
  lang?: string,
) {
  const sections: Section[] = [];

  (config.nav || []).forEach((group) => {
    const pages: Page[] = [];

    (group.items || []).forEach((item) => {
      const doc = item.path
        ? documents.find(
            (document) =>
              document.component === item.path &&
              (document.lang || undefined) === lang,
          )
        : undefined;

      if (doc) {
        pages.push({
          path: item.path!,
          title: item.title || item.path!,
          url: getPageUrl(item.path!, lang),
          content: transformContent(readFileSync(doc.path, 'utf-8'), langs),
        });
      }
    });

    if (pages.length) {
      sections.push({ title: group.title, pages });
    }
  });

  return sections;
}

/**
 * Generate llms.txt files for the documentation site, see https://llmstxt.org
 *
 * i18n mode:
 *   - llms.txt / llms-full.txt          => default language
 *   - [lang]/llms.txt / llms-full.txt   => each language
 *   - [lang]/[path].md                  => markdown of each page
 *
 * default mode:
 *   - llms.txt / llms-full.txt
 *   - [path].md
 */
export function genSiteLlmsTxt(outputDir: string) {
  const { site = {} } = getVantConfig();

  if (!site.llms) {
    return;
  }

  const documents = resolveDocuments(readdirSync(SRC_DIR));
  const { locales, defaultLang } = site;
  const langs: string[] = locales ? Object.keys(locales) : [];

  const outputLang = (config: LocaleConfig, lang?: string) => {
    const dir = lang ? join(outputDir, lang) : outputDir;
    const sections = getSections(config, documents, langs, lang);
    const fullUrl = `${getPublicPath()}${lang ? `${lang}/` : ''}llms-full.txt`;
    const llmsTxt = genLlmsTxt(config, sections, fullUrl);
    const llmsFullTxt = genLlmsFullTxt(sections);

    sections.forEach((section) => {
      section.pages.forEach((page) => {
        fse.outputFileSync(join(dir, `${page.path}.md`), `${page.content}\n`);
      });
    });

    fse.outputFileSync(join(dir, 'llms.txt'), llmsTxt);
    fse.outputFileSync(join(dir, 'llms-full.txt'), llmsFullTxt);

    if (lang && lang === (defaultLang || langs[0])) {
      fse.outputFileSync(join(outputDir, 'llms.txt'), llmsTxt);
      fse.outputFileSync(join(outputDir, 'llms-full.txt'), llmsFullTxt);
    }
  };

  if (locales) {
    langs.forEach((lang) => outputLang(locales[lang], lang));
  } else {
    outputLang(site);
  }
}
