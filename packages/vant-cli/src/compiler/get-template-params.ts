import { getVantConfig, isDev } from '../common/index.js';

function getSiteConfig(vantConfig: any) {
  const siteConfig = vantConfig.site;

  if (siteConfig.locales) {
    return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
  }

  return siteConfig;
}

function getTitle(config: { title: string; description?: string }) {
  let { title } = config;

  if (config.description) {
    title += ` - ${config.description}`;
  }

  return title;
}

function getHTMLMeta(vantConfig: any) {
  const meta = vantConfig.site?.htmlMeta;

  if (meta) {
    return Object.keys(meta)
      .map((key) => `<meta name="${key}" content="${meta[key]}">`)
      .join('\n');
  }

  return '';
}

export function getTemplateParams() {
  const vantConfig = getVantConfig();
  const siteConfig = getSiteConfig(vantConfig);
  const title = getTitle(siteConfig);
  const headHtml = vantConfig.site?.headHtml;
  const baiduAnalytics = vantConfig.site?.baiduAnalytics;
  const enableVConsole = isDev() && vantConfig.site?.enableVConsole;

  return {
    ...siteConfig,
    title,
    // `description` is used by the HTML ejs template,
    // so it needs to be written explicitly here to avoid error: description is not defined
    description: siteConfig.description,
    headHtml,
    baiduAnalytics,
    enableVConsole,
    meta: getHTMLMeta(vantConfig),
  };
}
