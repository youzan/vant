import type { Plugin } from 'vite';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import { createRequire } from 'node:module';

const isMd = (id: string) => /\.md$/.test(id);

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

function markdownHighlight(str: string, lang: string) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }
  return '';
}

const initMarkdownIt = () => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
    highlight: markdownHighlight,
  });

  const require = createRequire(import.meta.url);
  const { slugify } = require('transliteration');
  const markdownItAnchor = require('markdown-it-anchor');

  markdownLinkOpen(md);

  md.use(markdownItAnchor, {
    level: 2,
    slugify,
  });

  return md;
};

const markdownToVue = ({
  id,
  raw,
  md,
}: {
  id: string;
  raw: string;
  md: MarkdownIt;
}) => {
  let html = md.render(raw, { id });
  html = `<div class="van-doc-markdown-body">${html}</div>`;
  html = markdownCardWrapper(html);
  // escape curly brackets
  html = html.replace(/<code(.*?)>/g, '<code$1 v-pre>');
  return `<template>${html}</template>`;
};

// add target="_blank" to all links
function markdownLinkOpen(md: MarkdownIt) {
  const defaultRender = md.renderer.rules.link_open;

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']); // add new attribute
    }

    if (defaultRender) {
      return defaultRender(tokens, idx, options, env, self);
    }

    return self.renderToken(tokens, idx, options);
  };
}

export function vitePluginMd(): Plugin {
  const md = initMarkdownIt();

  return {
    name: 'vite-plugin-md',

    enforce: 'pre',

    transform(raw, id) {
      if (!isMd(id)) {
        return;
      }

      try {
        return markdownToVue({ id, raw, md });
      } catch (e: any) {
        this.error(e);
      }
    },

    async handleHotUpdate(ctx) {
      if (!isMd(ctx.file)) {
        return;
      }

      const defaultRead = ctx.read;

      ctx.read = async function () {
        const raw = await defaultRead();
        return markdownToVue({
          id: ctx.file,
          raw,
          md,
        });
      };
    },
  };
}
