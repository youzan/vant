import { join } from 'path';
import hljs from 'highlight.js';
import vitePluginMd from 'vite-plugin-md';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';
import { setBuildTarget } from '../common';
import {
  SITE_DESKTOP_SHARED_FILE,
  SITE_MOBILE_SHARED_FILE,
} from '../common/constant';
import type { InlineConfig } from 'vite';

function markdownHighlight(str: string, lang: string) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }

  return '';
}

function markdownCardWrapper(htmlCode: string) {
  const group = htmlCode
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::');

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="van-doc-card">${fragment}</div>`;
      }

      return fragment;
    })
    .join('');
}

export function getViteConfigForSiteDev(): InlineConfig {
  setBuildTarget('package');

  return {
    root: join(__dirname, '../../site'),

    plugins: [
      vitePluginVue({
        include: [/\.vue$/, /\.md$/],
      }),
      vitePluginMd({
        wrapperClasses: 'van-doc-markdown-body',
        transforms: {
          after: markdownCardWrapper,
        },
        markdownItOptions: {
          highlight: markdownHighlight,
        },
        markdownItSetup(md: any) {
          const { slugify } = require('transliteration');
          const markdownItAnchor = require('markdown-it-anchor');
          md.use(markdownItAnchor, {
            level: 2,
            slugify,
          });
        },
      }),
      vitePluginJsx(),
    ],

    resolve: {
      alias: {
        'site-mobile-shared': SITE_MOBILE_SHARED_FILE,
        'site-desktop-shared': SITE_DESKTOP_SHARED_FILE,
      },
    },

    server: {
      host: '0.0.0.0',
    },
  };
}
