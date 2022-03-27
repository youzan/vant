export { useTranslate, initDemoLocale } from './use-translate';

/** Generate the CDN URL of assets. */
export const cdnURL = (path: string) =>
  `https://cdn.jsdelivr.net/npm/@vant/assets/${path}`;
